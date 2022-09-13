"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[2011],{

/***/ 2011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCopyProcessorModule": () => (/* binding */ ExampleTuiCopyProcessorModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var projects_core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/cdk/directives/copy-processor/copy-processor.directive.ts
var copy_processor_directive = __webpack_require__(93157);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/copy-processor/examples/1/index.ts







let TuiCopyProcessorExample1 = /*#__PURE__*/(() => {
  class TuiCopyProcessorExample1 {
    constructor(format, alertService) {
      this.format = format;
      this.alertService = alertService;
      this.value = 12345.67;

      this.numberProcessor = text => text.replace(this.format.decimalSeparator, `.`).replace(new RegExp(this.format.thousandSeparator, `g`), ``);

      this.textProcessor = text => text.toUpperCase();
    }

    onCopy(event) {
      var _a, _b;

      this.alertService.open((_b = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData(`text/plain`)) !== null && _b !== void 0 ? _b : ``).subscribe();
    }

  }

  TuiCopyProcessorExample1.ɵfac = function TuiCopyProcessorExample1_Factory(t) {
    return new (t || TuiCopyProcessorExample1)(core/* ɵɵdirectiveInject */.Y36(projects_core.TUI_NUMBER_FORMAT), core/* ɵɵdirectiveInject */.Y36(projects_core.TuiAlertService));
  };

  TuiCopyProcessorExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiCopyProcessorExample1,
    selectors: [["tui-copy-processor-example-1"]],
    hostBindings: function TuiCopyProcessorExample1_HostBindings(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵlistener */.NdJ("copy", function TuiCopyProcessorExample1_copy_HostBindingHandler($event) {
          return ctx.onCopy($event);
        });
      }
    },
    decls: 4,
    vars: 3,
    consts: [[1, "tui-space_bottom-2", 3, "tuiCopyProcessor", "ngModel", "ngModelChange"], [3, "tuiCopyProcessor"]],
    template: function TuiCopyProcessorExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 0);
        core/* ɵɵlistener */.NdJ("ngModelChange", function TuiCopyProcessorExample1_Template_tui_input_number_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        core/* ɵɵtext */._uU(1, " Copy this\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵtext */._uU(3, "Try copy this text");
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("tuiCopyProcessor", ctx.numberProcessor)("ngModel", ctx.value);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("tuiCopyProcessor", ctx.textProcessor);
      }
    },
    directives: [input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, copy_processor_directive/* TuiCopyProcessorDirective */.Z, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: ["[_nghost-%COMP%]{display:block}"],
    changeDetection: 0
  });
  return TuiCopyProcessorExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/copy-processor/copy-processor.component.ts







function ExampleTuiCopyProcessorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-copy-processor-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiCopyProcessorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 6);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiCopyProcessorComponent = /*#__PURE__*/(() => {
  class ExampleTuiCopyProcessorComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 91197).then(__webpack_require__.t.bind(__webpack_require__, 91197, 17)),
        HTML: __webpack_require__.e(/* import() */ 24975).then(__webpack_require__.t.bind(__webpack_require__, 24975, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 8074).then(__webpack_require__.t.bind(__webpack_require__, 8074, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44146).then(__webpack_require__.t.bind(__webpack_require__, 14817, 17));
    }

  }

  ExampleTuiCopyProcessorComponent.ɵfac = function ExampleTuiCopyProcessorComponent_Factory(t) {
    return new (t || ExampleTuiCopyProcessorComponent)();
  };

  ExampleTuiCopyProcessorComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCopyProcessorComponent,
    selectors: [["example-tui-copy-processor"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4194549152426589533$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_1 = goog.getMsg("CopyProcessor");
        i18n_0 = MSG_EXTERNAL_4194549152426589533$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟37561c7adb608b3f1dd2646ff27670a6a18c7ab0␟4194549152426589533:CopyProcessor`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8034929292308673999$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__5 = goog.getMsg("Directive is used to processed text when coping");
        i18n_4 = MSG_EXTERNAL_8034929292308673999$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟a0aef0f19512c3fb91ea516052bce537ce0f7ece␟8034929292308673999:Directive is used to processed text when coping`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__7 = goog.getMsg("Usage");
        i18n_6 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6368157042718938776$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiCopyProcessorModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6368157042718938776$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟415953669748407dbf44a8cbc7e8ef893a56fec9␟6368157042718938776: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCopyProcessorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "usage", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCopyProcessorComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiCopyProcessorComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiCopyProcessorComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiCopyProcessorExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCopyProcessorComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/copy-processor/copy-processor.module.ts










let ExampleTuiCopyProcessorModule = /*#__PURE__*/(() => {
  class ExampleTuiCopyProcessorModule {}

  ExampleTuiCopyProcessorModule.ɵfac = function ExampleTuiCopyProcessorModule_Factory(t) {
    return new (t || ExampleTuiCopyProcessorModule)();
  };

  ExampleTuiCopyProcessorModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCopyProcessorModule
  });
  ExampleTuiCopyProcessorModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputNumberModule, cdk.TuiCopyProcessorModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCopyProcessorComponent))]]
  });
  return ExampleTuiCopyProcessorModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCopyProcessorModule, {
    declarations: [ExampleTuiCopyProcessorComponent, TuiCopyProcessorExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputNumberModule, cdk.TuiCopyProcessorModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCopyProcessorComponent]
  });
})();

/***/ })

}]);