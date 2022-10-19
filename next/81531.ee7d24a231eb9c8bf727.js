"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[81531],{

/***/ 81531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputCopyModule": () => (/* binding */ ExampleTuiInputCopyModule)
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
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-copy/input-copy.component.ts
var input_copy_component = __webpack_require__(45646);
// EXTERNAL MODULE: ./projects/kit/components/input-copy/input-copy.directive.ts
var input_copy_directive = __webpack_require__(66416);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-copy/examples/1/index.ts







let TuiInputCopyExample1 = /*#__PURE__*/(() => {
  class TuiInputCopyExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputCopyExample1.ɵfac = function TuiInputCopyExample1_Factory(t) {
    return new (t || TuiInputCopyExample1)();
  };

  TuiInputCopyExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCopyExample1,
    selectors: [["tui-input-copy-example-1"]],
    decls: 8,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s"], ["tuiTextfield", "", "placeholder", "Placeholder"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_vertical-4"], ["formControlName", "testValue"]],
    template: function TuiInputCopyExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-copy", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Value ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-copy", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-copy", 4);
        fesm2015_core/* ɵɵtext */._uU(7, "Value");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_copy_component/* TuiInputCopyComponent */.$, input_copy_directive/* TuiInputCopyDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCopyExample1;
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-copy/input-copy.component.ts





















const _c0 = ["customTemplate"];

function ExampleTuiInputCopyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 5);
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
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-input-copy-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiInputCopyComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 11);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCopyComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiInputCopyComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiInputCopyComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiInputCopyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-copy", 6);
    fesm2015_core/* ɵɵtext */._uU(2, " Type a text ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputCopyComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCopyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputCopyComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCopyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.successMessage = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputCopyComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCopyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.messageDirection = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputCopyComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCopyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.messageMode = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(8, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r1.control)("focusable", ctx_r1.focusable)("tuiTextfieldLabelOutside", ctx_r1.labelOutside)("tuiTextfieldSize", ctx_r1.size)("tuiTextfieldCleaner", ctx_r1.cleaner)("successMessage", ctx_r1.notificationTemplate)("messageDirection", ctx_r1.hintDirection)("messageAppearance", ctx_r1.hintAppearance)("readOnly", ctx_r1.readOnly)("pseudoInvalid", ctx_r1.pseudoInvalid)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.successMessageVariants)("documentationPropertyValue", ctx_r1.successMessage);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.hintDirectionVariants)("documentationPropertyValue", ctx_r1.messageDirection);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.hintAppearanceVariants)("documentationPropertyValue", ctx_r1.messageMode);
  }
}

function ExampleTuiInputCopyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "i");
    fesm2015_core/* ɵɵtext */._uU(1, "Some custom content");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(2, " , that says that content is copied ");
  }
}

function ExampleTuiInputCopyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 18);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r4.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r4.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r4.exampleHtml);
  }
}

let ExampleTuiInputCopyComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputCopyComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.customTemplate = ``;
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 60082).then(__webpack_require__.t.bind(__webpack_require__, 60082, 17)),
        HTML: __webpack_require__.e(/* import() */ 25786).then(__webpack_require__.t.bind(__webpack_require__, 25786, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 90950).then(__webpack_require__.t.bind(__webpack_require__, 90950, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 30439).then(__webpack_require__.t.bind(__webpack_require__, 30439, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 93379).then(__webpack_require__.t.bind(__webpack_require__, 93379, 17));
      this.control = new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required);
      this.maxLengthVariants = [10];
      this.autocompleteVariants = [`off`, `cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-type`, `given-name`, `additional-name`, `family-name`, `username`, `email`, `street-address`, `postal-code`, `country-name`];
      this.autocomplete = ``;
      this.maxLength = null;
      this.successMessageVariants = [`Copied`, `Template`];
      this.successMessage = this.successMessageVariants[0];
      this.messageDirection = this.hintDirectionVariants[0];
      this.messageMode = this.hintAppearanceVariants[0];
    }

    get notificationTemplate() {
      return this.successMessage === `Template` ? this.customTemplate : this.successMessage;
    }

  }

  ExampleTuiInputCopyComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputCopyComponent_BaseFactory;
    return function ExampleTuiInputCopyComponent_Factory(t) {
      return (ɵExampleTuiInputCopyComponent_BaseFactory || (ɵExampleTuiInputCopyComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputCopyComponent)))(t || ExampleTuiInputCopyComponent);
    };
  }();

  ExampleTuiInputCopyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputCopyComponent,
    selectors: [["example-input-copy"]],
    viewQuery: function ExampleTuiInputCopyComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.customTemplate = _t.first);
      }
    },
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputCopyComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 6,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1996852674119181637$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__2 = goog.getMsg("InputCopy alows user to copy a text of textfield");
        i18n_1 = MSG_EXTERNAL_1996852674119181637$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟6b49e923331084efb5880b3190524520b760e667␟1996852674119181637:InputCopy alows user to copy a text of textfield`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__4 = goog.getMsg("sizes");
        i18n_3 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___6 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_5 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___6;
      } else {
        i18n_5 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1764599999342590497$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___8 = goog.getMsg(" Tooltip message after successfull copy ");
        i18n_7 = MSG_EXTERNAL_1764599999342590497$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___8;
      } else {
        i18n_7 = $localize`:␟bd420eea302ab1bd3de338ebbad70bde0de4fe5d␟1764599999342590497: Tooltip message after successfull copy `;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5121222189254610705$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___10 = goog.getMsg(" Message tooltip direction ");
        i18n_9 = MSG_EXTERNAL_5121222189254610705$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___10;
      } else {
        i18n_9 = $localize`:␟99fb5e3b1f303cab0f6f1b923b7334bdab2f35be␟5121222189254610705: Message tooltip direction `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8816007946856968827$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___12 = goog.getMsg(" Message tooltip mode ");
        i18n_11 = MSG_EXTERNAL_8816007946856968827$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS___12;
      } else {
        i18n_11 = $localize`:␟8c5b5cf319e9999afa2a40854df2b00d66b8558b␟8816007946856968827: Message tooltip mode `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_95021096122454550$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__14 = goog.getMsg(" Import {$startTagCode}TuiInputCopyModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_95021096122454550$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟33da7645df7c95c7235d3b050714deb03a85673f␟95021096122454550: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputCopyModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__16 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_15 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__16;
      } else {
        i18n_15 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_15 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_15);
      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__18 = goog.getMsg("Add to the template:");
        i18n_17 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COPY_INPUT_COPY_COMPONENT_TS__18;
      } else {
        i18n_17 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputCopy", "package", "KIT", "type", "components"], ["pageTab", ""], ["customTemplate", ""], i18n_1, ["id", "example-size", "heading", i18n_3, 3, "content"], [1, "tui-space_bottom-4", "b-form"], [3, "formControl", "focusable", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiTextfieldCleaner", "successMessage", "messageDirection", "messageAppearance", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "successMessage", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "messageDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "messageMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintModeT | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_5, i18n_7, i18n_9, i18n_11, [1, "b-demo-steps"], i18n_13, ["filename", "myComponent.module.ts", 3, "code"], i18n_15, ["filename", "myComponent.component.ts", 3, "code"], i18n_17, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputCopyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCopyComponent_ng_template_1_Template, 12, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCopyComponent_ng_template_2_Template, 9, 19, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCopyComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputCopyComponent_ng_template_5_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputCopyExample1, demo_component/* TuiDocDemoComponent */.F, input_copy_component/* TuiInputCopyComponent */.$, input_copy_directive/* TuiInputCopyDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputCopyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-copy/input-copy.module.ts












let ExampleTuiInputCopyModule = /*#__PURE__*/(() => {
  class ExampleTuiInputCopyModule {}

  ExampleTuiInputCopyModule.ɵfac = function ExampleTuiInputCopyModule_Factory(t) {
    return new (t || ExampleTuiInputCopyModule)();
  };

  ExampleTuiInputCopyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputCopyModule
  });
  ExampleTuiInputCopyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputCopyModule, inherited_documentation_module/* InheritedDocumentationModule */.f, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiTextfieldControllerModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputCopyComponent))]]
  });
  return ExampleTuiInputCopyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputCopyModule, {
    declarations: [ExampleTuiInputCopyComponent, TuiInputCopyExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputCopyModule, inherited_documentation_module/* InheritedDocumentationModule */.f, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiTextfieldControllerModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputCopyComponent]
  });
})();

/***/ })

}]);