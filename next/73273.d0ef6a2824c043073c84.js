"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[73273],{

/***/ 73273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiToggleModule": () => (/* binding */ ExampleTuiToggleModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/toggle/examples/1/index.ts




let TuiToggleExample1 = /*#__PURE__*/(() => {
  class TuiToggleExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(true),
        testValue4: new fesm2015_forms/* FormControl */.NI(false),
        testValue5: new fesm2015_forms/* FormControl */.NI(true),
        testValue6: new fesm2015_forms/* FormControl */.NI(false),
        testValue7: new fesm2015_forms/* FormControl */.NI(true),
        testValue8: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiToggleExample1.ɵfac = function TuiToggleExample1_Factory(t) {
    return new (t || TuiToggleExample1)();
  };

  TuiToggleExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiToggleExample1,
    selectors: [["tui-toggle-example-1"]],
    decls: 13,
    vars: 5,
    consts: [[3, "formGroup"], [1, "tui-space_bottom-2"], ["formControlName", "testValue1", 3, "showIcons"], ["formControlName", "testValue2", 1, "tui-space_left-1", 3, "showIcons"], ["formControlName", "testValue3"], ["formControlName", "testValue4", 1, "tui-space_left-1"], ["formControlName", "testValue5", "size", "l", 3, "showIcons"], ["formControlName", "testValue6", "size", "l", 1, "tui-space_left-1", 3, "showIcons"], ["formControlName", "testValue7", "size", "l"], ["formControlName", "testValue8", "size", "l", 1, "tui-space_left-1"]],
    template: function TuiToggleExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "form", 0);
        core/* ɵɵelementStart */.TgZ(1, "div", 1);
        core/* ɵɵelement */._UZ(2, "tui-toggle", 2);
        core/* ɵɵelement */._UZ(3, "tui-toggle", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "div", 1);
        core/* ɵɵelement */._UZ(5, "tui-toggle", 4);
        core/* ɵɵelement */._UZ(6, "tui-toggle", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "div", 1);
        core/* ɵɵelement */._UZ(8, "tui-toggle", 6);
        core/* ɵɵelement */._UZ(9, "tui-toggle", 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "div");
        core/* ɵɵelement */._UZ(11, "tui-toggle", 8);
        core/* ɵɵelement */._UZ(12, "tui-toggle", 9);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("showIcons", true);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("showIcons", true);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("showIcons", true);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("showIcons", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiToggleExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/toggle/examples/2/index.ts





let TuiToggleExample2 = /*#__PURE__*/(() => {
  class TuiToggleExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiToggleExample2.ɵfac = function TuiToggleExample2_Factory(t) {
    return new (t || TuiToggleExample2)();
  };

  TuiToggleExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiToggleExample2,
    selectors: [["tui-toggle-example-2"]],
    features: [core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiToggleOptionsProvider)({
      icons: {
        toggleOff: ({
          $implicit
        }) => $implicit === `m` ? `tuiIconChevronRight` : `tuiIconChevronRightLarge`,
        toggleOn: ({
          $implicit
        }) => $implicit === `m` ? `tuiIconChevronLeft` : `tuiIconChevronLeftLarge`
      },
      showIcons: true
    })])],
    decls: 4,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1"], ["formControlName", "testValue2", "size", "l", 1, "tui-space_left-1"]],
    template: function TuiToggleExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "form", 0);
        core/* ɵɵelementStart */.TgZ(1, "div");
        core/* ɵɵelement */._UZ(2, "tui-toggle", 1);
        core/* ɵɵelement */._UZ(3, "tui-toggle", 2);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiToggleExample2;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/interactive.ts
var interactive = __webpack_require__(57750);
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/toggle/toggle.component.ts


















function ExampleTuiToggleComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-toggle-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(5, "tui-toggle-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiToggleComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 11);
    core/* ɵɵelement */._UZ(1, "code");
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiToggleComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiToggleComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiToggleComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiToggleComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiToggleComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelement */._UZ(1, "tui-toggle", 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiToggleComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 6);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiToggleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiToggleComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiToggleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = core/* ɵɵnextContext */.oxw();
      return ctx_r10.showIcons = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiToggleComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiToggleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = core/* ɵɵnextContext */.oxw();
      return ctx_r11.showLoader = $event;
    });
    core/* ɵɵtemplate */.YNc(6, ExampleTuiToggleComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiToggleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return ctx_r12.singleColor = $event;
    });
    core/* ɵɵtemplate */.YNc(7, ExampleTuiToggleComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiToggleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = core/* ɵɵnextContext */.oxw();
      return ctx_r13.size = $event;
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(8, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("formControl", ctx_r1.control)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered)("pseudoActive", ctx_r1.pseudoPressed)("showIcons", ctx_r1.showIcons)("showLoader", ctx_r1.showLoader)("singleColor", ctx_r1.singleColor)("size", ctx_r1.size);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showIcons);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showLoader);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.singleColor);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiToggleComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 17);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18nStart */.tHW(8, 19);
    core/* ɵɵelement */._UZ(9, "code");
    core/* ɵɵelement */._UZ(10, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(11, "tui-doc-code", 20);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "li");
    core/* ɵɵelementStart */.TgZ(13, "p");
    core/* ɵɵi18n */.SDv(14, 21);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(15, "tui-doc-code", 22);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(16, "li");
    core/* ɵɵelementStart */.TgZ(17, "p");
    core/* ɵɵi18nStart */.tHW(18, 23);
    core/* ɵɵelement */._UZ(19, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(20, "tui-doc-code", 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiToggleComponent = /*#__PURE__*/(() => {
  class ExampleTuiToggleComponent extends interactive/* AbstractExampleTuiInteractive */.O {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 17981).then(__webpack_require__.t.bind(__webpack_require__, 17981, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 39023).then(__webpack_require__.t.bind(__webpack_require__, 39023, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 8836).then(__webpack_require__.t.bind(__webpack_require__, 8836, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 47436).then(__webpack_require__.t.bind(__webpack_require__, 47436, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 32989).then(__webpack_require__.t.bind(__webpack_require__, 32989, 17)),
        HTML: __webpack_require__.e(/* import() */ 38503).then(__webpack_require__.t.bind(__webpack_require__, 38503, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 14669).then(__webpack_require__.t.bind(__webpack_require__, 14669, 17)),
        HTML: __webpack_require__.e(/* import() */ 57790).then(__webpack_require__.t.bind(__webpack_require__, 57790, 17))
      };
      this.showIcons = false;
      this.showLoader = false;
      this.singleColor = false;
      this.control = new fesm2015_forms/* FormControl */.NI(false);
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
    }

    get disabled() {
      return this.control.disabled;
    }

    set disabled(value) {
      if (value) {
        this.control.disable();
        return;
      }

      this.control.enable();
    }

  }

  ExampleTuiToggleComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiToggleComponent_BaseFactory;
    return function ExampleTuiToggleComponent_Factory(t) {
      return (ɵExampleTuiToggleComponent_BaseFactory || (ɵExampleTuiToggleComponent_BaseFactory = core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiToggleComponent)))(t || ExampleTuiToggleComponent);
    };
  }();

  ExampleTuiToggleComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiToggleComponent,
    selectors: [["example-tui-toggle"]],
    features: [core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,core/* forwardRef */.Gpc)(() => ExampleTuiToggleComponent)
    }]), core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4298031859445272139$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__1 = goog.getMsg("Toggle is a switcher between two states. It can also be used with icons and loading.");
        i18n_0 = MSG_EXTERNAL_4298031859445272139$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟cffb70cef400be807c9b89e6d9b7231e3cf72366␟4298031859445272139:Toggle is a switcher between two states. It can also be used with icons and loading.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6827337628740297789$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__5 = goog.getMsg("options");
        i18n_4 = MSG_EXTERNAL_6827337628740297789$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟6bfb042b76cbc28b1e01b51755da299d098e7e01␟6827337628740297789:options`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___7 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2306718553720447873$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___9 = goog.getMsg(" Show icons ");
        i18n_8 = MSG_EXTERNAL_2306718553720447873$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟82534917461f62c0858cc1de997a3ac095be3e31␟2306718553720447873: Show icons `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8102288917952810897$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___11 = goog.getMsg(" Show loader. If icons are also enabled, show loader anyway. ");
        i18n_10 = MSG_EXTERNAL_8102288917952810897$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟289d50ee6ef7ca47ae9a871f230de59f81c04bec␟8102288917952810897: Show loader. If icons are also enabled, show loader anyway. `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3453994549591773255$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___13 = goog.getMsg(" All states have the same color ");
        i18n_12 = MSG_EXTERNAL_3453994549591773255$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟14273f13e9ed6559f66f4254219ee12e1233f475␟3453994549591773255: All states have the same color `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___15 = goog.getMsg(" Size ");
        i18n_14 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4891631418565250652$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiToggleModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_4891631418565250652$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟09d3b7599a0c36da1fb07263caa12cddc42d728f␟4891631418565250652: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiToggleModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__19 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_18 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_18 = core/* ɵɵi18nPostprocess */.Zx4(i18n_18);
      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7369391932130403000$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__23 = goog.getMsg(" Optionally use the {$startTagCode}TUI_TOGGLE_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#19\uFFFD",
          "closeTagCode": "\uFFFD/#19\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_7369391932130403000$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOGGLE_TOGGLE_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟b939f5914dcbb0ecb9fad263303b0901c894c8e8␟7369391932130403000: Optionally use the ${"\uFFFD#19\uFFFD"}:START_TAG_CODE:TUI_TOGGLE_OPTIONS${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "Toggle", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "options", "heading", i18n_4, 3, "content"], [3, "formControl", "pseudoFocus", "pseudoHover", "pseudoActive", "showIcons", "showLoader", "singleColor", "size"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showIcons", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "singleColor", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.component.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"], i18n_22];
    },
    template: function ExampleTuiToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiToggleComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiToggleComponent_ng_template_2_Template, 9, 14, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiToggleComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiToggleExample1, TuiToggleExample2, demo_component/* TuiDocDemoComponent */.F, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiToggleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/toggle/toggle.module.ts











let ExampleTuiToggleModule = /*#__PURE__*/(() => {
  class ExampleTuiToggleModule {}

  ExampleTuiToggleModule.ɵfac = function ExampleTuiToggleModule_Factory(t) {
    return new (t || ExampleTuiToggleModule)();
  };

  ExampleTuiToggleModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiToggleModule
  });
  ExampleTuiToggleModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, common/* CommonModule */.ez, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiToggleComponent))]]
  });
  return ExampleTuiToggleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiToggleModule, {
    declarations: [ExampleTuiToggleComponent, TuiToggleExample1, TuiToggleExample2],
    imports: [fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, common/* CommonModule */.ez, router/* RouterModule */.Bz],
    exports: [ExampleTuiToggleComponent]
  });
})();

/***/ })

}]);