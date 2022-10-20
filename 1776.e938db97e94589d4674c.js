"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1776],{

/***/ 1776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputModule": () => (/* binding */ ExampleTuiInputModule)
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
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/1/index.ts






let TuiInputExample1 = /*#__PURE__*/(() => {
  class TuiInputExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`mail@mail.ru`)
      });
    }

  }

  TuiInputExample1.ɵfac = function TuiInputExample1_Factory(t) {
    return new (t || TuiInputExample1)();
  };

  TuiInputExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample1,
    selectors: [["tui-input-example-1"]],
    decls: 4,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"], ["tuiTextfield", "", "type", "email"]],
    template: function TuiInputExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/2/index.ts










let TuiInputExample2 = /*#__PURE__*/(() => {
  class TuiInputExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`mail@mail.ru`)
      });
    }

  }

  TuiInputExample2.ɵfac = function TuiInputExample2_Factory(t) {
    return new (t || TuiInputExample2)();
  };

  TuiInputExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample2,
    selectors: [["tui-input-example-2"]],
    decls: 14,
    vars: 3,
    consts: [[1, "b-form", 3, "formGroup"], ["tuiTextfieldSize", "s", "formControlName", "testValue"], ["tuiTextfield", "", "type", "email"], ["tuiTextfieldSize", "m", "formControlName", "testValue", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", "tuiHintContent", "It will be used for sending documents", 3, "tuiTextfieldCleaner"], [1, "tui-required"], ["tuiTextfield", "", "placeholder", "mail@mail.ru", "type", "email"]],
    template: function TuiInputExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 1);
        fesm2015_core/* ɵɵtext */._uU(3, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(4, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(7, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(8, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-input", 4);
        fesm2015_core/* ɵɵtext */._uU(11, " Type an email\u00A0 ");
        fesm2015_core/* ɵɵelement */._UZ(12, "span", 5);
        fesm2015_core/* ɵɵelement */._UZ(13, "input", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/kit/directives/mask/legacy-mask.ts
var legacy_mask = __webpack_require__(11189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/3/index.ts










let TuiInputExample3 = /*#__PURE__*/(() => {
  class TuiInputExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(``),
        testValue2: new fesm2015_forms/* FormControl */.NI(``)
      });
      this.textMaskOptions1 = {
        guide: false,
        mask: [/\d/, /\d/, /\d/, /\d/, ` `, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
      };
      this.textMaskOptions2 = {
        guide: false,
        mask: [/\d/, /\d/, /\d/, `-`, /\d/, /\d/, /\d/, `-`, /\d/, /\d/, /\d/, `-`, /\d/, /\d/]
      };
    }

  }

  TuiInputExample3.ɵfac = function TuiInputExample3_Factory(t) {
    return new (t || TuiInputExample3)();
  };

  TuiInputExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample3,
    selectors: [["tui-input-example-3"]],
    decls: 17,
    vars: 6,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_635445321066308389$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" Taiga UI input is compatible with {$startLink} angular2-text-mask {$closeLink}", {
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_635445321066308389$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟d218c12c88253a58b80e126649e878ed0216bd4c␟635445321066308389: Taiga UI input is compatible with ${"\uFFFD#3\uFFFD"}:START_LINK: angular2-text-mask ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK:`;
      }

      return [[1, "b-form", 3, "formGroup"], i18n_0, ["tuiLink", "", "href", "https://www.npmjs.com/package/angular2-text-mask", "target", "_blank"], ["formControlName", "testValue1", 3, "textMask"], ["tuiTextfield", "", "inputmode", "numeric"], ["formControlName", "testValue2", 3, "textMask"]];
    },
    template: function TuiInputExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "a", 2);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Document number ");
        fesm2015_core/* ɵɵelement */._UZ(7, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-input", 5);
        fesm2015_core/* ɵɵtext */._uU(10, " Secret number ");
        fesm2015_core/* ɵɵelement */._UZ(11, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
        fesm2015_core/* ɵɵtext */._uU(13, "Value is stored in control with mask applied:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "pre");
        fesm2015_core/* ɵɵtext */._uU(15);
        fesm2015_core/* ɵɵpipe */.ALo(16, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("textMask", ctx.textMaskOptions1);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("textMask", ctx.textMaskOptions2);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(16, 4, ctx.testForm.value));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, legacy_mask/* MaskedInputDirective */.h, textfield_component/* TuiTextfieldComponent */.M],
    pipes: [common/* JsonPipe */.Ts],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputExample3;
})();
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts
var let_directive = __webpack_require__(40939);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.component.ts
var input_card_component = __webpack_require__(98537);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.directive.ts
var input_card_directive = __webpack_require__(22436);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/4/index.ts





















const _c0 = ["avatar"];

function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const user_r10 = restoredCtx.$implicit;
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw(4);
      return ctx_r11.onSelected(user_r10);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", user_r10.toString());
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", user_r10, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", user_r10.avatarUrl || null)("text", user_r10.toString());
  }
}

function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template, 3, 4, "button", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const users_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2).tuiLet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", users_r6);
  }
}

function TuiInputExample4_tui_input_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_Template, 2, 1, "tui-data-list", 10);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiInputExample4_tui_input_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 7);
    fesm2015_core/* ɵɵtext */._uU(1, " User ");
    fesm2015_core/* ɵɵelement */._UZ(2, "input", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputExample4_tui_input_1_ng_container_3_Template, 2, 0, "ng-container", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const users_r6 = ctx.tuiLet;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCustomContent", ctx_r0.content);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", users_r6 == null ? null : users_r6.length);
  }
}

function TuiInputExample4_ng_template_3_tui_avatar_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 15);
  }

  if (rf & 2) {
    const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true)("avatarUrl", ctx_r14.lastUser.avatarUrl || null)("text", ctx_r14.lastUser.toString());
  }
}

function TuiInputExample4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiInputExample4_ng_template_3_tui_avatar_0_Template, 1, 3, "tui-avatar", 14);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.lastUser);
  }
}

function TuiInputExample4_tui_data_list_wrapper_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 16);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r4 = fesm2015_core/* ɵɵreference */.MAs(9);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r3.accounts)("itemContent", _r4);
  }
}

function TuiInputExample4_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const account_r15 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", account_r15.name, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", account_r15.amount);
  }
}

class User {
  constructor(firstName, lastName, avatarUrl = null, accounts = [], card = ``) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
    this.accounts = accounts;
    this.card = card;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

}

class Account {
  constructor(id, name, amount, currency, cardSvg) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.currency = currency;
    this.cardSvg = cardSvg;
  }

  toString() {
    return this.name;
  }

}

const accountsRoman = [new Account(`1`, `RUB`, 24876.55, "RUB"
/* Ruble */
, `https://ng-web-apis.github.io/dist/assets/images/common.svg`), new Account(`2`, `USD`, 335, "USD"
/* Dollar */
, `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`)];
const accountsAlex = [new Account(`3`, `EUR`, 10000, "EUR"
/* Euro */
, `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`), new Account(`4`, `PND`, 100, "GBP"
/* Pound */
, `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`)];
const USERS = [new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`, accountsRoman), new User(`Alex`, `Inkin`, utils/* assets */.L`/images/avatar.jpg`, accountsAlex, `1234123412341234`), new User(`Dmitriy`, `Demenskiy`), new User(`Evgeniy`, `Mamaev`), new User(`Ivan`, `Ishmametiev`), new User(`Igor`, `Katsuba`), new User(`Yulia`, `Tsareva`)];
let TuiInputExample4 = /*#__PURE__*/(() => {
  class TuiInputExample4 {
    constructor() {
      this.avatar = ``;
      this.user = new fesm2015_forms/* FormControl */.NI(``);
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        user: this.user,
        account: new fesm2015_forms/* FormControl */.NI(``),
        card: new fesm2015_forms/* FormControl */.NI(``)
      });
      this.lastUser = null;
      this.users$ = (0,cdk.tuiControlValue)(this.user).pipe((0,map/* map */.U)(value => {
        const filtered = USERS.filter(user => (0,cdk.TUI_DEFAULT_MATCHER)(user, value));

        if (filtered.length !== 1 || String(filtered[0]).toLowerCase() !== value.toLowerCase()) {
          return filtered;
        }

        this.onSelected(filtered[0]);
        return [];
      }));
    }

    get card() {
      var _a;

      const value = this.testForm.get(`card`).value;

      if (((_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0) < 7) {
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

    get isUserSelected() {
      var _a, _b;

      return this.lastUser !== null && this.lastUser.toString().toLowerCase() === ((_b = (_a = this.testForm.get(`user`)) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toLowerCase());
    }

    get content() {
      return this.avatar && this.isUserSelected ? this.avatar : ``;
    }

    get accounts() {
      return this.isUserSelected ? this.lastUser.accounts : [];
    }

    onSelected(user) {
      this.lastUser = user;
      this.testForm.get(`card`).setValue(user.card);
    }

  }

  TuiInputExample4.ɵfac = function TuiInputExample4_Factory(t) {
    return new (t || TuiInputExample4)();
  };

  TuiInputExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample4,
    selectors: [["tui-input-example-4"]],
    viewQuery: function TuiInputExample4_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.avatar = _t.first);
      }
    },
    decls: 12,
    vars: 6,
    consts: [[1, "container", 3, "formGroup"], ["formControlName", "user", 3, "tuiTextfieldCustomContent", 4, "tuiLet"], ["avatar", ""], ["formControlName", "account", 1, "tui-space_vertical-5"], [3, "items", "itemContent", 4, "tuiDataList"], ["accountContent", ""], ["formControlName", "card", 3, "tuiTextfieldCleaner", "cardSrc"], ["formControlName", "user", 3, "tuiTextfieldCustomContent"], ["tuiTextfield", "", "placeholder", "Type your name or surname"], [4, "ngIf"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "click"], ["size", "xs", 3, "avatarUrl", "text"], ["size", "s", 3, "rounded", "avatarUrl", "text", 4, "ngIf"], ["size", "s", 3, "rounded", "avatarUrl", "text"], [3, "items", "itemContent"], [3, "value"]],
    template: function TuiInputExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputExample4_tui_input_1_Template, 4, 2, "tui-input", 1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputExample4_ng_template_3_Template, 1, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Account ");
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiInputExample4_tui_data_list_wrapper_7_Template, 1, 2, "tui-data-list-wrapper", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiInputExample4_ng_template_8_Template, 3, 2, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-input-card", 6);
        fesm2015_core/* ɵɵtext */._uU(11, " Card number ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 4, ctx.users$));
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("cardSrc", ctx.card);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, let_directive/* TuiLetDirective */.L, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, input_card_component/* TuiInputCardComponent */.z, input_card_directive/* TuiInputCardDirective */.a, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_component/* TuiTextfieldComponent */.M, common/* NgIf */.O5, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, avatar_component/* TuiAvatarComponent */.J, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, money_component/* TuiMoneyComponent */.o],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".container[_ngcontent-%COMP%]{max-width:18rem}"],
    changeDetection: 0
  });
  return TuiInputExample4;
})();
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/5/index.ts











let TuiInputExample5 = /*#__PURE__*/(() => {
  class TuiInputExample5 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`mail@mail.ru`)
      });
    }

  }

  TuiInputExample5.ɵfac = function TuiInputExample5_Factory(t) {
    return new (t || TuiInputExample5)();
  };

  TuiInputExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample5,
    selectors: [["tui-input-example-5"]],
    decls: 19,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9175192015403980059$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_5_INDEX_TS_1 = goog.getMsg(" Custom mode is set with {$startLink}{$startTagCode}tuiMode{$closeTagCode}{$closeLink} directive ", {
          "startLink": "\uFFFD#3\uFFFD",
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_9175192015403980059$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_5_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟51aed7677842d8f5e8b7ea838d2b71c7509ae7a5␟9175192015403980059: Custom mode is set with ${"\uFFFD#3\uFFFD"}:START_LINK:${"\uFFFD#4\uFFFD"}:START_TAG_CODE:tuiMode${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: directive `;
      }

      return [[1, "b-form", 3, "formGroup"], i18n_0, ["tuiLink", "", "routerLink", "/directives/mode"], ["formControlName", "testValue", 3, "tuiTextfieldCleaner"], ["tuiTextfield", "", "placeholder", "mail@mail.ru", "type", "email"], [1, "wrapper", "wrapper_dark"], ["formControlName", "testValue", "tuiMode", "onDark", 3, "tuiTextfieldCleaner"], [1, "wrapper", "wrapper_light"], ["formControlName", "testValue", "tuiMode", "onLight", 3, "tuiTextfieldCleaner"]];
    },
    template: function TuiInputExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(7, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(8, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "p", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-input", 6);
        fesm2015_core/* ɵɵtext */._uU(12, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(13, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-input", 8);
        fesm2015_core/* ɵɵtext */._uU(17, " Type an email ");
        fesm2015_core/* ɵɵelement */._UZ(18, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_component/* TuiTextfieldComponent */.M, mode_directive/* TuiModeDirective */.w],
    styles: [".wrapper[_ngcontent-%COMP%]{padding:.75rem}.wrapper_dark[_ngcontent-%COMP%]{background-color:#30406a}.wrapper_light[_ngcontent-%COMP%]{background-color:#e5e7ea}"],
    changeDetection: 0
  });
  return TuiInputExample5;
})();
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.component.ts
var input_date_component = __webpack_require__(41833);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.directive.ts
var input_date_directive = __webpack_require__(40813);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/6/index.ts






















function TuiInputExample6_tui_data_list_wrapper_30_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 13);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

let TuiInputExample6 = /*#__PURE__*/(() => {
  class TuiInputExample6 {
    constructor() {
      this.items = [`Black`, `Gold`, `Silver`];
      this.form = new fesm2015_forms/* FormGroup */.cw({
        name: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        date: new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required),
        color: new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required),
        quantity: new fesm2015_forms/* FormControl */.NI(),
        sum: new fesm2015_forms/* FormControl */.NI(255)
      });
    }

  }

  TuiInputExample6.ɵfac = function TuiInputExample6_Factory(t) {
    return new (t || TuiInputExample6)();
  };

  TuiInputExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample6,
    selectors: [["tui-input-example-6"]],
    decls: 37,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_591298722245182546$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_6_INDEX_TS_1 = goog.getMsg("{$startTagCode}tuiTable{$closeTagCode} directive from {$startTagCode}@taiga-ui/addon-table{$closeTagCode}", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_0 = MSG_EXTERNAL_591298722245182546$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_6_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟c469520c7e9da06dc5be994b601cbe1b68d24aed␟591298722245182546:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tuiTable${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: directive from ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:@taiga-ui/addon-table${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [i18n_0, ["tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside", "formGroup"], ["tuiTable", "", 1, "table"], ["tuiTh", "", 1, "name"], ["tuiTh", ""], ["tuiTd", ""], ["formControlName", "name"], ["tuiTextfield", "", "placeholder", "Ivan Ivanov"], ["formControlName", "date"], ["formControlName", "color"], [3, "items", 4, "tuiDataList"], ["formControlName", "quantity"], ["formControlName", "sum", 3, "readOnly"], [3, "items"]];
    },
    template: function TuiInputExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "code");
        fesm2015_core/* ɵɵelement */._UZ(3, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "table", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tr");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "th", 3);
        fesm2015_core/* ɵɵtext */._uU(9, " Name ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(11, "Date");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(13, "Gender");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(15, "Quantity");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "th", 4);
        fesm2015_core/* ɵɵtext */._uU(17, "Sum, $");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "tr");
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "td", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-input", 6);
        fesm2015_core/* ɵɵtext */._uU(22, " Name ");
        fesm2015_core/* ɵɵelement */._UZ(23, "input", 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "td", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-input-date", 8);
        fesm2015_core/* ɵɵtext */._uU(26, "Date");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(27, "td", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "tui-select", 9);
        fesm2015_core/* ɵɵtext */._uU(29, " Color ");
        fesm2015_core/* ɵɵtemplate */.YNc(30, TuiInputExample6_tui_data_list_wrapper_30_Template, 1, 1, "tui-data-list-wrapper", 10);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "td", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(32, "tui-input-count", 11);
        fesm2015_core/* ɵɵtext */._uU(33, "Quantity");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(34, "td", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "tui-input-number", 12);
        fesm2015_core/* ɵɵtext */._uU(36, " Sum ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(31);
        fesm2015_core/* ɵɵproperty */.Q6J("readOnly", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* FormGroupDirective */.sg, table_directive/* TuiTableDirective */.c, th_component/* TuiThComponent */.W, td_component/* TuiTdComponent */.K, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, data_list_directive/* TuiDataListDirective */.g, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".table[_ngcontent-%COMP%]{width:40rem}.name[_ngcontent-%COMP%]{width:10rem}"],
    changeDetection: 0
  });
  return TuiInputExample6;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/7/index.ts










function TuiInputExample7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 2);
  }
}

let TuiInputExample7 = /*#__PURE__*/(() => {
  class TuiInputExample7 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(null, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.minLength */.kI.minLength(5)]);
    }

  }

  TuiInputExample7.ɵfac = function TuiInputExample7_Factory(t) {
    return new (t || TuiInputExample7)();
  };

  TuiInputExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample7,
    selectors: [["tui-input-example-7"]],
    decls: 4,
    vars: 3,
    consts: [["tuiHintContent", "Type 5 letters or more", 1, "b-form", 3, "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "formControl"], ["success", ""], ["src", "tuiIconCheckLarge", 1, "success", "tui-space_left-3"]],
    template: function TuiInputExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Hello\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputExample7_ng_template_2_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("tuiTextfieldCustomContent", ctx.control.valid ? _r0 : "")("formControl", ctx.control);
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, svg_component/* TuiSvgComponent */.P],
    styles: [".success[_ngcontent-%COMP%]{position:relative;color:var(--tui-success-fill)}"],
    changeDetection: 0
  });
  return TuiInputExample7;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/8/index.ts
















