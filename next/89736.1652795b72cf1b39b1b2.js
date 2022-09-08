"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89736],{

/***/ 89736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBadgedContentModule": () => (/* binding */ ExampleTuiBadgedContentModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/badged-content/badged-content.component.ts
var badged_content_component = __webpack_require__(82583);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badged-content/examples/1/index.ts



let TuiBadgedContentExample1 = /*#__PURE__*/(() => {
  class TuiBadgedContentExample1 {}

  TuiBadgedContentExample1.ɵfac = function TuiBadgedContentExample1_Factory(t) {
    return new (t || TuiBadgedContentExample1)();
  };

  TuiBadgedContentExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgedContentExample1,
    selectors: [["tui-badged-content-example-1"]],
    decls: 14,
    vars: 6,
    consts: [[1, "row"], ["colorTop", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "rounded"], ["text", "a b", "size", "l", 3, "rounded"], ["colorBottom", "var(--tui-success-fill)", "size", "l", 1, "tui-space_right-5", 3, "rounded"], ["text", "c d", "size", "l", 3, "rounded"], ["colorTop", "var(--tui-success-fill)", "colorBottom", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "rounded"], ["text", "e", "size", "l", 3, "rounded"], [1, "row", "tui-space_top-5"], ["colorTop", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5"], ["text", "a b", "size", "l"], ["colorBottom", "var(--tui-success-fill)", "size", "l", 1, "tui-space_right-5"], ["text", "c d", "size", "l"], ["colorTop", "var(--tui-success-fill)", "colorBottom", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5"], ["text", "e", "size", "l"]],
    template: function TuiBadgedContentExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-badged-content", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-badged-content", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-avatar", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-badged-content", 5);
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-avatar", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-badged-content", 8);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-avatar", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-badged-content", 10);
        fesm2015_core/* ɵɵelement */._UZ(11, "tui-avatar", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-badged-content", 12);
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-avatar", 13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
      }
    },
    directives: [badged_content_component/* TuiBadgedContentComponent */.V, avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiBadgedContentExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badged-content/examples/2/index.ts







function TuiBadgedContentExample2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 6);
    fesm2015_core/* ɵɵtext */._uU(1, "... and nothing happened");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiBadgedContentExample2 = /*#__PURE__*/(() => {
  class TuiBadgedContentExample2 {
    constructor() {
      this.value = ``;
      this.contentTop = 0;
    }

    get badgeValue() {
      return this.value.length;
    }

    get color() {
      return this.contentTop === 50 ? `tuiIconCheck` : `var(--tui-error-fill)`;
    }

    get contentBottom() {
      return this.contentTop === 50 ? `` : ``;
    }

    onClick() {
      this.contentTop++;
    }

  }

  TuiBadgedContentExample2.ɵfac = function TuiBadgedContentExample2_Factory(t) {
    return new (t || TuiBadgedContentExample2)();
  };

  TuiBadgedContentExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgedContentExample2,
    selectors: [["tui-badged-content-example-2"]],
    decls: 9,
    vars: 6,
    consts: [["colorTop", "var(--tui-support-01)", 3, "contentTop"], [1, "b-form", 3, "ngModel", "ngModelChange"], [1, "tui-space_top-5"], [3, "contentTop", "contentBottom", "colorTop"], ["tuiButton", "", "type", "button", "appearance", "secondary", "size", "xl", 3, "disabled", "click"], ["customBadge", ""], [1, "template"]],
    template: function TuiBadgedContentExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-badged-content", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiBadgedContentExample2_Template_tui_input_ngModelChange_1_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Input text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-badged-content", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiBadgedContentExample2_Template_button_click_5_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Let's click 50 times ... ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiBadgedContentExample2_ng_template_7_Template, 2, 0, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵproperty */.Q6J("contentTop", ctx.badgeValue);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("contentTop", ctx.contentTop)("contentBottom", ctx.contentTop === 50 ? _r0 : "")("colorTop", ctx.color);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", ctx.contentTop === 50);
      }
    },
    directives: [badged_content_component/* TuiBadgedContentComponent */.V, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, button_component/* TuiButtonComponent */.v],
    styles: [".template[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text);padding:0 .375rem}"],
    changeDetection: 0
  });
  return TuiBadgedContentExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badged-content/examples/3/index.ts



