"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[24237],{

/***/ 59849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiColorPickerModule": () => (/* binding */ ExampleTuiColorPickerModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-editor/index.ts + 12 modules
var addon_editor = __webpack_require__(70224);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-editor/components/input-color/input-color.component.ts
var input_color_component = __webpack_require__(19769);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/color-picker/examples/1/index.ts





let TuiColorPickerExample1 = /*#__PURE__*/(() => {
  class TuiColorPickerExample1 {
    constructor() {
      this.color = `#ffdd2d`;
      this.palette = addon_editor.defaultEditorColors;
    }

  }

  TuiColorPickerExample1.ɵfac = function TuiColorPickerExample1_Factory(t) {
    return new (t || TuiColorPickerExample1)();
  };

  TuiColorPickerExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiColorPickerExample1,
    selectors: [["tui-color-picker-example-1"]],
    decls: 6,
    vars: 6,
    consts: [[1, "b-form", 3, "colors", "ngModel", "ngModelChange"], ["tuiTextfieldSize", "m", 1, "b-form", "tui-space_vertical-2", 3, "colors", "ngModel", "ngModelChange"], ["tuiTextfieldSize", "s", 1, "b-form", 3, "colors", "ngModel", "ngModelChange"]],
    template: function TuiColorPickerExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-color", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiColorPickerExample1_Template_tui_input_color_ngModelChange_0_listener($event) {
          return ctx.color = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Background color\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-color", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiColorPickerExample1_Template_tui_input_color_ngModelChange_2_listener($event) {
          return ctx.color = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Background color\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-color", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiColorPickerExample1_Template_tui_input_color_ngModelChange_4_listener($event) {
          return ctx.color = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Background color\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("colors", ctx.palette)("ngModel", ctx.color);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("colors", ctx.palette)("ngModel", ctx.color);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("colors", ctx.palette)("ngModel", ctx.color);
      }
    },
    directives: [input_color_component/* TuiInputColorComponent */.j, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, textfield_size_directive/* TuiTextfieldSizeDirective */.s],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiColorPickerExample1;
})();
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2015/platform-browser.js
var platform_browser = __webpack_require__(91211);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-editor/components/color-selector/color-selector.component.ts
var color_selector_component = __webpack_require__(23999);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/color-picker/examples/2/index.ts









function TuiColorPickerExample2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-color-selector", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("colorChange", function TuiColorPickerExample2_ng_template_4_Template_tui_color_selector_colorChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.color = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const activeZone_r2 = ctx.$implicit;
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r2)("color", ctx_r1.color);
  }
}

let TuiColorPickerExample2 = /*#__PURE__*/(() => {
  class TuiColorPickerExample2 {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.color = `#ffdd2d`;
    }

    get background() {
      return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }

  }

  TuiColorPickerExample2.ɵfac = function TuiColorPickerExample2_Factory(t) {
    return new (t || TuiColorPickerExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7));
  };

  TuiColorPickerExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiColorPickerExample2,
    selectors: [["tui-color-picker-example-2"]],
    decls: 6,
    vars: 6,
    consts: [["tuiDropdownAlign", "left", 3, "content", "tuiDropdownMaxHeight"], ["tuiButton", "", "type", "button", "appearance", "", "automation-id", "color-picker__button"], [1, "invert"], ["picker", ""], [3, "tuiActiveZoneParent", "color", "colorChange"]],
    template: function TuiColorPickerExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 2);
        fesm2015_core/* ɵɵtext */._uU(3, "Color me Kubrick");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiColorPickerExample2_ng_template_4_Template, 1, 2, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("tuiDropdownMaxHeight", 999);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵstyleProp */.Udp("background", ctx.background)("color", ctx.background);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, color_selector_component/* TuiColorSelectorComponent */.s, active_zone_directive/* TuiActiveZoneDirective */.e],
    styles: [".invert[_ngcontent-%COMP%]{color:inherit;filter:invert(1)}"],
    changeDetection: 0
  });
  return TuiColorPickerExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-editor/components/color-selector/color-picker/color-picker.component.ts
var color_picker_component = __webpack_require__(49289);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/color-picker/color-picker.component.ts












function ExampleTuiColorPickerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-color-picker-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-color-picker-example-2");
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

function ExampleTuiColorPickerComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 6);
  }
}

function ExampleTuiColorPickerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-color-picker");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiColorPickerComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiColorPickerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 8);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 11);
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