function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(4);
      return ctx_r6.onClick(item_r5);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 7);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r5)("disabled", item_r5.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", item_r5.avatarUrl || null)("text", item_r5.toString());
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r5);
  }
}

function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template, 4, 5, "button", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r1 = fesm2015_core/* ɵɵnextContext */.oxw(2).tuiLet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", items_r1);
  }
}

function TuiInputExample8_tui_input_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_Template, 2, 1, "tui-data-list", 3);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiInputExample8_tui_input_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 1);
    fesm2015_core/* ɵɵtext */._uU(1, " Enter your name ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputExample8_tui_input_0_ng_container_2_Template, 2, 0, "ng-container", 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const items_r1 = ctx.tuiLet;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r0.control);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", items_r1 == null ? null : items_r1.length);
  }
}

class _8_User {
  constructor(firstName, lastName, avatarUrl = null, disabled = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
    this.disabled = disabled;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const DATA = [new _8_User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`), new _8_User(`Alex`, `Inkin`, utils/* assets */.L`/images/avatar.jpg`), new _8_User(`Gabriel José`, `de la Concordia «Gabo» García Márquez`)];
let TuiInputExample8 = /*#__PURE__*/(() => {
  class TuiInputExample8 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(``);
      this.firstName = ``;
      this.lastName = ``;
      this.items$ = this.control.valueChanges.pipe((0,startWith/* startWith */.O)(``), (0,switchMap/* switchMap */.w)(value => this.request(value !== null && value !== void 0 ? value : ``).pipe((0,map/* map */.U)(response => {
        if (response.length === 1 && String(response[0]) === value) {
          this.onClick(response[0]);
          return [];
        } else {
          return response;
        }
      }))), (0,startWith/* startWith */.O)(DATA));
    }

    onClick({
      lastName,
      firstName
    }) {
      this.lastName = lastName;
      this.firstName = firstName;
    } // Request imitation


    request(query) {
      return (0,of.of)(DATA.filter(item => (0,cdk.TUI_DEFAULT_MATCHER)(item, query)));
    }

  }

  TuiInputExample8.ɵfac = function TuiInputExample8_Factory(t) {
    return new (t || TuiInputExample8)();
  };

  TuiInputExample8.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample8,
    selectors: [["tui-input-example-8"]],
    decls: 5,
    vars: 5,
    consts: [["class", "b-form", 3, "formControl", 4, "tuiLet"], [1, "b-form", 3, "formControl"], [4, "ngIf"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", "disabled", "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "disabled", "click"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"], [1, "name"]],
    template: function TuiInputExample8_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiInputExample8_tui_input_0_Template, 3, 2, "tui-input", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵtext */._uU(3, "Parsed on complete match:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 3, ctx.items$));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate2 */.AsE("\n", ctx.firstName, " ", ctx.lastName, "\n");
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgIf */.O5, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, avatar_component/* TuiAvatarComponent */.J],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;margin-right:auto}"],
    changeDetection: 0
  });
  return TuiInputExample8;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/examples/9/index.ts








let TuiInputExample9 = /*#__PURE__*/(() => {
  class TuiInputExample9 {
    constructor() {
      this.value = ``;
    }

  }

  TuiInputExample9.ɵfac = function TuiInputExample9_Factory(t) {
    return new (t || TuiInputExample9)();
  };

  TuiInputExample9.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputExample9,
    selectors: [["tui-input-example-9"]],
    decls: 3,
    vars: 2,
    consts: [["tuiTextfieldIconLeft", "tuiIconSearchLarge", "tuiHintContent", "\u0644\u0627 \u064A\u062F\u0639\u0645\u0647 Safari \u0623\u062F\u0646\u0627\u0647 12.1", "tuiHintDirection", "bottom-right", 1, "input", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"], ["tuiTextfield", "", "placeholder", "\u0627\u0643\u062A\u0628 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643"]],
    template: function TuiInputExample9_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputExample9_Template_tui_input_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " \u0628\u062D\u062B ");
        fesm2015_core/* ɵɵelement */._UZ(2, "input", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("ngModel", ctx.value);
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, textfield_component/* TuiTextfieldComponent */.M],
    styles: [".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],
    changeDetection: 0
  });
  return TuiInputExample9;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon.directive.ts
var textfield_icon_directive = __webpack_require__(88494);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/input.component.ts






































const input_component_c0 = ["justLongText"];

function ExampleTuiInputComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵi18n */.SDv(1, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "blockquote");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "ul");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "a", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 8);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "a", 9);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "a", 10);
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "a", 11);
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "a", 12);
    fesm2015_core/* ɵɵelement */._UZ(24, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "a", 13);
    fesm2015_core/* ɵɵelement */._UZ(27, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "a", 14);
    fesm2015_core/* ɵɵelement */._UZ(30, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "a", 15);
    fesm2015_core/* ɵɵelement */._UZ(32, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "a", 16);
    fesm2015_core/* ɵɵelement */._UZ(35, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(36, "a", 17);
    fesm2015_core/* ɵɵelement */._UZ(37, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "a", 18);
    fesm2015_core/* ɵɵelement */._UZ(40, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "tui-doc-example", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(42, "tui-notification", 20);
    fesm2015_core/* ɵɵtext */._uU(43, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(44, "code");
    fesm2015_core/* ɵɵtext */._uU(45, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(46, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(47, "code");
    fesm2015_core/* ɵɵtext */._uU(48, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(49, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(50, "tui-input-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "tui-doc-example", 21);
    fesm2015_core/* ɵɵelement */._UZ(52, "tui-input-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(53, "tui-doc-example", 22);
    fesm2015_core/* ɵɵelement */._UZ(54, "tui-input-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(55, "tui-doc-example", 23);
    fesm2015_core/* ɵɵelement */._UZ(56, "tui-input-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(57, "tui-doc-example", 24);
    fesm2015_core/* ɵɵelement */._UZ(58, "tui-input-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(59, "tui-doc-example", 25);
    fesm2015_core/* ɵɵelement */._UZ(60, "tui-input-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(61, "tui-doc-example", 26);
    fesm2015_core/* ɵɵelement */._UZ(62, "tui-input-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(63, "tui-doc-example", 27);
    fesm2015_core/* ɵɵelement */._UZ(64, "tui-input-example-8");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(65, "tui-doc-example", 28);
    fesm2015_core/* ɵɵelement */._UZ(66, "tui-input-example-9");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(41);
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
  }
}

function ExampleTuiInputComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 35);
    fesm2015_core/* ɵɵtext */._uU(1, " Label ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵtext */._uU(3, "strong text");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "input", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r5.control)("focusable", ctx_r5.focusable)("pseudoInvalid", ctx_r5.pseudoInvalid)("pseudoFocus", ctx_r5.pseudoFocused)("pseudoHover", ctx_r5.pseudoHovered)("tuiTextfieldIcon", ctx_r5.icon)("tuiTextfieldIconLeft", ctx_r5.iconLeft)("readOnly", ctx_r5.readOnly)("tuiTextfieldLabelOutside", ctx_r5.labelOutside)("tuiTextfieldCustomContent", ctx_r5.customContent)("tuiTextfieldSize", ctx_r5.size)("tuiTextfieldCleaner", ctx_r5.cleaner)("tuiDropdownAlign", ctx_r5.dropdownAlign)("tuiDropdownDirection", ctx_r5.dropdownDirection)("tuiDropdownLimitWidth", ctx_r5.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r5.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r5.dropdownMaxHeight)("tuiHintContent", ctx_r5.hintContent)("tuiHintDirection", ctx_r5.hintDirection)("tuiHintAppearance", ctx_r5.hintAppearance);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("placeholder", ctx_r5.placeholder);
  }
}

function ExampleTuiInputComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 37);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 38);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-money", 39);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(data_r11.name);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", data_r11.balance);
  }
}

function ExampleTuiInputComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 40);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 41);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 42);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 43);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 29);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputComponent_ng_template_2_ng_template_1_Template, 5, 21, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputComponent_ng_template_2_ng_template_2_Template, 4, 2, "ng-template", null, 30, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 31);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 32);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.icon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 33);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.placeholder = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(8, "inherited-documentation", 34);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.placeholder);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiInputComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 44);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 45);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 46);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 47);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 48);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 49);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 50);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

function ExampleTuiInputComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "LongTextContent");
  }
}

const LONG_TEXT_TEMPLATE = `<span>LongTextContent</span>`;
let ExampleTuiInputComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 47026).then(__webpack_require__.t.bind(__webpack_require__, 47026, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 14378).then(__webpack_require__.t.bind(__webpack_require__, 14378, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 54905).then(__webpack_require__.t.bind(__webpack_require__, 54905, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 47109).then(__webpack_require__.t.bind(__webpack_require__, 47109, 17)),
        HTML: __webpack_require__.e(/* import() */ 64867).then(__webpack_require__.t.bind(__webpack_require__, 64867, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 24704).then(__webpack_require__.t.bind(__webpack_require__, 24704, 17)),
        HTML: __webpack_require__.e(/* import() */ 91839).then(__webpack_require__.t.bind(__webpack_require__, 91839, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 17161).then(__webpack_require__.t.bind(__webpack_require__, 17161, 17)),
        HTML: __webpack_require__.e(/* import() */ 5232).then(__webpack_require__.t.bind(__webpack_require__, 5232, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 81470).then(__webpack_require__.t.bind(__webpack_require__, 81470, 17)),
        HTML: __webpack_require__.e(/* import() */ 57933).then(__webpack_require__.t.bind(__webpack_require__, 57933, 17)),
        LESS: __webpack_require__.e(/* import() */ 8345).then(__webpack_require__.t.bind(__webpack_require__, 8345, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 92727).then(__webpack_require__.t.bind(__webpack_require__, 92727, 17)),
        HTML: __webpack_require__.e(/* import() */ 54879).then(__webpack_require__.t.bind(__webpack_require__, 54879, 17)),
        LESS: __webpack_require__.e(/* import() */ 26492).then(__webpack_require__.t.bind(__webpack_require__, 26492, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 95446).then(__webpack_require__.t.bind(__webpack_require__, 95446, 17)),
        HTML: __webpack_require__.e(/* import() */ 49671).then(__webpack_require__.t.bind(__webpack_require__, 49671, 17)),
        LESS: __webpack_require__.e(/* import() */ 94430).then(__webpack_require__.t.bind(__webpack_require__, 94430, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 72092).then(__webpack_require__.t.bind(__webpack_require__, 72092, 17)),
        HTML: __webpack_require__.e(/* import() */ 65945).then(__webpack_require__.t.bind(__webpack_require__, 65945, 17)),
        LESS: __webpack_require__.e(/* import() */ 57150).then(__webpack_require__.t.bind(__webpack_require__, 57150, 17))
      };
      this.example8 = {
        TypeScript: __webpack_require__.e(/* import() */ 13229).then(__webpack_require__.t.bind(__webpack_require__, 13229, 17)),
        HTML: __webpack_require__.e(/* import() */ 71081).then(__webpack_require__.t.bind(__webpack_require__, 71081, 17)),
        LESS: __webpack_require__.e(/* import() */ 99385).then(__webpack_require__.t.bind(__webpack_require__, 99385, 17))
      };
      this.example9 = {
        TypeScript: __webpack_require__.e(/* import() */ 2132).then(__webpack_require__.t.bind(__webpack_require__, 2132, 17)),
        HTML: __webpack_require__.e(/* import() */ 98252).then(__webpack_require__.t.bind(__webpack_require__, 98252, 17)),
        LESS: __webpack_require__.e(/* import() */ 34183).then(__webpack_require__.t.bind(__webpack_require__, 34183, 17))
      };
      this.iconVariants = [``, `tuiIconSearchLarge`, `tuiIconCalendarLarge`];
      this.icon = this.iconVariants[0];
      this.iconLeft = this.iconVariants[0];
      this.iconAlignVariants = [`left`, `right`];
      this.iconAlign = this.iconAlignVariants[1];
      this.control = new fesm2015_forms/* FormControl */.NI(`111`, fesm2015_forms/* Validators.required */.kI.required);
      this.placeholder = `Field placeholder`;
      this.customContentVariants = [`tuiIconSearchLarge`, `tuiIconCalendarLarge`, `tuiIconVisaMono`, `tuiIconMastercardMono`, LONG_TEXT_TEMPLATE];
    }

    get customContent() {
      return this.customContentSelected === LONG_TEXT_TEMPLATE ? this.longTextRef : this.customContentSelected;
    }

    set customContent(newValue) {
      this.customContentSelected = newValue;
    }

  }

  ExampleTuiInputComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputComponent_BaseFactory;
    return function ExampleTuiInputComponent_Factory(t) {
      return (ɵExampleTuiInputComponent_BaseFactory || (ɵExampleTuiInputComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputComponent)))(t || ExampleTuiInputComponent);
    };
  }();

  ExampleTuiInputComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputComponent,
    selectors: [["example-tui-input"]],
    viewQuery: function ExampleTuiInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(input_component_c0, 7);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.longTextRef = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 6,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1209704458858517185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__2 = goog.getMsg(" Input\u00A0\u2014 is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string ");
        i18n_1 = MSG_EXTERNAL_1209704458858517185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟ba34c78a5f69b2c5b9fd666dec92a282652da94e␟1209704458858517185: Input — is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string `;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4210017677519690278$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__4 = goog.getMsg("Inputs for other types of data:");
        i18n_3 = MSG_EXTERNAL_4210017677519690278$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟3f64aab9dcba4eea04c9d0333c87985f9252c078␟4210017677519690278:Inputs for other types of data:`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8758129556954662013$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__6 = goog.getMsg("{$startListItem}{$startLink}{$startTagCode}TextArea{$closeTagCode}{$closeLink} \u2014 for multiline text {$closeListItem}{$startListItem}{$startLink_1}{$startTagCode}InputDate{$closeTagCode}{$closeLink} \u2014 for dates {$closeListItem}{$startListItem}{$startLink_2}{$startTagCode}InputDateRange{$closeTagCode}{$closeLink} \u2014 for a range of dates {$closeListItem}{$startListItem}{$startLink_3}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} \u2014 for number (with measurement postfix) {$closeListItem}{$startListItem}{$startLink_4}{$startTagCode}InputPassword{$closeTagCode}{$closeLink} \u2014 for passwords {$closeListItem}{$startListItem}{$startLink_5}{$startTagCode}InputPhone{$closeTagCode}{$closeLink} \u2014 for phone numbers {$closeListItem}{$startListItem}{$startLink_6}{$startTagCode}InputTag{$closeTagCode}{$closeLink} \u2014 for inputing tags {$closeListItem}{$startListItem}{$startLink_7}{$startTagCode}InputRange{$closeTagCode}{$closeLink} , {$startLink_8}{$startTagCode}InputSlider{$closeTagCode}{$closeLink} \u2014 for accurate number values {$closeListItem}{$startListItem}{$startLink_9}{$startTagCode}Slider{$closeTagCode}{$closeLink} , {$startLink_10}{$startTagCode}Range{$closeTagCode}{$closeLink} \u2014 for not accurate number values {$closeListItem}{$startListItem}{$startLink_11}{$startTagCode}InputCount{$closeTagCode}{$closeLink} \u2014 for integer number of smth {$closeListItem}", {
          "startListItem": "[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]",
          "startLink": "\uFFFD#8\uFFFD",
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]",
          "closeLink": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]",
          "closeListItem": "[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]",
          "startLink_1": "\uFFFD#11\uFFFD",
          "startLink_2": "\uFFFD#14\uFFFD",
          "startLink_3": "\uFFFD#17\uFFFD",
          "startLink_4": "\uFFFD#20\uFFFD",
          "startLink_5": "\uFFFD#23\uFFFD",
          "startLink_6": "\uFFFD#26\uFFFD",
          "startLink_7": "\uFFFD#29\uFFFD",
          "startLink_8": "\uFFFD#31\uFFFD",
          "startLink_9": "\uFFFD#34\uFFFD",
          "startLink_10": "\uFFFD#36\uFFFD",
          "startLink_11": "\uFFFD#39\uFFFD"
        });
        i18n_5 = MSG_EXTERNAL_8758129556954662013$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟97df0ee7b5d7cae9aef5869c5745456ee8e695b5␟8758129556954662013:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#8\uFFFD"}:START_LINK:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:TextArea${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for multiline text ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#11\uFFFD"}:START_LINK_1:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputDate${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for dates ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#14\uFFFD"}:START_LINK_2:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputDateRange${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for a range of dates ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#17\uFFFD"}:START_LINK_3:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputNumber${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for number (with measurement postfix) ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#20\uFFFD"}:START_LINK_4:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputPassword${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for passwords ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#23\uFFFD"}:START_LINK_5:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputPhone${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for phone numbers ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#26\uFFFD"}:START_LINK_6:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputTag${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for inputing tags ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#29\uFFFD"}:START_LINK_7:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputRange${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: , ${"\uFFFD#31\uFFFD"}:START_LINK_8:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputSlider${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for accurate number values ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#34\uFFFD"}:START_LINK_9:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:Slider${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: , ${"\uFFFD#36\uFFFD"}:START_LINK_10:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:Range${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for not accurate number values ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#39\uFFFD"}:START_LINK_11:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputCount${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for integer number of smth ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_5 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_5);
      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__8 = goog.getMsg("Basic");
        i18n_7 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__10 = goog.getMsg("sizes");
        i18n_9 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3729048585447425716$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__12 = goog.getMsg("Mask");
        i18n_11 = MSG_EXTERNAL_3729048585447425716$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟977b4e5f8a71ea3d77cbf0bbbfb7955dc31bb109␟3729048585447425716:Mask`;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6507738516307254402$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__14 = goog.getMsg("Autocomplete");
        i18n_13 = MSG_EXTERNAL_6507738516307254402$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟fba3e700d434667e68ec31f38b2fed451955b6a3␟6507738516307254402:Autocomplete`;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__16 = goog.getMsg("Modes");
        i18n_15 = MSG_EXTERNAL_1387438809102966566$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__16;
      } else {
        i18n_15 = $localize`:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1358239534403218079$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__18 = goog.getMsg("Table");
        i18n_17 = MSG_EXTERNAL_1358239534403218079$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__18;
      } else {
        i18n_17 = $localize`:␟5c8ea0443990792280e53ee2cc87e577940c95cf␟1358239534403218079:Table`;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9041078670559726454$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__20 = goog.getMsg("Check");
        i18n_19 = MSG_EXTERNAL_9041078670559726454$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__20;
      } else {
        i18n_19 = $localize`:␟ad817cf4269e54829d82b4224d36766ad5f0b3e6␟9041078670559726454:Check`;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___22 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_21 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___22;
      } else {
        i18n_21 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7918098038633269309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___24 = goog.getMsg(" Icon content. If content is a string, it is used as stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_23 = MSG_EXTERNAL_7918098038633269309$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___24;
      } else {
        i18n_23 = $localize`:␟86a120364edaa105c400be3e6a0b84d9e6789a6a␟7918098038633269309: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4187253381969166352$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___26 = goog.getMsg(" Placeholder (use external {$startTagCode}<input tuiTextfield/>{$closeTagCode} to set it) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_25 = MSG_EXTERNAL_4187253381969166352$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___26;
      } else {
        i18n_25 = $localize`:␟23266f93ef1872cd92223e6814a7caddb18d1dac␟4187253381969166352: Placeholder (use external ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:<input tuiTextfield/>${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: to set it) `;
      }

      let i18n_27;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2238425626124076884$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__28 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_27 = MSG_EXTERNAL_2238425626124076884$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__28;
      } else {
        i18n_27 = $localize`:␟b87ebd9a23ff23ca85a00e40c87f9f20c5aac1fa␟2238425626124076884: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_29;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__30 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_29 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__30;
      } else {
        i18n_29 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_29 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_29);
      let i18n_31;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__32 = goog.getMsg("Add to the template:");
        i18n_31 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__32;
      } else {
        i18n_31 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Input", "package", "KIT", "type", "components"], ["pageTab", ""], ["justLongText", ""], [1, "tui-space_bottom-3"], i18n_1, i18n_3, i18n_5, ["tuiLink", "", "routerLink", "/components/text-area"], ["tuiLink", "", "routerLink", "/components/input-date"], ["tuiLink", "", "routerLink", "/components/input-date-range"], ["tuiLink", "", "routerLink", "/components/input-number"], ["tuiLink", "", "routerLink", "/components/input-password"], ["tuiLink", "", "routerLink", "/components/input-phone"], ["tuiLink", "", "routerLink", "/components/input-tag"], ["tuiLink", "", "routerLink", "/components/input-range"], ["tuiLink", "", "routerLink", "/components/input-slider"], ["tuiLink", "", "routerLink", "/components/slider"], ["tuiLink", "", "routerLink", "/components/range"], ["tuiLink", "", "routerLink", "/components/input-count"], ["id", "base", "heading", i18n_7, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "sizes", "heading", i18n_9, 3, "content"], ["id", "mask", "heading", i18n_11, 3, "content"], ["id", "autocomplete", "heading", i18n_13, 3, "content"], ["id", "modes", "heading", i18n_15, 3, "content"], ["id", "table", "heading", i18n_17, 3, "content"], ["id", "success", "heading", i18n_19, "description", "A check mark by success validation", 3, "content"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "rtl", "heading", "Direction: RTL", 3, "content"], [3, "control"], ["itemContent", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldIcon", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "placeholder", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "tuiTextfieldIcon", "tuiTextfieldIconLeft", "readOnly", "tuiTextfieldLabelOutside", "tuiTextfieldCustomContent", "tuiTextfieldSize", "tuiTextfieldCleaner", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], ["tuiTextfield", "", 3, "placeholder"], [1, "account"], [1, "name"], [3, "value"], i18n_21, i18n_23, ["tuiLink", "", "routerLink", "/services/svg-service"], i18n_25, [1, "b-demo-steps"], i18n_27, ["filename", "myComponent.module.ts", 3, "code"], i18n_29, ["filename", "myComponent.component.ts", 3, "code"], i18n_31, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputComponent_ng_template_1_Template, 67, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputComponent_ng_template_2_Template, 9, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputExample1, TuiInputExample2, TuiInputExample3, TuiInputExample4, TuiInputExample5, TuiInputExample6, TuiInputExample7, TuiInputExample8, TuiInputExample9, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_directive/* TuiTextfieldIconDirective */.AW, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_component/* TuiTextfieldComponent */.M, money_component/* TuiMoneyComponent */.o, code_component/* TuiDocCodeComponent */.c],
    styles: [".account[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:3.5rem;padding:.5rem 0;box-sizing:border-box}.name[_ngcontent-%COMP%]{opacity:.7}"],
    changeDetection: 0
  });
  return ExampleTuiInputComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input/input.module.ts























