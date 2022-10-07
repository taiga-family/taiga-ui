"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[82153],{

/***/ 82153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLabelModule": () => (/* binding */ ExampleTuiLabelModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/tooltip/tooltip.component.ts
var tooltip_component = __webpack_require__(33351);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/label/examples/1/index.ts










function TuiLabelExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Sum ");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-tooltip", 4);
  }
}

let TuiLabelExample1 = /*#__PURE__*/(() => {
  class TuiLabelExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI()
      });
    }

  }

  TuiLabelExample1.ɵfac = function TuiLabelExample1_Factory(t) {
    return new (t || TuiLabelExample1)();
  };

  TuiLabelExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLabelExample1,
    selectors: [["tui-label-example-1"]],
    decls: 6,
    vars: 3,
    consts: [[1, "b-form", 3, "formGroup"], [3, "tuiLabel"], ["nativeId", "uniqueId", "formControlName", "testValue", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["label", ""], ["describeId", "uniqueId", "content", "I am a tooltip that is ready for Screen Readers", "direction", "top-right"]],
    template: function TuiLabelExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " 0,00 ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiLabelExample1_ng_template_4_Template, 2, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLabel", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, tooltip_component/* TuiTooltipComponent */.w],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLabelExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/label/examples/2/index.ts








let TuiLabelExample2 = /*#__PURE__*/(() => {
  class TuiLabelExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI()
      });
    }

  }

  TuiLabelExample2.ɵfac = function TuiLabelExample2_Factory(t) {
    return new (t || TuiLabelExample2)();
  };

  TuiLabelExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLabelExample2,
    selectors: [["tui-label-example-2"]],
    decls: 4,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "Some long content about money and incoice sums to make a multiline label and to show how it works with line breaks"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"]],
    template: function TuiLabelExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " 0,00 ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLabelExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/label/examples/3/index.ts


let TuiLabelExample3 = /*#__PURE__*/(() => {
  class TuiLabelExample3 {}

  TuiLabelExample3.ɵfac = function TuiLabelExample3_Factory(t) {
    return new (t || TuiLabelExample3)();
  };

  TuiLabelExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLabelExample3,
    selectors: [["tui-label-example-3"]],
    decls: 2,
    vars: 0,
    consts: [["tuiLabel", "Taiga"]],
    template: function TuiLabelExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 0);
        fesm2015_core/* ɵɵtext */._uU(1, "Angular Component Library");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [label_component/* TuiLabelComponent */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLabelExample3;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/label/label.component.ts














function ExampleTuiLabelComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-label-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-label-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-label-example-3");
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

function ExampleTuiLabelComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Label is a template ");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-tooltip", 9);
  }
}

function ExampleTuiLabelComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiLabelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 6);
    fesm2015_core/* ɵɵtext */._uU(2, "Content inside label");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLabelComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiLabelComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLabelComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.label = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(4);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLabel", ctx_r1.getLabel(_r3));
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.labelVariants)("documentationPropertyValue", ctx_r1.label);
  }
}

function ExampleTuiLabelComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 12);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 15);
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

let ExampleTuiLabelComponent = /*#__PURE__*/(() => {
  class ExampleTuiLabelComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 11752).then(__webpack_require__.t.bind(__webpack_require__, 11752, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 20484).then(__webpack_require__.t.bind(__webpack_require__, 20484, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 34439).then(__webpack_require__.t.bind(__webpack_require__, 34439, 17)),
        HTML: __webpack_require__.e(/* import() */ 56099).then(__webpack_require__.t.bind(__webpack_require__, 56099, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 89998).then(__webpack_require__.t.bind(__webpack_require__, 89998, 17)),
        HTML: __webpack_require__.e(/* import() */ 78607).then(__webpack_require__.t.bind(__webpack_require__, 78607, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 67845).then(__webpack_require__.t.bind(__webpack_require__, 67845, 17))
      };
      this.labelVariants = [`No default value`, `Template`];
      this.label = this.labelVariants[0];
    }

    getLabel(directive) {
      return this.label === this.labelVariants[1] ? directive : this.label;
    }

  }

  ExampleTuiLabelComponent.ɵfac = function ExampleTuiLabelComponent_Factory(t) {
    return new (t || ExampleTuiLabelComponent)();
  };

  ExampleTuiLabelComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLabelComponent,
    selectors: [["example-tui-label"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1262470084593398015$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__1 = goog.getMsg("Component binds a label and a content, e.g., a textfield");
        i18n_0 = MSG_EXTERNAL_1262470084593398015$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟12b3b9b66f470654cab7ed9e611bead733baae13␟1262470084593398015:Component binds a label and a content, e.g., a textfield`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_604592115785316180$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__5 = goog.getMsg("Multiline");
        i18n_4 = MSG_EXTERNAL_604592115785316180$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟6c8e5b57fb521ad1bb7f00b986dd2b928a6d44a3␟604592115785316180:Multiline`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6162693758764653365$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__7 = goog.getMsg("Text");
        i18n_6 = MSG_EXTERNAL_6162693758764653365$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟8ba143716c2da6e4120c0c1a804f0bdd9a7e5f5b␟6162693758764653365:Text`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3103961180272505277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS___9 = goog.getMsg(" Label ");
        i18n_8 = MSG_EXTERNAL_3103961180272505277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟dc963c1ad75db9284916cb98621248906f2712ae␟3103961180272505277: Label `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_300402696173005780$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiLabelModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_300402696173005780$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟9aa969f73d701ede3aa434fa3766432bd75eb18a␟300402696173005780: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLabelModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__13 = goog.getMsg("Add to the template:");
        i18n_12 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_LABEL_LABEL_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Label", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "basic", "heading", i18n_2, 3, "content"], ["id", "multiline", "heading", i18n_4, 3, "content"], ["id", "text", "heading", i18n_6, 3, "content"], [3, "tuiLabel"], ["template", ""], ["documentationPropertyName", "label", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["content", "This way you can use components or any HTML"], i18n_8, [1, "b-demo-steps"], i18n_10, ["filename", "myComponent.module.ts", 3, "code"], i18n_12, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLabelComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLabelComponent_ng_template_2_Template, 7, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLabelComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLabelExample1, TuiLabelExample2, TuiLabelExample3, demo_component/* TuiDocDemoComponent */.F, label_component/* TuiLabelComponent */.A, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, tooltip_component/* TuiTooltipComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiLabelComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/label/label.module.ts












let ExampleTuiLabelModule = /*#__PURE__*/(() => {
  class ExampleTuiLabelModule {}

  ExampleTuiLabelModule.ɵfac = function ExampleTuiLabelModule_Factory(t) {
    return new (t || ExampleTuiLabelModule)();
  };

  ExampleTuiLabelModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLabelModule
  });
  ExampleTuiLabelModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputModule, core.TuiLabelModule, core.TuiTooltipModule, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLabelComponent))]]
  });
  return ExampleTuiLabelModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLabelModule, {
    declarations: [ExampleTuiLabelComponent, TuiLabelExample1, TuiLabelExample2, TuiLabelExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputModule, core.TuiLabelModule, core.TuiTooltipModule, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLabelComponent]
  });
})();

/***/ })

}]);