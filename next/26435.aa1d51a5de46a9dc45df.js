"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26435],{

/***/ 26435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiElasticStickyModule": () => (/* binding */ ExampleTuiElasticStickyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(87519);
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollbar.component.ts
var scrollbar_component = __webpack_require__(3881);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/elastic-sticky/elastic-sticky.directive.ts
var elastic_sticky_directive = __webpack_require__(98599);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/elastic-sticky/examples/1/index.ts








let TuiElasticStickyExample1 = /*#__PURE__*/(() => {
  class TuiElasticStickyExample1 {
    ngAfterViewInit() {
      if (!this.elasticSticky) {
        return;
      } // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
      // we will not trigger unnecessary change detection when scale is less than 0.5


      this.scale$ = this.elasticSticky.tuiElasticSticky.pipe((0,map/* map */.U)(scale => (0,cdk.tuiClamp)(scale, 0.5, 1)), (0,startWith/* startWith */.O)(1), (0,distinctUntilChanged/* distinctUntilChanged */.x)());
    }

  }

  TuiElasticStickyExample1.ɵfac = function TuiElasticStickyExample1_Factory(t) {
    return new (t || TuiElasticStickyExample1)();
  };

  TuiElasticStickyExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiElasticStickyExample1,
    selectors: [["tui-elastic-sticky-example-1"]],
    viewQuery: function TuiElasticStickyExample1_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(addon_mobile.TuiElasticStickyDirective, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.elasticSticky = _t.first);
      }
    },
    decls: 23,
    vars: 5,
    consts: [[1, "scrollbar"], ["tuiElasticSticky", "", 1, "header"], [1, "wrapper"], [1, "money", 3, "value"]],
    template: function TuiElasticStickyExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-scrollbar", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, "I never wanted to do this in the first place!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "header", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-money", 3);
        fesm2015_core/* ɵɵpipe */.ALo(6, "async");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
        fesm2015_core/* ɵɵtext */._uU(8, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵtext */._uU(10, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵtext */._uU(12, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵtext */._uU(14, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p");
        fesm2015_core/* ɵɵtext */._uU(16, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
        fesm2015_core/* ɵɵtext */._uU(18, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "p");
        fesm2015_core/* ɵɵtext */._uU(20, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "p");
        fesm2015_core/* ɵɵtext */._uU(22, "I always wanted to be... a lumberjack!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵstyleProp */.Udp("font-size", fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 3, ctx.scale$), "em");
        fesm2015_core/* ɵɵproperty */.Q6J("value", 237000);
      }
    },
    directives: [scrollbar_component/* TuiScrollbarComponent */.I, elastic_sticky_directive/* TuiElasticStickyDirective */.X, money_component/* TuiMoneyComponent */.o],
    pipes: [common/* AsyncPipe */.Ov],
    styles: ["[_nghost-%COMP%]{display:block}.scrollbar[_ngcontent-%COMP%]{height:12.5rem}.header[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;height:5.5rem;pointer-events:none}.wrapper[_ngcontent-%COMP%]{color:var(--tui-base-01);background:#bc71c9;font-size:2rem;pointer-events:auto}.money[_ngcontent-%COMP%]{display:block;line-height:1em;padding:1em 1.5rem}"],
    changeDetection: 0
  });
  return TuiElasticStickyExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/elastic-sticky/elastic-sticky.component.ts







function ExampleTuiElasticStickyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-elastic-sticky-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiElasticStickyComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiElasticStickyComponent = /*#__PURE__*/(() => {
  class ExampleTuiElasticStickyComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 97021).then(__webpack_require__.t.bind(__webpack_require__, 97021, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 79869).then(__webpack_require__.t.bind(__webpack_require__, 79869, 17));
      this.exampleComponent = __webpack_require__.e(/* import() */ 99213).then(__webpack_require__.t.bind(__webpack_require__, 99213, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 5488).then(__webpack_require__.t.bind(__webpack_require__, 5488, 17)),
        HTML: __webpack_require__.e(/* import() */ 79275).then(__webpack_require__.t.bind(__webpack_require__, 79275, 17)),
        LESS: __webpack_require__.e(/* import() */ 35134).then(__webpack_require__.t.bind(__webpack_require__, 35134, 17))
      };
    }

  }

  ExampleTuiElasticStickyComponent.ɵfac = function ExampleTuiElasticStickyComponent_Factory(t) {
    return new (t || ExampleTuiElasticStickyComponent)();
  };

  ExampleTuiElasticStickyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiElasticStickyComponent,
    selectors: [["example-tui-elastic-sticky"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2999418804116570988$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_1 = goog.getMsg("ElasticSticky");
        i18n_0 = MSG_EXTERNAL_2999418804116570988$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟1bbe38f3d6e9ed9c99d121016ed7736383159712␟2999418804116570988:ElasticSticky`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1069739451984311177$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__5 = goog.getMsg(" Directive allows to scale \"stuck\" sticky heading. It can also be used as service {$startTagCode}TuiElasticStickyService{$closeTagCode}", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_1069739451984311177$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c6235b43afa4c1ef8a01717b04ef107c2266f2d6␟1069739451984311177: Directive allows to scale "stuck" sticky heading. It can also be used as service ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TuiElasticStickyService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6720297895407195491$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiScrollbarModule{$closeTagCode} and {$startTagCode}TuiElasticStickyModule{$closeTagCode} into your component module: ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_6720297895407195491$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟0bd953ba150777bd6895f0c553536a67306210d3␟6720297895407195491: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiScrollbarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiElasticStickyModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: into your component module: `;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2855971164966194574$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__13 = goog.getMsg("Subscribe on changes and scale elements:");
        i18n_12 = MSG_EXTERNAL_2855971164966194574$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟d96ae21b5f9b7981f17002f4c6f6bc0e4365dc95␟2855971164966194574:Subscribe on changes and scale elements:`;
      }

      return [["header", i18n_0, "package", "ADDON-MOBILE", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "basic", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"], i18n_12, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiElasticStickyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiElasticStickyComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiElasticStickyComponent_ng_template_2_Template, 15, 3, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiElasticStickyExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiElasticStickyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/elastic-sticky/elastic-sticky.module.ts










let ExampleTuiElasticStickyModule = /*#__PURE__*/(() => {
  class ExampleTuiElasticStickyModule {}

  ExampleTuiElasticStickyModule.ɵfac = function ExampleTuiElasticStickyModule_Factory(t) {
    return new (t || ExampleTuiElasticStickyModule)();
  };

  ExampleTuiElasticStickyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiElasticStickyModule
  });
  ExampleTuiElasticStickyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_commerce.TuiMoneyModule, core.TuiScrollbarModule, addon_mobile.TuiElasticStickyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiElasticStickyComponent))]]
  });
  return ExampleTuiElasticStickyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiElasticStickyModule, {
    declarations: [ExampleTuiElasticStickyComponent, TuiElasticStickyExample1],
    imports: [common/* CommonModule */.ez, addon_commerce.TuiMoneyModule, core.TuiScrollbarModule, addon_mobile.TuiElasticStickyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiElasticStickyComponent]
  });
})();

/***/ })

}]);