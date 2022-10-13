"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72948],{

/***/ 72948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiValidatorModule": () => (/* binding */ ExampleTuiValidatorModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/cdk/directives/validator/validator.directive.ts
var validator_directive = __webpack_require__(21082);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.component.ts
var input_phone_component = __webpack_require__(78750);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.directive.ts
var input_phone_directive = __webpack_require__(45303);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/validator/examples/1/index.ts














function TuiValidatorExample1_tui_data_list_wrapper_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 6);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

function TuiValidatorExample1_tui_input_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 7);
    fesm2015_core/* ɵɵtext */._uU(1, " Contact ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiValidator", ctx_r1.validator);
  }
}

function TuiValidatorExample1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-phone", 8);
    fesm2015_core/* ɵɵtext */._uU(1, "Contact");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

const _c0 = function () {
  return {
    standalone: true
  };
};

let TuiValidatorExample1 = /*#__PURE__*/(() => {
  class TuiValidatorExample1 {
    constructor() {
      this.items = [`Email`, `Phone`];
      this.type = this.items[0];
      this.group = new fesm2015_forms/* FormGroup */.cw({
        name: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        contact: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required)
      });
      this.validator = fesm2015_forms/* Validators.email */.kI.email;
    }

  }

  TuiValidatorExample1.ɵfac = function TuiValidatorExample1_Factory(t) {
    return new (t || TuiValidatorExample1)();
  };

  TuiValidatorExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiValidatorExample1,
    selectors: [["tui-validator-example-1"]],
    decls: 9,
    vars: 6,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "name"], [1, "tui-space_vertical-3", 3, "ngModelOptions", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], ["formControlName", "contact", 3, "tuiValidator", 4, "ngIf", "ngIfElse"], ["phone", ""], [3, "items"], ["formControlName", "contact", 3, "tuiValidator"], ["formControlName", "contact"]],
    template: function TuiValidatorExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Name");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-select", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiValidatorExample1_Template_tui_select_ngModelChange_3_listener($event) {
          return ctx.type = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Connection ");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiValidatorExample1_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiValidatorExample1_tui_input_6_Template, 2, 1, "tui-input", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiValidatorExample1_ng_template_7_Template, 2, 0, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r2 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.group);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModelOptions", fesm2015_core/* ɵɵpureFunction0 */.DdM(5, _c0))("ngModel", ctx.type);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.type === ctx.items[0])("ngIfElse", _r2);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, common/* NgIf */.O5, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, validator_directive/* TuiValidatorDirective */.W, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiValidatorExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/validator/validator.component.ts







function ExampleTuiValidatorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-validator-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiValidatorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiValidatorComponent = /*#__PURE__*/(() => {
  class ExampleTuiValidatorComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 67869).then(__webpack_require__.t.bind(__webpack_require__, 48045, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44998).then(__webpack_require__.t.bind(__webpack_require__, 44998, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 77427).then(__webpack_require__.t.bind(__webpack_require__, 77427, 17)),
        HTML: __webpack_require__.e(/* import() */ 65672).then(__webpack_require__.t.bind(__webpack_require__, 65672, 17))
      };
    }

  }

  ExampleTuiValidatorComponent.ɵfac = function ExampleTuiValidatorComponent_Factory(t) {
    return new (t || ExampleTuiValidatorComponent)();
  };

  ExampleTuiValidatorComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiValidatorComponent,
    selectors: [["example-tui-validator"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_676188202391799015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS_1 = goog.getMsg("Validator");
        i18n_0 = MSG_EXTERNAL_676188202391799015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟e9989acc7c8ce4e53c98e725c4ccddb26500a12c␟676188202391799015:Validator`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3877732538093888358$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}tuiValidator{$closeTagCode} allows set validators for form control on the fly ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_3877732538093888358$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟31386b4456fc6b3d900fca512c4eb3cfd8f4cb03␟3877732538093888358:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiValidator${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows set validators for form control on the fly `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2747244216500749928$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__7 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiValidatorModule{$closeTagCode} in the same module where you want to use our directive: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2747244216500749928$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟882bd28a9551de615e0f39bd9b0d55c6c1b1d514␟2747244216500749928: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiValidatorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_VALIDATOR_VALIDATOR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiValidatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiValidatorComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiValidatorComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiValidatorExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiValidatorComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/validator/validator.module.ts











let ExampleTuiValidatorModule = /*#__PURE__*/(() => {
  class ExampleTuiValidatorModule {}

  ExampleTuiValidatorModule.ɵfac = function ExampleTuiValidatorModule_Factory(t) {
    return new (t || ExampleTuiValidatorModule)();
  };

  ExampleTuiValidatorModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiValidatorModule
  });
  ExampleTuiValidatorModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputModule, kit.TuiSelectModule, cdk.TuiValidatorModule, kit.TuiInputPhoneModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiValidatorComponent))]]
  });
  return ExampleTuiValidatorModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiValidatorModule, {
    declarations: [ExampleTuiValidatorComponent, TuiValidatorExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputModule, kit.TuiSelectModule, cdk.TuiValidatorModule, kit.TuiInputPhoneModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiValidatorComponent]
  });
})();

/***/ })

}]);