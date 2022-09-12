"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[96032],{

/***/ 96032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputPhoneInternationalModule": () => (/* binding */ ExampleTuiInputPhoneInternationalModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/i18n/index.ts + 12 modules
var i18n = __webpack_require__(72773);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-phone-international/input-phone-international.component.ts
var input_phone_international_component = __webpack_require__(66015);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone-international/examples/1/index.ts







let TuiInputPhoneExample1 = /*#__PURE__*/(() => {
  class TuiInputPhoneExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`+77777777777`, fesm2015_forms/* Validators.required */.kI.required)
      });
      this.countries = [i18n/* TuiCountryIsoCode.RU */.Xi.RU, i18n/* TuiCountryIsoCode.KZ */.Xi.KZ, i18n/* TuiCountryIsoCode.UA */.Xi.UA, i18n/* TuiCountryIsoCode.BY */.Xi.BY];
      this.countryIsoCode = i18n/* TuiCountryIsoCode.RU */.Xi.RU;
      this.contact = {
        phone: `+375123456789`,
        phoneCountryCode: i18n/* TuiCountryIsoCode.BY */.Xi.BY
      };
    }

    patchValue() {
      var _a;

      this.countryIsoCode = this.contact.phoneCountryCode;
      (_a = this.testForm.get(`testValue`)) === null || _a === void 0 ? void 0 : _a.patchValue(this.contact.phone);
    }

  }

  TuiInputPhoneExample1.ɵfac = function TuiInputPhoneExample1_Factory(t) {
    return new (t || TuiInputPhoneExample1)();
  };

  TuiInputPhoneExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPhoneExample1,
    selectors: [["tui-input-phone-international-example-1"]],
    decls: 4,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue", 1, "input", 3, "countries", "tuiTextfieldLabelOutside", "countryIsoCode", "countryIsoCodeChange"], ["tuiButton", "", 1, "tui-space_top-4", 3, "click"]],
    template: function TuiInputPhoneExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-phone-international", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("countryIsoCodeChange", function TuiInputPhoneExample1_Template_tui_input_phone_international_countryIsoCodeChange_1_listener($event) {
          return ctx.countryIsoCode = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputPhoneExample1_Template_button_click_2_listener() {
          return ctx.patchValue();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Patch value\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("countries", ctx.countries)("tuiTextfieldLabelOutside", true)("countryIsoCode", ctx.countryIsoCode);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_phone_international_component/* TuiInputPhoneInternationalComponent */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, button_component/* TuiButtonComponent */.v],
    styles: [".input[_ngcontent-%COMP%]{max-width:24.375rem}"],
    changeDetection: 0
  });
  return TuiInputPhoneExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone-international/examples/2/index.ts





let TuiInputPhoneExample2 = /*#__PURE__*/(() => {
  class TuiInputPhoneExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.minLength */.kI.minLength(12))
      });
      this.countries = Object.values(i18n/* TuiCountryIsoCode */.Xi);
      this.countryIsoCode = i18n/* TuiCountryIsoCode.US */.Xi.US;
    }

  }

  TuiInputPhoneExample2.ɵfac = function TuiInputPhoneExample2_Factory(t) {
    return new (t || TuiInputPhoneExample2)();
  };

  TuiInputPhoneExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPhoneExample2,
    selectors: [["tui-input-phone-international-example-2"]],
    decls: 3,
    vars: 3,
    consts: [[3, "formGroup"], ["formControlName", "testValue", 1, "input", 3, "countries", "countryIsoCode", "countryIsoCodeChange"]],
    template: function TuiInputPhoneExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-phone-international", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("countryIsoCodeChange", function TuiInputPhoneExample2_Template_tui_input_phone_international_countryIsoCodeChange_1_listener($event) {
          return ctx.countryIsoCode = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Type your number ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("countries", ctx.countries)("countryIsoCode", ctx.countryIsoCode);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_phone_international_component/* TuiInputPhoneInternationalComponent */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".input[_ngcontent-%COMP%]{max-width:24.375rem}"],
    changeDetection: 0
  });
  return TuiInputPhoneExample2;
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone-international/input-phone-international.component.ts























function ExampleTuiInputPhoneInternationalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-input-phone-international-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-input-phone-international-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-phone-international", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("countryIsoCodeChange", function ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_1_Template_tui_input_phone_international_countryIsoCodeChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r7.countryIsoCode = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Type a phone number ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("countries", ctx_r3.countries)("readOnly", ctx_r3.readOnly)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance)("pseudoHover", ctx_r3.pseudoHovered)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoInvalid", ctx_r3.pseudoInvalid)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("countryIsoCode", ctx_r3.countryIsoCode);
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 10);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_1_Template, 2, 16, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneInternationalComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneInternationalComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.countries = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputPhoneInternationalComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPhoneInternationalComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.countryIsoCode = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.countriesVariants)("documentationPropertyValue", ctx_r1.countries);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.countryIsoCodeVariants)("documentationPropertyValue", ctx_r1.countryIsoCode);
  }
}

function ExampleTuiInputPhoneInternationalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 16);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 19);
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

let ExampleTuiInputPhoneInternationalComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputPhoneInternationalComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 67698).then(__webpack_require__.t.bind(__webpack_require__, 67698, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 84308).then(__webpack_require__.t.bind(__webpack_require__, 84308, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 18164).then(__webpack_require__.t.bind(__webpack_require__, 18164, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 61363).then(__webpack_require__.t.bind(__webpack_require__, 61363, 17)),
        HTML: __webpack_require__.e(/* import() */ 62125).then(__webpack_require__.t.bind(__webpack_require__, 62125, 17)),
        LESS: __webpack_require__.e(/* import() */ 48065).then(__webpack_require__.t.bind(__webpack_require__, 48065, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 76028).then(__webpack_require__.t.bind(__webpack_require__, 76028, 17)),
        HTML: __webpack_require__.e(/* import() */ 13763).then(__webpack_require__.t.bind(__webpack_require__, 13763, 17)),
        LESS: __webpack_require__.e(/* import() */ 20244).then(__webpack_require__.t.bind(__webpack_require__, 20244, 17))
      };
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.minLength */.kI.minLength(9)]);
      this.countriesVariants = [[i18n/* TuiCountryIsoCode.RU */.Xi.RU, i18n/* TuiCountryIsoCode.KZ */.Xi.KZ, i18n/* TuiCountryIsoCode.UA */.Xi.UA, i18n/* TuiCountryIsoCode.BY */.Xi.BY], Object.values(i18n/* TuiCountryIsoCode */.Xi)];
      this.countries = this.countriesVariants[0];
      this.countryIsoCodeVariants = [i18n/* TuiCountryIsoCode.RU */.Xi.RU, i18n/* TuiCountryIsoCode.KZ */.Xi.KZ, i18n/* TuiCountryIsoCode.UA */.Xi.UA, i18n/* TuiCountryIsoCode.BY */.Xi.BY];
      this.countryIsoCode = this.countryIsoCodeVariants[0];
      this.labelOutside = true;
    }

  }

  ExampleTuiInputPhoneInternationalComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputPhoneInternationalComponent_BaseFactory;
    return function ExampleTuiInputPhoneInternationalComponent_Factory(t) {
      return (ɵExampleTuiInputPhoneInternationalComponent_BaseFactory || (ɵExampleTuiInputPhoneInternationalComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputPhoneInternationalComponent)))(t || ExampleTuiInputPhoneInternationalComponent);
    };
  }();

  ExampleTuiInputPhoneInternationalComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputPhoneInternationalComponent,
    selectors: [["example-tui-input-phone-international"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputPhoneInternationalComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5478561261855774640$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__1 = goog.getMsg("Allows to input phone number in international format");
        i18n_0 = MSG_EXTERNAL_5478561261855774640$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟e6a9c5f8ed29fc6385948897fb5c70e1822bb9ed␟5478561261855774640:Allows to input phone number in international format`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6100465147963561455$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__5 = goog.getMsg("All available countries");
        i18n_4 = MSG_EXTERNAL_6100465147963561455$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c150954294b192344cd8128f107d0609281e937e␟6100465147963561455:All available countries`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___7 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3337127772712145540$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___9 = goog.getMsg(" Array of ISO-codes of countries to choose ");
        i18n_8 = MSG_EXTERNAL_3337127772712145540$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟2605436fc68fe6f28c38cc283c805404c1c4fe7d␟3337127772712145540: Array of ISO-codes of countries to choose `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1487566375988482708$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___11 = goog.getMsg(" ISO-code of selected country ");
        i18n_10 = MSG_EXTERNAL_1487566375988482708$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟86063816038d414b35c237ad8c8a46b14e169a07␟1487566375988482708: ISO-code of selected country `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7217508107343995741$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__13 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputPhoneInternationalModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_7217508107343995741$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟2c3923c6968ec5417c5a5e45ba3645399d72f3c3␟7217508107343995741: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputPhoneInternationalModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__15 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_14 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_14 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_14);
      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__17 = goog.getMsg("Add to the template:");
        i18n_16 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PHONE_INTERNATIONAL_INPUT_PHONE_INTERNATIONAL_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputPhoneInternational", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "all-countries", "heading", i18n_4, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "countries", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<TuiCountryIsoCode>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "countryIsoCode", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiCountryIsoCode", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "focusable", "countries", "readOnly", "tuiTextfieldCleaner", "tuiDropdownDirection", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "pseudoHover", "pseudoFocus", "pseudoInvalid", "tuiTextfieldLabelOutside", "countryIsoCode", "countryIsoCodeChange"], i18n_6, i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.component.ts", 3, "code"], i18n_16, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputPhoneInternationalComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPhoneInternationalComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputPhoneInternationalComponent_ng_template_2_Template, 7, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPhoneInternationalComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputPhoneExample1, TuiInputPhoneExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_phone_international_component/* TuiInputPhoneInternationalComponent */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, hint_options_directive/* TuiHintOptionsDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputPhoneInternationalComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-phone-international/input-phone-international.module.ts












let ExampleTuiInputPhoneInternationalModule = /*#__PURE__*/(() => {
  class ExampleTuiInputPhoneInternationalModule {}

  ExampleTuiInputPhoneInternationalModule.ɵfac = function ExampleTuiInputPhoneInternationalModule_Factory(t) {
    return new (t || ExampleTuiInputPhoneInternationalModule)();
  };

  ExampleTuiInputPhoneInternationalModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputPhoneInternationalModule
  });
  ExampleTuiInputPhoneInternationalModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputPhoneInternationalModule, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiTextfieldControllerModule, core.TuiDropdownModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputPhoneInternationalComponent))]]
  });
  return ExampleTuiInputPhoneInternationalModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputPhoneInternationalModule, {
    declarations: [ExampleTuiInputPhoneInternationalComponent, TuiInputPhoneExample1, TuiInputPhoneExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputPhoneInternationalModule, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiTextfieldControllerModule, core.TuiDropdownModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputPhoneInternationalComponent]
  });
})();

/***/ })

}]);