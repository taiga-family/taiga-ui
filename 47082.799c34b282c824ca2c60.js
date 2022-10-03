"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47082],{

/***/ 47082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiStringifyModule": () => (/* binding */ ExampleTuiStringifyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
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
// EXTERNAL MODULE: ./projects/kit/pipes/stringify/stringify.pipe.ts
var stringify_pipe = __webpack_require__(94041);
// EXTERNAL MODULE: ./projects/kit/pipes/filter-by-input/filter-by-input-with.pipe.ts
var filter_by_input_with_pipe = __webpack_require__(30114);
// EXTERNAL MODULE: ./projects/kit/pipes/stringify-content/stringify-content.pipe.ts
var stringify_content_pipe = __webpack_require__(60666);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify/examples/1/index.ts










function TuiStringifyExample1_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 2);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiFilterByInputWith");
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiStringify");
    fesm2015_core/* ɵɵpipe */.ALo(3, "tuiStringifyContent");
    fesm2015_core/* ɵɵpipe */.ALo(4, "tuiStringify");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind2 */.xi3(1, 2, ctx_r0.items, fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 5, "name")))("itemContent", fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 7, fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 9, "name")));
  }
}

let TuiStringifyExample1 = /*#__PURE__*/(() => {
  class TuiStringifyExample1 {
    constructor() {
      this.value = null;
      this.items = [{
        name: `John Cleese`,
        role: `Black Knight`
      }, {
        name: `Eric Idle`,
        role: `Dead collector`
      }];
    }

  }

  TuiStringifyExample1.ɵfac = function TuiStringifyExample1_Factory(t) {
    return new (t || TuiStringifyExample1)();
  };

  TuiStringifyExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiStringifyExample1,
    selectors: [["tui-stringify-example1"]],
    decls: 4,
    vars: 4,
    consts: [[1, "b-form", 3, "stringify", "ngModel", "ngModelChange"], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"]],
    template: function TuiStringifyExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-combo-box", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiStringifyExample1_Template_tui_combo_box_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵpipe */.ALo(1, "tuiStringify");
        fesm2015_core/* ɵɵtext */._uU(2, " Pick your guy ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiStringifyExample1_tui_data_list_wrapper_3_Template, 5, 11, "tui-data-list-wrapper", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("stringify", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, "name"))("ngModel", ctx.value);
      }
    },
    directives: [combo_box_component/* TuiComboBoxComponent */._, combo_box_directive/* TuiComboBoxDirective */.m, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [stringify_pipe/* TuiStringifyPipe */.A, filter_by_input_with_pipe/* TuiFilterByInputWithPipe */.Y, stringify_content_pipe/* TuiStringifyContentPipe */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiStringifyExample1;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify/stringify.component.ts










function ExampleTuiStringifyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-stringify-example1");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 6);
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "a", 7);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiStringifyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 9);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 12);
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

let ExampleTuiStringifyComponent = /*#__PURE__*/(() => {
  class ExampleTuiStringifyComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 76069).then(__webpack_require__.t.bind(__webpack_require__, 76069, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 39057).then(__webpack_require__.t.bind(__webpack_require__, 39057, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 49129).then(__webpack_require__.t.bind(__webpack_require__, 49129, 17)),
        HTML: __webpack_require__.e(/* import() */ 49367).then(__webpack_require__.t.bind(__webpack_require__, 49367, 17))
      };
    }

  }

  ExampleTuiStringifyComponent.ɵfac = function ExampleTuiStringifyComponent_Factory(t) {
    return new (t || ExampleTuiStringifyComponent)();
  };

  ExampleTuiStringifyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiStringifyComponent,
    selectors: [["example-tui-stringify"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7469533319471669743$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__3 = goog.getMsg(" Pipe that creates {$startTagCode}TuiStringHandler{$closeTagCode} by given key. {$startTagTuiDocExample}{$startTagTuiStringifyExample1}{$closeTagTuiStringifyExample1}{$startTagTuiNotification} With {$startLink}{$startTagCode}FilterByInput{$closeTagCode}{$closeLink} and {$startLink_1}{$startTagCode}StringifyContent{$closeTagCode}{$closeLink} pipes. {$closeTagTuiNotification}{$closeTagTuiDocExample}", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]",
          "startTagTuiDocExample": "\uFFFD#2\uFFFD",
          "startTagTuiStringifyExample1": "\uFFFD#3\uFFFD",
          "closeTagTuiStringifyExample1": "\uFFFD/#3\uFFFD",
          "startTagTuiNotification": "\uFFFD#4\uFFFD",
          "startLink": "\uFFFD#5\uFFFD",
          "closeLink": "[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]",
          "startLink_1": "\uFFFD#7\uFFFD",
          "closeTagTuiNotification": "\uFFFD/#4\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7469533319471669743$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__3;
      } else {
        i18n_0 = $localize`:␟9b7a1fb74683759045af4bab18edee9522f6421f␟7469533319471669743: Pipe that creates ${"[\uFFFD#1\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:TuiStringHandler${"[\uFFFD/#1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE: by given key. ${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_STRINGIFY_EXAMPLE1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_STRINGIFY_EXAMPLE1:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_NOTIFICATION: With ${"\uFFFD#5\uFFFD"}:START_LINK:${"[\uFFFD#1\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:FilterByInput${"[\uFFFD/#1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_LINK: and ${"\uFFFD#7\uFFFD"}:START_LINK_1:${"[\uFFFD#1\uFFFD|\uFFFD#6\uFFFD|\uFFFD#8\uFFFD]"}:START_TAG_CODE:StringifyContent${"[\uFFFD/#1\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_LINK: pipes. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_NOTIFICATION:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7586728798520122256$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiStringifyPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_7586728798520122256$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟42c7f128e318e91bcd48cd79717d50ef50de6bf6␟7586728798520122256: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStringifyPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__7 = goog.getMsg("Use pipe in template:");
        i18n_6 = MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_STRINGIFY_STRINGIFY_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
      }

      return [["header", "Stringify", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "base", "heading", i18n_1, 3, "content"], [1, "tui-space_top-4"], ["tuiLink", "", "routerLink", "/pipes/filter-by-input"], ["tuiLink", "", "routerLink", "/pipes/stringify-content"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiStringifyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiStringifyComponent_ng_template_1_Template, 9, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiStringifyComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiStringifyExample1, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiStringifyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/stringify/stringify.module.ts










let ExampleTuiStringifyModule = /*#__PURE__*/(() => {
  class ExampleTuiStringifyModule {}

  ExampleTuiStringifyModule.ɵfac = function ExampleTuiStringifyModule_Factory(t) {
    return new (t || ExampleTuiStringifyModule)();
  };

  ExampleTuiStringifyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiStringifyModule
  });
  ExampleTuiStringifyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[fesm2015_forms/* FormsModule */.u5, kit.TuiFilterByInputPipeModule, kit.TuiStringifyPipeModule, kit.TuiStringifyContentPipeModule, core.TuiNotificationModule, core.TuiLinkModule, kit.TuiComboBoxModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiStringifyComponent))]]
  });
  return ExampleTuiStringifyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiStringifyModule, {
    declarations: [ExampleTuiStringifyComponent, TuiStringifyExample1],
    imports: [fesm2015_forms/* FormsModule */.u5, kit.TuiFilterByInputPipeModule, kit.TuiStringifyPipeModule, kit.TuiStringifyContentPipeModule, core.TuiNotificationModule, core.TuiLinkModule, kit.TuiComboBoxModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiStringifyComponent]
  });
})();

/***/ })

}]);