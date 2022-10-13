"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26387],{

/***/ 89842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTableBarModule": () => (/* binding */ ExampleTuiTableBarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/addon-tablebars/index.ts + 1 modules
var addon_tablebars = __webpack_require__(40249);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(75319);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/table-bar/examples/1/index.ts






const _c0 = ["tableBarTemplate"];

function TuiTableBarExampleComponent1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 3);
    fesm2015_core/* ɵɵtext */._uU(2, " Save ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTableBarExampleComponent1_ng_template_2_Template_button_click_3_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const close_r2 = restoredCtx.$implicit;
      return close_r2();
    });
    fesm2015_core/* ɵɵtext */._uU(4, " Cancel ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 5);
    fesm2015_core/* ɵɵtext */._uU(6, " Delete ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiTableBarExampleComponent1 = /*#__PURE__*/(() => {
  class TuiTableBarExampleComponent1 {
    constructor(tableBarsService) {
      this.tableBarsService = tableBarsService;
      this.tableBarTemplate = ``;
      this.subscription = new Subscription/* Subscription */.w();
    }

    showTableBar() {
      this.subscription.unsubscribe();
      this.subscription = this.tableBarsService.open(this.tableBarTemplate || ``, {
        hasCloseButton: true,
        adaptive: true
      }).subscribe();
    }

  }

  TuiTableBarExampleComponent1.ɵfac = function TuiTableBarExampleComponent1_Factory(t) {
    return new (t || TuiTableBarExampleComponent1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_tablebars.TuiTableBarsService));
  };

  TuiTableBarExampleComponent1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableBarExampleComponent1,
    selectors: [["tui-table-bar-example-1"]],
    viewQuery: function TuiTableBarExampleComponent1_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.tableBarTemplate = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tableBarTemplate", ""], ["tuiMode", "onDark", 1, "content"], ["tuiButton", "", "type", "button", "size", "m"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "m", 1, "tui-space_left-3", 3, "click"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "m", "icon", "tuiIconTrashLarge", 1, "delete-button"]],
    template: function TuiTableBarExampleComponent1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTableBarExampleComponent1_Template_button_click_0_listener() {
          return ctx.showTableBar();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show TableBar\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableBarExampleComponent1_ng_template_2_Template, 7, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, mode_directive/* TuiModeDirective */.w],
    styles: [".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],
    changeDetection: 0
  });
  return TuiTableBarExampleComponent1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/table-bar/table-bar.component.ts













const table_bar_component_c0 = ["tableBarTemplate"];

function ExampleTuiTableBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-table-bar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiTableBarComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, "Some template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiTableBarComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiTableBarComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiTableBarComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiTableBarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiTableBarComponent_ng_template_2_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.showTableBar();
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Show tableBar ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiTableBarComponent_ng_template_2_Template_button_click_3_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.destroy();
    });
    fesm2015_core/* ɵɵtext */._uU(4, " Hide tableBar ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTableBarComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(7, "br");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiTableBarComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.adaptive = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiTableBarComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.hasCloseButton = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiTableBarComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTableBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.mode = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.adaptive);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hasCloseButton);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
  }
}

function ExampleTuiTableBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 16);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(13, 17);
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-doc-code", 18);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(20, 20);
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleServiceUsageHtml);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleServiceUsage);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleLazyModule);
  }
}

