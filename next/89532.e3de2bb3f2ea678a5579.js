"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89532],{

/***/ 89532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHintDescribeModule": () => (/* binding */ ExampleTuiHintDescribeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
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
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-describe.directive.ts
var hint_describe_directive = __webpack_require__(219);
// EXTERNAL MODULE: ./projects/core/components/tooltip/tooltip.component.ts
var tooltip_component = __webpack_require__(33351);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-describe/examples/1/index.ts












let TuiHintDescribeExample1 = /*#__PURE__*/(() => {
  class TuiHintDescribeExample1 {
    constructor() {
      this.value = ``;
    }

  }

  TuiHintDescribeExample1.ɵfac = function TuiHintDescribeExample1_Factory(t) {
    return new (t || TuiHintDescribeExample1)();
  };

  TuiHintDescribeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHintDescribeExample1,
    selectors: [["tui-hint-describe-example-1"]],
    decls: 8,
    vars: 1,
    consts: [["tuiIconButton", "", "appearance", "secondary", "icon", "tuiIconTooltipLarge", "tuiHint", "Works well with icon buttons", "tuiHintDirection", "right", "tuiHintDescribe", ""], ["id", "button", "appearance", "secondary", "tuiButton", "", "icon", "tuiIconTooltipLarge"], ["content", "Or with external tooltip", "direction", "right", "describeId", "button", 1, "tui-space_top-4", "tui-space_left-4"], ["tuiHintContent", "This is built-in with controls", 1, "b-form", 3, "ngModel", "ngModelChange"]],
    template: function TuiHintDescribeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelement */._UZ(1, "button", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " Hint ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-tooltip", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiHintDescribeExample1_Template_tui_input_ngModelChange_6_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Input with accessible hint\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_describe_directive/* TuiHintDescribeDirective */.$, tooltip_component/* TuiTooltipComponent */.w, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, hint_options_directive/* TuiHintOptionsDirective */.bZ, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiHintDescribeExample1;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-describe/hint-describe.component.ts



















function ExampleTuiHintDescribeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-hint-describe-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiHintDescribeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 7);
  }
}

function ExampleTuiHintDescribeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 8);
  }
}

function ExampleTuiHintDescribeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "input", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHintDescribeComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiHintDescribeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHintDescribeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.id = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHintAppearance", ctx_r1.appearance)("tuiHintDirection", ctx_r1.direction);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.id);
  }
}

function ExampleTuiHintDescribeComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiHintDescribeComponent = /*#__PURE__*/(() => {
  class ExampleTuiHintDescribeComponent extends hint/* AbstractExampleTuiHint */.l {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 3253).then(__webpack_require__.t.bind(__webpack_require__, 3253, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 30573).then(__webpack_require__.t.bind(__webpack_require__, 30573, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 38178).then(__webpack_require__.t.bind(__webpack_require__, 38178, 17)),
        HTML: __webpack_require__.e(/* import() */ 80253).then(__webpack_require__.t.bind(__webpack_require__, 80253, 17))
      };
      this.id = ``;
    }

  }

  ExampleTuiHintDescribeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiHintDescribeComponent_BaseFactory;
    return function ExampleTuiHintDescribeComponent_Factory(t) {
      return (ɵExampleTuiHintDescribeComponent_BaseFactory || (ɵExampleTuiHintDescribeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiHintDescribeComponent)))(t || ExampleTuiHintDescribeComponent);
    };
  }();

  ExampleTuiHintDescribeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHintDescribeComponent,
    selectors: [["example-hint-describe"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiHintDescribeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_450922449719932275$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__1 = goog.getMsg("Directive to show a hint in accessible way upon keyboard focus");
        i18n_0 = MSG_EXTERNAL_450922449719932275$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟164c0396bb806fec169799427e2d1147836c7f38␟450922449719932275:Directive to show a hint in accessible way upon keyboard focus`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS___5 = goog.getMsg(" Content ");
        i18n_4 = MSG_EXTERNAL_741899295101860675$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2741798906911406089$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS___7 = goog.getMsg(" Id of the element ");
        i18n_6 = MSG_EXTERNAL_2741798906911406089$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟71ef8701e7fdb2a52ffa50c8578fe54d299ef43c␟2741798906911406089: Id of the element `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiHintModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_5383102618544615785$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟bd4c8562b8e0cd2b4ea6c4f68710df9ccca0988f␟5383102618544615785: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHintModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HINT_DESCRIBE_HINT_DESCRIBE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "HintDescribe", "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["tuiHint", "I will be visible upon keyboard focus", "tuiHintDescribe", "qwerty", "placeholder", "My id is 'qwerty'", 3, "tuiHintAppearance", "tuiHintDirection"], ["documentationPropertyName", "tuiHint", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiHintDescribe", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_4, i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHintDescribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHintDescribeComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHintDescribeComponent_ng_template_2_Template, 6, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHintDescribeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHintDescribeExample1, demo_component/* TuiDocDemoComponent */.F, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_describe_directive/* TuiHintDescribeDirective */.$, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiHintDescribeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/hint-describe/hint-describe.module.ts












let ExampleTuiHintDescribeModule = /*#__PURE__*/(() => {
  class ExampleTuiHintDescribeModule {}

  ExampleTuiHintDescribeModule.ɵfac = function ExampleTuiHintDescribeModule_Factory(t) {
    return new (t || ExampleTuiHintDescribeModule)();
  };

  ExampleTuiHintDescribeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHintDescribeModule
  });
  ExampleTuiHintDescribeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiHintModule, core.TuiButtonModule, kit.TuiInputModule, core.TuiTooltipModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHintDescribeComponent))]]
  });
  return ExampleTuiHintDescribeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHintDescribeModule, {
    declarations: [ExampleTuiHintDescribeComponent, TuiHintDescribeExample1],
    imports: [tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiHintModule, core.TuiButtonModule, kit.TuiInputModule, core.TuiTooltipModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiHintDescribeComponent]
  });
})();

/***/ })

}]);