"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[5709],{

/***/ 5709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleInputYearModule": () => (/* binding */ ExampleInputYearModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-year/input-year.component.ts
var input_year_component = __webpack_require__(87382);
// EXTERNAL MODULE: ./projects/kit/components/input-year/input-year.directive.ts
var input_year_directive = __webpack_require__(4526);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-year/examples/1/index.ts







let InputYearExample1 = /*#__PURE__*/(() => {
  class InputYearExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI();
    }

  }

  InputYearExample1.ɵfac = function InputYearExample1_Factory(t) {
    return new (t || InputYearExample1)();
  };

  InputYearExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: InputYearExample1,
    selectors: [["input-year-example-1"]],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "formControl", "tuiTextfieldCleaner"], ["tuiTextfield", "", "placeholder", "Not 2022 please"]],
    template: function InputYearExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-year", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose a year ");
        fesm2015_core/* ɵɵelement */._UZ(2, "input", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tuiTextfieldCleaner", true);
      }
    },
    directives: [input_year_component/* TuiInputYearComponent */.g, input_year_directive/* TuiInputYearDirective */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return InputYearExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-year/examples/2/index.ts






let InputYearExample2 = /*#__PURE__*/(() => {
  class InputYearExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });
    }

  }

  InputYearExample2.ɵfac = function InputYearExample2_Factory(t) {
    return new (t || InputYearExample2)();
  };

  InputYearExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: InputYearExample2,
    selectors: [["input-year-example-2"]],
    decls: 7,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s", 1, "tui-space_bottom-2"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_bottom-2"], ["formControlName", "testValue"]],
    template: function InputYearExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-year", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose a year ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-year", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Choose a year ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-year", 3);
        fesm2015_core/* ɵɵtext */._uU(6, "Choose a year");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_year_component/* TuiInputYearComponent */.g, input_year_directive/* TuiInputYearDirective */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s],
    encapsulation: 2,
    changeDetection: 0
  });
  return InputYearExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-year/input-year.component.ts

























function ExampleInputYearComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(4, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "code");
    fesm2015_core/* ɵɵtext */._uU(9, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(10, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "input-year-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(13, "input-year-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleInputYearComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-year", 11);
    fesm2015_core/* ɵɵtext */._uU(1, " Year ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("min", ctx_r3.min)("max", ctx_r3.max)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("disabledItemHandler", ctx_r3.disabledItemHandler)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
  }
}

function ExampleInputYearComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 12);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleInputYearComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleInputYearComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleInputYearComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleInputYearComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleInputYearComponent_ng_template_2_ng_template_1_Template, 2, 14, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleInputYearComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleInputYearComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleInputYearComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleInputYearComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleInputYearComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleInputYearComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleInputYearComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleInputYearComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.max = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
  }
}

function ExampleInputYearComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 17);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 19);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 22);
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

let ExampleInputYearComponent = /*#__PURE__*/(() => {
  class ExampleInputYearComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 75800).then(__webpack_require__.t.bind(__webpack_require__, 75800, 17)),
        HTML: __webpack_require__.e(/* import() */ 63321).then(__webpack_require__.t.bind(__webpack_require__, 63321, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 38079).then(__webpack_require__.t.bind(__webpack_require__, 38079, 17)),
        HTML: __webpack_require__.e(/* import() */ 2216).then(__webpack_require__.t.bind(__webpack_require__, 27356, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 63653).then(__webpack_require__.t.bind(__webpack_require__, 63653, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 36624).then(__webpack_require__.t.bind(__webpack_require__, 36624, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 6599).then(__webpack_require__.t.bind(__webpack_require__, 6599, 17));
      this.minVariants = [cdk.TUI_FIRST_DAY.year, 2019, 2007];
      this.maxVariants = [cdk.TUI_LAST_DAY.year, 2020, 2023];
      this.min = this.minVariants[0];
      this.max = this.maxVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, year => year % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleInputYearComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleInputYearComponent_BaseFactory;
    return function ExampleInputYearComponent_Factory(t) {
      return (ɵExampleInputYearComponent_BaseFactory || (ɵExampleInputYearComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleInputYearComponent)))(t || ExampleInputYearComponent);
    };
  }();

  ExampleInputYearComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleInputYearComponent,
    selectors: [["example-input-year"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleInputYearComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9146368366501008696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__1 = goog.getMsg("Component to input a single year");
        i18n_0 = MSG_EXTERNAL_9146368366501008696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟a9b7a91ffc4288444531bd30a7451cecef2afb11␟9146368366501008696:Component to input a single year`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__5 = goog.getMsg("sizes");
        i18n_4 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___7 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5424013331000363211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___9 = goog.getMsg("{$startTagDiv}A handler that gets a year and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_5424013331000363211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟a8b6535058635bee012e1c087a9bf84d30144c61␟5424013331000363211:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a year and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1522147907425862142$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___11 = goog.getMsg(" Minimum year ");
        i18n_10 = MSG_EXTERNAL_1522147907425862142$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟0d88da7e6b46bc3b0183205485e838cd41d63d40␟1522147907425862142: Minimum year `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_189827009248966434$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___13 = goog.getMsg(" Maximum year ");
        i18n_12 = MSG_EXTERNAL_189827009248966434$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟5a48576eba5337f6dd52640f760e3f66df168a9e␟189827009248966434: Maximum year `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3002958365753098756$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__15 = goog.getMsg(" Import {$startTagCode}TuiInputYearModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_3002958365753098756$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟99bb99ec232397a03b99990b222beaec8990c95c␟3002958365753098756: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputYearModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__17 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_16 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_YEAR_INPUT_YEAR_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputYear", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "sizes", "heading", i18n_4, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<number>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "focusable", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "disabledItemHandler", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], i18n_6, i18n_8, i18n_10, i18n_12, [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.component.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleInputYearComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleInputYearComponent_ng_template_1_Template, 14, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleInputYearComponent_ng_template_2_Template, 8, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleInputYearComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, InputYearExample1, InputYearExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_year_component/* TuiInputYearComponent */.g, input_year_directive/* TuiInputYearDirective */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleInputYearComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-year/input-year.module.ts












let ExampleInputYearModule = /*#__PURE__*/(() => {
  class ExampleInputYearModule {}

  ExampleInputYearModule.ɵfac = function ExampleInputYearModule_Factory(t) {
    return new (t || ExampleInputYearModule)();
  };

  ExampleInputYearModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleInputYearModule
  });
  ExampleInputYearModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleInputYearComponent)), kit.TuiInputYearModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule]]
  });
  return ExampleInputYearModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleInputYearModule, {
    declarations: [ExampleInputYearComponent, InputYearExample1, InputYearExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz, kit.TuiInputYearModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule],
    exports: [ExampleInputYearComponent]
  });
})();

/***/ })

}]);