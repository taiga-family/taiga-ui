"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[45507],{

/***/ 45507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiReorderModule": () => (/* binding */ ExampleTuiReorderModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-table/components/reorder/reorder.component.ts
var reorder_component = __webpack_require__(52061);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/reorder/examples/1/index.ts


let TuiReorderExample1 = /*#__PURE__*/(() => {
  class TuiReorderExample1 {
    constructor() {
      this.items = [`John Cleese`, `Eric Idle`, `Michael Palin`, `Terry Gilliam`, `Terry Jones`, `Graham Chapman`];
      this.enabled = this.items;
    }

  }

  TuiReorderExample1.ɵfac = function TuiReorderExample1_Factory(t) {
    return new (t || TuiReorderExample1)();
  };

  TuiReorderExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiReorderExample1,
    selectors: [["tui-reorder-example-1"]],
    decls: 1,
    vars: 2,
    consts: [[1, "list", 3, "items", "enabled", "itemsChange", "enabledChange"]],
    template: function TuiReorderExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-reorder", 0);
        core/* ɵɵlistener */.NdJ("itemsChange", function TuiReorderExample1_Template_tui_reorder_itemsChange_0_listener($event) {
          return ctx.items = $event;
        })("enabledChange", function TuiReorderExample1_Template_tui_reorder_enabledChange_0_listener($event) {
          return ctx.enabled = $event;
        });
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("items", ctx.items)("enabled", ctx.enabled);
      }
    },
    directives: [reorder_component/* TuiReorderComponent */.e],
    styles: [".list[_ngcontent-%COMP%]{width:12.5rem}"],
    changeDetection: 0
  });
  return TuiReorderExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/reorder/reorder.component.ts







function ExampleTuiReorderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-reorder-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiReorderComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiReorderComponent = /*#__PURE__*/(() => {
  class ExampleTuiReorderComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 59182).then(__webpack_require__.t.bind(__webpack_require__, 59182, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 22964).then(__webpack_require__.t.bind(__webpack_require__, 22964, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 89860).then(__webpack_require__.t.bind(__webpack_require__, 89860, 17)),
        HTML: __webpack_require__.e(/* import() */ 2475).then(__webpack_require__.t.bind(__webpack_require__, 2475, 17))
      };
    }

  }

  ExampleTuiReorderComponent.ɵfac = function ExampleTuiReorderComponent_Factory(t) {
    return new (t || ExampleTuiReorderComponent)();
  };

  ExampleTuiReorderComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiReorderComponent,
    selectors: [["example-tui-reorder"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7330041947239599779$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__3 = goog.getMsg("Component to change order of elements in an array");
        i18n_2 = MSG_EXTERNAL_7330041947239599779$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟a2f4cf6efd7f3c55087058b16fa01f2dce618b72␟7330041947239599779:Component to change order of elements in an array`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__5 = goog.getMsg("Usage");
        i18n_4 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6124922560776348148$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__7 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiReorderModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6124922560776348148$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟9138f40a7bd5053d1559c3adad6fd18fed773035␟6124922560776348148: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiReorderModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_REORDER_REORDER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Reorder", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, ["id", "usage", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiReorderComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiReorderComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiReorderComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiReorderExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiReorderComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/reorder/reorder.module.ts








let ExampleTuiReorderModule = /*#__PURE__*/(() => {
  class ExampleTuiReorderModule {}

  ExampleTuiReorderModule.ɵfac = function ExampleTuiReorderModule_Factory(t) {
    return new (t || ExampleTuiReorderModule)();
  };

  ExampleTuiReorderModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiReorderModule
  });
  ExampleTuiReorderModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_table.TuiReorderModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiReorderComponent))]]
  });
  return ExampleTuiReorderModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiReorderModule, {
    declarations: [ExampleTuiReorderComponent, TuiReorderExample1],
    imports: [common/* CommonModule */.ez, addon_table.TuiReorderModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiReorderComponent]
  });
})();

/***/ })

}]);