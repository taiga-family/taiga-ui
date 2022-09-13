"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[58419],{

/***/ 58419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHintPointerModule": () => (/* binding */ ExampleTuiHintPointerModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-pointer.directive.ts
var hint_pointer_directive = __webpack_require__(55433);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-pointer/examples/1/index.ts







let TuiHintPointerExample1 = /*#__PURE__*/(() => {
  class TuiHintPointerExample1 {}

  TuiHintPointerExample1.ɵfac = function TuiHintPointerExample1_Factory(t) {
    return new (t || TuiHintPointerExample1)();
  };

  TuiHintPointerExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHintPointerExample1,
    selectors: [["tui-hint-pointer-example-1"]],
    decls: 3,
    vars: 0,
    consts: [["tuiHintPointer", "", "tuiHint", "Wow! How exciting!", "tuiHintDirection", "top-left", 1, "block"]],
    template: function TuiHintPointerExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, "In this block hint follows cursor");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_pointer_directive/* TuiHintPointerDirective */.q],
    styles: ["[_nghost-%COMP%]{display:block}.block[_ngcontent-%COMP%]{padding:5rem 3.125rem;width:18.75rem;text-align:center}"],
    changeDetection: 0
  });
  return TuiHintPointerExample1;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-pointer/hint-pointer.component.ts



















function ExampleTuiHintPointerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-hint-pointer-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiHintPointerComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiHintPointerComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Show Delay ");
  }
}

function ExampleTuiHintPointerComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Hide Delay ");
  }
}

function ExampleTuiHintPointerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 4);
    fesm2015_core/* ɵɵi18n */.SDv(2, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiHintPointerComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiHintPointerComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintPointerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.showDelay = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiHintPointerComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintPointerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.hideDelay = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHintAppearance", ctx_r1.appearance)("tuiHintDirection", ctx_r1.direction)("tuiHintShowDelay", ctx_r1.showDelay)("tuiHintHideDelay", ctx_r1.hideDelay);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showDelay);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideDelay);
  }
}

function ExampleTuiHintPointerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 11);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 14);
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

let ExampleTuiHintPointerComponent = /*#__PURE__*/(() => {
  class ExampleTuiHintPointerComponent extends hint/* AbstractExampleTuiHint */.l {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 9886).then(__webpack_require__.t.bind(__webpack_require__, 9886, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 96060).then(__webpack_require__.t.bind(__webpack_require__, 96060, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 13108).then(__webpack_require__.t.bind(__webpack_require__, 13108, 17)),
        HTML: __webpack_require__.e(/* import() */ 98678).then(__webpack_require__.t.bind(__webpack_require__, 98678, 17))
      };
      this.showDelay = 0;
      this.hideDelay = 0;
    }

  }

  ExampleTuiHintPointerComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiHintPointerComponent_BaseFactory;
    return function ExampleTuiHintPointerComponent_Factory(t) {
      return (ɵExampleTuiHintPointerComponent_BaseFactory || (ɵExampleTuiHintPointerComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiHintPointerComponent)))(t || ExampleTuiHintPointerComponent);
    };
  }();

  ExampleTuiHintPointerComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHintPointerComponent,
    selectors: [["example-hint-pointer"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiHintPointerComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1509302309942116885$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS_1 = goog.getMsg("HintPointer");
        i18n_0 = MSG_EXTERNAL_1509302309942116885$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟95f0d5d74f02b49b095b160c6ea408ffed526cca␟1509302309942116885:HintPointer`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8305095700948392793$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__3 = goog.getMsg("A directive to show a hint above the cursor");
        i18n_2 = MSG_EXTERNAL_8305095700948392793$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟3f4fe6e05ccd827249ba31087da5d4eab43b5c99␟8305095700948392793:A directive to show a hint above the cursor`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2403513147838391388$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__7 = goog.getMsg(" It is followed inside the block ");
        i18n_6 = MSG_EXTERNAL_2403513147838391388$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0c695a241ebb416b6ba5be843f9813f11b414205␟2403513147838391388: It is followed inside the block `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4655669311476465940$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS___9 = goog.getMsg(" Hint content ");
        i18n_8 = MSG_EXTERNAL_4655669311476465940$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟a843c3996eb5a609c82eec6d523710882c14217a␟4655669311476465940: Hint content `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6720924929483848141$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiPointerHintModule{$closeTagCode} into a module where you want to use our directive ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_6720924929483848141$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟383b5cbf557f660e7e8c8216545a2178b25807ec␟6720924929483848141: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPointerHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__13 = goog.getMsg("Add to the template:");
        i18n_12 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_POINTER_HINT_POINTER_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["tuiHintPointer", "", "tuiHint", "Some information", 3, "tuiHintAppearance", "tuiHintDirection", "tuiHintShowDelay", "tuiHintHideDelay"], i18n_6, ["documentationPropertyName", "tuiHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintShowDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintHideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, [1, "b-demo-steps"], i18n_10, ["filename", "myComponent.module.ts", 3, "code"], i18n_12, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHintPointerComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHintPointerComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHintPointerComponent_ng_template_2_Template, 8, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHintPointerComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHintPointerExample1, demo_component/* TuiDocDemoComponent */.F, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_pointer_directive/* TuiHintPointerDirective */.q, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiHintPointerComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-pointer/hint-pointer.module.ts











let ExampleTuiHintPointerModule = /*#__PURE__*/(() => {
  class ExampleTuiHintPointerModule {}

  ExampleTuiHintPointerModule.ɵfac = function ExampleTuiHintPointerModule_Factory(t) {
    return new (t || ExampleTuiHintPointerModule)();
  };

  ExampleTuiHintPointerModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHintPointerModule
  });
  ExampleTuiHintPointerModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiHintModule, kit.TuiIslandModule, core.TuiLinkModule, core.TuiModeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHintPointerComponent))]]
  });
  return ExampleTuiHintPointerModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHintPointerModule, {
    declarations: [ExampleTuiHintPointerComponent, TuiHintPointerExample1],
    imports: [core.TuiHintModule, kit.TuiIslandModule, core.TuiLinkModule, core.TuiModeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiHintPointerComponent]
  });
})();

/***/ })

}]);