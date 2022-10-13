"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[25378],{

/***/ 25378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFilterModule": () => (/* binding */ ExampleTuiFilterModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/pipes/filter/filter.pipe.ts
var filter_pipe = __webpack_require__(47305);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter/examples/1/component.ts




function TuiFilterExample1_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr");
    core/* ɵɵelementStart */.TgZ(1, "td", 4);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td", 5);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(item_r1.name);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(item_r1.price);
  }
}

let TuiFilterExample1 = /*#__PURE__*/(() => {
  class TuiFilterExample1 {
    constructor() {
      this.items = [{
        name: `Sword`,
        price: 1000
      }, {
        name: `Axe`,
        price: 100
      }, {
        name: `Spear`,
        price: 500
      }];

      this.matcher = (item, search) => item.price > search;
    }

  }

  TuiFilterExample1.ɵfac = function TuiFilterExample1_Factory(t) {
    return new (t || TuiFilterExample1)();
  };

  TuiFilterExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterExample1,
    selectors: [["tui-filter-example1"]],
    decls: 9,
    vars: 5,
    consts: [[1, "tui-table", "table"], [1, "tui-table__th", "cell_name"], [1, "tui-table__th", "cell_sum"], [4, "ngFor", "ngForOf"], [1, "tui-table__td", "cell_name"], [1, "tui-table__td", "cell_sum"]],
    template: function TuiFilterExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "table", 0);
        core/* ɵɵelementStart */.TgZ(1, "thead");
        core/* ɵɵelementStart */.TgZ(2, "tr");
        core/* ɵɵelementStart */.TgZ(3, "th", 1);
        core/* ɵɵtext */._uU(4, "Name");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "th", 2);
        core/* ɵɵtext */._uU(6, "Sum, $");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(7, TuiFilterExample1_tr_7_Template, 5, 2, "tr", 3);
        core/* ɵɵpipe */.ALo(8, "tuiFilter");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngForOf", core/* ɵɵpipeBind3 */.Dn7(8, 1, ctx.items, ctx.matcher, 300));
      }
    },
    directives: [common/* NgForOf */.sg],
    pipes: [filter_pipe/* TuiFilterPipe */.S],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFilterExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter/filter.component.ts







function ExampleTuiFilterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 3);
    core/* ɵɵelementStart */.TgZ(1, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(2, "tui-filter-example1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiFilterComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiFilterComponent = /*#__PURE__*/(() => {
  class ExampleTuiFilterComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 15376).then(__webpack_require__.t.bind(__webpack_require__, 15376, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 88988).then(__webpack_require__.t.bind(__webpack_require__, 88988, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 14493).then(__webpack_require__.t.bind(__webpack_require__, 14493, 17)),
        HTML: __webpack_require__.e(/* import() */ 18710).then(__webpack_require__.t.bind(__webpack_require__, 18710, 17))
      };
    }

  }

  ExampleTuiFilterComponent.ɵfac = function ExampleTuiFilterComponent_Factory(t) {
    return new (t || ExampleTuiFilterComponent)();
  };

  ExampleTuiFilterComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFilterComponent,
    selectors: [["example-tui-filter"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1365788925292352994$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__3 = goog.getMsg(" Pipe for filtering an array {$startTagTuiDocExample}{$startTagTuiFilterExample1}{$closeTagTuiFilterExample1}{$closeTagTuiDocExample}", {
          "startTagTuiDocExample": "\uFFFD#1\uFFFD",
          "startTagTuiFilterExample1": "\uFFFD#2\uFFFD",
          "closeTagTuiFilterExample1": "\uFFFD/#2\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#1\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1365788925292352994$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__3;
      } else {
        i18n_0 = $localize`:␟94367b4a97b8f508723bb7e666f107af5f89034d␟1365788925292352994: Pipe for filtering an array ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_FILTER_EXAMPLE1:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_FILTER_EXAMPLE1:${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2902555709652686989$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiFilterPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2902555709652686989$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟0d79a28307cbe51e81b15186c1b80d6c1781e592␟2902555709652686989: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFilterPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__7 = goog.getMsg("Use pipe in template with function and its arguments:");
        i18n_6 = MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FILTER_FILTER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
      }

      return [["header", "Filter", "package", "CDK", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "base", "heading", i18n_1, 3, "content"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiFilterComponent_ng_template_1_Template, 3, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiFilterComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiFilterExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiFilterComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/filter/filter.module.ts









let ExampleTuiFilterModule = /*#__PURE__*/(() => {
  class ExampleTuiFilterModule {}

  ExampleTuiFilterModule.ɵfac = function ExampleTuiFilterModule_Factory(t) {
    return new (t || ExampleTuiFilterModule)();
  };

  ExampleTuiFilterModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFilterModule
  });
  ExampleTuiFilterModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[cdk.TuiFilterPipeModule, addon_commerce.TuiMoneyModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFilterComponent))]]
  });
  return ExampleTuiFilterModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFilterModule, {
    declarations: [ExampleTuiFilterComponent, TuiFilterExample1],
    imports: [cdk.TuiFilterPipeModule, addon_commerce.TuiMoneyModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiFilterComponent]
  });
})();

/***/ })

}]);