"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[76609],{

/***/ 76609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHintModule": () => (/* binding */ ExampleTuiHintModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint/examples/1/index.ts







function TuiHintExample1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1, " What is ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵtext */._uU(3, "love");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " ? ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div");
    fesm2015_core/* ɵɵtext */._uU(6, "Baby don't hurt me");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "div");
    fesm2015_core/* ɵɵtext */._uU(8, "Don't hurt me");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div");
    fesm2015_core/* ɵɵtext */._uU(10, "No more...");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiHintExample1 = /*#__PURE__*/(() => {
  class TuiHintExample1 {}

  TuiHintExample1.ɵfac = function TuiHintExample1_Factory(t) {
    return new (t || TuiHintExample1)();
  };

  TuiHintExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHintExample1,
    selectors: [["tui-hint-example-1"]],
    decls: 3,
    vars: 3,
    consts: [["size", "l", "text", "\u2764", "tuiHintAppearance", "onDark", "tuiHintDirection", "right", 3, "tuiHint", "autoColor", "rounded"], ["tooltip", ""]],
    template: function TuiHintExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-avatar", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiHintExample1_ng_template_1_Template, 11, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r0)("autoColor", true)("rounded", true);
      }
    },
    directives: [avatar_component/* TuiAvatarComponent */.J, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D],
    styles: ["[_nghost-%COMP%]{display:block;margin:-1.25rem;padding:1.875rem;background:#3e4757;color:var(--tui-base-01)}"],
    changeDetection: 0
  });
  return TuiHintExample1;
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
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-describe.directive.ts
var hint_describe_directive = __webpack_require__(219);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint/hint.component.ts




















function ExampleTuiHintComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-hint-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiHintComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " To be accessible, hint should be set to a focusable element. See ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3, "HintDescribe");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiHintComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Content ");
  }
}

function ExampleTuiHintComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Show Delay ");
  }
}

function ExampleTuiHintComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Hide Delay ");
  }
}

function ExampleTuiHintComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHintComponent_ng_template_2_ng_template_1_Template, 4, 0, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "span", 5);
    fesm2015_core/* ɵɵtext */._uU(4, " Hover it! ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "input", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiHintComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiHintComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.showDelay = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiHintComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.hideDelay = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "inherited-documentation");
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(2);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r3)("tuiHintAppearance", ctx_r1.appearance)("tuiHintDirection", ctx_r1.direction)("tuiHintShowDelay", ctx_r1.showDelay)("tuiHintHideDelay", ctx_r1.hideDelay)("tuiHintDescribe", "qwerty");
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showDelay);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideDelay);
  }
}

function ExampleTuiHintComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiHintComponent = /*#__PURE__*/(() => {
  class ExampleTuiHintComponent extends hint/* AbstractExampleTuiHint */.l {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 98297).then(__webpack_require__.t.bind(__webpack_require__, 98297, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 55754).then(__webpack_require__.t.bind(__webpack_require__, 55754, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 63441).then(__webpack_require__.t.bind(__webpack_require__, 63441, 17)),
        HTML: __webpack_require__.e(/* import() */ 22947).then(__webpack_require__.t.bind(__webpack_require__, 22947, 17))
      };
      this.showDelay = 500;
      this.hideDelay = 200;
    }

  }

  ExampleTuiHintComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiHintComponent_BaseFactory;
    return function ExampleTuiHintComponent_Factory(t) {
      return (ɵExampleTuiHintComponent_BaseFactory || (ɵExampleTuiHintComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiHintComponent)))(t || ExampleTuiHintComponent);
    };
  }();

  ExampleTuiHintComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHintComponent,
    selectors: [["example-hint"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiHintComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_121484984153359089$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__1 = goog.getMsg("Directive to show a hint by hover of an element");
        i18n_0 = MSG_EXTERNAL_121484984153359089$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟69db50938a0ae1ac29b1d2a49b48c5b17eb3a887␟121484984153359089:Directive to show a hint by hover of an element`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiHintModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟bd4c8562b8e0cd2b4ea6c4f68710df9ccca0988f␟5383102618544615785: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__7 = goog.getMsg("Add to the template:");
        i18n_6 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_HINT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Hint", "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_0, ["id", "multiple", "heading", i18n_2, 3, "content"], ["hint", ""], [3, "tuiHint", "tuiHintAppearance", "tuiHintDirection", "tuiHintShowDelay", "tuiHintHideDelay", "tuiHintDescribe"], ["id", "qwerty"], ["documentationPropertyName", "tuiHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintShowDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintHideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", "routerLink", "/directives/hint-describe"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHintComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHintComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHintComponent_ng_template_2_Template, 11, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHintComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHintExample1, demo_component/* TuiDocDemoComponent */.F, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_describe_directive/* TuiHintDescribeDirective */.$, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiHintComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint/hint.module.ts










let ExampleTuiHintModule = /*#__PURE__*/(() => {
  class ExampleTuiHintModule {}

  ExampleTuiHintModule.ɵfac = function ExampleTuiHintModule_Factory(t) {
    return new (t || ExampleTuiHintModule)();
  };

  ExampleTuiHintModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHintModule
  });
  ExampleTuiHintModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiHintModule, kit.TuiAvatarModule, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHintComponent))]]
  });
  return ExampleTuiHintModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHintModule, {
    declarations: [ExampleTuiHintComponent, TuiHintExample1],
    imports: [core.TuiHintModule, kit.TuiAvatarModule, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiHintComponent]
  });
})();

/***/ })

}]);