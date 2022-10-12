"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75189],{

/***/ 75189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMapperModule": () => (/* binding */ ExampleTuiMapperModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/pipes/mapper/mapper.pipe.ts
var mapper_pipe = __webpack_require__(35271);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/mapper/examples/1/component.ts


let TuiMapperExample1 = /*#__PURE__*/(() => {
  class TuiMapperExample1 {
    constructor() {
      this.mapper = (amount, currencySymbol) => `Total: ${amount} ${currencySymbol}`;
    }

  }

  TuiMapperExample1.ɵfac = function TuiMapperExample1_Factory(t) {
    return new (t || TuiMapperExample1)();
  };

  TuiMapperExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMapperExample1,
    selectors: [["tui-mapper-example1"]],
    decls: 3,
    vars: 5,
    template: function TuiMapperExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "p");
        core/* ɵɵtext */._uU(1);
        core/* ɵɵpipe */.ALo(2, "tuiMapper");
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵtextInterpolate1 */.hij("Transform 10 into ", core/* ɵɵpipeBind3 */.Dn7(2, 1, 10, ctx.mapper, "\u20BD"), "");
      }
    },
    pipes: [mapper_pipe/* TuiMapperPipe */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMapperExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/mapper/examples/2/component.ts


let TuiMapperExample2 = /*#__PURE__*/(() => {
  class TuiMapperExample2 {
    constructor() {
      this.numbers = [1, 2, 3, 4, 5];

      this.mapper = (numbers, multiplier) => numbers.map(number => number * multiplier);
    }

  }

  TuiMapperExample2.ɵfac = function TuiMapperExample2_Factory(t) {
    return new (t || TuiMapperExample2)();
  };

  TuiMapperExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiMapperExample2,
    selectors: [["tui-mapper-example2"]],
    decls: 3,
    vars: 6,
    template: function TuiMapperExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "p");
        core/* ɵɵtext */._uU(1);
        core/* ɵɵpipe */.ALo(2, "tuiMapper");
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵtextInterpolate2 */.AsE("Transform ", ctx.numbers, " into ", core/* ɵɵpipeBind3 */.Dn7(2, 2, ctx.numbers, ctx.mapper, 3), "");
      }
    },
    pipes: [mapper_pipe/* TuiMapperPipe */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMapperExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/mapper/mapper.component.ts








function ExampleTuiMapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 3);
    core/* ɵɵelementStart */.TgZ(1, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(2, "tui-mapper-example1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(4, "tui-mapper-example2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiMapperComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 6);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 7);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 10);
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

let ExampleTuiMapperComponent = /*#__PURE__*/(() => {
  class ExampleTuiMapperComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 82215).then(__webpack_require__.t.bind(__webpack_require__, 82215, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 66694).then(__webpack_require__.t.bind(__webpack_require__, 66694, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 62120).then(__webpack_require__.t.bind(__webpack_require__, 62120, 17)),
        HTML: __webpack_require__.e(/* import() */ 90987).then(__webpack_require__.t.bind(__webpack_require__, 90987, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 49513).then(__webpack_require__.t.bind(__webpack_require__, 49513, 17)),
        HTML: __webpack_require__.e(/* import() */ 64645).then(__webpack_require__.t.bind(__webpack_require__, 64645, 17))
      };
    }

  }

  ExampleTuiMapperComponent.ɵfac = function ExampleTuiMapperComponent_Factory(t) {
    return new (t || ExampleTuiMapperComponent)();
  };

  ExampleTuiMapperComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMapperComponent,
    selectors: [["example-tui-mapper"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8594746851560578197$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__4 = goog.getMsg("With array");
        i18n_3 = MSG_EXTERNAL_8594746851560578197$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟10fe4829c652ad18f53ca09cab7eb79044c55fe4␟8594746851560578197:With array`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1345914388717321709$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__5 = goog.getMsg(" Pipe to transform a value with a function {$startTagTuiDocExample}{$startTagTuiMapperExample1}{$closeTagTuiMapperExample1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiMapperExample2}{$closeTagTuiMapperExample2}{$closeTagTuiDocExample}", {
          "startTagTuiDocExample": "\uFFFD#1\uFFFD",
          "startTagTuiMapperExample1": "\uFFFD#2\uFFFD",
          "closeTagTuiMapperExample1": "\uFFFD/#2\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#3\uFFFD",
          "startTagTuiMapperExample2": "\uFFFD#4\uFFFD",
          "closeTagTuiMapperExample2": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1345914388717321709$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__5;
      } else {
        i18n_0 = $localize`:␟60db275aad6d6fcafa5648c920947a74ad7d2502␟1345914388717321709: Pipe to transform a value with a function ${"\uFFFD#1\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_MAPPER_EXAMPLE1:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE1:${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_MAPPER_EXAMPLE2:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE2:${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7049964330523039628$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiMapperPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_7049964330523039628$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟09e5f19ff0177e58dfd6fff3ef772381bc2db785␟7049964330523039628: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMapperPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__9 = goog.getMsg("Use pipe in template with function and its arguments:");
        i18n_8 = MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_MAPPER_MAPPER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
      }

      return [["header", "Mapper", "package", "CDK", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "base", "heading", i18n_1, 3, "content"], ["id", "base", "heading", i18n_3, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiMapperComponent_ng_template_1_Template, 5, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiMapperComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMapperExample1, TuiMapperExample2, code_component/* TuiDocCodeComponent */.c],
    styles: [".text[_ngcontent-%COMP%]{font-size:1.1875rem}"],
    changeDetection: 0
  });
  return ExampleTuiMapperComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/mapper/mapper.module.ts









let ExampleTuiMapperModule = /*#__PURE__*/(() => {
  class ExampleTuiMapperModule {}

  ExampleTuiMapperModule.ɵfac = function ExampleTuiMapperModule_Factory(t) {
    return new (t || ExampleTuiMapperModule)();
  };

  ExampleTuiMapperModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMapperModule
  });
  ExampleTuiMapperModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[cdk.TuiMapperPipeModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMapperComponent))]]
  });
  return ExampleTuiMapperModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMapperModule, {
    declarations: [ExampleTuiMapperComponent, TuiMapperExample1, TuiMapperExample2],
    imports: [cdk.TuiMapperPipeModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiMapperComponent]
  });
})();

/***/ })

}]);