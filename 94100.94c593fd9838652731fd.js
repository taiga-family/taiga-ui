"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[94100],{

/***/ 94100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiStringifyContentModule": () => (/* binding */ ExampleTuiStringifyContentModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/combo-box/combo-box.component.ts
var combo_box_component = __webpack_require__(41967);
// EXTERNAL MODULE: ./projects/kit/components/combo-box/combo-box.directive.ts
var combo_box_directive = __webpack_require__(89290);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/kit/pipes/filter-by-input/filter-by-input-with.pipe.ts
var filter_by_input_with_pipe = __webpack_require__(30114);
// EXTERNAL MODULE: ./projects/kit/pipes/stringify-content/stringify-content.pipe.ts
var stringify_content_pipe = __webpack_require__(60666);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify-content/examples/1/index.ts









function TuiStringifyContentExample1_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 2);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiFilterByInputWith");
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiStringifyContent");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind2 */.xi3(1, 2, ctx_r0.items, ctx_r0.stringify))("itemContent", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 5, ctx_r0.stringify));
  }
}

let TuiStringifyContentExample1 = /*#__PURE__*/(() => {
  class TuiStringifyContentExample1 {
    constructor() {
      this.value = null;
      this.items = [{
        name: `John`,
        surname: `Cleese`
      }, {
        name: `Eric`,
        surname: `Idle`
      }];

      this.stringify = ({
        name,
        surname
      }) => `${name} ${surname}`;
    }

  }

  TuiStringifyContentExample1.ɵfac = function TuiStringifyContentExample1_Factory(t) {
    return new (t || TuiStringifyContentExample1)();
  };

  TuiStringifyContentExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiStringifyContentExample1,
    selectors: [["tui-stringify-content-example1"]],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "stringify", "ngModel", "ngModelChange"], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"]],
    template: function TuiStringifyContentExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-combo-box", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiStringifyContentExample1_Template_tui_combo_box_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Pick your guy ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiStringifyContentExample1_tui_data_list_wrapper_2_Template, 3, 7, "tui-data-list-wrapper", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("stringify", ctx.stringify)("ngModel", ctx.value);
      }
    },
    directives: [combo_box_component/* TuiComboBoxComponent */._, combo_box_directive/* TuiComboBoxDirective */.m, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [filter_by_input_with_pipe/* TuiFilterByInputWithPipe */.Y, stringify_content_pipe/* TuiStringifyContentPipe */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiStringifyContentExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify-content/stringify-content.component.ts










function ExampleTuiStringifyContentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-stringify-content-example1");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-notification", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "a", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiStringifyContentComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 8);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiStringifyContentComponent = /*#__PURE__*/(() => {
  class ExampleTuiStringifyContentComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 62487).then(__webpack_require__.t.bind(__webpack_require__, 62487, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44278).then(__webpack_require__.t.bind(__webpack_require__, 44278, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 6665).then(__webpack_require__.t.bind(__webpack_require__, 6665, 17)),
        HTML: __webpack_require__.e(/* import() */ 64207).then(__webpack_require__.t.bind(__webpack_require__, 64207, 17))
      };
    }

  }

  ExampleTuiStringifyContentComponent.ɵfac = function ExampleTuiStringifyContentComponent_Factory(t) {
    return new (t || ExampleTuiStringifyContentComponent)();
  };

  ExampleTuiStringifyContentComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiStringifyContentComponent,
    selectors: [["example-tui-stringify-content"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2546706499801111643$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__3 = goog.getMsg(" Pipe that turns {$startTagCode}TuiStringHandler{$closeTagCode} into content that works with {$startTagCode}$implicit{$closeTagCode} . {$startTagTuiDocExample}{$startTagTuiStringifyContentExample1}{$closeTagTuiStringifyContentExample1}{$startTagTuiNotification} With {$startLink}{$startTagCode}FilterByInput{$closeTagCode}{$closeLink} pipe. {$closeTagTuiNotification}{$closeTagTuiDocExample}", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#7\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#7\uFFFD]",
          "startTagTuiDocExample": "\uFFFD#3\uFFFD",
          "startTagTuiStringifyContentExample1": "\uFFFD#4\uFFFD",
          "closeTagTuiStringifyContentExample1": "\uFFFD/#4\uFFFD",
          "startTagTuiNotification": "\uFFFD#5\uFFFD",
          "startLink": "\uFFFD#6\uFFFD",
          "closeLink": "\uFFFD/#6\uFFFD",
          "closeTagTuiNotification": "\uFFFD/#5\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2546706499801111643$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__3;
      } else {
        i18n_0 = $localize`:␟2d3631bb68ec619b2e9e0f87012bb2bc97c6dc09␟2546706499801111643: Pipe that turns ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:TuiStringHandler${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: into content that works with ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: . ${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_STRINGIFY_CONTENT_EXAMPLE1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_STRINGIFY_CONTENT_EXAMPLE1:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_NOTIFICATION: With ${"\uFFFD#6\uFFFD"}:START_LINK:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:FilterByInput${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_LINK: pipe. ${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_709866116440590755$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiStringifyContentPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_709866116440590755$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟7d1a24adf6296388bdf7d01c1da31266e7449b8a␟709866116440590755: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStringifyContentPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__7 = goog.getMsg("Use pipe in template:");
        i18n_6 = MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_CONTENT_STRINGIFY_CONTENT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
      }

      return [["header", "StringifyContent", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "base", "heading", i18n_1, 3, "content"], [1, "b-form", "tui-space_top-4"], ["tuiLink", "", "routerLink", "/pipes/filter-by-input"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiStringifyContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiStringifyContentComponent_ng_template_1_Template, 8, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiStringifyContentComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiStringifyContentExample1, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiStringifyContentComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify-content/stringify-content.module.ts










let ExampleTuiStringifyContentModule = /*#__PURE__*/(() => {
  class ExampleTuiStringifyContentModule {}

  ExampleTuiStringifyContentModule.ɵfac = function ExampleTuiStringifyContentModule_Factory(t) {
    return new (t || ExampleTuiStringifyContentModule)();
  };

  ExampleTuiStringifyContentModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiStringifyContentModule
  });
  ExampleTuiStringifyContentModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, kit.TuiFilterByInputPipeModule, kit.TuiStringifyContentPipeModule, core.TuiNotificationModule, core.TuiLinkModule, kit.TuiComboBoxModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiStringifyContentComponent))]]
  });
  return ExampleTuiStringifyContentModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiStringifyContentModule, {
    declarations: [ExampleTuiStringifyContentComponent, TuiStringifyContentExample1],
    imports: [fesm2015_forms/* FormsModule */.u5, kit.TuiFilterByInputPipeModule, kit.TuiStringifyContentPipeModule, core.TuiNotificationModule, core.TuiLinkModule, kit.TuiComboBoxModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiStringifyContentComponent]
  });
})();

/***/ })

}]);