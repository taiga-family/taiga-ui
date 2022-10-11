"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[23678],{

/***/ 23678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTableFiltersModule": () => (/* binding */ ExampleTuiTableFiltersModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filters.directive.ts
var table_filters_directive = __webpack_require__(76215);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filter.directive.ts
var table_filter_directive = __webpack_require__(98777);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/generic-filter.directive.ts
var generic_filter_directive = __webpack_require__(92338);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th-group/th-group.component.ts
var th_group_component = __webpack_require__(222);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tbody/tbody.component.ts
var tbody_component = __webpack_require__(57681);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tr/tr.component.ts
var tr_component = __webpack_require__(84190);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/cell.directive.ts
var cell_directive = __webpack_require__(62818);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filters.pipe.ts
var table_filters_pipe = __webpack_require__(44910);
// EXTERNAL MODULE: ./projects/core/pipes/format-number/format-number.pipe.ts
var format_number_pipe = __webpack_require__(59544);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-filters/examples/1/index.ts




















function TuiTableFiltersExample1_tr_15_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 11);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r1.name, " ");
  }
}

function TuiTableFiltersExample1_tr_15_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 11);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatNumber");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, item_r1.balance), " ");
  }
}

function TuiTableFiltersExample1_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableFiltersExample1_tr_15_td_1_Template, 2, 1, "td", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableFiltersExample1_tr_15_td_2_Template, 3, 3, "td", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "balance");
  }
}

const _c0 = function () {
  return {
    standalone: true
  };
};

