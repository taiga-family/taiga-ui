"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22218],{

/***/ 22218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBreadcrumbsModule": () => (/* binding */ ExampleTuiBreadcrumbsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/breadcrumbs/breadcrumbs.component.ts
var breadcrumbs_component = __webpack_require__(98389);
// EXTERNAL MODULE: ./projects/cdk/directives/item/item.directive.ts
var item_directive = __webpack_require__(82707);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/breadcrumbs/examples/1/index.ts







function TuiBreadcrumbsExample1_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", item_r2.routerLink);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2.caption, " ");
  }
}

function TuiBreadcrumbsExample1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiBreadcrumbsExample1_ng_container_1_a_1_Template, 2, 2, "a", 2);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiBreadcrumbsExample1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", item_r5.routerLink);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.caption, " ");
  }
}

function TuiBreadcrumbsExample1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiBreadcrumbsExample1_ng_container_3_a_1_Template, 2, 2, "a", 2);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

let TuiBreadcrumbsExample1 = /*#__PURE__*/(() => {
  class TuiBreadcrumbsExample1 {
    constructor() {
      this.items = [{
        caption: `Selects`,
        routerLink: `/components/select`
      }, {
        caption: `Multi`,
        routerLink: `/components/multi-select`
      }, {
        caption: `With tags`,
        routerLink: `/components/multi-select`
      }, {
        caption: `Current`,
        routerLink: `/navigation/breadcrumbs`,
        routerLinkActiveOptions: {
          exact: true
        }
      }];
    }

  }

  TuiBreadcrumbsExample1.ɵfac = function TuiBreadcrumbsExample1_Factory(t) {
    return new (t || TuiBreadcrumbsExample1)();
  };

  TuiBreadcrumbsExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBreadcrumbsExample1,
    selectors: [["tui-breadcrumbs-example-1"]],
    decls: 4,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf"], ["size", "l", 1, "tui-space_top-2"], ["tuiLink", "", 3, "routerLink", 4, "tuiItem"], ["tuiLink", "", 3, "routerLink"]],
    template: function TuiBreadcrumbsExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-breadcrumbs");
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiBreadcrumbsExample1_ng_container_1_Template, 2, 0, "ng-container", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-breadcrumbs", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiBreadcrumbsExample1_ng_container_3_Template, 2, 0, "ng-container", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
      }
    },
    directives: [breadcrumbs_component/* TuiBreadcrumbsComponent */.l, common/* NgForOf */.sg, item_directive/* TuiItemDirective */.w, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiBreadcrumbsExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/breadcrumbs/breadcrumbs.component.ts















function ExampleTuiBreadcrumbsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-breadcrumbs-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiBreadcrumbsComponent_ng_template_2_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", item_r5.routerLink);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.caption, " ");
  }
}

function ExampleTuiBreadcrumbsComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiBreadcrumbsComponent_ng_template_2_ng_container_2_a_1_Template, 2, 2, "a", 7);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function ExampleTuiBreadcrumbsComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiBreadcrumbsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-breadcrumbs", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBreadcrumbsComponent_ng_template_2_ng_container_2_Template, 2, 0, "ng-container", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiBreadcrumbsComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBreadcrumbsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.items);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiBreadcrumbsComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiBreadcrumbsComponent = /*#__PURE__*/(() => {
  class ExampleTuiBreadcrumbsComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 66534).then(__webpack_require__.t.bind(__webpack_require__, 66534, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 30419).then(__webpack_require__.t.bind(__webpack_require__, 30419, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 30917).then(__webpack_require__.t.bind(__webpack_require__, 30917, 17)),
        HTML: __webpack_require__.e(/* import() */ 83713).then(__webpack_require__.t.bind(__webpack_require__, 83713, 17))
      };
      this.itemsVariants = [[{
        caption: `Select`,
        routerLink: `/tui-select`
      }, {
        caption: `MultiSelect`,
        routerLink: `/tui-multi-select`
      }, {
        caption: `InputTag`,
        routerLink: `/tui-input-tag`
      }, {
        caption: `Current`,
        routerLink: `/tui-breadcrumbs`
      }]];
      this.items = this.itemsVariants[0];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
    }

  }

  ExampleTuiBreadcrumbsComponent.ɵfac = function ExampleTuiBreadcrumbsComponent_Factory(t) {
    return new (t || ExampleTuiBreadcrumbsComponent)();
  };

  ExampleTuiBreadcrumbsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBreadcrumbsComponent,
    selectors: [["example-breadcrumbs"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1410172584561184167$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__1 = goog.getMsg("Navigation element that shows a path from root page to the current");
        i18n_0 = MSG_EXTERNAL_1410172584561184167$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟e9191c63907e476fa6d4d6ec8eb59aa556904225␟1410172584561184167:Navigation element that shows a path from root page to the current`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7686466321475899668$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS___5 = goog.getMsg(" Text size ");
        i18n_4 = MSG_EXTERNAL_7686466321475899668$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟a77edf0ec8cb10a7cb8e9f7d02fbb172a2174fbe␟7686466321475899668: Text size `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6077181393154754925$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiBreadcrumbsModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6077181393154754925$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟9ea8fd8d2e7239a23d4f8b7336519967fd521746␟6077181393154754925: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBreadcrumbsModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BREADCRUMBS_BREADCRUMBS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Breadcrumbs", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [3, "size"], [4, "ngFor", "ngForOf"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiLink", "", 3, "routerLink", 4, "tuiItem"], ["tuiLink", "", 3, "routerLink"], i18n_4, [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiBreadcrumbsComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBreadcrumbsComponent_ng_template_2_Template, 5, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBreadcrumbsComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBreadcrumbsExample1, demo_component/* TuiDocDemoComponent */.F, breadcrumbs_component/* TuiBreadcrumbsComponent */.l, common/* NgForOf */.sg, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, item_directive/* TuiItemDirective */.w, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiBreadcrumbsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/breadcrumbs/breadcrumbs.module.ts










let ExampleTuiBreadcrumbsModule = /*#__PURE__*/(() => {
  class ExampleTuiBreadcrumbsModule {}

  ExampleTuiBreadcrumbsModule.ɵfac = function ExampleTuiBreadcrumbsModule_Factory(t) {
    return new (t || ExampleTuiBreadcrumbsModule)();
  };

  ExampleTuiBreadcrumbsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBreadcrumbsModule
  });
  ExampleTuiBreadcrumbsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit/* TuiBreadcrumbsModule */.Tg, core/* TuiLinkModule */.jzK, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBreadcrumbsComponent))]]
  });
  return ExampleTuiBreadcrumbsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBreadcrumbsModule, {
    declarations: [ExampleTuiBreadcrumbsComponent, TuiBreadcrumbsExample1],
    imports: [kit/* TuiBreadcrumbsModule */.Tg, core/* TuiLinkModule */.jzK, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBreadcrumbsComponent]
  });
})();

/***/ })

}]);