"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[86793],{

/***/ 86793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleMiscellaneousModule": () => (/* binding */ ExampleMiscellaneousModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/examples/1/index.ts


let TuiMiscellaneousExample1 = /*#__PURE__*/(() => {
  class TuiMiscellaneousExample1 {
    get assertResult() {
      const dayOfWeek = new Date().getDay();
      const isFriday = dayOfWeek === 5;
      cdk.tuiAssert.assert(isFriday, `Today is not a friday`);
      return isFriday ? `Nothing in console` : `There is a console assert: 'Today is not a friday'`;
    }

  }

  TuiMiscellaneousExample1.ɵfac = function TuiMiscellaneousExample1_Factory(t) {
    return new (t || TuiMiscellaneousExample1)();
  };

  TuiMiscellaneousExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMiscellaneousExample1,
    selectors: [["tui-miscellaneous-example-1"]],
    decls: 2,
    vars: 1,
    template: function TuiMiscellaneousExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.assertResult);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMiscellaneousExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/examples/2/index.ts


let TuiMiscellaneousExample2 = /*#__PURE__*/(() => {
  class TuiMiscellaneousExample2 {
    get flatted() {
      return (0,cdk.tuiFlatLength)([[1, 2], [3, 4], [5, 6]]);
    }

  }

  TuiMiscellaneousExample2.ɵfac = function TuiMiscellaneousExample2_Factory(t) {
    return new (t || TuiMiscellaneousExample2)();
  };

  TuiMiscellaneousExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMiscellaneousExample2,
    selectors: [["tui-miscellaneous-example-2"]],
    decls: 2,
    vars: 1,
    template: function TuiMiscellaneousExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("", ctx.flatted, " = flatLength([[1, 2], [3, 4], [5, 6]]);");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMiscellaneousExample2;
})();
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/examples/4/index.ts









function TuiMiscellaneousExample4_tui_data_list_wrapper_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

let TuiMiscellaneousExample4 = /*#__PURE__*/(() => {
  class TuiMiscellaneousExample4 {
    constructor() {
      this.items = [`6734567890123456`, `5536567890123456`, `2202567890123456`, `4405567890123456`, `4000567890123456`];
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        cardNumber: new fesm2015_forms/* FormControl */.NI(``)
      });
    }

    get paymentSystem() {
      const {
        cardNumber
      } = this.parametersForm.value;
      return (0,addon_commerce.tuiGetPaymentSystem)(cardNumber !== null && cardNumber !== void 0 ? cardNumber : ``);
    }

  }

  TuiMiscellaneousExample4.ɵfac = function TuiMiscellaneousExample4_Factory(t) {
    return new (t || TuiMiscellaneousExample4)();
  };

  TuiMiscellaneousExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMiscellaneousExample4,
    selectors: [["tui-miscellaneous-example-4"]],
    decls: 6,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "cardNumber", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiMiscellaneousExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-select", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Choose card number ");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiMiscellaneousExample4_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("'", ctx.paymentSystem, "' = getPaymentSystem(cardNumber); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMiscellaneousExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/examples/5/index.ts









function TuiMiscellaneousExample5_tui_data_list_wrapper_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

let TuiMiscellaneousExample5 = /*#__PURE__*/(() => {
  class TuiMiscellaneousExample5 {
    constructor() {
      this.items = [`String`, `null`, `undefined`];
      this.parametersForm = new fesm2015_forms/* FormGroup */.cw({
        value: new fesm2015_forms/* FormControl */.NI(null)
      });
    }

    get isPresent() {
      const {
        value
      } = this.parametersForm.value;
      const objectedValue = this.objectifyValue(value !== null && value !== void 0 ? value : ``);
      return (0,cdk.tuiIsPresent)(objectedValue);
    }

    objectifyValue(value) {
      if (value === `null`) {
        return null;
      }

      if (value === `undefined`) {
        return undefined;
      }

      return value;
    }

  }

  TuiMiscellaneousExample5.ɵfac = function TuiMiscellaneousExample5_Factory(t) {
    return new (t || TuiMiscellaneousExample5)();
  };

  TuiMiscellaneousExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMiscellaneousExample5,
    selectors: [["tui-miscellaneous-example-5"]],
    decls: 6,
    vars: 2,
    consts: [[3, "formGroup"], [1, "parameters"], ["formControlName", "value", 1, "tui-space_top-2"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiMiscellaneousExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtext */._uU(0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-select", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " value ");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiMiscellaneousExample5_tui_data_list_wrapper_5_Template, 1, 1, "tui-data-list-wrapper", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("", ctx.isPresent, " = isPresent(value); ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.parametersForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],
    changeDetection: 0
  });
  return TuiMiscellaneousExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/miscellaneous.component.ts










function ExampleMiscellaneousComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-miscellaneous-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-miscellaneous-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-miscellaneous-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-miscellaneous-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleMiscellaneousComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-doc-code", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.importComponentExample);
  }
}

let ExampleMiscellaneousComponent = /*#__PURE__*/(() => {
  class ExampleMiscellaneousComponent {
    constructor() {
      this.importComponentExample = __webpack_require__.e(/* import() */ 47152).then(__webpack_require__.t.bind(__webpack_require__, 47152, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 33654).then(__webpack_require__.t.bind(__webpack_require__, 33654, 17)),
        HTML: __webpack_require__.e(/* import() */ 1342).then(__webpack_require__.t.bind(__webpack_require__, 1342, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 34569).then(__webpack_require__.t.bind(__webpack_require__, 34569, 17)),
        HTML: __webpack_require__.e(/* import() */ 71006).then(__webpack_require__.t.bind(__webpack_require__, 71006, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 99460).then(__webpack_require__.t.bind(__webpack_require__, 99460, 17)),
        HTML: __webpack_require__.e(/* import() */ 34715).then(__webpack_require__.t.bind(__webpack_require__, 34715, 17)),
        LESS: __webpack_require__.e(/* import() */ 96101).then(__webpack_require__.t.bind(__webpack_require__, 96101, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 94146).then(__webpack_require__.t.bind(__webpack_require__, 94146, 17)),
        HTML: __webpack_require__.e(/* import() */ 21162).then(__webpack_require__.t.bind(__webpack_require__, 21162, 17)),
        LESS: __webpack_require__.e(/* import() */ 9307).then(__webpack_require__.t.bind(__webpack_require__, 9307, 17))
      };
    }

  }

  ExampleMiscellaneousComponent.ɵfac = function ExampleMiscellaneousComponent_Factory(t) {
    return new (t || ExampleMiscellaneousComponent)();
  };

  ExampleMiscellaneousComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleMiscellaneousComponent,
    selectors: [["example-format"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_788967566322079082$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS_1 = goog.getMsg("Miscellaneous");
        i18n_0 = MSG_EXTERNAL_788967566322079082$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f398ef0b34074b4560e84ef5317ea054e78a752a␟788967566322079082:Miscellaneous`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5150738835928000159$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__3 = goog.getMsg("Some utils to simplify the development process");
        i18n_2 = MSG_EXTERNAL_5150738835928000159$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟c676d43c710fec8019330348fa0df2c00362f699␟5150738835928000159:Some utils to simplify the development process`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6294798745949256000$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__5 = goog.getMsg("Logs assert into console in dev mode");
        i18n_4 = MSG_EXTERNAL_6294798745949256000$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f10d1538fd526ebffa07d75e2380b111f5438a1c␟6294798745949256000:Logs assert into console in dev mode`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5469082953515383630$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__7 = goog.getMsg("Calculates a length of elements of two dimensional array");
        i18n_6 = MSG_EXTERNAL_5469082953515383630$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟2f599a78aea67c3b476d1c718f2e8c3b464a9257␟5469082953515383630:Calculates a length of elements of two dimensional array`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7224030121581173286$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__9 = goog.getMsg("Card number to its payment system");
        i18n_8 = MSG_EXTERNAL_7224030121581173286$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟5105c7dbe368aca66ee4710b6940836ace147001␟7224030121581173286:Card number to its payment system`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2199641579905414520$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__11 = goog.getMsg("Checks value not to be null or undefined");
        i18n_10 = MSG_EXTERNAL_2199641579905414520$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟f6929faea8489787de4425621b6b893ee9a50c10␟2199641579905414520:Checks value not to be null or undefined`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__13 = goog.getMsg("Import into component and use:");
        i18n_12 = MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_MISCELLANEOUS_MISCELLANEOUS_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "utils"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "assert", "heading", "assert", "description", i18n_4, 3, "content"], ["id", "flatLength", "heading", "flatLength", "description", i18n_6, 3, "content"], ["id", "getPaymentSystem", "heading", "getPaymentSystem", "description", i18n_8, 3, "content"], ["id", "isPresent", "heading", "isPresent", "description", i18n_10, 3, "content"], [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleMiscellaneousComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleMiscellaneousComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleMiscellaneousComponent_ng_template_2_Template, 5, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMiscellaneousExample1, TuiMiscellaneousExample2, TuiMiscellaneousExample4, TuiMiscellaneousExample5, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleMiscellaneousComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/miscellaneous/miscellaneous.module.ts













let ExampleMiscellaneousModule = /*#__PURE__*/(() => {
  class ExampleMiscellaneousModule {}

  ExampleMiscellaneousModule.ɵfac = function ExampleMiscellaneousModule_Factory(t) {
    return new (t || ExampleMiscellaneousModule)();
  };

  ExampleMiscellaneousModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleMiscellaneousModule
  });
  ExampleMiscellaneousModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiSelectModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleMiscellaneousComponent))]]
  });
  return ExampleMiscellaneousModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleMiscellaneousModule, {
    declarations: [ExampleMiscellaneousComponent, TuiMiscellaneousExample1, TuiMiscellaneousExample2, TuiMiscellaneousExample4, TuiMiscellaneousExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiSelectModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleMiscellaneousComponent]
  });
})();

/***/ })

}]);