let TuiTableFiltersExample1 = /*#__PURE__*/(() => {
  class TuiTableFiltersExample1 {
    constructor() {
      this.form = new fesm2015_forms/* FormGroup */.cw({
        balance: new fesm2015_forms/* FormControl */.NI(0)
      });
      this.data = [{
        name: `Alex Inkin`,
        balance: 1323525
      }, {
        name: `Roman Sedov`,
        balance: 523242
      }, {
        name: `Vladimir Potekhin`,
        balance: 645465
      }, {
        name: `Nikita Barsukov`,
        balance: 468468
      }, {
        name: `Maxim Ivanov`,
        balance: 498654
      }];
      this.columns = Object.keys(this.data[0]);

      this.filter = (item, value) => item >= value;
    }

    onToggle(enabled) {
      if (enabled) {
        this.form.enable();
      } else {
        this.form.disable();
      }
    }

  }

  TuiTableFiltersExample1.ɵfac = function TuiTableFiltersExample1_Factory(t) {
    return new (t || TuiTableFiltersExample1)();
  };

  TuiTableFiltersExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableFiltersExample1,
    selectors: [["tui-table-filters-example-1"]],
    decls: 18,
    vars: 11,
    consts: [["tuiTableFilters", ""], [1, "form", 3, "formGroup"], ["tuiTableFilter", "balance", "formControlName", "balance", 1, "control", 3, "tuiGenericFilter"], [3, "ngModelOptions", "ngModel", "ngModelChange"], ["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", ""], ["tuiTbody", ""], ["tuiTr", "", 4, "ngFor", "ngForOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]],
    template: function TuiTableFiltersExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementContainerStart */.ynx(0, 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-number", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Minimal balance ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "label");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-toggle", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableFiltersExample1_Template_tui_toggle_ngModelChange_5_listener($event) {
          return ctx.onToggle($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(6, " Enable filtering ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "table", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tr", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "th", 6);
        fesm2015_core/* ɵɵtext */._uU(11, "Name");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "th", 6);
        fesm2015_core/* ɵɵtext */._uU(13, "Balance");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tbody", 7);
        fesm2015_core/* ɵɵtemplate */.YNc(15, TuiTableFiltersExample1_tr_15_Template, 3, 2, "tr", 8);
        fesm2015_core/* ɵɵpipe */.ALo(16, "async");
        fesm2015_core/* ɵɵpipe */.ALo(17, "tuiTableFilters");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementContainerEnd */.BQk();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiGenericFilter", ctx.filter);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModelOptions", fesm2015_core/* ɵɵpureFunction0 */.DdM(10, _c0))("ngModel", ctx.form.enabled);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(16, 6, fesm2015_core/* ɵɵpipeBind1 */.lcZ(17, 8, ctx.data)));
      }
    },
    directives: [table_filters_directive/* TuiTableFiltersDirective */.w, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, table_filter_directive/* TuiTableFilterDirective */.X, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, generic_filter_directive/* TuiGenericFilterDirective */.C, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgModel */.On, table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, th_component/* TuiThComponent */.W, tbody_component/* TuiTbodyComponent */.j, common/* NgForOf */.sg, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K],
    pipes: [common/* AsyncPipe */.Ov, table_filters_pipe/* TuiTableFiltersPipe */.h, format_number_pipe/* TuiFormatNumberPipe */.m],
    styles: [".form[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1rem}.control[_ngcontent-%COMP%]{flex:1;margin-right:2rem}.table[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return TuiTableFiltersExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-filters/table-filters.component.ts







function ExampleTuiTableFiltersComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelement */._UZ(1, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-table-filters-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiTableFiltersComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
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

let ExampleTuiTableFiltersComponent = /*#__PURE__*/(() => {
  class ExampleTuiTableFiltersComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 31739).then(__webpack_require__.t.bind(__webpack_require__, 31739, 17)),
        HTML: __webpack_require__.e(/* import() */ 98907).then(__webpack_require__.t.bind(__webpack_require__, 98907, 17)),
        LESS: __webpack_require__.e(/* import() */ 78318).then(__webpack_require__.t.bind(__webpack_require__, 78318, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 13837).then(__webpack_require__.t.bind(__webpack_require__, 13837, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 24361).then(__webpack_require__.t.bind(__webpack_require__, 24361, 17));
    }

  }

  ExampleTuiTableFiltersComponent.ɵfac = function ExampleTuiTableFiltersComponent_Factory(t) {
    return new (t || ExampleTuiTableFiltersComponent)();
  };

  ExampleTuiTableFiltersComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTableFiltersComponent,
    selectors: [["example-table-filters"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7647057403155936863$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__3 = goog.getMsg("{$startParagraph}This module allows you to filter table data in a flexible way.{$closeParagraph}{$startTagTuiDocExample}{$startTagTuiTableFiltersExample_1}{$closeTagTuiTableFiltersExample_1}{$closeTagTuiDocExample}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD",
          "startTagTuiDocExample": "\uFFFD#2\uFFFD",
          "startTagTuiTableFiltersExample_1": "\uFFFD#3\uFFFD",
          "closeTagTuiTableFiltersExample_1": "\uFFFD/#3\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7647057403155936863$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__3;
      } else {
        i18n_0 = $localize`:␟2f730067ca934c818edfc4496064e5793903a535␟7647057403155936863:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:This module allows you to filter table data in a flexible way.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_TABLE_FILTERS_EXAMPLE_1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_TABLE_FILTERS_EXAMPLE_1:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6680845003239236590$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiTableFiltersModule{$closeTagCode} into a module where you want to filter data for your table ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_6680845003239236590$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟84ac78f530c18595843720bf1c0005c88ecd7de6␟6680845003239236590: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableFiltersModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to filter data for your table `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9084780547311506721$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__7 = goog.getMsg("Add directives and pipe to the template:");
        i18n_6 = MSG_EXTERNAL_9084780547311506721$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_FILTERS_TABLE_FILTERS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a0f536f29bef501e23a6d1ff6dcc04be52c83050␟9084780547311506721:Add directives and pipe to the template:`;
      }

      return [["header", "TableFilters", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["id", "basic", "heading", i18n_1, 3, "content"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTableFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTableFiltersComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTableFiltersComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTableFiltersExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTableFiltersComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-filters/table-filters.module.ts











let ExampleTuiTableFiltersModule = /*#__PURE__*/(() => {
  class ExampleTuiTableFiltersModule {}

  ExampleTuiTableFiltersModule.ɵfac = function ExampleTuiTableFiltersModule_Factory(t) {
    return new (t || ExampleTuiTableFiltersModule)();
  };

  ExampleTuiTableFiltersModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTableFiltersModule
  });
  ExampleTuiTableFiltersModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiFormatNumberPipeModule, kit.TuiInputNumberModule, kit.TuiToggleModule, addon_table.TuiTableModule, addon_table.TuiTableFiltersModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTableFiltersComponent))]]
  });
  return ExampleTuiTableFiltersModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTableFiltersModule, {
    declarations: [ExampleTuiTableFiltersComponent, TuiTableFiltersExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiFormatNumberPipeModule, kit.TuiInputNumberModule, kit.TuiToggleModule, addon_table.TuiTableModule, addon_table.TuiTableFiltersModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTableFiltersComponent]
  });
})();

/***/ })

}]);