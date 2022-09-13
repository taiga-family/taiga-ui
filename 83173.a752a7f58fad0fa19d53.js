"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[83173],{

/***/ 83173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSwipeModule": () => (/* binding */ ExampleTuiSwipeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/swipe/swipe.directive.ts
var swipe_directive = __webpack_require__(99021);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/swipe/examples/1/index.ts



let TuiSwipeExample1 = /*#__PURE__*/(() => {
  class TuiSwipeExample1 {
    constructor() {
      this.swiped = `default`;
    }

    onSwipe(swipe) {
      this.swiped = swipe.direction;
    }

  }

  TuiSwipeExample1.ɵfac = function TuiSwipeExample1_Factory(t) {
    return new (t || TuiSwipeExample1)();
  };

  TuiSwipeExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiSwipeExample1,
    selectors: [["tui-swipe-example-1"]],
    hostVars: 2,
    hostBindings: function TuiSwipeExample1_HostBindings(rf, ctx) {
      if (rf & 2) {
        core/* ɵɵclassMap */.Tol(ctx.swiped);
      }
    },
    decls: 2,
    vars: 2,
    consts: [[1, "box", "tui-text_body-l", 3, "ngClass", "tuiSwipe"]],
    template: function TuiSwipeExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵlistener */.NdJ("tuiSwipe", function TuiSwipeExample1_Template_div_tuiSwipe_0_listener($event) {
          return ctx.onSwipe($event);
        });
        core/* ɵɵtext */._uU(1);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngClass", ctx.swiped);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵtextInterpolate1 */.hij(" Swiped ", ctx.swiped, "\n");
      }
    },
    directives: [common/* NgClass */.mk, swipe_directive/* TuiSwipeDirective */.W],
    styles: [".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],
    changeDetection: 0
  });
  return TuiSwipeExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/sidebar/sidebar.directive.ts
var sidebar_directive = __webpack_require__(83628);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/swipe/examples/2/index.ts






function TuiSwipeExample2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "div", 2);
    core/* ɵɵlistener */.NdJ("tuiSwipe", function TuiSwipeExample2_div_2_Template_div_tuiSwipe_0_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r1 = core/* ɵɵnextContext */.oxw();
      return ctx_r1.onSwipe($event);
    });
    core/* ɵɵtext */._uU(1, " Swipe right to close ");
    core/* ɵɵelementEnd */.qZA();
  }
}

let TuiSwipeExample2 = /*#__PURE__*/(() => {
  class TuiSwipeExample2 {
    constructor() {
      this.open$ = new Subject/* Subject */.xQ();
    }

    toggle(open) {
      this.open$.next(open);
    }

    onSwipe(swipe) {
      console.info(swipe.direction);

      if (swipe.direction === `left`) {
        this.toggle(true);
      }

      if (swipe.direction === `right`) {
        this.toggle(false);
      }
    }

  }

  TuiSwipeExample2.ɵfac = function TuiSwipeExample2_Factory(t) {
    return new (t || TuiSwipeExample2)();
  };

  TuiSwipeExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiSwipeExample2,
    selectors: [["tui-swipe-example-2"]],
    decls: 4,
    vars: 4,
    consts: [[1, "container", "tui-text_body-l", 3, "tuiSwipe"], ["class", "sidebar tui-text_body-l", 3, "tuiSwipe", 4, "tuiSidebar", "tuiSidebarDirection"], [1, "sidebar", "tui-text_body-l", 3, "tuiSwipe"]],
    template: function TuiSwipeExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵlistener */.NdJ("tuiSwipe", function TuiSwipeExample2_Template_div_tuiSwipe_0_listener($event) {
          return ctx.onSwipe($event);
        });
        core/* ɵɵtext */._uU(1, " Swipe left to open ");
        core/* ɵɵtemplate */.YNc(2, TuiSwipeExample2_div_2_Template, 2, 0, "div", 1);
        core/* ɵɵpipe */.ALo(3, "async");
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("tuiSidebar", !!core/* ɵɵpipeBind1 */.lcZ(3, 2, ctx.open$))("tuiSidebarDirection", "right");
      }
    },
    directives: [swipe_directive/* TuiSwipeDirective */.W, sidebar_directive/* TuiSidebarDirective */.B],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],
    changeDetection: 0
  });
  return TuiSwipeExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/swipe/swipe.component.ts








function ExampleTuiSwipeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "p");
    core/* ɵɵi18nStart */.tHW(4, 4);
    core/* ɵɵelement */._UZ(5, "code");
    core/* ɵɵelement */._UZ(6, "br");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "dl");
    core/* ɵɵelementStart */.TgZ(8, "dt");
    core/* ɵɵelementStart */.TgZ(9, "strong");
    core/* ɵɵtext */._uU(10, "timeout:");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "dd");
    core/* ɵɵtext */._uU(12, "max time between touchstart and touchend");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "dt");
    core/* ɵɵelementStart */.TgZ(14, "strong");
    core/* ɵɵtext */._uU(15, "threshold");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(16, " : ");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "dd");
    core/* ɵɵtext */._uU(18, "min distance between touchstart and touchend.");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(20, "tui-swipe-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(21, "tui-doc-example", 6);
    core/* ɵɵelement */._UZ(22, "tui-swipe-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(19);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiSwipeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 8);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 10);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 11);
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

let ExampleTuiSwipeComponent = /*#__PURE__*/(() => {
  class ExampleTuiSwipeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 72030).then(__webpack_require__.t.bind(__webpack_require__, 72030, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 68817).then(__webpack_require__.t.bind(__webpack_require__, 68817, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 67610).then(__webpack_require__.t.bind(__webpack_require__, 67610, 17)),
        HTML: __webpack_require__.e(/* import() */ 69445).then(__webpack_require__.t.bind(__webpack_require__, 69445, 17)),
        LESS: __webpack_require__.e(/* import() */ 83914).then(__webpack_require__.t.bind(__webpack_require__, 83914, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 62531).then(__webpack_require__.t.bind(__webpack_require__, 62531, 17)),
        HTML: __webpack_require__.e(/* import() */ 34473).then(__webpack_require__.t.bind(__webpack_require__, 34473, 17)),
        LESS: __webpack_require__.e(/* import() */ 60499).then(__webpack_require__.t.bind(__webpack_require__, 60499, 17))
      };
    }

  }

  ExampleTuiSwipeComponent.ɵfac = function ExampleTuiSwipeComponent_Factory(t) {
    return new (t || ExampleTuiSwipeComponent)();
  };

  ExampleTuiSwipeComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSwipeComponent,
    selectors: [["example-tui-swipe"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2599663742744214450$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS_1 = goog.getMsg("Swipe");
        i18n_0 = MSG_EXTERNAL_2599663742744214450$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟692d3486522b76f188e85c329a8dee83471e833d␟2599663742744214450:Swipe`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2985041163238726247$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__5 = goog.getMsg("{$startTagCode}tuiSwipe{$closeTagCode} directive allows detecting swipes on mobile devices. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2985041163238726247$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟a34630ac655c7ae6ca59883b8038230b9a706cd1␟2985041163238726247:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiSwipe${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: directive allows detecting swipes on mobile devices. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1350150750840159964$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__7 = goog.getMsg(" You can configure the directive with {$startTagCode}TUI_SWIPE_OPTIONS{$closeTagCode} token. {$lineBreak} Allowed options: ", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD",
          "lineBreak": "\uFFFD#6\uFFFD\uFFFD/#6\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_1350150750840159964$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟9c102467fc96b921efb10bbc95fb3d3eeca98348␟1350150750840159964: You can configure the directive with ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:TUI_SWIPE_OPTIONS${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: token. ${"\uFFFD#6\uFFFD\uFFFD/#6\uFFFD"}:LINE_BREAK: Allowed options: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__9 = goog.getMsg("Basic");
        i18n_8 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5947747490679912275$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__11 = goog.getMsg("With sidebar");
        i18n_10 = MSG_EXTERNAL_5947747490679912275$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟a3fa24e288faa8addbc361884d78e4bf1fa3937d␟5947747490679912275:With sidebar`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4746491400247048532$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiSwipeModule{$closeTagCode} into a module where you want to use our directive ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_4746491400247048532$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟4531ea54619a566db576498d7b988287093002a3␟4746491400247048532: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSwipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_SWIPE_SWIPE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, i18n_6, ["id", "base", "heading", i18n_8, 3, "content"], ["id", "base", "heading", i18n_10, 3, "content"], [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiSwipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiSwipeComponent_ng_template_1_Template, 23, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiSwipeComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiSwipeExample1, TuiSwipeExample2, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiSwipeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/swipe/swipe.module.ts










let ExampleTuiSwipeModule = /*#__PURE__*/(() => {
  class ExampleTuiSwipeModule {}

  ExampleTuiSwipeModule.ɵfac = function ExampleTuiSwipeModule_Factory(t) {
    return new (t || ExampleTuiSwipeModule)();
  };

  ExampleTuiSwipeModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSwipeModule
  });
  ExampleTuiSwipeModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk.TuiSwipeModule, public_api/* TuiAddonDocModule */.fV, addon_mobile.TuiSidebarModule, cdk.TuiActiveZoneModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSwipeComponent))]]
  });
  return ExampleTuiSwipeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSwipeModule, {
    declarations: [ExampleTuiSwipeComponent, TuiSwipeExample1, TuiSwipeExample2],
    imports: [common/* CommonModule */.ez, cdk.TuiSwipeModule, public_api/* TuiAddonDocModule */.fV, addon_mobile.TuiSidebarModule, cdk.TuiActiveZoneModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiSwipeComponent]
  });
})();

/***/ })

}]);