let TuiBadgedContentExample3 = /*#__PURE__*/(() => {
  class TuiBadgedContentExample3 {}

  TuiBadgedContentExample3.ɵfac = function TuiBadgedContentExample3_Factory(t) {
    return new (t || TuiBadgedContentExample3)();
  };

  TuiBadgedContentExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgedContentExample3,
    selectors: [["tui-badged-content-example-3"]],
    decls: 14,
    vars: 10,
    consts: [[1, "row"], ["contentTop", "tuiIconCheckCircleLarge", "colorTop", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "rounded"], ["text", "a b", "size", "l", 3, "rounded"], ["colorBottom", "var(--tui-success-fill)", "size", "l", 1, "tui-space_right-5", 3, "contentBottom", "rounded"], ["text", "c d", "size", "l", 3, "rounded"], ["contentBottom", "tuiIconSettings", "colorTop", "var(--tui-success-fill)", "colorBottom", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "contentTop", "rounded"], ["text", "e", "size", "l", 3, "rounded"], [1, "row", "tui-space_top-5"], ["colorTop", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "contentTop"], ["text", "a b", "size", "l"], ["contentBottom", "tuiIconSettings", "colorBottom", "var(--tui-success-fill)", "size", "l", 1, "tui-space_right-5"], ["text", "c d", "size", "l"], ["contentBottom", "tuiIconCheckCircleLarge", "colorBottom", "var(--tui-error-fill)", "size", "l", 1, "tui-space_right-5", 3, "contentTop"], ["text", "e", "size", "l"]],
    template: function TuiBadgedContentExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-badged-content", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-badged-content", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-avatar", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-badged-content", 5);
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-avatar", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-badged-content", 8);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-avatar", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-badged-content", 10);
        fesm2015_core/* ɵɵelement */._UZ(11, "tui-avatar", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-badged-content", 12);
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-avatar", 13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("contentBottom", 64)("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("contentTop", 64)("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("contentTop", 64);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("contentTop", 64);
      }
    },
    directives: [badged_content_component/* TuiBadgedContentComponent */.V, avatar_component/* TuiAvatarComponent */.J],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiBadgedContentExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badged-content/badged-content.component.ts














function ExampleTuiBadgedContentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-badged-content-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-badged-content-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-badged-content-example-3");
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

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 15);
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "b");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelement */._UZ(1, "b");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-badged-content", 6);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.contentBottom = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.contentTop = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.colorBottom = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.colorTop = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiBadgedContentComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgedContentComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.rounded = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(4);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("contentTop", ctx_r1.contentTop === "Template" ? _r3 : ctx_r1.contentTop)("contentBottom", ctx_r1.contentBottom === "Template" ? _r3 : ctx_r1.contentBottom)("rounded", ctx_r1.rounded)("colorTop", ctx_r1.colorTop)("colorBottom", ctx_r1.colorBottom)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", ctx_r1.rounded)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.contentBottom);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.contentTop);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.colorBottom);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.colorTop);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.rounded);
  }
}

function ExampleTuiBadgedContentComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 26);
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

