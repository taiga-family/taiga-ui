"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[13443],{

/***/ 13443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDestroyModule": () => (/* binding */ ExampleTuiDestroyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js
var fromEvent = __webpack_require__(22759);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/destroy/examples/1/component.ts







let TuiDestroyExample = /*#__PURE__*/(() => {
  class TuiDestroyExample {
    constructor(destroy$, {
      nativeElement
    }) {
      (0,fromEvent/* fromEvent */.R)(nativeElement, `click`).pipe((0,takeUntil/* takeUntil */.R)(destroy$)).subscribe(() => console.info(`click`));
    }

  }

  TuiDestroyExample.ɵfac = function TuiDestroyExample_Factory(t) {
    return new (t || TuiDestroyExample)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ElementRef */.SBq));
  };

  TuiDestroyExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDestroyExample,
    selectors: [["tui-destroy-example"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService])],
    decls: 2,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "appearance", "primary", "size", "m"]],
    template: function TuiDestroyExample_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Click me!\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDestroyExample;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/destroy/destroy.component.ts








function ExampleTuiDestroyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(3, " Component must have ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
    fesm2015_core/* ɵɵtext */._uU(5, "providers: [TuiDestroyService]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-destroy-example");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example);
  }
}

function ExampleTuiDestroyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 7);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.injectService);
  }
}

let ExampleTuiDestroyComponent = /*#__PURE__*/(() => {
  class ExampleTuiDestroyComponent {
    constructor() {
      this.injectService = __webpack_require__.e(/* import() */ 74862).then(__webpack_require__.t.bind(__webpack_require__, 74862, 17));
      this.example = {
        TypeScript: __webpack_require__.e(/* import() */ 21311).then(__webpack_require__.t.bind(__webpack_require__, 84178, 17)),
        HTML: __webpack_require__.e(/* import() */ 83674).then(__webpack_require__.t.bind(__webpack_require__, 83674, 17))
      };
    }

  }

  ExampleTuiDestroyComponent.ɵfac = function ExampleTuiDestroyComponent_Factory(t) {
    return new (t || ExampleTuiDestroyComponent)();
  };

  ExampleTuiDestroyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDestroyComponent,
    selectors: [["example-tui-destroy"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7345162232033285937$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__1 = goog.getMsg("A service to terminate subscriptions upon component/directive removal.");
        i18n_0 = MSG_EXTERNAL_7345162232033285937$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟6ff65f07910008f475816786be6a3ee282f9f827␟7345162232033285937:A service to terminate subscriptions upon component/directive removal.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3876794271028769853$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__5 = goog.getMsg(" Inject {$startTagCode}TuiDestroyService{$closeTagCode} into your component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_3876794271028769853$$PROJECTS_DEMO_SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟51b42031d4cc73a637a303f36243fe7df0c02c36␟3876794271028769853: Inject ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDestroyService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component: `;
      }

      return [["header", "DestroyService", "package", "CDK", "path", "cdk/services/destroy.service.ts"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["status", "warning"], ["id", "Basic", "heading", i18n_2, 3, "content"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiDestroyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDestroyComponent_ng_template_1_Template, 8, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDestroyComponent_ng_template_2_Template, 6, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiDestroyExample, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiDestroyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/destroy/destroy.module.ts








let ExampleTuiDestroyModule = /*#__PURE__*/(() => {
  class ExampleTuiDestroyModule {}

  ExampleTuiDestroyModule.ɵfac = function ExampleTuiDestroyModule_Factory(t) {
    return new (t || ExampleTuiDestroyModule)();
  };

  ExampleTuiDestroyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDestroyModule
  });
  ExampleTuiDestroyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDestroyComponent))]]
  });
  return ExampleTuiDestroyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDestroyModule, {
    declarations: [ExampleTuiDestroyComponent, TuiDestroyExample],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiButtonModule, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiDestroyComponent]
  });
})();

/***/ })

}]);