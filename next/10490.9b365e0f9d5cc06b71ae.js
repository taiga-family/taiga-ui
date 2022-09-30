"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[10490],{

/***/ 10490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DialogsModule": () => (/* binding */ DialogsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./projects/demo/src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts
var prompt_service = __webpack_require__(28497);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/dialogs/examples/1/index.ts









function TuiDialogsExample1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 5);
    fesm2015_core/* ɵɵtext */._uU(2, " \u00ABChoose wisely\u00BB ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
  }
}

function TuiDialogsExample1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 6);
    fesm2015_core/* ɵɵtext */._uU(2, " \u00ABYou chose poorly\u00BB ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
  }
}

function TuiDialogsExample1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(1, " \u00ABYou have chosen wisely\u00BB ");
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-avatar", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", true);
  }
}

let TuiDialogsExample1 = /*#__PURE__*/(() => {
  class TuiDialogsExample1 {
    constructor(alertService, promptService) {
      this.alertService = alertService;
      this.promptService = promptService;
    }

    onClick(choose, poorly, wisely) {
      this.promptService.open(choose, {
        heading: `Taiga UI is the best`,
        buttons: [`Absolutely!`, `No way!`]
      }).pipe((0,switchMap/* switchMap */.w)(response => response ? this.alertService.open(wisely, {
        status: "success"
        /* Success */

      }) : this.alertService.open(poorly, {
        status: "error"
        /* Error */

      }))).subscribe();
    }

  }

  TuiDialogsExample1.ɵfac = function TuiDialogsExample1_Factory(t) {
    return new (t || TuiDialogsExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService), fesm2015_core/* ɵɵdirectiveInject */.Y36(prompt_service/* PromptService */.l));
  };

  TuiDialogsExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDialogsExample1,
    selectors: [["tui-dialogs-example-1"]],
    decls: 8,
    vars: 0,
    consts: [["tuiButton", "", 3, "click"], ["choose", ""], ["poorly", ""], ["wisely", ""], [1, "wrapper"], ["avatarUrl", "assets/images/choose.png", "size", "l", 1, "tui-space_right-2", 3, "rounded"], ["avatarUrl", "assets/images/poorly.png", 1, "tui-space_right-2", 3, "rounded"], ["avatarUrl", "assets/images/wisely.png", 1, "tui-space_left-1", 3, "rounded"]],
    template: function TuiDialogsExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDialogsExample1_Template_button_click_0_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r6);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

          const _r2 = fesm2015_core/* ɵɵreference */.MAs(5);

          const _r4 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.onClick(_r0, _r2, _r4);
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show prompt\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiDialogsExample1_ng_template_2_Template, 3, 1, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiDialogsExample1_ng_template_4_Template, 3, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDialogsExample1_ng_template_6_Template, 3, 1, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, avatar_component/* TuiAvatarComponent */.J],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],
    changeDetection: 0
  });
  return TuiDialogsExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/dialogs/dialogs.component.ts




let DialogsComponent = /*#__PURE__*/(() => {
  class DialogsComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 12662).then(__webpack_require__.t.bind(__webpack_require__, 12662, 17)),
        HTML: __webpack_require__.e(/* import() */ 28503).then(__webpack_require__.t.bind(__webpack_require__, 28503, 17)),
        LESS: __webpack_require__.e(/* import() */ 25196).then(__webpack_require__.t.bind(__webpack_require__, 25196, 17)),
        'prompt/prompt.service.ts': __webpack_require__.e(/* import() */ 65385).then(__webpack_require__.t.bind(__webpack_require__, 65385, 17)),
        'prompt/prompt-options.ts': __webpack_require__.e(/* import() */ 47877).then(__webpack_require__.t.bind(__webpack_require__, 47877, 17)),
        'prompt/prompt.component.ts': __webpack_require__.e(/* import() */ 28198).then(__webpack_require__.t.bind(__webpack_require__, 28198, 17)),
        'prompt/prompt.template.html': __webpack_require__.e(/* import() */ 96381).then(__webpack_require__.t.bind(__webpack_require__, 96381, 17)),
        'prompt/prompt.style.less': __webpack_require__.e(/* import() */ 68148).then(__webpack_require__.t.bind(__webpack_require__, 68148, 17)),
        'prompt/prompt.module.ts': __webpack_require__.e(/* import() */ 95425).then(__webpack_require__.t.bind(__webpack_require__, 95425, 17))
      };
    }

  }

  DialogsComponent.ɵfac = function DialogsComponent_Factory(t) {
    return new (t || DialogsComponent)();
  };

  DialogsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: DialogsComponent,
    selectors: [["dialogs"]],
    decls: 5,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8564515230059500750$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_1 = goog.getMsg("Dialogs");
        i18n_0 = MSG_EXTERNAL_8564515230059500750$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4814027570249937937$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_3 = goog.getMsg(" You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. ");
        i18n_2 = MSG_EXTERNAL_4814027570249937937$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟b3386f18bd4651b9452168426edf7f122d7f1fc1␟4814027570249937937: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2620483019814878192$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_5 = goog.getMsg("Custom dialog");
        i18n_4 = MSG_EXTERNAL_2620483019814878192$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_DIALOGS_DIALOGS_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`;
      }

      return [["header", i18n_0], i18n_2, ["id", "custom-dialog", "heading", i18n_4, 3, "content"]];
    },
    template: function DialogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18n */.SDv(2, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-dialogs-example-1");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.example1);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, example_component/* TuiDocExampleComponent */.f, TuiDialogsExample1],
    encapsulation: 2,
    changeDetection: 0
  });
  return DialogsComponent;
})();
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/customization/dialogs/examples/1/prompt/prompt.component.ts
var prompt_component = __webpack_require__(84393);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts






let PromptModule = /*#__PURE__*/(() => {
  class PromptModule {}

  PromptModule.ɵfac = function PromptModule_Factory(t) {
    return new (t || PromptModule)();
  };

  PromptModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: PromptModule
  });
  PromptModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    providers: [prompt_service/* PROMPT_PROVIDER */.B],
    imports: [[core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez]]
  });
  return PromptModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(PromptModule, {
    declarations: [prompt_component/* PromptComponent */.j],
    imports: [core.TuiButtonModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, common/* CommonModule */.ez],
    exports: [prompt_component/* PromptComponent */.j]
  });
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/dialogs/dialogs.module.ts










let DialogsModule = /*#__PURE__*/(() => {
  class DialogsModule {}

  DialogsModule.ɵfac = function DialogsModule_Factory(t) {
    return new (t || DialogsModule)();
  };

  DialogsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: DialogsModule
  });
  DialogsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, PromptModule, core.TuiButtonModule, kit.TuiAvatarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(DialogsComponent))]]
  });
  return DialogsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(DialogsModule, {
    declarations: [DialogsComponent, TuiDialogsExample1],
    imports: [common/* CommonModule */.ez, PromptModule, core.TuiButtonModule, kit.TuiAvatarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [DialogsComponent]
  });
})();

/***/ })

}]);