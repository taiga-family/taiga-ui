"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[55814],{

/***/ 55814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPureModule": () => (/* binding */ ExampleTuiPureModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/pure/pure-getter.component.ts






function ExampleTuiPureGetterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" fibonacci(42) = ", ctx_r0.fibonacci42, " ");
  }
}

class ExampleTuiPureGetterComponent {
  constructor() {
    this.show = false;
  }

  get fibonacci42() {
    return this.fibonacci(42);
  }

  fibonacci(num) {
    return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

}

ExampleTuiPureGetterComponent.ɵfac = function ExampleTuiPureGetterComponent_Factory(t) {
  return new (t || ExampleTuiPureGetterComponent)();
};

ExampleTuiPureGetterComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: ExampleTuiPureGetterComponent,
  selectors: [["example-tui-pure-getter"]],
  decls: 3,
  vars: 1,
  consts: [["class", "tui-space_bottom-2", 4, "ngIf"], ["tuiButton", "", "type", "button", 3, "click"], [1, "tui-space_bottom-2"]],
  template: function ExampleTuiPureGetterComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵtemplate */.YNc(0, ExampleTuiPureGetterComponent_div_0_Template, 2, 1, "div", 0);
      fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
      fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiPureGetterComponent_Template_button_click_1_listener() {
        return ctx.show = !ctx.show;
      });
      fesm2015_core/* ɵɵtext */._uU(2, " Show/hide ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.show);
    }
  },
  directives: [common/* NgIf */.O5, button_component/* TuiButtonComponent */.v],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], ExampleTuiPureGetterComponent.prototype, "fibonacci42", null);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/pure/pure-function.component.ts









function ExampleTuiPureFunctionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 1);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "json");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" Result: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx_r0.calculate(ctx_r0.counter, ctx_r0.text)), " ");
  }
}

class ExampleTuiPureFunctionComponent {
  constructor() {
    this.text = ``;
    this.show = false;
    this.counter = {
      count: 0
    };
  }

  calculate(counter, text) {
    counter.count++;
    return {
      text
    };
  }

}

ExampleTuiPureFunctionComponent.ɵfac = function ExampleTuiPureFunctionComponent_Factory(t) {
  return new (t || ExampleTuiPureFunctionComponent)();
};

ExampleTuiPureFunctionComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: ExampleTuiPureFunctionComponent,
  selectors: [["example-tui-pure-function"]],
  decls: 7,
  vars: 3,
  consts: [[3, "ngModel", "ngModelChange"], [1, "tui-space_top-2"], ["class", "tui-space_top-2", 4, "ngIf"], ["tuiButton", "", "type", "button", 1, "tui-space_top-2", 3, "click"]],
  template: function ExampleTuiPureFunctionComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 0);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiPureFunctionComponent_Template_tui_input_ngModelChange_0_listener($event) {
        return ctx.text = $event;
      });
      fesm2015_core/* ɵɵtext */._uU(1, "Type a text to start computing");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
      fesm2015_core/* ɵɵtext */._uU(3);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiPureFunctionComponent_div_4_Template, 3, 3, "div", 2);
      fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
      fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiPureFunctionComponent_Template_button_click_5_listener() {
        return ctx.show = !ctx.show;
      });
      fesm2015_core/* ɵɵtext */._uU(6, " Show/hide ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.text);
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵtextInterpolate1 */.hij("Called times: ", ctx.counter.count, "");
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.show);
    }
  },
  directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgIf */.O5, button_component/* TuiButtonComponent */.v],
  pipes: [common/* JsonPipe */.Ts],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], ExampleTuiPureFunctionComponent.prototype, "calculate", null);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/pure/pure.component.ts








function ExampleTuiPureComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵi18n */.SDv(1, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵi18n */.SDv(5, 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(7, "example-tui-pure-getter");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(9, "example-tui-pure-function");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiPureComponent_ng_template_2_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleDecorator);
  }
}

let ExampleTuiPureComponent = /*#__PURE__*/(() => {
  class ExampleTuiPureComponent {
    constructor() {
      this.exampleDecorator = __webpack_require__.e(/* import() */ 30813).then(__webpack_require__.t.bind(__webpack_require__, 30813, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 4796).then(__webpack_require__.t.bind(__webpack_require__, 4796, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 22308).then(__webpack_require__.t.bind(__webpack_require__, 22308, 17))
      };
    }

  }

  ExampleTuiPureComponent.ɵfac = function ExampleTuiPureComponent_Factory(t) {
    return new (t || ExampleTuiPureComponent)();
  };

  ExampleTuiPureComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPureComponent,
    selectors: [["example-tui-pure"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8407130897675501150$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS_1 = goog.getMsg("Pure");
        i18n_0 = MSG_EXTERNAL_8407130897675501150$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟6249527401fcb0d799fa087f686f23631ee46d68␟8407130897675501150:Pure`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1148608671765112042$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__3 = goog.getMsg(" Decorator for memoization of pure methods and getters ");
        i18n_2 = MSG_EXTERNAL_1148608671765112042$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟142c568583ee039615277b4178286ae0e46d0a56␟1148608671765112042: Decorator for memoization of pure methods and getters `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3548121292842881971$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__5 = goog.getMsg(" Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. ");
        i18n_4 = MSG_EXTERNAL_3548121292842881971$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟9d29b6ee04acfecfe75f18bae0fa042d03b79059␟3548121292842881971: Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3953858282355707646$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__7 = goog.getMsg(" If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) ");
        i18n_6 = MSG_EXTERNAL_3953858282355707646$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟91891ea88cb5adde84d0b27755b41736c3a16a21␟3953858282355707646: If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4481678507740450627$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__9 = goog.getMsg(" Add {$startTagCode}@tuiPure{$closeTagCode} decorator for your method or getter: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_4481678507740450627$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_PURE_PURE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟e7d602a6de31264108144aacb875f1e2b860de05␟4481678507740450627: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiPure${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: decorator for your method or getter: `;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/decorators/pure.ts"], ["pageTab", ""], ["pageTab", "Setup"], [1, "tui-space_bottom-3"], i18n_2, i18n_4, i18n_6, ["id", "getter", "heading", "Getter", 3, "content"], ["id", "function", "heading", "Function", 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myClass.component.ts", 3, "code"]];
    },
    template: function ExampleTuiPureComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPureComponent_ng_template_1_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPureComponent_ng_template_2_Template, 6, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, ExampleTuiPureGetterComponent, ExampleTuiPureFunctionComponent, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPureComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/pure/pure.module.ts











let ExampleTuiPureModule = /*#__PURE__*/(() => {
  class ExampleTuiPureModule {}

  ExampleTuiPureModule.ɵfac = function ExampleTuiPureModule_Factory(t) {
    return new (t || ExampleTuiPureModule)();
  };

  ExampleTuiPureModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPureModule
  });
  ExampleTuiPureModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPureComponent))]]
  });
  return ExampleTuiPureModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPureModule, {
    declarations: [ExampleTuiPureComponent, ExampleTuiPureFunctionComponent, ExampleTuiPureGetterComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPureComponent]
  });
})();

/***/ })

}]);