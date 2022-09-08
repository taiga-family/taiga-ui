"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[51567],{

/***/ 51567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFormatPhoneModule": () => (/* binding */ ExampleTuiFormatPhoneModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/pipes/format-phone/format-phone.pipe.ts
var format_phone_pipe = __webpack_require__(3520);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-phone/examples/1/index.ts


let TuiFormatPhoneExample1 = /*#__PURE__*/(() => {
  class TuiFormatPhoneExample1 {
    constructor() {
      this.phone = `+78005557778`;
    }

  }

  TuiFormatPhoneExample1.ɵfac = function TuiFormatPhoneExample1_Factory(t) {
    return new (t || TuiFormatPhoneExample1)();
  };

  TuiFormatPhoneExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatPhoneExample1,
    selectors: [["tui-format-phone-example-1"]],
    decls: 6,
    vars: 8,
    template: function TuiFormatPhoneExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatPhone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵpipe */.ALo(5, "tuiFormatPhone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Formatted number by default: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 2, ctx.phone), "");
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" Formatted number with custom params: ", fesm2015_core/* ɵɵpipeBind3 */.Dn7(5, 4, ctx.phone, undefined, "###-###-##-##"), "\n");
      }
    },
    pipes: [format_phone_pipe/* TuiFormatPhonePipe */.r],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFormatPhoneExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-phone/format-phone.component.ts















function ExampleTuiFormatPhoneComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-format-phone-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiFormatPhoneComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiFormatPhoneComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiFormatPhoneComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 4);
    fesm2015_core/* ɵɵi18n */.SDv(1, 5);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatPhone");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiFormatPhoneComponent_ng_template_2_Template_tui_input_ngModelChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.index = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiFormatPhoneComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFormatPhoneComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.countryCode = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiFormatPhoneComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFormatPhoneComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.phoneMask = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵi18nExp */.pQV(fesm2015_core/* ɵɵpipeBind3 */.Dn7(2, 7, ctx_r1.index, ctx_r1.countryCode, ctx_r1.phoneMask));
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("ngModel", ctx_r1.index);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.countryCodes)("documentationPropertyValue", ctx_r1.countryCode);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.phoneMasks)("documentationPropertyValue", ctx_r1.phoneMask);
  }
}

function ExampleTuiFormatPhoneComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiFormatPhoneComponent = /*#__PURE__*/(() => {
  class ExampleTuiFormatPhoneComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 14203).then(__webpack_require__.t.bind(__webpack_require__, 14203, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 66398).then(__webpack_require__.t.bind(__webpack_require__, 66398, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 37904).then(__webpack_require__.t.bind(__webpack_require__, 37904, 17)),
        HTML: __webpack_require__.e(/* import() */ 99280).then(__webpack_require__.t.bind(__webpack_require__, 99280, 17))
      };
      this.index = `+78005557778`;
      this.countryCodes = [undefined, `+850`, `+1`, `+52`];
      this.countryCode = this.countryCodes[0];
      this.phoneMasks = [undefined, `####-#############`, `### ###-####`, `### ###-####`];
      this.phoneMask = this.phoneMasks[0];
    }

    get maxLength() {
      return !this.countryCode || !this.phoneMask ? 12 : this.countryCode.length + this.phoneMask.length - 2;
    }

  }

  ExampleTuiFormatPhoneComponent.ɵfac = function ExampleTuiFormatPhoneComponent_Factory(t) {
    return new (t || ExampleTuiFormatPhoneComponent)();
  };

  ExampleTuiFormatPhoneComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFormatPhoneComponent,
    selectors: [["example-tui-format-phone"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3893505654228026214$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__1 = goog.getMsg("Pipe to format phone number");
        i18n_0 = MSG_EXTERNAL_3893505654228026214$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟cd4920b3e2119c03dc9a0972eb03498c55067410␟3893505654228026214:Pipe to format phone number`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2451968025740707050$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__5 = goog.getMsg(" Formatted phone number: {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2451968025740707050$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟068fcd8de4e089518ee98843f32cf943ab61d085␟2451968025740707050: Formatted phone number: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2828194013486797327$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS___7 = goog.getMsg(" Country code ");
        i18n_6 = MSG_EXTERNAL_2828194013486797327$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3740414349373353425$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS___9 = goog.getMsg(" Phone number mask ");
        i18n_8 = MSG_EXTERNAL_3740414349373353425$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟688a3500e6ff8f090a2c0a000bbbd585fbfdff04␟3740414349373353425: Phone number mask `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5100872154544412603$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiFormatPhonePipeModule{$closeTagCode} into a module where you want to use the pipe ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5100872154544412603$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟c9ef10713bfc9d5436030ff2dfac2c8071971545␟5100872154544412603: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFormatPhonePipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use the pipe `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__13 = goog.getMsg("Use pipe in template with function and its arguments:");
        i18n_12 = MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_PHONE_FORMAT_PHONE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
      }

      return [["header", "FormatPhone", "package", "CORE", "type", "pipes"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [1, "text", "b-full-width"], i18n_4, ["tuiTextfieldSize", "m", 1, "slider", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], ["documentationPropertyName", "countryCode", "documentationPropertyType", "string | undefined", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "phoneMask", "documentationPropertyType", "string | undefined", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, [1, "b-demo-steps"], i18n_10, ["filename", "myComponent.module.ts", 3, "code"], i18n_12, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFormatPhoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFormatPhoneComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiFormatPhoneComponent_ng_template_2_Template, 7, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiFormatPhoneComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiFormatPhoneExample1, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    pipes: [format_phone_pipe/* TuiFormatPhonePipe */.r],
    styles: [".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],
    changeDetection: 0
  });
  return ExampleTuiFormatPhoneComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-phone/format-phone.module.ts










let ExampleTuiFormatPhoneModule = /*#__PURE__*/(() => {
  class ExampleTuiFormatPhoneModule {}

  ExampleTuiFormatPhoneModule.ɵfac = function ExampleTuiFormatPhoneModule_Factory(t) {
    return new (t || ExampleTuiFormatPhoneModule)();
  };

  ExampleTuiFormatPhoneModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFormatPhoneModule
  });
  ExampleTuiFormatPhoneModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core/* TuiFormatPhonePipeModule */.bKl, kit/* TuiInputModule */.QfL, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, core/* TuiTextfieldControllerModule */.cnw, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFormatPhoneComponent))]]
  });
  return ExampleTuiFormatPhoneModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFormatPhoneModule, {
    declarations: [ExampleTuiFormatPhoneComponent, TuiFormatPhoneExample1],
    imports: [core/* TuiFormatPhonePipeModule */.bKl, kit/* TuiInputModule */.QfL, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, core/* TuiTextfieldControllerModule */.cnw, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiFormatPhoneComponent]
  });
})();

/***/ })

}]);