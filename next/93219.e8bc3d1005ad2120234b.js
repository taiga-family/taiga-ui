"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[93219],{

/***/ 93219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiZoomModule": () => (/* binding */ ExampleTuiZoomModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/scan.js
var scan = __webpack_require__(42145);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/zoom/zoom.directive.ts
var zoom_directive = __webpack_require__(23043);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/zoom/examples/1/index.ts






let TuiZoomExample1 = /*#__PURE__*/(() => {
  class TuiZoomExample1 {
    constructor() {
      this.delta$ = new Subject/* Subject */.xQ();
      this.scale$ = this.delta$.pipe((0,scan/* scan */.R)((scale, next) => (0,cdk.tuiClamp)(scale + next, 0.5, 3), 1), (0,startWith/* startWith */.O)(1));
      this.transform$ = this.scale$.pipe((0,map/* map */.U)(scale => `scale(${scale})`));
    }

    onZoom({
      delta
    }) {
      this.delta$.next(delta);
    }

  }

  TuiZoomExample1.ɵfac = function TuiZoomExample1_Factory(t) {
    return new (t || TuiZoomExample1)();
  };

  TuiZoomExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiZoomExample1,
    selectors: [["tui-zoom-example-1"]],
    decls: 7,
    vars: 10,
    consts: [[1, "t-container", 3, "tuiZoom"], [1, "t-zoomable"]],
    template: function TuiZoomExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵlistener */.NdJ("tuiZoom", function TuiZoomExample1_Template_div_tuiZoom_0_listener($event) {
          return ctx.onZoom($event);
        });
        core/* ɵɵelementStart */.TgZ(1, "div", 1);
        core/* ɵɵpipe */.ALo(2, "async");
        core/* ɵɵelementStart */.TgZ(3, "span");
        core/* ɵɵtext */._uU(4);
        core/* ɵɵpipe */.ALo(5, "number");
        core/* ɵɵpipe */.ALo(6, "async");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵstyleProp */.Udp("transform", core/* ɵɵpipeBind1 */.lcZ(2, 3, ctx.transform$));
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(5, 5, core/* ɵɵpipeBind1 */.lcZ(6, 8, ctx.scale$), "1.0-3"));
      }
    },
    directives: [zoom_directive/* TuiZoomDirective */.x],
    pipes: [common/* AsyncPipe */.Ov, common/* DecimalPipe */.JJ],
    styles: [".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.t-container[_ngcontent-%COMP%]{width:12rem;height:12rem;background-color:var(--tui-secondary)}.t-zoomable[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--tui-primary);border-radius:var(--tui-radius-l)}"],
    changeDetection: 0
  });
  return TuiZoomExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/zoom/zoom.component.ts







function ExampleTuiZoomComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(4, "tui-zoom-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiZoomComponent_ng_template_2_Template(rf, ctx) {
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
    core/* ɵɵelement */._UZ(10, "tui-doc-code", 10);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleComponent);
  }
}

let ExampleTuiZoomComponent = /*#__PURE__*/(() => {
  class ExampleTuiZoomComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 13948).then(__webpack_require__.t.bind(__webpack_require__, 13948, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 91504).then(__webpack_require__.t.bind(__webpack_require__, 91504, 17));
      this.exampleComponent = __webpack_require__.e(/* import() */ 77438).then(__webpack_require__.t.bind(__webpack_require__, 77438, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 101).then(__webpack_require__.t.bind(__webpack_require__, 101, 17)),
        HTML: __webpack_require__.e(/* import() */ 47428).then(__webpack_require__.t.bind(__webpack_require__, 47428, 17))
      };
    }

  }

  ExampleTuiZoomComponent.ɵfac = function ExampleTuiZoomComponent_Factory(t) {
    return new (t || ExampleTuiZoomComponent)();
  };

  ExampleTuiZoomComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiZoomComponent,
    selectors: [["example-tui-zoom"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6421460271971606186$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS_1 = goog.getMsg("Zoom");
        i18n_0 = MSG_EXTERNAL_6421460271971606186$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟e76cd6dbaa898f85934f363fef654b29e44d004b␟6421460271971606186:Zoom`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7159822271573365477$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}tuiZoom{$closeTagCode} directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7159822271573365477$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟e6b130c134abcffac0e7a556ee8e7d5e3b56f182␟7159822271573365477:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiZoom${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8227596913155490392$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__5 = goog.getMsg("Simple");
        i18n_4 = MSG_EXTERNAL_8227596913155490392$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟1ea31081e50390f86dac9d44f30ce6d662d9b486␟8227596913155490392:Simple`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2830324911231252653$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiZoomModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2830324911231252653$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟b353d913cbd741c6c16613accf378b4da1d7201a␟2830324911231252653: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiZoomModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3799636229807761262$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__9 = goog.getMsg("Add to the template and subscribe to a change:");
        i18n_8 = MSG_EXTERNAL_3799636229807761262$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ZOOM_ZOOM_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "multiple", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiZoomComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiZoomComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiZoomComponent_ng_template_2_Template, 11, 3, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiZoomExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiZoomComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/zoom/zoom.module.ts








let ExampleTuiZoomModule = /*#__PURE__*/(() => {
  class ExampleTuiZoomModule {}

  ExampleTuiZoomModule.ɵfac = function ExampleTuiZoomModule_Factory(t) {
    return new (t || ExampleTuiZoomModule)();
  };

  ExampleTuiZoomModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiZoomModule
  });
  ExampleTuiZoomModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk.TuiZoomModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiZoomComponent))]]
  });
  return ExampleTuiZoomModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiZoomModule, {
    declarations: [ExampleTuiZoomComponent, TuiZoomExample1],
    imports: [common/* CommonModule */.ez, cdk.TuiZoomModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiZoomComponent]
  });
})();

/***/ })

}]);