let ExampleTuiBadgedContentComponent = /*#__PURE__*/(() => {
  class ExampleTuiBadgedContentComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 94951).then(__webpack_require__.t.bind(__webpack_require__, 94951, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 58202).then(__webpack_require__.t.bind(__webpack_require__, 58202, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 68364).then(__webpack_require__.t.bind(__webpack_require__, 68364, 17)),
        HTML: __webpack_require__.e(/* import() */ 38145).then(__webpack_require__.t.bind(__webpack_require__, 38145, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 1336).then(__webpack_require__.t.bind(__webpack_require__, 1336, 17)),
        LESS: __webpack_require__.e(/* import() */ 48622).then(__webpack_require__.t.bind(__webpack_require__, 48622, 17)),
        HTML: __webpack_require__.e(/* import() */ 62246).then(__webpack_require__.t.bind(__webpack_require__, 62246, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 33029).then(__webpack_require__.t.bind(__webpack_require__, 33029, 17)),
        HTML: __webpack_require__.e(/* import() */ 98701).then(__webpack_require__.t.bind(__webpack_require__, 25697, 17))
      };
      this.rounded = false;
      this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`, `xxl`];
      this.size = this.sizeVariants[2];
      this.colorTop = ``;
      this.colorBottom = ``;
      this.contentTop = ``;
      this.contentBottom = ``;
      this.contentVariants = [``, 1, 5, 155, `tuiIconCheck`, `Template`, `tuiIconCheckCircleLarge`];
    }

  }

  ExampleTuiBadgedContentComponent.ɵfac = function ExampleTuiBadgedContentComponent_Factory(t) {
    return new (t || ExampleTuiBadgedContentComponent)();
  };

  ExampleTuiBadgedContentComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBadgedContentComponent,
    selectors: [["example-avatar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_926360384859945807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__1 = goog.getMsg("BadgedContent is a wrapper for other components to add badges and notifications to them.");
        i18n_0 = MSG_EXTERNAL_926360384859945807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟205dbe908c92dcaf7e04699470ab3821e588b071␟926360384859945807:BadgedContent is a wrapper for other components to add badges and notifications to them.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5069453316184338315$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__3 = goog.getMsg("with notification");
        i18n_2 = MSG_EXTERNAL_5069453316184338315$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟2cafd3774163dbba7bfd8f323d1ec5e5daf29370␟5069453316184338315:with notification`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_929436895344517188$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__5 = goog.getMsg("with different components");
        i18n_4 = MSG_EXTERNAL_929436895344517188$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟09a7c1494df8e6916cbb3701edb1684ab3dc87bb␟929436895344517188:with different components`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4352677288238793646$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__7 = goog.getMsg("with a badge and icon");
        i18n_6 = MSG_EXTERNAL_4352677288238793646$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟911b7fce6f9839becf82349838934c39f049a9bd␟4352677288238793646:with a badge and icon`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1023691772623575830$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___9 = goog.getMsg(" Bottom right content. If it is a number, badge shows it. If it is a string, it will be used as icon. {$startBoldText}Warning:{$closeBoldText} use big icons for all sizes except 'xs'. ", {
          "startBoldText": "\uFFFD#1\uFFFD",
          "closeBoldText": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1023691772623575830$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟8cff0fa19df3e1cf10de0043d62004b6624574b6␟1023691772623575830: Bottom right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\uFFFD#1\uFFFD"}:START_BOLD_TEXT:Warning:${"\uFFFD/#1\uFFFD"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6215357838798063691$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___11 = goog.getMsg(" Top right content. If it is a number, badge shows it. If it is a string, it will be used as icon. {$startBoldText}Warning:{$closeBoldText} use big icons for all sizes except 'xs'. ", {
          "startBoldText": "\uFFFD#1\uFFFD",
          "closeBoldText": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_6215357838798063691$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟756e389c9541f42303db20232db1aa27b3cdf53a␟6215357838798063691: Top right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ${"\uFFFD#1\uFFFD"}:START_BOLD_TEXT:Warning:${"\uFFFD/#1\uFFFD"}:CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2994445860003734892$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___13 = goog.getMsg(" Bottom right content color. If there is no content, shows a small circle of this color. ");
        i18n_12 = MSG_EXTERNAL_2994445860003734892$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟42055ebd6d2f0f8fece6b8d4f1dafa0903e6567b␟2994445860003734892: Bottom right content color. If there is no content, shows a small circle of this color. `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4865192425937239978$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___15 = goog.getMsg(" Top right content color. If there is no content, shows a small circle of this color. ");
        i18n_14 = MSG_EXTERNAL_4865192425937239978$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟1dd2d4094c130e11dbd4c311d685ab75083151bd␟4865192425937239978: Top right content color. If there is no content, shows a small circle of this color. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___17 = goog.getMsg(" Size ");
        i18n_16 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8720720071780904257$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___19 = goog.getMsg(" Rounded mode ");
        i18n_18 = MSG_EXTERNAL_8720720071780904257$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟6f3bd0a381b0f06876aa2784116206982c42c257␟8720720071780904257: Rounded mode `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7293437017109719147$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiBadgedContentModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_7293437017109719147$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟c4c036235fe0d58089ec47e1c5874ba94a02284e␟7293437017109719147: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBadgedContentModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGED_CONTENT_BADGED_CONTENT_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "BadgedContent", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "components", "heading", i18n_4, 3, "content"], ["id", "badge", "heading", i18n_6, 3, "content"], [3, "contentTop", "contentBottom", "rounded", "colorTop", "colorBottom", "size"], ["text", "daenerys targaryen", 3, "rounded", "size"], ["example", ""], ["documentationPropertyName", "contentBottom", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "contentTop", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "colorBottom", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "colorTop", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyType", "TuiSizeXS | TuiSizeXXL", "documentationPropertyMode", "input", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["text", "Example", "size", "s", "avatarUrl", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", 3, "rounded"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBadgedContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiBadgedContentComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBadgedContentComponent_ng_template_2_Template, 12, 17, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBadgedContentComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBadgedContentExample1, TuiBadgedContentExample2, TuiBadgedContentExample3, demo_component/* TuiDocDemoComponent */.F, badged_content_component/* TuiBadgedContentComponent */.V, avatar_component/* TuiAvatarComponent */.J, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiBadgedContentComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badged-content/badged-content.module.ts












let ExampleTuiBadgedContentModule = /*#__PURE__*/(() => {
  class ExampleTuiBadgedContentModule {}

  ExampleTuiBadgedContentModule.ɵfac = function ExampleTuiBadgedContentModule_Factory(t) {
    return new (t || ExampleTuiBadgedContentModule)();
  };

  ExampleTuiBadgedContentModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBadgedContentModule
  });
  ExampleTuiBadgedContentModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit/* TuiAvatarModule */.JmR, kit/* TuiBadgedContentModule */.f6o, kit/* TuiInputModule */.QfL, core/* TuiButtonModule */.fNO, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBadgedContentComponent))]]
  });
  return ExampleTuiBadgedContentModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBadgedContentModule, {
    declarations: [ExampleTuiBadgedContentComponent, TuiBadgedContentExample1, TuiBadgedContentExample2, TuiBadgedContentExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit/* TuiAvatarModule */.JmR, kit/* TuiBadgedContentModule */.f6o, kit/* TuiInputModule */.QfL, core/* TuiButtonModule */.fNO, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBadgedContentComponent]
  });
})();

/***/ })

}]);