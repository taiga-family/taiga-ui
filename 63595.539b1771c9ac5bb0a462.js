"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[63595],{

/***/ 63595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBarModule": () => (/* binding */ ExampleTuiBarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-charts/components/bar/bar.component.ts
var bar_component = __webpack_require__(25588);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar/examples/1/index.ts


let TuiBarExample1 = /*#__PURE__*/(() => {
  class TuiBarExample1 {}

  TuiBarExample1.ɵfac = function TuiBarExample1_Factory(t) {
    return new (t || TuiBarExample1)();
  };

  TuiBarExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarExample1,
    selectors: [["tui-bar-example-1"]],
    decls: 1,
    vars: 0,
    consts: [[1, "bar"]],
    template: function TuiBarExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar", 0);
      }
    },
    directives: [bar_component/* TuiBarComponent */.o],
    styles: [".bar[_ngcontent-%COMP%]{height:6.25rem;background:var(--tui-primary)}"],
    changeDetection: 0
  });
  return TuiBarExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar/examples/2/index.ts


let TuiBarExample2 = /*#__PURE__*/(() => {
  class TuiBarExample2 {
    constructor() {
      this.value = [30, 15, 10];
    }

  }

  TuiBarExample2.ɵfac = function TuiBarExample2_Factory(t) {
    return new (t || TuiBarExample2)();
  };

  TuiBarExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarExample2,
    selectors: [["tui-bar-example-2"]],
    decls: 1,
    vars: 1,
    consts: [["size", "s", 1, "bar", 3, "value"]],
    template: function TuiBarExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [bar_component/* TuiBarComponent */.o],
    styles: [".bar[_ngcontent-%COMP%]{height:6.25rem;--tui-chart-0: gold;--tui-chart-1: skyblue;--tui-chart-2: pink}"],
    changeDetection: 0
  });
  return TuiBarExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar/bar.component.ts












function ExampleTuiBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-bar-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(5, "tui-bar-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiBarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 8);
  }
}

function ExampleTuiBarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiBarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelement */._UZ(1, "tui-bar", 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiBarComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = core/* ɵɵnextContext */.oxw();
      return ctx_r5.size = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiBarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r7 = core/* ɵɵnextContext */.oxw();
      return ctx_r7.value = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("size", ctx_r1.size)("value", ctx_r1.value);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 10);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 11);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 12);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 13);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiBarComponent = /*#__PURE__*/(() => {
  class ExampleTuiBarComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 8040).then(__webpack_require__.t.bind(__webpack_require__, 8040, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 11927).then(__webpack_require__.t.bind(__webpack_require__, 11927, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 19149).then(__webpack_require__.t.bind(__webpack_require__, 19149, 17)),
        HTML: __webpack_require__.e(/* import() */ 20930).then(__webpack_require__.t.bind(__webpack_require__, 20930, 17)),
        LESS: __webpack_require__.e(/* import() */ 6812).then(__webpack_require__.t.bind(__webpack_require__, 6812, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 52138).then(__webpack_require__.t.bind(__webpack_require__, 52138, 17)),
        HTML: __webpack_require__.e(/* import() */ 78261).then(__webpack_require__.t.bind(__webpack_require__, 78261, 17)),
        LESS: __webpack_require__.e(/* import() */ 51463).then(__webpack_require__.t.bind(__webpack_require__, 51463, 17))
      };
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[1];
      this.valueVariants = [[30, 20, 10], [237, 50, 10, 5, 1]];
      this.value = this.valueVariants[0];
    }

  }

  ExampleTuiBarComponent.ɵfac = function ExampleTuiBarComponent_Factory(t) {
    return new (t || ExampleTuiBarComponent)();
  };

  ExampleTuiBarComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBarComponent,
    selectors: [["example-tui-bar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6587679027921703718$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS_1 = goog.getMsg("Bar");
        i18n_0 = MSG_EXTERNAL_6587679027921703718$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟511bd0e434a0204423622097d7f28ca9d946269b␟6587679027921703718:Bar`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4909406230971978781$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__3 = goog.getMsg("A bar for bar chart");
        i18n_2 = MSG_EXTERNAL_4909406230971978781$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟eca585a8f7011fb71c5819f142e2a90ac24edecd␟4909406230971978781:A bar for bar chart`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_107972732106533073$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__7 = goog.getMsg("Segments");
        i18n_6 = MSG_EXTERNAL_107972732106533073$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟044529b22038befea803a2eb9b91ad4c68ed07db␟107972732106533073:Segments`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___9 = goog.getMsg(" Size ");
        i18n_8 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7703224395772741235$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___11 = goog.getMsg(" An array of segments ");
        i18n_10 = MSG_EXTERNAL_7703224395772741235$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟8b8c33fdf93ac88fe4cda3e6ccdabbfba9e0232b␟7703224395772741235: An array of segments `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7576166659982546507$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiBarModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_7576166659982546507$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_BAR_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["id", "segments", "heading", i18n_6, 3, "content"], [1, "bar", 3, "size", "value"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiBarComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiBarComponent_ng_template_2_Template, 5, 6, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiBarComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBarExample1, TuiBarExample2, demo_component/* TuiDocDemoComponent */.F, bar_component/* TuiBarComponent */.o, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".bar[_ngcontent-%COMP%]{height:6.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiBarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar/bar.module.ts









let ExampleTuiBarModule = /*#__PURE__*/(() => {
  class ExampleTuiBarModule {}

  ExampleTuiBarModule.ɵfac = function ExampleTuiBarModule_Factory(t) {
    return new (t || ExampleTuiBarModule)();
  };

  ExampleTuiBarModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBarModule
  });
  ExampleTuiBarModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiBarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBarComponent))]]
  });
  return ExampleTuiBarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBarModule, {
    declarations: [ExampleTuiBarComponent, TuiBarExample1, TuiBarExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiBarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBarComponent]
  });
})();

/***/ })

}]);