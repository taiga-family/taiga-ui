"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[31014],{

/***/ 31014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPanModule": () => (/* binding */ ExampleTuiPanModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2015/platform-browser.js
var platform_browser = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/pan/pan.directive.ts
var pan_directive = __webpack_require__(60015);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/pan/examples/1/index.ts







let TuiPanExample1 = /*#__PURE__*/(() => {
  class TuiPanExample1 {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.coordinates$ = new BehaviorSubject/* BehaviorSubject */.X([0, 0]);
      this.transform$ = this.coordinates$.pipe((0,map/* map */.U)(coords => this.sanitizer.bypassSecurityTrustStyle(`translate(${coords[0]}px, ${coords[1]}px)`)));
    }

    onPan(delta) {
      this.coordinates$.next([this.currentCoords[0] + delta[0], this.currentCoords[1] + delta[1]]);
    }

    get currentCoords() {
      return this.coordinates$.value;
    }

  }

  TuiPanExample1.ɵfac = function TuiPanExample1_Factory(t) {
    return new (t || TuiPanExample1)(core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7));
  };

  TuiPanExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiPanExample1,
    selectors: [["tui-pan-example-1"]],
    decls: 3,
    vars: 4,
    consts: [[1, "container", "tui-text_body-l"], [1, "circle", 3, "tuiPan"]],
    template: function TuiPanExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelementStart */.TgZ(1, "div", 1);
        core/* ɵɵlistener */.NdJ("tuiPan", function TuiPanExample1_Template_div_tuiPan_1_listener($event) {
          return ctx.onPan($event);
        });
        core/* ɵɵpipe */.ALo(2, "async");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵstyleProp */.Udp("transform", core/* ɵɵpipeBind1 */.lcZ(2, 2, ctx.transform$));
      }
    },
    directives: [pan_directive/* TuiPanDirective */.g],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:12rem;height:12rem;background-color:var(--tui-secondary);overflow:hidden}.circle[_ngcontent-%COMP%]{width:6rem;height:6rem;border-radius:100%;touch-action:none;background-color:var(--tui-support-01);box-shadow:.25rem .25rem .5rem rgba(34,60,80,.2);cursor:move;will-change:transform}"],
    changeDetection: 0
  });
  return TuiPanExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/pan/pan.component.ts







function ExampleTuiPanComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(4, "tui-pan-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiPanComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiPanComponent = /*#__PURE__*/(() => {
  class ExampleTuiPanComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 37693).then(__webpack_require__.t.bind(__webpack_require__, 37693, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 509).then(__webpack_require__.t.bind(__webpack_require__, 509, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 9028).then(__webpack_require__.t.bind(__webpack_require__, 9028, 17)),
        HTML: __webpack_require__.e(/* import() */ 57066).then(__webpack_require__.t.bind(__webpack_require__, 57066, 17)),
        LESS: __webpack_require__.e(/* import() */ 14923).then(__webpack_require__.t.bind(__webpack_require__, 14923, 17))
      };
    }

  }

  ExampleTuiPanComponent.ɵfac = function ExampleTuiPanComponent_Factory(t) {
    return new (t || ExampleTuiPanComponent)();
  };

  ExampleTuiPanComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPanComponent,
    selectors: [["example-tui-pan"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9128067536654850026$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS_1 = goog.getMsg("Pan");
        i18n_0 = MSG_EXTERNAL_9128067536654850026$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟7cd14ceae63b4aba71ab7935638f5d3b799f4f4b␟9128067536654850026:Pan`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1665675151568039908$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__5 = goog.getMsg("{$startTagCode}tuiPan{$closeTagCode} The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_1665675151568039908$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟3cb7dfa255d6c41046d3cfa8bf454e2b46f4a170␟1665675151568039908:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiPan${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6584529262933175347$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiPanModule{$closeTagCode} into a module where you want to use our directive ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6584529262933175347$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟6a3b47f295a88bb1c26bc0ed826becb749fcea6c␟6584529262933175347: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPanModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PAN_PAN_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "base", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPanComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiPanComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiPanComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPanExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPanComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/pan/pan.module.ts








let ExampleTuiPanModule = /*#__PURE__*/(() => {
  class ExampleTuiPanModule {}

  ExampleTuiPanModule.ɵfac = function ExampleTuiPanModule_Factory(t) {
    return new (t || ExampleTuiPanModule)();
  };

  ExampleTuiPanModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPanModule
  });
  ExampleTuiPanModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk/* TuiPanModule */.NZ5, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPanComponent))]]
  });
  return ExampleTuiPanModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPanModule, {
    declarations: [ExampleTuiPanComponent, TuiPanExample1],
    imports: [common/* CommonModule */.ez, cdk/* TuiPanModule */.NZ5, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPanComponent]
  });
})();

/***/ })

}]);