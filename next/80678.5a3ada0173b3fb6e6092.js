"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[80678],{

/***/ 80678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSidebarModule": () => (/* binding */ ExampleTuiSidebarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 33 modules
var addon_mobile = __webpack_require__(36518);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/sidebar/sidebar.directive.ts
var sidebar_directive = __webpack_require__(83628);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion.component.ts
var accordion_component = __webpack_require__(36710);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item.component.ts
var accordion_item_component = __webpack_require__(23178);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-content.directive.ts
var accordion_item_content_directive = __webpack_require__(7406);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/sidebar/examples/1/index.ts










function TuiSidebarExample1_div_2_ng_template_4_a_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵpropertyInterpolate1 */.MGl("href", "https://github.com/ng-web-apis/", link_r4, "", fesm2015_core/* ɵɵsanitizeUrl */.LSH);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", link_r4, " ");
  }
}

function TuiSidebarExample1_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiSidebarExample1_div_2_ng_template_4_a_0_Template, 2, 2, "a", 5);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.webApis);
  }
}

function TuiSidebarExample1_div_2_ng_template_7_a_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const link_r6 = ctx.$implicit;
    fesm2015_core/* ɵɵpropertyInterpolate1 */.MGl("href", "https://github.com/tinkoff/", link_r6, "", fesm2015_core/* ɵɵsanitizeUrl */.LSH);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", link_r6, " ");
  }
}

function TuiSidebarExample1_div_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiSidebarExample1_div_2_ng_template_7_a_0_Template, 2, 2, "a", 5);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.tinkoff);
  }
}

function TuiSidebarExample1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-accordion-item", 3);
    fesm2015_core/* ɵɵtext */._uU(3, " Web APIs for Angular ");
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiSidebarExample1_div_2_ng_template_4_Template, 1, 1, "ng-template", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-accordion-item", 3);
    fesm2015_core/* ɵɵtext */._uU(6, " Other libraries ");
    fesm2015_core/* ɵɵtemplate */.YNc(7, TuiSidebarExample1_div_2_ng_template_7_Template, 1, 1, "ng-template", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", false);
  }
}

let TuiSidebarExample1 = /*#__PURE__*/(() => {
  class TuiSidebarExample1 {
    constructor() {
      this.open = false;
      this.webApis = [`Common`, `Audio`, `Canvas`, `Geolocation`, `MIDI`, `Workers`];
      this.tinkoff = [`Taiga-UI`, `ng-event-plugins`, `ng-polymorpheus`, `ng-dompurify`];
    }

    toggle(open) {
      this.open = open;
    }

  }

  TuiSidebarExample1.ɵfac = function TuiSidebarExample1_Factory(t) {
    return new (t || TuiSidebarExample1)();
  };

  TuiSidebarExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSidebarExample1,
    selectors: [["tui-sidebar-example-1"]],
    decls: 3,
    vars: 2,
    consts: [["tuiButton", "", "type", "button", 3, "click", "tuiActiveZoneChange"], [4, "tuiSidebar", "tuiSidebarDirection"], [3, "rounded"], ["borders", "top-bottom"], ["tuiAccordionItemContent", ""], ["tuiLink", "", "target", "_blank", "class", "link", 3, "href", 4, "ngFor", "ngForOf"], ["tuiLink", "", "target", "_blank", 1, "link", 3, "href"]],
    template: function TuiSidebarExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSidebarExample1_Template_button_click_0_listener() {
          return ctx.toggle(true);
        })("tuiActiveZoneChange", function TuiSidebarExample1_Template_button_tuiActiveZoneChange_0_listener($event) {
          return ctx.toggle($event);
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show sidebar ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSidebarExample1_div_2_Template, 8, 1, "div", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiSidebar", ctx.open)("tuiSidebarDirection", "right");
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, active_zone_directive/* TuiActiveZoneDirective */.e, sidebar_directive/* TuiSidebarDirective */.B, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, common/* NgForOf */.sg, link_component/* TuiLinkComponent */.V],
    styles: [".link[_ngcontent-%COMP%]{display:block;margin:.75rem 0}"],
    changeDetection: 0
  });
  return TuiSidebarExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/sidebar/sidebar.component.ts







function ExampleTuiSidebarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-sidebar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiSidebarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18n */.SDv(9, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵi18n */.SDv(13, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleComponent);
  }
}

let ExampleTuiSidebarComponent = /*#__PURE__*/(() => {
  class ExampleTuiSidebarComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 53141).then(__webpack_require__.t.bind(__webpack_require__, 53141, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 49240).then(__webpack_require__.t.bind(__webpack_require__, 49240, 17));
      this.exampleComponent = __webpack_require__.e(/* import() */ 83200).then(__webpack_require__.t.bind(__webpack_require__, 83200, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 9057).then(__webpack_require__.t.bind(__webpack_require__, 9057, 17)),
        HTML: __webpack_require__.e(/* import() */ 36591).then(__webpack_require__.t.bind(__webpack_require__, 36591, 17)),
        LESS: __webpack_require__.e(/* import() */ 68075).then(__webpack_require__.t.bind(__webpack_require__, 68075, 17))
      };
    }

  }

  ExampleTuiSidebarComponent.ɵfac = function ExampleTuiSidebarComponent_Factory(t) {
    return new (t || ExampleTuiSidebarComponent)();
  };

  ExampleTuiSidebarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSidebarComponent,
    selectors: [["example-tui-sidebar"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3982403428275430291$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_1 = goog.getMsg("Sidebar");
        i18n_0 = MSG_EXTERNAL_3982403428275430291$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f5f597a31442988c2eba17966ff4425373b90cbb␟3982403428275430291:Sidebar`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7295430172284511862$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__5 = goog.getMsg(" Directive allows to show arbitrary content in a sidebar above all content. A darkening overlay is shown under the sidebar. ");
        i18n_4 = MSG_EXTERNAL_7295430172284511862$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5b11e74121ff1f99b6d036d02b31658264bb12dd␟7295430172284511862: Directive allows to show arbitrary content in a sidebar above all content. A darkening overlay is shown under the sidebar. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3837737414378433535$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiSidebarModule{$closeTagCode} into your component module. Also add {$startTagCode}TuiActiveZoneModule{$closeTagCode} if you want to close sidebar when user clicked outside: ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_3837737414378433535$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟dd201446daf2f636c98d2b5c4a0b8ace49e39c58␟3837737414378433535: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiSidebarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: into your component module. Also add ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiActiveZoneModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: if you want to close sidebar when user clicked outside: `;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7028255409890250581$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__13 = goog.getMsg("Control sidebar in component");
        i18n_12 = MSG_EXTERNAL_7028255409890250581$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SIDEBAR_SIDEBAR_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟2722db4e79af0c1c250940f4aa148489ee11108e␟7028255409890250581:Control sidebar in component`;
      }

      return [["header", i18n_0, "package", "ADDON-MOBILE", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "basic", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"], i18n_12, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSidebarComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSidebarComponent_ng_template_2_Template, 15, 3, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiSidebarExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiSidebarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/sidebar/sidebar.module.ts











let ExampleTuiSidebarModule = /*#__PURE__*/(() => {
  class ExampleTuiSidebarModule {}

  ExampleTuiSidebarModule.ɵfac = function ExampleTuiSidebarModule_Factory(t) {
    return new (t || ExampleTuiSidebarModule)();
  };

  ExampleTuiSidebarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSidebarModule
  });
  ExampleTuiSidebarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_mobile/* TuiSidebarModule */.T, cdk/* TuiActiveZoneModule */.Ah6, core/* TuiButtonModule */.fNO, kit/* TuiAccordionModule */.iKB, core/* TuiLinkModule */.jzK, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSidebarComponent))]]
  });
  return ExampleTuiSidebarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSidebarModule, {
    declarations: [ExampleTuiSidebarComponent, TuiSidebarExample1],
    imports: [common/* CommonModule */.ez, addon_mobile/* TuiSidebarModule */.T, cdk/* TuiActiveZoneModule */.Ah6, core/* TuiButtonModule */.fNO, kit/* TuiAccordionModule */.iKB, core/* TuiLinkModule */.jzK, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiSidebarComponent]
  });
})();

/***/ })

}]);