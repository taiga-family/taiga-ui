"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75277],{

/***/ 75277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputNumberModule": () => (/* binding */ ExampleTuiInputNumberModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/currency/currency.pipe.ts
var currency_pipe = __webpack_require__(99886);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/examples/1/index.ts







let TuiInputNumberExample1 = /*#__PURE__*/(() => {
  class TuiInputNumberExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(100);
    }

  }

  TuiInputNumberExample1.ɵfac = function TuiInputNumberExample1_Factory(t) {
    return new (t || TuiInputNumberExample1)();
  };

  TuiInputNumberExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputNumberExample1,
    selectors: [["tui-input-number-example-1"]],
    decls: 9,
    vars: 12,
    consts: [["tuiHintContent", "Dollar sign is commonly placed BEFORE the amount. Use [prefix].", 3, "formControl", "prefix"], ["tuiHintContent", "Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].", 3, "formControl", "postfix"], ["tuiHintContent", "Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].", 3, "formControl", "prefix"]],
    template: function TuiInputNumberExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "tuiCurrency");
        fesm2015_core/* ɵɵtext */._uU(2, " Type a sum\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 1);
        fesm2015_core/* ɵɵpipe */.ALo(4, "tuiCurrency");
        fesm2015_core/* ɵɵtext */._uU(5, " Type a sum\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-number", 2);
        fesm2015_core/* ɵɵpipe */.ALo(7, "tuiCurrency");
        fesm2015_core/* ɵɵtext */._uU(8, " Type a sum\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("prefix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 6, "USD"));
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("postfix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 8, "978"));
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("prefix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 10, 826));
      }
    },
    directives: [input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, hint_options_directive/* TuiHintOptionsDirective */.bZ, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    pipes: [currency_pipe/* TuiCurrencyPipe */.i],
    styles: ["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],
    changeDetection: 0
  });
  return TuiInputNumberExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/examples/2/index.ts








let TuiInputNumberExample2 = /*#__PURE__*/(() => {
  class TuiInputNumberExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI()
      });
    }

  }

  TuiInputNumberExample2.ɵfac = function TuiInputNumberExample2_Factory(t) {
    return new (t || TuiInputNumberExample2)();
  };

  TuiInputNumberExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputNumberExample2,
    selectors: [["tui-input-number-example-2"]],
    decls: 10,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s", "postfix", "kg"], ["tuiTextfield", "", "name", "potato"], ["formControlName", "testValue", "postfix", "L", "tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside"], ["id", "milk", "tuiTextfield", ""], ["postfix", "cm", "formControlName", "testValue", 1, "tui-space_top-2"], ["tuiTextfield", "", 2, "color", "orange"]],
    template: function TuiInputNumberExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Potatos ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-number", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Milk ");
        fesm2015_core/* ɵɵelement */._UZ(6, "input", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input-number", 5);
        fesm2015_core/* ɵɵtext */._uU(8, " Carrot ");
        fesm2015_core/* ɵɵelement */._UZ(9, "input", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_component/* TuiTextfieldComponent */.M, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputNumberExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/examples/3/index.ts





let TuiInputNumberExample3 = /*#__PURE__*/(() => {
  class TuiInputNumberExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(Math.PI)
      });
    }

  }

  TuiInputNumberExample3.ɵfac = function TuiInputNumberExample3_Factory(t) {
    return new (t || TuiInputNumberExample3)();
  };

  TuiInputNumberExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputNumberExample3,
    selectors: [["tui-input-number-example-3"]],
    decls: 5,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["decimal", "not-zero", "formControlName", "testValue", 3, "precision"]],
    template: function TuiInputNumberExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
        fesm2015_core/* ɵɵtext */._uU(3, "\u03C0");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4, " -value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("precision", 8);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputNumberExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/examples/4/index.ts






let TuiInputNumberExample4 = /*#__PURE__*/(() => {
  class TuiInputNumberExample4 {
    constructor() {
      this.value = 1234.56;
    }

  }

  TuiInputNumberExample4.ɵfac = function TuiInputNumberExample4_Factory(t) {
    return new (t || TuiInputNumberExample4)();
  };

  TuiInputNumberExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputNumberExample4,
    selectors: [["tui-input-number-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_NUMBER_FORMAT,
      useValue: {
        decimalSeparator: `.`,
        thousandSeparator: `,`
      }
    }])],
    decls: 2,
    vars: 1,
    consts: [["prefix", "$", "tuiHintContent", "Using cleaner is not recommended ;)", 1, "input", 3, "ngModel", "ngModelChange"]],
    template: function TuiInputNumberExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputNumberExample4_Template_tui_input_number_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Type a sum\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
      }
    },
    directives: [input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, hint_options_directive/* TuiHintOptionsDirective */.bZ, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],
    changeDetection: 0
  });
  return TuiInputNumberExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/examples/5/index.ts





