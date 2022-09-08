"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72061],{

/***/ 72061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiStepperModule": () => (/* binding */ ExampleTuiStepperModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/stepper/stepper.component.ts
var stepper_component = __webpack_require__(48758);
// EXTERNAL MODULE: ./projects/kit/components/stepper/step/step.component.ts
var step_component = __webpack_require__(72817);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/stepper/examples/1/index.ts



let TuiStepperExample1 = /*#__PURE__*/(() => {
  class TuiStepperExample1 {}

  TuiStepperExample1.ɵfac = function TuiStepperExample1_Factory(t) {
    return new (t || TuiStepperExample1)();
  };

  TuiStepperExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiStepperExample1,
    selectors: [["tui-stepper-example-1"]],
    decls: 11,
    vars: 1,
    consts: [[3, "activeItemIndex"], ["tuiStep", "", "stepState", "pass"], ["tuiStep", ""], ["tuiStep", "", "stepState", "error"], ["tuiStep", "", "disabled", ""], ["tuiStep", "", "icon", "tuiIconTimeLarge"]],
    template: function TuiStepperExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-stepper", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Finished step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(4, "Simple step");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Error step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Disabled step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 5);
        fesm2015_core/* ɵɵtext */._uU(10, " Step with an icon ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", 1);
      }
    },
    directives: [stepper_component/* TuiStepperComponent */.H, step_component/* TuiStepComponent */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiStepperExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/stepper/examples/2/index.ts





function TuiStepperExample2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 2);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", step_r1, " ");
  }
}

let TuiStepperExample2 = /*#__PURE__*/(() => {
  class TuiStepperExample2 {
    constructor() {
      this.steps = [`Start Up`, `Cash In`, `Sell Out`, `Bro Down`];
    }

  }

  TuiStepperExample2.ɵfac = function TuiStepperExample2_Factory(t) {
    return new (t || TuiStepperExample2)();
  };

  TuiStepperExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiStepperExample2,
    selectors: [["tui-stepper-example-2"]],
    decls: 2,
    vars: 2,
    consts: [["orientation", "vertical", 3, "activeItemIndex"], ["tuiStep", "", 4, "ngFor", "ngForOf"], ["tuiStep", ""]],
    template: function TuiStepperExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-stepper", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiStepperExample2_button_1_Template, 2, 1, "button", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", 1);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.steps);
      }
    },
    directives: [stepper_component/* TuiStepperComponent */.H, common/* NgForOf */.sg, step_component/* TuiStepComponent */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiStepperExample2;
})();
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/stepper/stepper.component.ts













function ExampleTuiStepperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-stepper-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-stepper-example-2");
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

function ExampleTuiStepperComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiStepperComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiStepperComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiStepperComponent_ng_template_2_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiStepperComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-stepper", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function ExampleTuiStepperComponent_ng_template_2_Template_tui_stepper_activeItemIndexChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(3, "Simple step");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(5, "Simple step");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 7);
    fesm2015_core/* ɵɵtext */._uU(7, " Simple step ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(9, "Simple step");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(11, "Simple step");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-documentation", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiStepperComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.orientation = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiStepperComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-documentation", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiStepperComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.state = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(17, ExampleTuiStepperComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.icon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("orientation", ctx_r1.orientation)("activeItemIndex", ctx_r1.activeItemIndex);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("stepState", ctx_r1.state)("icon", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.activeItemIndex);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.stateVariants)("documentationPropertyValue", ctx_r1.state);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
  }
}

function ExampleTuiStepperComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 19);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 22);
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