let ExampleTuiTableBarComponent = /*#__PURE__*/(() => {
  class ExampleTuiTableBarComponent {
    constructor(tableBarsService) {
      this.tableBarsService = tableBarsService;
      this.destroy$ = new Subject/* Subject */.xQ();
      this.tableBarTemplate = ``;
      this.exampleServiceUsage = __webpack_require__.e(/* import() */ 39650).then(__webpack_require__.t.bind(__webpack_require__, 39650, 17));
      this.exampleServiceUsageHtml = __webpack_require__.e(/* import() */ 76247).then(__webpack_require__.t.bind(__webpack_require__, 76247, 17));
      this.exampleLazyModule = __webpack_require__.e(/* import() */ 3991).then(__webpack_require__.t.bind(__webpack_require__, 3991, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 22945).then(__webpack_require__.t.bind(__webpack_require__, 22945, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 91077).then(__webpack_require__.t.bind(__webpack_require__, 91077, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 40427).then(__webpack_require__.t.bind(__webpack_require__, 40427, 17)),
        HTML: __webpack_require__.e(/* import() */ 36573).then(__webpack_require__.t.bind(__webpack_require__, 36573, 17)),
        LESS: __webpack_require__.e(/* import() */ 53278).then(__webpack_require__.t.bind(__webpack_require__, 53278, 17))
      };
      this.modeVariants = [`onLight`, `onDark`];
      this.mode = this.modeVariants[0];
      this.adaptive = false;
      this.hasCloseButton = false;
      this.subscription = new Subscription/* Subscription */.w();
    }

    showTableBar() {
      this.subscription.unsubscribe();
      this.subscription = this.tableBarsService.open(this.tableBarTemplate || ``, {
        adaptive: this.adaptive,
        mode: this.mode,
        hasCloseButton: this.hasCloseButton
      }).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe();
    }

    destroy() {
      this.destroy$.next();
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }

  }

  ExampleTuiTableBarComponent.ɵfac = function ExampleTuiTableBarComponent_Factory(t) {
    return new (t || ExampleTuiTableBarComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_tablebars.TuiTableBarsService));
  };

  ExampleTuiTableBarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTableBarComponent,
    selectors: [["example-tui-table-bar"]],
    viewQuery: function ExampleTuiTableBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(table_bar_component_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.tableBarTemplate = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7392151570764225525$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__2 = goog.getMsg(" It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. ");
        i18n_1 = MSG_EXTERNAL_7392151570764225525$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟d4eaacf31ad166bfe74dbf267afaff7d767d4dad␟7392151570764225525: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__4 = goog.getMsg("Basic");
        i18n_3 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5646260285050734970$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___6 = goog.getMsg(" Adaprive content ");
        i18n_5 = MSG_EXTERNAL_5646260285050734970$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___6;
      } else {
        i18n_5 = $localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4329350149148955327$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___8 = goog.getMsg(" Enable close button ");
        i18n_7 = MSG_EXTERNAL_4329350149148955327$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___8;
      } else {
        i18n_7 = $localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1527305502164610498$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___10 = goog.getMsg(" Light / dark mode ");
        i18n_9 = MSG_EXTERNAL_1527305502164610498$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS___10;
      } else {
        i18n_9 = $localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5586136887716454770$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__12 = goog.getMsg(" Add {$startTagCode}TuiTableBarsHostModule{$closeTagCode} into your app.module ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_11 = MSG_EXTERNAL_5586136887716454770$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableBarsHostModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5654054825567970286$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__14 = goog.getMsg(" Add {$startTagCode}tui-table-bars-host{$closeTagCode} into your app.template ", {
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_5654054825567970286$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:tui-table-bars-host${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: into your app.template `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2388724752770660394$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__16 = goog.getMsg(" Use {$startTagCode}open{$closeTagCode} method and subscribe to returened {$startTagCode}Observable{$closeTagCode}", {
          "startTagCode": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]",
          "closeTagCode": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"
        });
        i18n_15 = MSG_EXTERNAL_2388724752770660394$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__16;
      } else {
        i18n_15 = $localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_15 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_15);
      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_282224705145462981$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__18 = goog.getMsg(" If you use component in lazy loading modules, do not forget to pass into {$startTagCode}new PolymorpheusComponent Injector{$closeTagCode} of component where you open table bar ", {
          "startTagCode": "\uFFFD#21\uFFFD",
          "closeTagCode": "\uFFFD/#21\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_282224705145462981$$PROJECTS_DEMO_SRC_MODULES_SERVICES_TABLE_BAR_TABLE_BAR_COMPONENT_TS__18;
      } else {
        i18n_17 = $localize`:␟ba1892794b314f679ac905e2ef9357d65d51e41e␟282224705145462981: If you use component in lazy loading modules, do not forget to pass into ${"\uFFFD#21\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\uFFFD/#21\uFFFD"}:CLOSE_TAG_CODE: of component where you open table bar `;
      }

      return [["header", "TableBarsService", "package", "ADDON-TABLEBARS", "path", "addon-tablebars/services/table-bars.service.ts"], ["pageTab", ""], i18n_1, ["id", "base", "heading", i18n_3, 3, "content"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tableBarTemplate", ""], ["documentationPropertyName", "adaptive", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasCloseButton", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "mode", "documentationPropertyType", "TuiBrightness", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_5, i18n_7, i18n_9, [1, "b-demo-steps"], i18n_11, ["filename", "app.module.ts", 3, "code"], i18n_13, i18n_15, ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], i18n_17, ["filename", "customNotification.component.ts", 3, "code"]];
    },
    template: function ExampleTuiTableBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTableBarComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTableBarComponent_ng_template_2_Template, 12, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTableBarComponent_ng_template_3_Template, 23, 5, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTableBarExampleComponent1, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".label[_ngcontent-%COMP%]{width:6.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiTableBarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/services/table-bar/table-bar.module.ts












let ExampleTuiTableBarModule = /*#__PURE__*/(() => {
  class ExampleTuiTableBarModule {}

  ExampleTuiTableBarModule.ɵfac = function ExampleTuiTableBarModule_Factory(t) {
    return new (t || ExampleTuiTableBarModule)();
  };

  ExampleTuiTableBarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTableBarModule
  });
  ExampleTuiTableBarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiButtonModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiLinkModule, fesm2015_forms/* FormsModule */.u5, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTableBarComponent))]]
  });
  return ExampleTuiTableBarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTableBarModule, {
    declarations: [ExampleTuiTableBarComponent, TuiTableBarExampleComponent1],
    imports: [common/* CommonModule */.ez, core.TuiButtonModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, kit.TuiRadioListModule, kit.TuiInputModule, core.TuiLinkModule, fesm2015_forms/* FormsModule */.u5, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTableBarComponent]
  });
})();

/***/ })

}]);