let TuiInputNumberExample5 = /*#__PURE__*/(() => {
  class TuiInputNumberExample5 {
    constructor() {
      this.value = 123.56;
    }

  }

  TuiInputNumberExample5.ɵfac = function TuiInputNumberExample5_Factory(t) {
    return new (t || TuiInputNumberExample5)();
  };

  TuiInputNumberExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputNumberExample5,
    selectors: [["tui-input-number-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_NUMBER_FORMAT,
      useValue: {
        decimalSeparator: `,`,
        thousandSeparator: `.`
      }
    }])],
    decls: 2,
    vars: 2,
    consts: [["prefix", "\u00A5 ", "decimal", "never", 3, "postfix", "ngModel", "ngModelChange"]],
    template: function TuiInputNumberExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputNumberExample5_Template_tui_input_number_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Type a sum\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("postfix", ctx.value ? ",00" : " ,00")("ngModel", ctx.value);
      }
    },
    directives: [input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputNumberExample5;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/input-number.component.ts































function ExampleTuiInputNumberComponent_ng_template_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 22);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 23);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiInputNumberComponent_ng_template_1_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Customize input via ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 24);
    fesm2015_core/* ɵɵtext */._uU(2, " TextfieldControllers ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " . ");
  }
}

function ExampleTuiInputNumberComponent_ng_template_1_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Use property ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "[precision]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " to configure a number of digits after comma. ");
  }
}

function ExampleTuiInputNumberComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "section");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "h3");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "ul", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "a", 7);
    fesm2015_core/* ɵɵelement */._UZ(8, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "li", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "a", 8);
    fesm2015_core/* ɵɵelement */._UZ(11, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "a", 9);
    fesm2015_core/* ɵɵelement */._UZ(14, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "a", 10);
    fesm2015_core/* ɵɵelement */._UZ(18, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(21, 11);
    fesm2015_core/* ɵɵelement */._UZ(22, "a", 12);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(24, ExampleTuiInputNumberComponent_ng_template_1_ng_template_24_Template, 5, 0, "ng-template", null, 14, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-input-number-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "tui-doc-example", 15);
    fesm2015_core/* ɵɵtemplate */.YNc(28, ExampleTuiInputNumberComponent_ng_template_1_ng_template_28_Template, 4, 0, "ng-template", null, 16, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(30, "tui-notification", 17);
    fesm2015_core/* ɵɵtext */._uU(31, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "code");
    fesm2015_core/* ɵɵtext */._uU(33, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(34, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "code");
    fesm2015_core/* ɵɵtext */._uU(36, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(37, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(38, "tui-input-number-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "tui-doc-example", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(40, ExampleTuiInputNumberComponent_ng_template_1_ng_template_40_Template, 4, 0, "ng-template", null, 19, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(42, "tui-input-number-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "tui-doc-example", 20);
    fesm2015_core/* ɵɵelement */._UZ(44, "tui-input-number-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(45, "tui-doc-example", 21);
    fesm2015_core/* ɵɵelement */._UZ(46, "tui-input-number-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(25);

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(29);

    const _r7 = fesm2015_core/* ɵɵreference */.MAs(41);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(23);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1)("description", _r3);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2)("description", _r5);
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3)("description", _r7);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 34);
    fesm2015_core/* ɵɵtext */._uU(1, " Type a sum ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵstyleProp */.Udp("text-align", ctx_r9.align);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r9.control)("focusable", ctx_r9.focusable)("tuiTextfieldIconLeft", ctx_r9.iconLeft)("tuiTextfieldCleaner", ctx_r9.cleaner)("tuiTextfieldCustomContent", ctx_r9.customContent)("tuiTextfieldLabelOutside", ctx_r9.labelOutside)("tuiTextfieldSize", ctx_r9.size)("min", ctx_r9.min)("max", ctx_r9.max)("pseudoInvalid", ctx_r9.pseudoInvalid)("pseudoFocus", ctx_r9.pseudoFocused)("pseudoHover", ctx_r9.pseudoHovered)("pseudoActive", ctx_r9.pseudoPressed)("precision", ctx_r9.precision)("readOnly", ctx_r9.readOnly)("decimal", ctx_r9.decimal)("prefix", ctx_r9.prefix)("postfix", ctx_r9.postfix)("tuiHintContent", ctx_r9.hintContent)("tuiHintDirection", ctx_r9.hintDirection)("tuiHintAppearance", ctx_r9.hintAppearance);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 35);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 36);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 37);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 38);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 39);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 40);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 41);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 42);
  }
}

function ExampleTuiInputNumberComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 25);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputNumberComponent_ng_template_2_ng_template_1_Template, 2, 23, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputNumberComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.align = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputNumberComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 27);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputNumberComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 28);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputNumberComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 29);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputNumberComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 30);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.prefix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputNumberComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 31);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.postfix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputNumberComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 32);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.precision = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputNumberComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 33);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.decimal = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.alignVariants)("documentationPropertyValue", ctx_r1.align);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.postfixVariants)("documentationPropertyValue", ctx_r1.prefix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.postfixVariants)("documentationPropertyValue", ctx_r1.postfix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.precisionVariants)("documentationPropertyValue", ctx_r1.precision);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.decimalVariants)("documentationPropertyValue", ctx_r1.decimal);
  }
}

function ExampleTuiInputNumberComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 43);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 44);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 45);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 46);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 47);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 48);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 49);
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

let ExampleTuiInputNumberComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputNumberComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 25924).then(__webpack_require__.t.bind(__webpack_require__, 25924, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 19856).then(__webpack_require__.t.bind(__webpack_require__, 19856, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 19624).then(__webpack_require__.t.bind(__webpack_require__, 19624, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 61406).then(__webpack_require__.t.bind(__webpack_require__, 61406, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 6456).then(__webpack_require__.t.bind(__webpack_require__, 6456, 17)),
        LESS: __webpack_require__.e(/* import() */ 35512).then(__webpack_require__.t.bind(__webpack_require__, 35512, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 64780).then(__webpack_require__.t.bind(__webpack_require__, 64780, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 86101).then(__webpack_require__.t.bind(__webpack_require__, 86101, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 37519).then(__webpack_require__.t.bind(__webpack_require__, 37519, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 10311).then(__webpack_require__.t.bind(__webpack_require__, 10311, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 34933).then(__webpack_require__.t.bind(__webpack_require__, 34933, 17)),
        HTML: __webpack_require__.e(/* import() */ 34468).then(__webpack_require__.t.bind(__webpack_require__, 34468, 17)),
        LESS: __webpack_require__.e(/* import() */ 70707).then(__webpack_require__.t.bind(__webpack_require__, 70707, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 89302).then(__webpack_require__.t.bind(__webpack_require__, 89302, 17)),
        HTML: __webpack_require__.e(/* import() */ 82435).then(__webpack_require__.t.bind(__webpack_require__, 82435, 17))
      };
      this.minVariants = [-Infinity, -500, 5, 25];
      this.min = this.minVariants[0];
      this.maxVariants = [Infinity, 10, 500];
      this.max = this.maxVariants[0];
      this.alignVariants = [`left`, `right`];
      this.align = this.alignVariants[0];
      this.autocompleteVariants = [`off`, `transaction-amount`];
      this.autocomplete = ``;
      this.decimalVariants = [`not-zero`, `always`, `never`];
      this.decimal = this.decimalVariants[0];
      this.cleaner = false;
      this.precisionVariants = [2, 3, 4];
      this.precision = this.precisionVariants[0];
      this.postfixVariants = [``, `$`, `GBP`, `Very long text`];
      this.prefix = this.postfixVariants[0];
      this.postfix = this.postfixVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(6432, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiInputNumberComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputNumberComponent_BaseFactory;
    return function ExampleTuiInputNumberComponent_Factory(t) {
      return (ɵExampleTuiInputNumberComponent_BaseFactory || (ɵExampleTuiInputNumberComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputNumberComponent)))(t || ExampleTuiInputNumberComponent);
    };
  }();

  ExampleTuiInputNumberComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputNumberComponent,
    selectors: [["example-tui-input-number"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputNumberComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1048262239433767130$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__1 = goog.getMsg(" A component to input numbers. Control value is also of number type. ");
        i18n_0 = MSG_EXTERNAL_1048262239433767130$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟10ffa175baed8ebf9062197a5bad595f5480f78e␟1048262239433767130: A component to input numbers. Control value is also of number type. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5806261041507532016$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__3 = goog.getMsg("{$startHeadingLevel3}There are also other components to input numbers:{$closeHeadingLevel3}{$startUnorderedList}{$startListItem}{$startLink}{$startTagStrong}InputCount{$closeTagStrong}{$closeLink} (integers only) {$closeListItem}{$startListItem}{$startLink_1}{$startTagStrong}Slider{$closeTagStrong}{$closeLink}{$closeListItem}{$startListItem}{$startLink_2}{$startTagStrong}InputSlider{$closeTagStrong}{$closeLink} (it uses {$startTagCode}InputNumber{$closeTagCode} inside) {$closeListItem}{$startListItem}{$startLink_3}{$startTagStrong}InputRange{$closeTagStrong}{$closeLink} (it uses {$startTagCode}InputNumber{$closeTagCode} inside) {$closeListItem}{$closeUnorderedList}", {
          "startHeadingLevel3": "\uFFFD#4\uFFFD",
          "closeHeadingLevel3": "\uFFFD/#4\uFFFD",
          "startUnorderedList": "\uFFFD#5\uFFFD",
          "startListItem": "[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#16\uFFFD]",
          "startLink": "\uFFFD#7\uFFFD",
          "startTagStrong": "[\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#18\uFFFD]",
          "closeTagStrong": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#18\uFFFD]",
          "closeLink": "[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#17\uFFFD]",
          "closeListItem": "[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#16\uFFFD]",
          "startLink_1": "\uFFFD#10\uFFFD",
          "startLink_2": "\uFFFD#13\uFFFD",
          "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#19\uFFFD]",
          "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#19\uFFFD]",
          "startLink_3": "\uFFFD#17\uFFFD",
          "closeUnorderedList": "\uFFFD/#5\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_5806261041507532016$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟135d3647ed7a3ea1b3d5080b3113250a2f018540␟5806261041507532016:${"\uFFFD#4\uFFFD"}:START_HEADING_LEVEL3:There are also other components to input numbers:${"\uFFFD/#4\uFFFD"}:CLOSE_HEADING_LEVEL3:${"\uFFFD#5\uFFFD"}:START_UNORDERED_LIST:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#16\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#7\uFFFD"}:START_LINK:${"[\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_STRONG:InputCount${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_STRONG:${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_LINK: (integers only) ${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#16\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#10\uFFFD"}:START_LINK_1:${"[\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_STRONG:Slider${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_STRONG:${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_LINK:${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#16\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#13\uFFFD"}:START_LINK_2:${"[\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_STRONG:InputSlider${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_STRONG:${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_LINK: (it uses ${"[\uFFFD#15\uFFFD|\uFFFD#19\uFFFD]"}:START_TAG_CODE:InputNumber${"[\uFFFD/#15\uFFFD|\uFFFD/#19\uFFFD]"}:CLOSE_TAG_CODE: inside) ${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#16\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#17\uFFFD"}:START_LINK_3:${"[\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#18\uFFFD]"}:START_TAG_STRONG:InputRange${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_STRONG:${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_LINK: (it uses ${"[\uFFFD#15\uFFFD|\uFFFD#19\uFFFD]"}:START_TAG_CODE:InputNumber${"[\uFFFD/#15\uFFFD|\uFFFD/#19\uFFFD]"}:CLOSE_TAG_CODE: inside) ${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_LIST_ITEM:${"\uFFFD/#5\uFFFD"}:CLOSE_UNORDERED_LIST:`;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5187759459933626480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__5 = goog.getMsg(" Number formatting can be customized with {$startLink} TUI_NUMBER_FORMAT {$closeLink} token. ", {
          "startLink": "\uFFFD#22\uFFFD",
          "closeLink": "\uFFFD/#22\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5187759459933626480$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f04807d740cad8bf4061798407cd7d4eda1851b1␟5187759459933626480: Number formatting can be customized with ${"\uFFFD#22\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#22\uFFFD"}:CLOSE_LINK: token. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4327471061205783634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__7 = goog.getMsg("Currency");
        i18n_6 = MSG_EXTERNAL_4327471061205783634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__9 = goog.getMsg("sizes");
        i18n_8 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6364160638647394724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__11 = goog.getMsg("8 digits after comma");
        i18n_10 = MSG_EXTERNAL_6364160638647394724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟281bab00c72643e8a46c97d760098178f7bca379␟6364160638647394724:8 digits after comma`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4961291854954937284$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__13 = goog.getMsg("Align to the right");
        i18n_12 = MSG_EXTERNAL_4961291854954937284$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟1e39c3e479610bfcb275d70e5797a7c144e9846e␟4961291854954937284:Align to the right`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6787854778648694703$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__15 = goog.getMsg("Prefix and postfix");
        i18n_14 = MSG_EXTERNAL_6787854778648694703$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟1254bd53a81179b793dbdce2ac9307e07cbfe883␟6787854778648694703:Prefix and postfix`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4971956858864594750$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___17 = goog.getMsg(" To input money use properties {$startTagCode}[postfix]{$closeTagCode} or {$startTagCode}[prefix]{$closeTagCode} . To get currency symbol use pipe {$startLink} tuiCurrency {$closeLink} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_4971956858864594750$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟704ffcbd53b377c11d2bc072068ffa7a5ee5312b␟4971956858864594750: To input money use properties ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:[postfix]${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:[prefix]${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . To get currency symbol use pipe ${"\uFFFD#4\uFFFD"}:START_LINK: tuiCurrency ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: . `;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_226068063890007003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___19 = goog.getMsg(" Custom align content by text-align ");
        i18n_18 = MSG_EXTERNAL_226068063890007003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___21 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___23 = goog.getMsg(" Min value ");
        i18n_22 = MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___25 = goog.getMsg(" Max value ");
        i18n_24 = MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___27 = goog.getMsg(" A prefix symbol, like currency ");
        i18n_26 = MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8021237919117600846$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___29 = goog.getMsg(" A postfix symbol, like currency ");
        i18n_28 = MSG_EXTERNAL_8021237919117600846$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7859588428304649828$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___31 = goog.getMsg(" A number of digits after comma ");
        i18n_30 = MSG_EXTERNAL_7859588428304649828$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4020917276602472682$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___33 = goog.getMsg(" Show/hide decimal ");
        i18n_32 = MSG_EXTERNAL_4020917276602472682$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟29ca7cd63e443b8d4cc789b248893976685ce792␟4020917276602472682: Show/hide decimal `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4070105638851960915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__35 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputNumberModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_4070105638851960915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟ff39c2adbe221092857a8cdbd75bce39a6e5d5e5␟4070105638851960915: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputNumberModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__37 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_36 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_36 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_36);
      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__39 = goog.getMsg("Add to the template:");
        i18n_38 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_NUMBER_INPUT_NUMBER_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputNumber", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, i18n_2, [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], ["tuiLink", "", "routerLink", "/components/input-count"], ["tuiLink", "", "routerLink", "/components/slider"], ["tuiLink", "", "routerLink", "/components/input-slider"], ["tuiLink", "", "routerLink", "/components/input-range"], i18n_4, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "currency", "heading", i18n_6, 3, "content", "description"], ["currencyPipeDescription", ""], ["id", "sizes", "heading", i18n_8, 3, "content", "description"], ["textFieldControllerDescription", ""], [1, "tui-space_bottom-4", "b-form"], ["id", "precision", "heading", i18n_10, 3, "content", "description"], ["precisionDescription", ""], ["id", "align", "heading", i18n_12, "description", "With currency symbol as prefix and custom format", 3, "content"], ["id", "prefix-postfix", "heading", i18n_14, 3, "content"], i18n_16, ["tuiLink", "", "routerLink", "/pipes/currency"], ["tuiLink", "", "routerLink", "/directives/textfield-controller"], [3, "control"], ["documentationPropertyMode", "input", "documentationPropertyType", "string", "documentationPropertyName", "style.text-align", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "precision", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "decimal", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDecimalT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "focusable", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "min", "max", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "precision", "readOnly", "decimal", "prefix", "postfix", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, [1, "b-demo-steps"], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, ["filename", "myComponent.component.ts", 3, "code"], i18n_38, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputNumberComponent_ng_template_1_Template, 47, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputNumberComponent_ng_template_2_Template, 12, 16, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputNumberComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiInputNumberExample1, notification_component/* TuiNotificationComponent */.L, TuiInputNumberExample2, TuiInputNumberExample3, TuiInputNumberExample4, TuiInputNumberExample5, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputNumberComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-number/input-number.module.ts
















let ExampleTuiInputNumberModule = /*#__PURE__*/(() => {
  class ExampleTuiInputNumberModule {}

  ExampleTuiInputNumberModule.ɵfac = function ExampleTuiInputNumberModule_Factory(t) {
    return new (t || ExampleTuiInputNumberModule)();
  };

  ExampleTuiInputNumberModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputNumberModule
  });
  ExampleTuiInputNumberModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, core.TuiSvgModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiHintModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputNumberComponent))]]
  });
  return ExampleTuiInputNumberModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputNumberModule, {
    declarations: [ExampleTuiInputNumberComponent, TuiInputNumberExample1, TuiInputNumberExample2, TuiInputNumberExample3, TuiInputNumberExample4, TuiInputNumberExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, core.TuiSvgModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiHintModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputNumberComponent]
  });
})();

/***/ })

}]);