let ExampleTuiStepperComponent = /*#__PURE__*/(() => {
  class ExampleTuiStepperComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 59352).then(__webpack_require__.t.bind(__webpack_require__, 59352, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 77490).then(__webpack_require__.t.bind(__webpack_require__, 77490, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 21664).then(__webpack_require__.t.bind(__webpack_require__, 21664, 17)),
        HTML: __webpack_require__.e(/* import() */ 69003).then(__webpack_require__.t.bind(__webpack_require__, 69003, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 36032).then(__webpack_require__.t.bind(__webpack_require__, 36032, 17)),
        HTML: __webpack_require__.e(/* import() */ 9849).then(__webpack_require__.t.bind(__webpack_require__, 9849, 17))
      };
      this.activeItemIndex = 0;
      this.orientationVariants = [`horizontal`, `vertical`];
      this.orientation = this.orientationVariants[0];
      this.iconVariants = [``, `tuiIconTimeLarge`, `tuiIconHeart`];
      this.icon = this.iconVariants[0];
      this.stateVariants = [`normal`, `pass`, `error`];
      this.state = this.stateVariants[0];
    }

  }

  ExampleTuiStepperComponent.ɵfac = function ExampleTuiStepperComponent_Factory(t) {
    return new (t || ExampleTuiStepperComponent)();
  };

  ExampleTuiStepperComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiStepperComponent,
    selectors: [["example-tui-stepper"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4182533721007312825$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS_1 = goog.getMsg("Stepper");
        i18n_0 = MSG_EXTERNAL_4182533721007312825$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟d3380eafd2964129c0f2494ac124f7ee3ec18773␟4182533721007312825:Stepper`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7773050250158572107$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__3 = goog.getMsg("Stepper makes visual step navigation");
        i18n_2 = MSG_EXTERNAL_7773050250158572107$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟490cac10bf1b9dbae7bb9b4d439cb5de3a31b887␟7773050250158572107:Stepper makes visual step navigation`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2107304068844688435$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___7 = goog.getMsg(" Steps direction ");
        i18n_6 = MSG_EXTERNAL_2107304068844688435$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟2478a860994d0761c58bbd3f7dd3f03d465a8d19␟2107304068844688435: Steps direction `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1062293258822311131$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___9 = goog.getMsg(" Active step index ");
        i18n_8 = MSG_EXTERNAL_1062293258822311131$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟ee3142d9eaaea0b924d9d01805d271f4069fa81d␟1062293258822311131: Active step index `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3689121194833681634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___11 = goog.getMsg(" Step state ");
        i18n_10 = MSG_EXTERNAL_3689121194833681634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟4c20ec0c2e6451c09e8f66381ebb03153f9a2138␟3689121194833681634: Step state `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5578787756132554741$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___13 = goog.getMsg(" Step custom icon ");
        i18n_12 = MSG_EXTERNAL_5578787756132554741$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟9c9a93b5087be17cbebeca00ceb9e84e3b09fd02␟5578787756132554741: Step custom icon `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1361292692274604913$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__15 = goog.getMsg(" Import {$startTagCode}TuiStepperModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_1361292692274604913$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟1a30b934dd4f85022d1df7b9bd54d8266dae8965␟1361292692274604913: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStepperModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__17 = goog.getMsg("Add to the template:");
        i18n_16 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "KIT", "type", "components"], ["pageTab", ""], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["id", "vertical", "heading", "Vertical", 3, "content"], [3, "orientation", "activeItemIndex", "activeItemIndexChange"], ["tuiStep", ""], ["tuiStep", "", 3, "stepState", "icon"], ["heading", "Stepper"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["heading", "Step"], ["documentationPropertyName", "state", "documentationPropertyMode", "input", "documentationPropertyType", "'normal' | 'pass' | 'error'", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, i18n_12, [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiStepperComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiStepperComponent_ng_template_2_Template, 18, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiStepperComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiStepperExample1, TuiStepperExample2, demo_component/* TuiDocDemoComponent */.F, stepper_component/* TuiStepperComponent */.H, step_component/* TuiStepComponent */.Q, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiStepperComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/stepper/stepper.module.ts










let ExampleTuiStepperModule = /*#__PURE__*/(() => {
  class ExampleTuiStepperModule {}

  ExampleTuiStepperModule.ɵfac = function ExampleTuiStepperModule_Factory(t) {
    return new (t || ExampleTuiStepperModule)();
  };

  ExampleTuiStepperModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiStepperModule
  });
  ExampleTuiStepperModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, kit.TuiStepperModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiStepperComponent))]]
  });
  return ExampleTuiStepperModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiStepperModule, {
    declarations: [ExampleTuiStepperComponent, TuiStepperExample1, TuiStepperExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, kit.TuiStepperModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiStepperComponent]
  });
})();

/***/ })

}]);