let ExampleTuiColorPickerComponent = /*#__PURE__*/(() => {
  class ExampleTuiColorPickerComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 6678).then(__webpack_require__.t.bind(__webpack_require__, 6678, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 86863).then(__webpack_require__.t.bind(__webpack_require__, 86863, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 30173).then(__webpack_require__.t.bind(__webpack_require__, 30173, 17)),
        HTML: __webpack_require__.e(/* import() */ 75423).then(__webpack_require__.t.bind(__webpack_require__, 75423, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 67026).then(__webpack_require__.t.bind(__webpack_require__, 67026, 17)),
        HTML: __webpack_require__.e(/* import() */ 71358).then(__webpack_require__.t.bind(__webpack_require__, 71358, 17)),
        LESS: __webpack_require__.e(/* import() */ 38894).then(__webpack_require__.t.bind(__webpack_require__, 38894, 17))
      };
    }

  }

  ExampleTuiColorPickerComponent.ɵfac = function ExampleTuiColorPickerComponent_Factory(t) {
    return new (t || ExampleTuiColorPickerComponent)();
  };

  ExampleTuiColorPickerComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiColorPickerComponent,
    selectors: [["example-tui-color-picker"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5718365072316771675$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__1 = goog.getMsg(" ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker ");
        i18n_0 = MSG_EXTERNAL_5718365072316771675$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟1be000e44871cc249cdcae83c6a510c1d9abb286␟5718365072316771675: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1095933938236110379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__3 = goog.getMsg("InputColor");
        i18n_2 = MSG_EXTERNAL_1095933938236110379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟076f197d00bec1e1eadd0578f26163a0094bb3c6␟1095933938236110379:InputColor`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4818970173940003343$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__5 = goog.getMsg("ColorSelector in dropdown");
        i18n_4 = MSG_EXTERNAL_4818970173940003343$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c58615eb54ebf60ebca6fd2305cf40aaae4abb01␟4818970173940003343:ColorSelector in dropdown`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2059122116780340968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS___7 = goog.getMsg(" RGBA color tuple ");
        i18n_6 = MSG_EXTERNAL_2059122116780340968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟a4186ff325aca7ae0746ccba7533a67b83b1a7cf␟2059122116780340968: RGBA color tuple `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5208450876663294588$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiColorPickerModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_5208450876663294588$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟709fb65f50c77159dca5239e1a3405f04b9b28f0␟5208450876663294588: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiColorPickerModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_COLOR_PICKER_COLOR_PICKER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "ColorPicker", "package", "ADDON-editor", "type", "components"], ["pageTab", ""], i18n_0, ["id", "input", "heading", i18n_2, 3, "content"], ["id", "dropdown", "heading", i18n_4, 3, "content"], ["documentationPropertyName", "color", "documentationPropertyMode", "input-output", "documentationPropertyType", "[number, number, number, number]"], i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiColorPickerComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiColorPickerComponent_ng_template_2_Template, 4, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiColorPickerComponent_ng_template_3_Template, 10, 2, "ng-template");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiColorPickerExample1, TuiColorPickerExample2, demo_component/* TuiDocDemoComponent */.F, color_picker_component/* TuiColorPickerComponent */.$, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiColorPickerComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/color-picker/color-picker.module.ts












let ExampleTuiColorPickerModule = /*#__PURE__*/(() => {
  class ExampleTuiColorPickerModule {}

  ExampleTuiColorPickerModule.ɵfac = function ExampleTuiColorPickerModule_Factory(t) {
    return new (t || ExampleTuiColorPickerModule)();
  };

  ExampleTuiColorPickerModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiColorPickerModule
  });
  ExampleTuiColorPickerModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiButtonModule, core.TuiHostedDropdownModule, addon_editor.TuiColorSelectorModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule, addon_editor.TuiInputColorModule, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiColorPickerComponent)), fesm2015_forms/* FormsModule */.u5, addon_editor.TuiColorPickerModule]]
  });
  return ExampleTuiColorPickerModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiColorPickerModule, {
    declarations: [ExampleTuiColorPickerComponent, TuiColorPickerExample1, TuiColorPickerExample2],
    imports: [common/* CommonModule */.ez, core.TuiButtonModule, core.TuiHostedDropdownModule, addon_editor.TuiColorSelectorModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule, addon_editor.TuiInputColorModule, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, fesm2015_forms/* FormsModule */.u5, addon_editor.TuiColorPickerModule],
    exports: [ExampleTuiColorPickerComponent]
  });
})();

/***/ })

}]);