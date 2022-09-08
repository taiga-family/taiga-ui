"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[30730],{

/***/ 30730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleFormatModule": () => (/* binding */ ExampleFormatModule)
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
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/examples/1/index.ts






let TuiFormatExample1 = /*#__PURE__*/(() => {
  class TuiFormatExample1 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(11)
      });
    }

    get px() {
      const {
        value
      } = this.parametersForm.value;
      return (0,cdk/* tuiPx */.O9r)(value !== null && value !== void 0 ? value : 0);
    }

  }

  TuiFormatExample1.ɵfac = function TuiFormatExample1_Factory(t) {
    return new (t || TuiFormatExample1)();
  };

  TuiFormatExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatExample1,
    selectors: [["tui-format-example-1"]],
    decls: 5,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"]],
    template: function TuiFormatExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-number", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("'", ctx.px, "' = px(value); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiFormatExample1;
})();
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 20 modules
var addon_commerce = __webpack_require__(55970);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/examples/3/index.ts









function TuiFormatExample3_tui_data_list_wrapper_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

let TuiFormatExample3 = /*#__PURE__*/(() => {
  class TuiFormatExample3 {
    constructor() {
      this.items = [`USD`, `RUB`, `643`, `KZT`, `051`, `KRW`, `CHF`, `EUR`, `GBP`];
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        currency: new fesm2015_forms/* FormControl */.NI(null)
      });
    }

    get currency() {
      const {
        currency
      } = this.parametersForm.value;
      return (0,addon_commerce/* tuiGetCurrencySymbol */.CE)(currency);
    }

  }

  TuiFormatExample3.ɵfac = function TuiFormatExample3_Factory(t) {
    return new (t || TuiFormatExample3)();
  };

  TuiFormatExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatExample3,
    selectors: [["tui-format-example-3"]],
    decls: 6,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "currency", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiFormatExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-select", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " currency ");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiFormatExample3_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("", ctx.currency, " = getCurrencySymbol(currency); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiFormatExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/examples/4/index.ts






let TuiFormatExample4 = /*#__PURE__*/(() => {
  class TuiFormatExample4 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(`roman sEdOv`)
      });
    }

    get capitalized() {
      const {
        value
      } = this.parametersForm.value;
      return (0,core/* tuiCapitalize */.oyP)(value !== null && value !== void 0 ? value : ``);
    }

  }

  TuiFormatExample4.ɵfac = function TuiFormatExample4_Factory(t) {
    return new (t || TuiFormatExample4)();
  };

  TuiFormatExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatExample4,
    selectors: [["tui-format-example-4"]],
    decls: 5,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"]],
    template: function TuiFormatExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("'", ctx.capitalized, "' = capitalize(value); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiFormatExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/examples/5/index.ts






let TuiFormatExample5 = /*#__PURE__*/(() => {
  class TuiFormatExample5 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(`+79991234567`),
        countryCode: new fesm2015_forms/* FormControl */.NI(`+7`),
        phoneMask: new fesm2015_forms/* FormControl */.NI(`### ###-##-##`)
      });
    }

    get formattedPhone() {
      const {
        value,
        countryCode,
        phoneMask
      } = this.parametersForm.value;
      return (0,core/* tuiFormatPhone */.evA)(value !== null && value !== void 0 ? value : ``, countryCode !== null && countryCode !== void 0 ? countryCode : ``, phoneMask !== null && phoneMask !== void 0 ? phoneMask : ``);
    }

  }

  TuiFormatExample5.ɵfac = function TuiFormatExample5_Factory(t) {
    return new (t || TuiFormatExample5)();
  };

  TuiFormatExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatExample5,
    selectors: [["tui-format-example-5"]],
    decls: 9,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "countryCode", 1, "tui-space_top-2"], ["formControlName", "phoneMask", 1, "tui-space_top-2"]],
    template: function TuiFormatExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " countryCode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " phoneMask ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("'", ctx.formattedPhone, "' = formatPhone(value, countryCode, phoneMask); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiFormatExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/examples/6/index.ts






let TuiFormatExample6 = /*#__PURE__*/(() => {
  class TuiFormatExample6 {
    constructor() {
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(123456.789),
        decimalLimit: new fesm2015_forms/* FormControl */.NI(2),
        decimalSeparator: new fesm2015_forms/* FormControl */.NI(`.`),
        thousandSeparator: new fesm2015_forms/* FormControl */.NI(` `)
      });
    }

    get formattedNumber() {
      const {
        value,
        decimalLimit,
        decimalSeparator,
        thousandSeparator
      } = this.parametersForm.value;
      return (0,core/* tuiFormatNumber */.lx_)(value !== null && value !== void 0 ? value : 123456.789, {
        decimalLimit: decimalLimit !== null && decimalLimit !== void 0 ? decimalLimit : 2,
        decimalSeparator: decimalSeparator !== null && decimalSeparator !== void 0 ? decimalSeparator : `.`,
        thousandSeparator: thousandSeparator !== null && thousandSeparator !== void 0 ? thousandSeparator : ` `
      });
    }

  }

  TuiFormatExample6.ɵfac = function TuiFormatExample6_Factory(t) {
    return new (t || TuiFormatExample6)();
  };

  TuiFormatExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatExample6,
    selectors: [["tui-format-example-6"]],
    decls: 11,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], ["formControlName", "decimalLimit", 1, "tui-space_top-2"], ["formControlName", "decimalSeparator", 1, "tui-space_top-2"], ["formControlName", "thousandSeparator", 1, "tui-space_top-2"]],
    template: function TuiFormatExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " decimalLimit ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " decimalSeparator ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-input", 5);
        fesm2015_core/* ɵɵtext */._uU(10, " thousandSeparator ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("'", ctx.formattedNumber, "' = tuiFormatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiFormatExample6;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/format.component.ts











function ExampleFormatComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-format-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-format-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-format-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-format-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-format-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleFormatComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.importComponentExample);
  }
}

