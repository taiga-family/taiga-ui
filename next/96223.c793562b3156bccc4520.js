"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[96223],{

/***/ 96223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHintManualModule": () => (/* binding */ ExampleTuiHintManualModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-manual.directive.ts
var hint_manual_directive = __webpack_require__(56059);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-manual/examples/1/index.ts











function TuiHintManualExample1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵtext */._uU(1, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(3, " Hint ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiHintManualExample1 = /*#__PURE__*/(() => {
  class TuiHintManualExample1 {
    constructor() {
      this.hintShown = false;
    }

    toggleHint() {
      this.hintShown = !this.hintShown;
    }

  }

  TuiHintManualExample1.ɵfac = function TuiHintManualExample1_Factory(t) {
    return new (t || TuiHintManualExample1)();
  };

  TuiHintManualExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHintManualExample1,
    selectors: [["tui-hint-manual-example-1"]],
    decls: 4,
    vars: 2,
    consts: [["tuiButton", "", "type", "button", 3, "tuiHint", "tuiHintManual", "click"], ["template", ""], ["tuiMode", "onDark"], ["tuiLink", "", "routerLink", "hint", 1, "link"]],
    template: function TuiHintManualExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiHintManualExample1_Template_button_click_0_listener() {
          return ctx.toggleHint();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Hint\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiHintManualExample1_ng_template_2_Template, 4, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r0)("tuiHintManual", ctx.hintShown);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_manual_directive/* TuiHintManualDirective */.Z, mode_directive/* TuiModeDirective */.w, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    styles: ["[_nghost-%COMP%]{display:block}"],
    changeDetection: 0
  });
  return TuiHintManualExample1;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/hint.ts
var hint = __webpack_require__(93352);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-manual/hint-manual.component.ts




















function ExampleTuiHintManualComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-hint-manual-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiHintManualComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 7);
  }
}

function ExampleTuiHintManualComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 8);
  }
}

function ExampleTuiHintManualComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiHintManualComponent_ng_template_2_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.sayHi();
    });
    fesm2015_core/* ɵɵtext */._uU(2, " A strange button ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiHintManualComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiHintManualComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintManualComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.show = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHintManual", ctx_r1.show)("tuiHintAppearance", ctx_r1.appearance)("tuiHintDirection", ctx_r1.direction);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.show);
  }
}

function ExampleTuiHintManualComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 13);
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

let ExampleTuiHintManualComponent = /*#__PURE__*/(() => {
  class ExampleTuiHintManualComponent extends hint/* AbstractExampleTuiHint */.l {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 74277).then(__webpack_require__.t.bind(__webpack_require__, 74277, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 67707).then(__webpack_require__.t.bind(__webpack_require__, 67707, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 69206).then(__webpack_require__.t.bind(__webpack_require__, 69206, 17)),
        HTML: __webpack_require__.e(/* import() */ 64104).then(__webpack_require__.t.bind(__webpack_require__, 64104, 17))
      };
      this.show = false;
    }

    sayHi() {
      console.info(`Hi all!`);
    }

  }

  ExampleTuiHintManualComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiHintManualComponent_BaseFactory;
    return function ExampleTuiHintManualComponent_Factory(t) {
      return (ɵExampleTuiHintManualComponent_BaseFactory || (ɵExampleTuiHintManualComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiHintManualComponent)))(t || ExampleTuiHintManualComponent);
    };
  }();

  ExampleTuiHintManualComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHintManualComponent,
    selectors: [["example-hint-manual"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiHintManualComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3855161587228143615$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__1 = goog.getMsg("Directive to show a hint manually");
        i18n_0 = MSG_EXTERNAL_3855161587228143615$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟c8c45ebec06566ef7a3a59ef2384321feec36e37␟3855161587228143615:Directive to show a hint manually`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS___5 = goog.getMsg(" Content ");
        i18n_4 = MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2409354495697805229$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS___7 = goog.getMsg(" Show/hide hint ");
        i18n_6 = MSG_EXTERNAL_2409354495697805229$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟402b0978874aa99343a9ae1d9c7fc1a460f92eff␟2409354495697805229: Show/hide hint `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiHintModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟bd4c8562b8e0cd2b4ea6c4f68710df9ccca0988f␟5383102618544615785: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_MANUAL_HINT_MANUAL_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "HintManual", "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["tuiButton", "", "type", "button", "tuiHint", "It says 'Hi all!' into console", 3, "tuiHintManual", "tuiHintAppearance", "tuiHintDirection", "click"], ["documentationPropertyName", "tuiHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintManual", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_4, i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHintManualComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHintManualComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHintManualComponent_ng_template_2_Template, 7, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHintManualComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHintManualExample1, demo_component/* TuiDocDemoComponent */.F, button_component/* TuiButtonComponent */.v, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_manual_directive/* TuiHintManualDirective */.Z, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiHintManualComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-manual/hint-manual.module.ts










let ExampleTuiHintManualModule = /*#__PURE__*/(() => {
  class ExampleTuiHintManualModule {}

  ExampleTuiHintManualModule.ɵfac = function ExampleTuiHintManualModule_Factory(t) {
    return new (t || ExampleTuiHintManualModule)();
  };

  ExampleTuiHintManualModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHintManualModule
  });
  ExampleTuiHintManualModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiButtonModule, core.TuiHintModule, core.TuiLinkModule, core.TuiModeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHintManualComponent))]]
  });
  return ExampleTuiHintManualModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHintManualModule, {
    declarations: [ExampleTuiHintManualComponent, TuiHintManualExample1],
    imports: [core.TuiButtonModule, core.TuiHintModule, core.TuiLinkModule, core.TuiModeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiHintManualComponent]
  });
})();

/***/ })

}]);