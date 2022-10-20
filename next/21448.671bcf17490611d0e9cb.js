"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[21448],{

/***/ 21448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPrimitiveCheckboxModule": () => (/* binding */ ExampleTuiPrimitiveCheckboxModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/ngx-markdown/fesm2015/ngx-markdown.js + 1 modules
var ngx_markdown = __webpack_require__(27035);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/core/components/primitive-checkbox/primitive-checkbox.component.ts
var primitive_checkbox_component = __webpack_require__(80868);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-checkbox/primitive-checkbox.component.ts











function ExampleTuiPrimitiveCheckboxComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "a", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "a", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-primitive-checkbox", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.focused = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.hovered = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.pressed = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.invalid = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("disabled", ctx_r1.disabled)("focused", ctx_r1.focused)("hovered", ctx_r1.hovered)("pressed", ctx_r1.pressed)("size", ctx_r1.size)("invalid", ctx_r1.invalid)("value", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.focused);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hovered);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.pressed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.invalid);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiPrimitiveCheckboxComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 27);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiPrimitiveCheckboxComponent = /*#__PURE__*/(() => {
  class ExampleTuiPrimitiveCheckboxComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 96284).then(__webpack_require__.t.bind(__webpack_require__, 96284, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 74268).then(__webpack_require__.t.bind(__webpack_require__, 74268, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 74798).then(__webpack_require__.t.bind(__webpack_require__, 74798, 17));
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.disabled = false;
      this.focused = false;
      this.hovered = false;
      this.pressed = false;
      this.invalid = false;
      this.valueVariants = [false, true];
      this.value = this.valueVariants[0];
    }

  }

  ExampleTuiPrimitiveCheckboxComponent.ɵfac = function ExampleTuiPrimitiveCheckboxComponent_Factory(t) {
    return new (t || ExampleTuiPrimitiveCheckboxComponent)();
  };

  ExampleTuiPrimitiveCheckboxComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPrimitiveCheckboxComponent,
    selectors: [["example-tui-checkbox"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_512882267423238740$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__1 = goog.getMsg(" Static checkbox for usage outside forms as visual indicator without focusing and clicking. For usage in a form, see {$startLink}{$startTagCode}Checkbox{$closeTagCode}{$closeLink} , with a label {$startLink_1}{$startTagCode}CheckboxLabeled{$closeTagCode}{$closeLink} , inside a button {$startLink_2}{$startTagCode}CheckboxBlock{$closeTagCode}{$closeLink} . ", {
          "startLink": "\uFFFD#2\uFFFD",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]",
          "startLink_1": "\uFFFD#4\uFFFD",
          "startLink_2": "\uFFFD#6\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_512882267423238740$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟6696d99e1263607863dc6a23b648a544fa70b600␟512882267423238740: Static checkbox for usage outside forms as visual indicator without focusing and clicking. For usage in a form, see ${"\uFFFD#2\uFFFD"}:START_LINK:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: , with a label ${"\uFFFD#4\uFFFD"}:START_LINK_1:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: , inside a button ${"\uFFFD#6\uFFFD"}:START_LINK_2:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxBlock${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___3 = goog.getMsg(" Disabled state ");
        i18n_2 = MSG_EXTERNAL_4703780784365037889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___3;
      } else {
        i18n_2 = $localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9009801642023436819$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___5 = goog.getMsg(" Focused state ");
        i18n_4 = MSG_EXTERNAL_9009801642023436819$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟354b9b97c69b039ffde51d9ae151d99d00e7b65e␟9009801642023436819: Focused state `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7602361231353856339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___7 = goog.getMsg(" Hovered state ");
        i18n_6 = MSG_EXTERNAL_7602361231353856339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟32d2ebd443fdc413faf6887822582bd72f7fee38␟7602361231353856339: Hovered state `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2518609633850261367$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___9 = goog.getMsg(" Pressed state ");
        i18n_8 = MSG_EXTERNAL_2518609633850261367$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟4f67c07940933ee687c09fad9dbe37ae22ec8cf8␟2518609633850261367: Pressed state `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___11 = goog.getMsg(" Size ");
        i18n_10 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6963908824346094281$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___13 = goog.getMsg(" Invalid state ");
        i18n_12 = MSG_EXTERNAL_6963908824346094281$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9122871136395031383$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___15 = goog.getMsg(" Value (checked / unchecked / indeterminate) ");
        i18n_14 = MSG_EXTERNAL_9122871136395031383$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟e31642eab59f929fb574a51ad4fa607546c91f5a␟9122871136395031383: Value (checked / unchecked / indeterminate) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7024502997535820809$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiPrimitiveCheckboxModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_7024502997535820809$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟01d6244c19667e1c2e74a3619632f988be0db407␟7024502997535820809: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPrimitiveCheckboxModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8938389394037259502$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__21 = goog.getMsg(" Optionally use the {$startTagCode}TUI_CHECKBOX_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_8938389394037259502$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟410936608524ecabcc7a9de975eb34bffbc61acd␟8938389394037259502: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_CHECKBOX_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "PrimitiveCheckbox", "package", "CORE", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["tuiLink", "", "routerLink", "/components/checkbox"], ["tuiLink", "", "routerLink", "/components/checkbox-labeled"], ["tuiLink", "", "routerLink", "/components/checkbox-block"], [3, "disabled", "focused", "hovered", "pressed", "size", "invalid", "value"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "focused", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hovered", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pressed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "invalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"], i18n_20];
    },
    template: function ExampleTuiPrimitiveCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPrimitiveCheckboxComponent_ng_template_1_Template, 8, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template, 10, 16, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPrimitiveCheckboxComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, demo_component/* TuiDocDemoComponent */.F, primitive_checkbox_component/* TuiPrimitiveCheckboxComponent */.r, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPrimitiveCheckboxComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/primitive-checkbox/primitive-checkbox.module.ts







let ExampleTuiPrimitiveCheckboxModule = /*#__PURE__*/(() => {
  class ExampleTuiPrimitiveCheckboxModule {}

  ExampleTuiPrimitiveCheckboxModule.ɵfac = function ExampleTuiPrimitiveCheckboxModule_Factory(t) {
    return new (t || ExampleTuiPrimitiveCheckboxModule)();
  };

  ExampleTuiPrimitiveCheckboxModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPrimitiveCheckboxModule
  });
  ExampleTuiPrimitiveCheckboxModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[router/* RouterModule */.Bz, core.TuiPrimitiveCheckboxModule, core.TuiLinkModule, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPrimitiveCheckboxComponent))]]
  });
  return ExampleTuiPrimitiveCheckboxModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPrimitiveCheckboxModule, {
    declarations: [ExampleTuiPrimitiveCheckboxComponent],
    imports: [router/* RouterModule */.Bz, core.TuiPrimitiveCheckboxModule, core.TuiLinkModule, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPrimitiveCheckboxComponent]
  });
})();

/***/ })

}]);