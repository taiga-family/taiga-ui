"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[49316],{

/***/ 49316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputPasswordModule": () => (/* binding */ ExampleTuiInputPasswordModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.component.ts
var input_password_component = __webpack_require__(52721);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.directive.ts
var input_password_directive = __webpack_require__(21991);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-password/examples/1/index.ts








let TuiInputPasswordExample1 = /*#__PURE__*/(() => {
  class TuiInputPasswordExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`password`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputPasswordExample1.ɵfac = function TuiInputPasswordExample1_Factory(t) {
    return new (t || TuiInputPasswordExample1)();
  };

  TuiInputPasswordExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPasswordExample1,
    selectors: [["tui-input-password-example-1"]],
    decls: 10,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s"], ["tuiTextfield", "", "placeholder", "Make it secure!"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", 1, "tui-space_top-2"]],
    template: function TuiInputPasswordExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-password", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Type a password ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-password", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Type a password ");
        fesm2015_core/* ɵɵelement */._UZ(6, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input-password", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Type a password ");
        fesm2015_core/* ɵɵelement */._UZ(9, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_password_component/* TuiInputPasswordComponent */.V, input_password_directive/* TuiInputPasswordDirective */.F, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_component/* TuiTextfieldComponent */.M, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputPasswordExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-password/examples/2/index.ts








let TuiInputPasswordExample2 = /*#__PURE__*/(() => {
  class TuiInputPasswordExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`password`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputPasswordExample2.ɵfac = function TuiInputPasswordExample2_Factory(t) {
    return new (t || TuiInputPasswordExample2)();
  };

  TuiInputPasswordExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputPasswordExample2,
    selectors: [["tui-input-password-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiInputPasswordOptionsProvider)({
      icons: {
        hide: `tuiIconLockLarge`,
        show: `tuiIconLockOpenLarge`
      }
    }), {
      provide: kit.TUI_PASSWORD_TEXTS,
      useValue: (0,of.of)([``])
    }])],
    decls: 3,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiHintContent", "", "tuiHintDirection", "right", "tuiHintAppearance", "onDark"]],
    template: function TuiInputPasswordExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-password", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Type a password ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_password_component/* TuiInputPasswordComponent */.V, input_password_directive/* TuiInputPasswordDirective */.F, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, hint_options_directive/* TuiHintOptionsDirective */.bZ],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputPasswordExample2;
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-password/input-password.component.ts

























function ExampleTuiInputPasswordComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-notification", 3);
    fesm2015_core/* ɵɵtext */._uU(2, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵtext */._uU(7, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(8, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-input-password-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-input-password-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiInputPasswordComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-password", 7);
    fesm2015_core/* ɵɵtext */._uU(1, " Type a password ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldIconLeft", ctx_r3.iconLeft)("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldCleaner", ctx_r3.cleaner)("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiInputPasswordComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 8);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputPasswordComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPasswordComponent_ng_template_2_ng_template_1_Template, 2, 13, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPasswordComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputPasswordComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.disabled = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
  }
}

function ExampleTuiInputPasswordComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 10);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 12);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(18, 16);
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-doc-code", 11);
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
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiInputPasswordComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputPasswordComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 88761).then(__webpack_require__.t.bind(__webpack_require__, 88761, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 19864).then(__webpack_require__.t.bind(__webpack_require__, 19864, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 73256).then(__webpack_require__.t.bind(__webpack_require__, 73256, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 33591).then(__webpack_require__.t.bind(__webpack_require__, 33591, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 64297).then(__webpack_require__.t.bind(__webpack_require__, 64297, 17)),
        HTML: __webpack_require__.e(/* import() */ 49130).then(__webpack_require__.t.bind(__webpack_require__, 49130, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 7486).then(__webpack_require__.t.bind(__webpack_require__, 7486, 17)),
        HTML: __webpack_require__.e(/* import() */ 98559).then(__webpack_require__.t.bind(__webpack_require__, 98559, 17))
      };
      this.maxLengthVariants = [10];
      this.autocompleteVariants = [`off`, `new-password`, `current-password`];
      this.autocomplete = ``;
      this.maxLength = null;
      this.control = new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiInputPasswordComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputPasswordComponent_BaseFactory;
    return function ExampleTuiInputPasswordComponent_Factory(t) {
      return (ɵExampleTuiInputPasswordComponent_BaseFactory || (ɵExampleTuiInputPasswordComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputPasswordComponent)))(t || ExampleTuiInputPasswordComponent);
    };
  }();

  ExampleTuiInputPasswordComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputPasswordComponent,
    selectors: [["example-tui-input-password"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputPasswordComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__1 = goog.getMsg("sizes");
        i18n_0 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6827337628740297789$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__3 = goog.getMsg("options");
        i18n_2 = MSG_EXTERNAL_6827337628740297789$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟6bfb042b76cbc28b1e01b51755da299d098e7e01␟6827337628740297789:options`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS___5 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5763229357140970744$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__7 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputPasswordModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_5763229357140970744$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟ca9b2340858520dcf9b86377a304fcad5140bc4c␟5763229357140970744: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputPasswordModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__9 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4178267846207247292$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__13 = goog.getMsg(" Optionally use the {$startTagCode}TUI_INPUT_PASSWORD_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#19\uFFFD",
          "closeTagCode": "\uFFFD/#19\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_4178267846207247292$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_PASSWORD_INPUT_PASSWORD_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟1c47b05636c04ceb586dd0c24052c5f090b5d00f␟4178267846207247292: Optionally use the ${"\uFFFD#19\uFFFD"}:START_TAG_CODE:TUI_INPUT_PASSWORD_OPTIONS${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "InputPassword", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "sizes", "heading", i18n_0, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "options", "heading", i18n_2, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [3, "tuiTextfieldIconLeft", "formControl", "focusable", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiTextfieldCleaner", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_4, [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.component.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"], i18n_12];
    },
    template: function ExampleTuiInputPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputPasswordComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputPasswordComponent_ng_template_2_Template, 5, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputPasswordComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputPasswordExample1, TuiInputPasswordExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_password_component/* TuiInputPasswordComponent */.V, input_password_directive/* TuiInputPasswordDirective */.F, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, hint_options_directive/* TuiHintOptionsDirective */.bZ, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputPasswordComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-password/input-password.module.ts












let ExampleTuiInputPasswordModule = /*#__PURE__*/(() => {
  class ExampleTuiInputPasswordModule {}

  ExampleTuiInputPasswordModule.ɵfac = function ExampleTuiInputPasswordModule_Factory(t) {
    return new (t || ExampleTuiInputPasswordModule)();
  };

  ExampleTuiInputPasswordModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputPasswordModule
  });
  ExampleTuiInputPasswordModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputPasswordModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputPasswordComponent))]]
  });
  return ExampleTuiInputPasswordModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputPasswordModule, {
    declarations: [ExampleTuiInputPasswordComponent, TuiInputPasswordExample1, TuiInputPasswordExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputPasswordModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputPasswordComponent]
  });
})();

/***/ })

}]);