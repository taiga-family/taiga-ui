"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[49078],{

/***/ 49078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiElementModule": () => (/* binding */ ExampleTuiElementModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/cdk/directives/element/element.directive.ts
var element_directive = __webpack_require__(34600);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/element/examples/1/index.ts





let TuiElementExample1 = /*#__PURE__*/(() => {
  class TuiElementExample1 {
    isButton(component) {
      return component instanceof core.TuiButtonComponent;
    }

    isElement(element) {
      return element instanceof fesm2015_core/* ElementRef */.SBq;
    }

  }

  TuiElementExample1.ɵfac = function TuiElementExample1_Factory(t) {
    return new (t || TuiElementExample1)();
  };

  TuiElementExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiElementExample1,
    selectors: [["tui-element-example-1"]],
    decls: 12,
    vars: 2,
    consts: [["tuiButton", "", "type", "button", 1, "tui-space_right-3"], ["component", ""], ["tuiButton", "", "type", "button", "tuiElement", "", 1, "tui-space_right-3"], ["element", "elementRef"], ["tuiButton", "", "type", "button", 3, "click"]],
    template: function TuiElementExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0, 1);
        fesm2015_core/* ɵɵtext */._uU(2, " component\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 2, 3);
        fesm2015_core/* ɵɵtext */._uU(5, " element\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
        fesm2015_core/* ɵɵtext */._uU(9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiElementExample1_Template_button_click_10_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r2);

          const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

          return _r1.nativeElement.focus();
        });
        fesm2015_core/* ɵɵtext */._uU(11, " Focus element\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("component instanceof TuiButtonComponent: ", ctx.isButton(_r0), "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("element instanceof ElementRef: ", ctx.isElement(_r1), "");
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, element_directive/* TuiElementDirective */.U],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiElementExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/element/element.component.ts







function ExampleTuiElementComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-element-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵi18nExp */.pQV(ctx_r0.elementRefText);
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiElementComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiElementComponent = /*#__PURE__*/(() => {
  class ExampleTuiElementComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 60337).then(__webpack_require__.t.bind(__webpack_require__, 60337, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 11437).then(__webpack_require__.t.bind(__webpack_require__, 11437, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 73686).then(__webpack_require__.t.bind(__webpack_require__, 73686, 17)),
        HTML: __webpack_require__.e(/* import() */ 96029).then(__webpack_require__.t.bind(__webpack_require__, 96029, 17))
      };
      this.elementRefText = `{read: ElementRef}`;
    }

  }

  ExampleTuiElementComponent.ɵfac = function ExampleTuiElementComponent_Factory(t) {
    return new (t || ExampleTuiElementComponent)();
  };

  ExampleTuiElementComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiElementComponent,
    selectors: [["example-tui-element"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6484699529024545510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__3 = goog.getMsg(" Directive is used to get a link to a native element as template reference variable (analogue of {$startTagCode}@ViewChild('ref', {$interpolation}){$closeTagCode} for template) ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "interpolation": "\uFFFD0\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6484699529024545510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟6f7dd2337192ab3d00a6511f2a7ec04a373144be␟6484699529024545510: Directive is used to get a link to a native element as template reference variable (analogue of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:@ViewChild('ref', ${"\uFFFD0\uFFFD"}:INTERPOLATION:)${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: for template) `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__5 = goog.getMsg("Usage");
        i18n_4 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8487238120828885921$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiElementModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_8487238120828885921$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟8a07cabae6bde59abc361f1e6cd1cb4bd4f10b44␟8487238120828885921: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiElementModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELEMENT_ELEMENT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Element", "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, ["id", "usage", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiElementComponent_ng_template_1_Template, 5, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiElementComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiElementExample1, code_component/* TuiDocCodeComponent */.c],
    styles: ["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{background:#87ceeb}"],
    changeDetection: 0
  });
  return ExampleTuiElementComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/element/element.module.ts








let ExampleTuiElementModule = /*#__PURE__*/(() => {
  class ExampleTuiElementModule {}

  ExampleTuiElementModule.ɵfac = function ExampleTuiElementModule_Factory(t) {
    return new (t || ExampleTuiElementModule)();
  };

  ExampleTuiElementModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiElementModule
  });
  ExampleTuiElementModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiButtonModule, cdk.TuiElementModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiElementComponent))]]
  });
  return ExampleTuiElementModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiElementModule, {
    declarations: [ExampleTuiElementComponent, TuiElementExample1],
    imports: [core.TuiButtonModule, cdk.TuiElementModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiElementComponent]
  });
})();

/***/ })

}]);