let ExampleTuiInputModule = /*#__PURE__*/(() => {
  class ExampleTuiInputModule {}

  ExampleTuiInputModule.ɵfac = function ExampleTuiInputModule_Factory(t) {
    return new (t || ExampleTuiInputModule)();
  };

  ExampleTuiInputModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputModule
  });
  ExampleTuiInputModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[router/* RouterModule */.Bz, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiInputModule, kit.TuiInputNumberModule, kit.TuiInputCountModule, kit.TuiSelectModule, core.TuiGroupModule, cdk.TuiMapperPipeModule, addon_commerce.TuiMoneyModule, core.TuiLinkModule, core.TuiModeModule, addon_table.TuiTableModule, kit.TuiInputDateModule, core.TuiNotificationModule, cdk.TuiRepeatTimesModule, core.TuiSvgModule, kit.TuiRadioListModule, core.TuiButtonModule, addon_commerce.TuiInputCardModule, kit.TuiAvatarModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiDropdownModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, cdk.TuiLetModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputComponent)), kit.TextMaskModule]]
  });
  return ExampleTuiInputModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputModule, {
    declarations: [ExampleTuiInputComponent, TuiInputExample1, TuiInputExample2, TuiInputExample3, TuiInputExample4, TuiInputExample5, TuiInputExample6, TuiInputExample7, TuiInputExample8, TuiInputExample9],
    imports: [router/* RouterModule */.Bz, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiInputModule, kit.TuiInputNumberModule, kit.TuiInputCountModule, kit.TuiSelectModule, core.TuiGroupModule, cdk.TuiMapperPipeModule, addon_commerce.TuiMoneyModule, core.TuiLinkModule, core.TuiModeModule, addon_table.TuiTableModule, kit.TuiInputDateModule, core.TuiNotificationModule, cdk.TuiRepeatTimesModule, core.TuiSvgModule, kit.TuiRadioListModule, core.TuiButtonModule, addon_commerce.TuiInputCardModule, kit.TuiAvatarModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiDropdownModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, cdk.TuiLetModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, kit.TextMaskModule],
    exports: [ExampleTuiInputComponent]
  });
})();

/***/ })

}]);