"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[13309],{

/***/ 13309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPortalModule": () => (/* binding */ ExampleTuiPortalModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/cdk/directives/portal/portal.directive.ts
var portal_directive = __webpack_require__(22313);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/portal/examples/1/index.ts





function TuiPortalExample1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 2);
    core/* ɵɵtext */._uU(1, " Hey, Joe\n");
    core/* ɵɵelementEnd */.qZA();
  }
}

let TuiPortalExample1 = /*#__PURE__*/(() => {
  class TuiPortalExample1 {
    constructor() {
      this.show = false;
    }

  }

  TuiPortalExample1.ɵfac = function TuiPortalExample1_Factory(t) {
    return new (t || TuiPortalExample1)();
  };

  TuiPortalExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiPortalExample1,
    selectors: [["tui-portal-example-1"]],
    decls: 4,
    vars: 2,
    consts: [["size", "l", 1, "tui-space_right-2", 3, "ngModel", "ngModelChange"], ["class", "portal", 4, "tuiPortal"], [1, "portal"]],
    template: function TuiPortalExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "label");
        core/* ɵɵelementStart */.TgZ(1, "tui-toggle", 0);
        core/* ɵɵlistener */.NdJ("ngModelChange", function TuiPortalExample1_Template_tui_toggle_ngModelChange_1_listener($event) {
          return ctx.show = $event;
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(2, " Show\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(3, TuiPortalExample1_div_3_Template, 2, 0, "div", 1);
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngModel", ctx.show);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("tuiPortal", ctx.show);
      }
    },
    directives: [toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, portal_directive/* TuiPortalDirective */.s],
    styles: [".portal[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.16);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;padding:1.5rem;border-radius:var(--tui-radius-l);background:var(--tui-base-01)}"],
    changeDetection: 0
  });
  return TuiPortalExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/portal/portal.component.ts







function ExampleTuiPortalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-portal-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiPortalComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiPortalComponent = /*#__PURE__*/(() => {
  class ExampleTuiPortalComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 72278).then(__webpack_require__.t.bind(__webpack_require__, 72278, 17)),
        HTML: __webpack_require__.e(/* import() */ 96694).then(__webpack_require__.t.bind(__webpack_require__, 96694, 17)),
        LESS: __webpack_require__.e(/* import() */ 86617).then(__webpack_require__.t.bind(__webpack_require__, 86617, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 13816).then(__webpack_require__.t.bind(__webpack_require__, 13816, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 869).then(__webpack_require__.t.bind(__webpack_require__, 869, 17));
    }

  }

  ExampleTuiPortalComponent.ɵfac = function ExampleTuiPortalComponent_Factory(t) {
    return new (t || ExampleTuiPortalComponent)();
  };

  ExampleTuiPortalComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPortalComponent,
    selectors: [["example-tui-portal"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7418836487763847464$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__3 = goog.getMsg("Directive to show a template in a portal host above all content, similar to dropdowns.");
        i18n_2 = MSG_EXTERNAL_7418836487763847464$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟5982f87b9b19a633ca11211dbb6a7aaa700bdc48␟7418836487763847464:Directive to show a template in a portal host above all content, similar to dropdowns.`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__5 = goog.getMsg("Usage");
        i18n_4 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8859931959958543491$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiPortalModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_8859931959958543491$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟ca9995449081fc6d60ebaeb6fe54a9c3b63254cf␟8859931959958543491: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPortalModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PORTAL_PORTAL_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Portal", "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, ["id", "usage", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPortalComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiPortalComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiPortalComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPortalExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPortalComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/portal/portal.module.ts









let ExampleTuiPortalModule = /*#__PURE__*/(() => {
  class ExampleTuiPortalModule {}

  ExampleTuiPortalModule.ɵfac = function ExampleTuiPortalModule_Factory(t) {
    return new (t || ExampleTuiPortalModule)();
  };

  ExampleTuiPortalModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPortalModule
  });
  ExampleTuiPortalModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, cdk.TuiPortalModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPortalComponent))]]
  });
  return ExampleTuiPortalModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPortalModule, {
    declarations: [ExampleTuiPortalComponent, TuiPortalExample1],
    imports: [fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, cdk.TuiPortalModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPortalComponent]
  });
})();

/***/ })

}]);