let ExampleFormatComponent = /*#__PURE__*/(() => {
  class ExampleFormatComponent {
    constructor() {
      this.importComponentExample = __webpack_require__.e(/* import() */ 50377).then(__webpack_require__.t.bind(__webpack_require__, 50377, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 56174).then(__webpack_require__.t.bind(__webpack_require__, 56174, 17)),
        HTML: __webpack_require__.e(/* import() */ 75052).then(__webpack_require__.t.bind(__webpack_require__, 75052, 17)),
        LESS: __webpack_require__.e(/* import() */ 35374).then(__webpack_require__.t.bind(__webpack_require__, 35374, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 20392).then(__webpack_require__.t.bind(__webpack_require__, 20392, 17)),
        HTML: __webpack_require__.e(/* import() */ 94506).then(__webpack_require__.t.bind(__webpack_require__, 94506, 17)),
        LESS: __webpack_require__.e(/* import() */ 54796).then(__webpack_require__.t.bind(__webpack_require__, 54796, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 33342).then(__webpack_require__.t.bind(__webpack_require__, 33342, 17)),
        HTML: __webpack_require__.e(/* import() */ 43978).then(__webpack_require__.t.bind(__webpack_require__, 43978, 17)),
        LESS: __webpack_require__.e(/* import() */ 17154).then(__webpack_require__.t.bind(__webpack_require__, 17154, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 84254).then(__webpack_require__.t.bind(__webpack_require__, 84254, 17)),
        HTML: __webpack_require__.e(/* import() */ 18343).then(__webpack_require__.t.bind(__webpack_require__, 18343, 17)),
        LESS: __webpack_require__.e(/* import() */ 50475).then(__webpack_require__.t.bind(__webpack_require__, 50475, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 29259).then(__webpack_require__.t.bind(__webpack_require__, 29259, 17)),
        HTML: __webpack_require__.e(/* import() */ 97007).then(__webpack_require__.t.bind(__webpack_require__, 97007, 17)),
        LESS: __webpack_require__.e(/* import() */ 33189).then(__webpack_require__.t.bind(__webpack_require__, 33189, 17))
      };
    }

  }

  ExampleFormatComponent.ɵfac = function ExampleFormatComponent_Factory(t) {
    return new (t || ExampleFormatComponent)();
  };

  ExampleFormatComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleFormatComponent,
    selectors: [["example-format"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5358165867706649494$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_1 = goog.getMsg("Format utils");
        i18n_0 = MSG_EXTERNAL_5358165867706649494$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1341457636714080363$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__5 = goog.getMsg("A set of format utils");
        i18n_4 = MSG_EXTERNAL_1341457636714080363$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5245623836371299072$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__7 = goog.getMsg("Adds 'px' to a number");
        i18n_6 = MSG_EXTERNAL_5245623836371299072$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7442713877787930163$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__9 = goog.getMsg("Returns a currency symbol from its three letter code or ISO 4217");
        i18n_8 = MSG_EXTERNAL_7442713877787930163$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6708488179256599720$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__11 = goog.getMsg("Capitalizes every word in a string");
        i18n_10 = MSG_EXTERNAL_6708488179256599720$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1504114262974304913$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__13 = goog.getMsg("Formats a phone number with separators");
        i18n_12 = MSG_EXTERNAL_1504114262974304913$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7477502181232818354$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__15 = goog.getMsg("Formats a number with separators");
        i18n_14 = MSG_EXTERNAL_7477502181232818354$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__17 = goog.getMsg("Import into component and use:");
        i18n_16 = MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_FORMAT_FORMAT_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
      }

      return [["header", i18n_0, "package", "CDK / CORE", "path", "cdk/utils/format"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "px", "heading", "px", "description", i18n_6, 3, "content"], ["id", "getCurrencySymbol", "heading", "getCurrencySymbol", "description", i18n_8, 3, "content"], ["id", "capitalize", "heading", "capitalize", "description", i18n_10, 3, "content"], ["id", "formatPhone", "heading", "formatPhone", "description", i18n_12, 3, "content"], ["id", "formatNumber", "heading", "formatNumber", "description", i18n_14, 3, "content"], [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleFormatComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleFormatComponent_ng_template_1_Template, 12, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleFormatComponent_ng_template_2_Template, 5, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiFormatExample1, TuiFormatExample3, TuiFormatExample4, TuiFormatExample5, TuiFormatExample6, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleFormatComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/format/format.module.ts














let ExampleFormatModule = /*#__PURE__*/(() => {
  class ExampleFormatModule {}

  ExampleFormatModule.ɵfac = function ExampleFormatModule_Factory(t) {
    return new (t || ExampleFormatModule)();
  };

  ExampleFormatModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleFormatModule
  });
  ExampleFormatModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit/* TuiInputModule */.QfL, kit/* TuiSelectModule */.Jyo, core/* TuiDataListModule */.pcV, kit/* TuiDataListWrapperModule */.zXW, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleFormatComponent))]]
  });
  return ExampleFormatModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleFormatModule, {
    declarations: [ExampleFormatComponent, TuiFormatExample1, TuiFormatExample3, TuiFormatExample4, TuiFormatExample5, TuiFormatExample6],
    imports: [common/* CommonModule */.ez, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit/* TuiInputModule */.QfL, kit/* TuiSelectModule */.Jyo, core/* TuiDataListModule */.pcV, kit/* TuiDataListWrapperModule */.zXW, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleFormatComponent]
  });
})();

/***/ })

}]);