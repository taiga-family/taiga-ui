"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36256],{

/***/ 57971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I3": () => (/* reexport */ stuck_provider/* TUI_STUCK */.I),
  "yj": () => (/* reexport */ stuck_provider/* TUI_STUCK_PROVIDER */.y),
  "Vl": () => (/* reexport */ table_pagination_options/* TUI_TABLE_PAGINATION_DEFAULT_OPTIONS */.Vl),
  "R9": () => (/* reexport */ table_pagination_options/* TUI_TABLE_PAGINATION_OPTIONS */.R9),
  "Wb": () => (/* reexport */ table_provider/* TUI_TABLE_PROVIDER */.W),
  "yc": () => (/* reexport */ table_providers/* TUI_TABLE_PROVIDERS */.y),
  "Bl": () => (/* reexport */ cell_directive/* TuiCellDirective */.B),
  "DZ": () => (/* reexport */ head_directive/* TuiHeadDirective */.D),
  "eO": () => (/* reexport */ reorder/* TuiReorderComponent */.e),
  "tk": () => (/* reexport */ reorder/* TuiReorderModule */.B),
  "YX": () => (/* reexport */ resized_directive/* TuiResizedDirective */.Y),
  "LU": () => (/* reexport */ row_directive/* TuiRowDirective */.L),
  "PQ": () => (/* reexport */ sort_by_directive/* TuiSortByDirective */.P),
  "gJ": () => (/* reexport */ sortable_directive/* TuiSortableDirective */.g),
  "c4": () => (/* reexport */ table_directive/* TuiTableDirective */.c),
  "jz": () => (/* reexport */ TuiTableModule),
  "WT": () => (/* reexport */ table_pagination_component/* TuiTablePaginationComponent */.W),
  "y3": () => (/* reexport */ TuiTablePaginationModule),
  "yS": () => (/* reexport */ table_sort_pipe/* TuiTableSortPipe */.y),
  "jY": () => (/* reexport */ tbody_component/* TuiTbodyComponent */.j),
  "Kt": () => (/* reexport */ td_component/* TuiTdComponent */.K),
  "Ws": () => (/* reexport */ th_component/* TuiThComponent */.W),
  "EE": () => (/* reexport */ th_group_component/* TuiThGroupComponent */.E),
  "Nx": () => (/* reexport */ thead_directive/* TuiTheadDirective */.N),
  "fu": () => (/* reexport */ tr_component/* TuiTrComponent */.f),
  "PT": () => (/* reexport */ table_pagination_options/* tuiTablePaginationOptionsProvider */.PT)
});

// EXTERNAL MODULE: ./projects/addon-table/components/reorder/index.ts + 1 modules
var reorder = __webpack_require__(8874);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/cell.directive.ts
var cell_directive = __webpack_require__(62818);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/head.directive.ts
var head_directive = __webpack_require__(78979);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/resized.directive.ts
var resized_directive = __webpack_require__(17706);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/row.directive.ts
var row_directive = __webpack_require__(35459);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/sort-by.directive.ts
var sort_by_directive = __webpack_require__(61006);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/sortable.directive.ts
var sortable_directive = __webpack_require__(10435);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/thead.directive.ts
var thead_directive = __webpack_require__(13073);
// EXTERNAL MODULE: ./projects/addon-table/components/table/pipes/table-sort.pipe.ts
var table_sort_pipe = __webpack_require__(23301);
// EXTERNAL MODULE: ./projects/addon-table/components/table/providers/stuck.provider.ts
var stuck_provider = __webpack_require__(15315);
// EXTERNAL MODULE: ./projects/addon-table/components/table/providers/table.provider.ts
var table_provider = __webpack_require__(35436);
// EXTERNAL MODULE: ./projects/addon-table/components/table/providers/table.providers.ts
var table_providers = __webpack_require__(30479);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tbody/tbody.component.ts
var tbody_component = __webpack_require__(57681);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th-group/th-group.component.ts
var th_group_component = __webpack_require__(222);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tr/tr.component.ts
var tr_component = __webpack_require__(84190);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-table/components/table/table.module.ts



















let TuiTableModule = /*#__PURE__*/(() => {
  class TuiTableModule {}

  TuiTableModule.ɵfac = function TuiTableModule_Factory(t) {
    return new (t || TuiTableModule)();
  };

  TuiTableModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiTableModule
  });
  TuiTableModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiMapperPipeModule, core.TuiSvgModule]]
  });
  return TuiTableModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiTableModule, {
    declarations: [table_directive/* TuiTableDirective */.c, tbody_component/* TuiTbodyComponent */.j, th_group_component/* TuiThGroupComponent */.E, th_component/* TuiThComponent */.W, td_component/* TuiTdComponent */.K, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, head_directive/* TuiHeadDirective */.D, row_directive/* TuiRowDirective */.L, sort_by_directive/* TuiSortByDirective */.P, sortable_directive/* TuiSortableDirective */.g, thead_directive/* TuiTheadDirective */.N, resized_directive/* TuiResizedDirective */.Y, table_sort_pipe/* TuiTableSortPipe */.y],
    imports: [common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiMapperPipeModule, core.TuiSvgModule],
    exports: [table_directive/* TuiTableDirective */.c, tbody_component/* TuiTbodyComponent */.j, th_group_component/* TuiThGroupComponent */.E, th_component/* TuiThComponent */.W, td_component/* TuiTdComponent */.K, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, head_directive/* TuiHeadDirective */.D, row_directive/* TuiRowDirective */.L, sort_by_directive/* TuiSortByDirective */.P, sortable_directive/* TuiSortableDirective */.g, thead_directive/* TuiTheadDirective */.N, table_sort_pipe/* TuiTableSortPipe */.y]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-table/components/table/index.ts


















// EXTERNAL MODULE: ./projects/addon-table/components/table-pagination/table-pagination.component.ts
var table_pagination_component = __webpack_require__(56946);
;// CONCATENATED MODULE: ./projects/addon-table/components/table-pagination/table-pagination.module.ts





let TuiTablePaginationModule = /*#__PURE__*/(() => {
  class TuiTablePaginationModule {}

  TuiTablePaginationModule.ɵfac = function TuiTablePaginationModule_Factory(t) {
    return new (t || TuiTablePaginationModule)();
  };

  TuiTablePaginationModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiTablePaginationModule
  });
  TuiTablePaginationModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiButtonModule, core.TuiLinkModule, core.TuiHostedDropdownModule, core.TuiDataListModule, core.TuiSvgModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq]]
  });
  return TuiTablePaginationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiTablePaginationModule, {
    declarations: [table_pagination_component/* TuiTablePaginationComponent */.W],
    imports: [common/* CommonModule */.ez, core.TuiButtonModule, core.TuiLinkModule, core.TuiHostedDropdownModule, core.TuiDataListModule, core.TuiSvgModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq],
    exports: [table_pagination_component/* TuiTablePaginationComponent */.W]
  });
})();
// EXTERNAL MODULE: ./projects/addon-table/components/table-pagination/table-pagination-options.ts
var table_pagination_options = __webpack_require__(10961);
;// CONCATENATED MODULE: ./projects/addon-table/components/table-pagination/index.ts



;// CONCATENATED MODULE: ./projects/addon-table/components/index.ts




/***/ }),

/***/ 10961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vl": () => (/* binding */ TUI_TABLE_PAGINATION_DEFAULT_OPTIONS),
/* harmony export */   "R9": () => (/* binding */ TUI_TABLE_PAGINATION_OPTIONS),
/* harmony export */   "PT": () => (/* binding */ tuiTablePaginationOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);


function defaultSizeOptionContent({
  $implicit
}) {
  return `${$implicit}`;
}

const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
  sizeOptionContent: defaultSizeOptionContent,
  showPages: true
};
const TUI_TABLE_PAGINATION_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[TUI_TABLE_PAGINATION_OPTIONS]: Default parameters for TablePagination component`, {
  factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS
});
function tuiTablePaginationOptionsProvider(options) {
  return {
    provide: TUI_TABLE_PAGINATION_OPTIONS,
    useValue: Object.assign(Object.assign({}, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS), options)
  };
}

/***/ }),

/***/ 56946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ TuiTablePaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47119);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90987);
/* harmony import */ var _table_pagination_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12057);
/* harmony import */ var _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62939);
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66596);
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20933);
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35065);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89570);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34880);
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76189);

















function TuiTablePaginationComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(2, "strong", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const texts_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.pages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r2.pages);
  }
}

function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const text_r13 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", text_r13, " ");
  }
}

function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(0, "tui-svg", 12);
  }
}

function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(0, "span", 13);
  }
}

const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    total: a1
  };
};

function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("click", function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
      return ctx_r14.onItem(item_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(2, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(3, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_tui_svg_3_Template, 1, 0, "tui-svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(4, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const item_r8 = ctx.$implicit;

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .MAs(5);

    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("polymorpheusOutlet", ctx_r7.options.sizeOptionContent)("polymorpheusOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpureFunction2"] */ .WLB(4, _c0, item_r8, ctx_r7.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", item_r8 === ctx_r7.size)("ngIfElse", _r11);
  }
}

function TuiTablePaginationComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(1, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template, 6, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.items);
  }
}

function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("click", function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
      return ctx_r17.back();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("click", function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
      return ctx_r19.forth();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const spinTexts_r16 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r5.leftDisabled)("title", spinTexts_r16[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r5.rightDisabled)("title", spinTexts_r16[1]);
  }
}

function TuiTablePaginationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(2, TuiTablePaginationComponent_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(5, "tui-hosted-dropdown", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("openChange", function TuiTablePaginationComponent_ng_container_0_Template_tui_hosted_dropdown_openChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r20.open = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(9, TuiTablePaginationComponent_ng_container_0_ng_template_9_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(12, "strong", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(14, TuiTablePaginationComponent_ng_container_0_ng_container_14_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const texts_r1 = ctx.ngIf;

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .MAs(10);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.options.showPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.linesPerPage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("content", _r3)("open", ctx_r0.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate2"] */ .AsE("", ctx_r0.start + 1, "\u2013", ctx_r0.end, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.of, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(15, 9, ctx_r0.spinTexts$));
  }
}

class TuiTablePaginationComponent {
  constructor(spinTexts$, texts$, options) {
    this.spinTexts$ = spinTexts$;
    this.texts$ = texts$;
    this.options = options;
    this.items = [10, 20, 50, 100];
    this.total = 0;
    this.page = 0;
    this.size = this.items[0];
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__/* .EventEmitter */ .vpe();
    this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__/* .EventEmitter */ .vpe();
    this.open = false;
  }

  get pages() {
    return Math.ceil(this.total / this.size);
  }

  get start() {
    return this.page * this.size;
  }

  get end() {
    return Math.min(this.start + this.size, this.total);
  }

  get leftDisabled() {
    return !this.start;
  }

  get rightDisabled() {
    return this.end === this.total;
  }

  onItem(size) {
    const {
      start
    } = this;
    this.size = size;
    this.sizeChange.emit(size);
    this.open = false;
    this.page = Math.floor(start / this.size);
    this.pageChange.emit(this.page);
  }

  back() {
    this.page--;
    this.pageChange.emit(this.page);
  }

  forth() {
    this.page++;
    this.pageChange.emit(this.page);
  }

}

TuiTablePaginationComponent.ɵfac = function TuiTablePaginationComponent_Factory(t) {
  return new (t || TuiTablePaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_SPIN_TEXTS), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_addon_table_tokens__WEBPACK_IMPORTED_MODULE_0__/* .TUI_TABLE_PAGINATION_TEXTS */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_table_pagination_options__WEBPACK_IMPORTED_MODULE_3__/* .TUI_TABLE_PAGINATION_OPTIONS */ .R9));
};

TuiTablePaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiTablePaginationComponent,
  selectors: [["tui-table-pagination"]],
  inputs: {
    items: "items",
    total: "total",
    page: "page",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange",
    sizeChange: "sizeChange"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "t-pages"], ["automation-id", "tui-table-pagination__lines-per-page-wrapper"], [3, "content", "open", "openChange"], ["tuiLink", ""], ["content", ""], [1, "t-strong"], [4, "ngFor", "ngForOf"], ["tuiOption", "", "size", "s", 1, "t-item", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["src", "tuiIconCheckLarge", "class", "t-checkmark", 4, "ngIf", "ngIfElse"], ["fakeIcon", ""], ["src", "tuiIconCheckLarge", 1, "t-checkmark"], [1, "t-checkmark"], ["tuiIconButton", "", "type", "button", "size", "xs", "appearance", "icon", "icon", "tuiIconChevronLeft", 1, "t-back", 3, "disabled", "title", "click"], ["tuiIconButton", "", "type", "button", "size", "xs", "appearance", "icon", "icon", "tuiIconChevronRight", 3, "disabled", "title", "click"]],
  template: function TuiTablePaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(0, TuiTablePaginationComponent_ng_container_0_Template, 16, 11, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.texts$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .O5, _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_4__/* .TuiHostedDropdownComponent */ .o, _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__/* .TuiLinkComponent */ .V, _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_6__/* .TuiDataListComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .sg, _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_7__/* .TuiOptionComponent */ .v, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__/* .PolymorpheusOutletDirective */ .Li, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__/* .TuiSvgComponent */ .P, _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__/* .TuiButtonComponent */ .v],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .AsyncPipe */ .Ov],
  styles: ["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiTablePaginationComponent.prototype, "items", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiTablePaginationComponent.prototype, "total", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiTablePaginationComponent.prototype, "page", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiTablePaginationComponent.prototype, "size", void 0);

/***/ }),

/***/ 62818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ TuiCellDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);




class TuiCellDirective {
  constructor(template) {
    this.template = template;
    this.tuiCell = ``;
  }

}

TuiCellDirective.ɵfac = function TuiCellDirective_Factory(t) {
  return new (t || TuiCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .TemplateRef */ .Rgc));
};

TuiCellDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiCellDirective,
  selectors: [["", "tuiCell", ""]],
  inputs: {
    tuiCell: "tuiCell"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiCellDirective.prototype, "tuiCell", void 0);

/***/ }),

/***/ 78979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ TuiHeadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);


let TuiHeadDirective = /*#__PURE__*/(() => {
  class TuiHeadDirective {
    constructor(template) {
      this.template = template;
    }

  }

  TuiHeadDirective.ɵfac = function TuiHeadDirective_Factory(t) {
    return new (t || TuiHeadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .TemplateRef */ .Rgc));
  };

  TuiHeadDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiHeadDirective,
    selectors: [["", "tuiHead", ""]],
    inputs: {
      tuiHead: "tuiHead"
    }
  });
  return TuiHeadDirective;
})();

/***/ }),

/***/ 17706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ TuiResizedDirective)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87519);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46782);






let TuiResizedDirective = /*#__PURE__*/(() => {
  class TuiResizedDirective {
    constructor(documentRef, elementRef, parentRef) {
      this.documentRef = documentRef;
      this.elementRef = elementRef;
      this.parentRef = parentRef;
      this.tuiResized = (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiTypedFromEvent)(this.elementRef.nativeElement, `mousedown`).pipe((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiPreventDefault)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .switchMap */ .w)(() => {
        const {
          width,
          right
        } = this.parentRef.nativeElement.getBoundingClientRect();
        return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiTypedFromEvent)(this.documentRef, `mousemove`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .x)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(({
          clientX
        }) => width + clientX - right), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .R)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiTypedFromEvent)(this.documentRef, `mouseup`)));
      }));
    }

  }

  TuiResizedDirective.ɵfac = function TuiResizedDirective_Factory(t) {
    return new (t || TuiResizedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .DOCUMENT */ .K0), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_ELEMENT_REF));
  };

  TuiResizedDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiResizedDirective,
    selectors: [["", "tuiResized", ""]],
    outputs: {
      tuiResized: "tuiResized"
    }
  });
  return TuiResizedDirective;
})();

/***/ }),

/***/ 35459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ TuiRowDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);




class TuiRowDirective {
  constructor(template) {
    this.template = template;
    this.tuiRowOf = [];
  }

  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }

}

TuiRowDirective.ɵfac = function TuiRowDirective_Factory(t) {
  return new (t || TuiRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .TemplateRef */ .Rgc));
};

TuiRowDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiRowDirective,
  selectors: [["ng-template", "tuiRow", ""]],
  inputs: {
    tuiRowOf: "tuiRowOf"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiRowDirective.prototype, "tuiRowOf", void 0);

/***/ }),

/***/ 61006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ TuiSortByDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88002);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10435);
/* harmony import */ var _table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);







class TuiSortByDirective {
  constructor(table) {
    this.table = table;
    this.sortables = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.EMPTY_QUERY;
    this.tuiSortBy = null;
    this.tuiSortByChange = this.table.sorterChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .h)(() => !!this.sortables.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(sorter => this.getKey(sorter)));
  }

  getKey(sorter) {
    var _a;

    return ((_a = this.sortables.find(s => s.sorter === sorter)) === null || _a === void 0 ? void 0 : _a.key) || null;
  }

}

TuiSortByDirective.ɵfac = function TuiSortByDirective_Factory(t) {
  return new (t || TuiSortByDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c));
};

TuiSortByDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiSortByDirective,
  selectors: [["table", "tuiTable", "", "tuiSortBy", ""]],
  contentQueries: function TuiSortByDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _sortable_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiSortableDirective */ .g, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.sortables = _t);
    }
  },
  inputs: {
    tuiSortBy: "tuiSortBy"
  },
  outputs: {
    tuiSortByChange: "tuiSortByChange"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiSortByDirective.prototype, "tuiSortBy", void 0);

/***/ }),

/***/ 10435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ TuiSortableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96408);
/* harmony import */ var _sort_by_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61006);
/* harmony import */ var _table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);








let TuiSortableDirective = /*#__PURE__*/(() => {
  class TuiSortableDirective {
    constructor(sortBy, table, th) {
      this.sortBy = sortBy;
      this.table = table;
      this.th = th;

      this.sorter = () => 0;
    }

    get key() {
      return this.th.key;
    }

    ngOnInit() {
      this.sorter = this.match ? this.table.sorter : this.sorter;
      this.th.sorter = this.sorter;
    }

    ngDoCheck() {
      if (this.match && this.table.sorter !== this.sorter) {
        this.table.updateSorter(this.sorter);
      }
    }

    get match() {
      return this.sortBy.tuiSortBy === this.key;
    }

  }

  TuiSortableDirective.ɵfac = function TuiSortableDirective_Factory(t) {
    return new (t || TuiSortableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .forwardRef */ .Gpc)(() => _sort_by_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiSortByDirective */ .P)), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .Y36(_th_th_component__WEBPACK_IMPORTED_MODULE_0__/* .TuiThComponent */ .W));
  };

  TuiSortableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiSortableDirective,
    selectors: [["th", "tuiTh", "", "tuiSortable", ""]]
  });
  return TuiSortableDirective;
})();

/***/ }),

/***/ 19582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TuiTableDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11693);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15315);
/* harmony import */ var _providers_table_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30479);









class TuiTableDirective extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiController {
  constructor(entries$, mode$, stuck$, changeDetectorRef) {
    super();
    this.entries$ = entries$;
    this.mode$ = mode$;
    this.stuck$ = stuck$;
    this.changeDetectorRef = changeDetectorRef;
    this.columns = [];
    this.size = `m`;
    this.direction = 1;
    this.directionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__/* .EventEmitter */ .vpe();
    this.sorterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__/* .EventEmitter */ .vpe();

    this.sorter = () => 0;
  }

  updateSorter(sorter) {
    if (this.sorter === sorter) {
      this.direction = this.direction === 1 ? -1 : 1;
      this.directionChange.emit(this.direction);
    } else {
      this.sorter = sorter || (() => 0);

      this.sorterChange.emit(this.sorter);
      this.direction = 1;
      this.directionChange.emit(1);
    }

    this.change$.next();
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

}

TuiTableDirective.ɵfac = function TuiTableDirective_Factory(t) {
  return new (t || TuiTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_5__/* .IntersectionObserverService */ .te), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_2__/* .TUI_STUCK */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO));
};

TuiTableDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiTableDirective,
  selectors: [["table", "tuiTable", ""]],
  hostAttrs: [2, "border-collapse", "separate"],
  hostVars: 1,
  hostBindings: function TuiTableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("$.data-mode.attr", function TuiTableDirective___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      })("$.class._stuck", function TuiTableDirective___class__stuck_HostBindingHandler() {
        return ctx.stuck$;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
    }
  },
  inputs: {
    columns: "columns",
    size: "size",
    direction: "direction",
    sorter: "sorter"
  },
  outputs: {
    directionChange: "directionChange",
    sorterChange: "sorterChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn(_providers_table_providers__WEBPACK_IMPORTED_MODULE_3__/* .TUI_TABLE_PROVIDERS */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .qOj]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTableDirective.prototype, "columns", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTableDirective.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTableDirective.prototype, "direction", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTableDirective.prototype, "sorter", void 0);

/***/ }),

/***/ 13073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ TuiTheadDirective)
/* harmony export */ });
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11693);
/* harmony import */ var _providers_stuck_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);




let TuiTheadDirective = /*#__PURE__*/(() => {
  class TuiTheadDirective {
    constructor(stuck$) {
      this.stuck$ = stuck$;
    }

  }

  TuiTheadDirective.ɵfac = function TuiTheadDirective_Factory(t) {
    return new (t || TuiTheadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_0__/* .TUI_STUCK */ .I));
  };

  TuiTheadDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiTheadDirective,
    selectors: [["thead", "tuiThead", ""]],
    hostBindings: function TuiTheadDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .NdJ("$.class._stuck", function TuiTheadDirective___class__stuck_HostBindingHandler() {
          return ctx.stuck$;
        });
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([_providers_stuck_provider__WEBPACK_IMPORTED_MODULE_0__/* .TUI_STUCK_PROVIDER */ .y, _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__/* .IntersectionObserverService */ .te, {
      provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_2__/* .INTERSECTION_ROOT_MARGIN */ .RL,
      useValue: `0px 10000px 10000px 10000px`
    }])]
  });
  return TuiTheadDirective;
})();

/***/ }),

/***/ 23301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ TuiTableSortPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);





class TuiTableSortPipe {
  constructor(table) {
    this.table = table;
  }

  transform(data) {
    return this.sort(data, this.table.sorter, this.table.direction);
  }

  sort(data, sorter, direction) {
    return [...data].sort((a, b) => direction * sorter(a, b));
  }

}

TuiTableSortPipe.ɵfac = function TuiTableSortPipe_Factory(t) {
  return new (t || TuiTableSortPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_directives_table_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiTableDirective */ .c, 16));
};

TuiTableSortPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefinePipe"] */ .Yjl({
  name: "tuiTableSort",
  type: TuiTableSortPipe,
  pure: false
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiPure], TuiTableSortPipe.prototype, "sort", null);

/***/ }),

/***/ 15315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ TUI_STUCK),
/* harmony export */   "y": () => (/* binding */ TUI_STUCK_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11693);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88002);



const TUI_STUCK = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[TUI_STUCK]: Stream of sticky stuck events`);
const TUI_STUCK_PROVIDER = {
  provide: TUI_STUCK,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .SBq, _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_1__/* .IntersectionObserverService */ .te],
  useFactory: ({
    nativeElement
  }, entries$) => {
    const stream$ = entries$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .map */ .U)(([{
      intersectionRatio
    }]) => intersectionRatio < 1));
    nativeElement[`$.class._stuck`] = stream$;
    return stream$;
  }
};

/***/ }),

/***/ 35436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ TUI_TABLE_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23301);





const TUI_TABLE_PROVIDER = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDestroyService, _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_3__/* .TuiTableSortPipe */ .y, {
  provide: _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__/* .SkipSelf */ .tp0(), _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c], _angular_core__WEBPACK_IMPORTED_MODULE_4__/* .ChangeDetectorRef */ .sBO, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDestroyService],
  useFactory: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.tuiWatchedControllerFactory
}];

/***/ }),

/***/ 30479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ TUI_TABLE_PROVIDERS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);
/* harmony import */ var _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11693);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91068);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var _stuck_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15315);






const TUI_TABLE_PROVIDERS = [{
  provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_4__/* .INTERSECTION_ROOT_MARGIN */ .RL,
  useValue: `10000px 10000px 10000px 0px`
}, {
  provide: _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_4__/* .INTERSECTION_THRESHOLD */ .op,
  useValue: [0, 1]
}, {
  provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_TEXTFIELD_APPEARANCE,
  useValue: "table"
  /* Table */

}, {
  provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_TEXTFIELD_LABEL_OUTSIDE,
  useValue: {
    labelOutside: true
  }
}, {
  provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_1__.TUI_INPUT_COUNT_OPTIONS,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .SkipSelf */ .tp0(), _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_1__.TUI_INPUT_COUNT_OPTIONS]],
  useFactory: options => Object.assign(Object.assign({}, options), {
    hideButtons: true
  })
}, {
  provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_TEXTFIELD_SIZE,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .forwardRef */ .Gpc)(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c)
}, _ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_4__/* .IntersectionObserverService */ .te, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.MODE_PROVIDER, _stuck_provider__WEBPACK_IMPORTED_MODULE_3__/* .TUI_STUCK_PROVIDER */ .y];

/***/ }),

/***/ 57681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ TuiTbodyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _directives_row_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35459);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var _pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23301);
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35436);
/* harmony import */ var _tr_tr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12057);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89570);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34880);
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35271);















const _c0 = ["tuiTbody", ""];

function TuiTbodyComponent_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .hij(" ", text_r3, " ");
  }
}

function TuiTbodyComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(1, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .NdJ("click", function TuiTbodyComponent_tr_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r4.onClick();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtemplate"] */ .YNc(4, TuiTbodyComponent_tr_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(5, "tui-svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("colSpan", ctx_r0.table.columns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("polymorpheusOutlet", ctx_r0.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵclassProp"] */ .ekj("t-chevron_rotated", ctx_r0.open);
  }
}

function TuiTbodyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementContainer"] */ .GkF(0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .ALo(1, "tuiMapper");
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const index_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", ctx_r6.row.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind3"] */ .Dn7(1, 2, item_r7, ctx_r6.toContext, index_r8));
  }
}

function TuiTbodyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtemplate"] */ .YNc(1, TuiTbodyComponent_ng_container_2_ng_container_1_Template, 2, 6, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r1.sorted);
  }
}

const _c1 = ["*"];
class TuiTbodyComponent {
  constructor(pipe, table) {
    this.pipe = pipe;
    this.table = table;
    this.data = [];
    this.heading = ``;
    this.open = true;
    this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__/* .EventEmitter */ .vpe();
    this.rows = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.EMPTY_QUERY;

    this.toContext = ($implicit, index) => ({
      $implicit,
      index
    });
  }

  get sorted() {
    return this.pipe.transform(this.data);
  }

  onClick() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

}

TuiTbodyComponent.ɵfac = function TuiTbodyComponent_Factory(t) {
  return new (t || TuiTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_pipes_table_sort_pipe__WEBPACK_IMPORTED_MODULE_3__/* .TuiTableSortPipe */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_7__/* .forwardRef */ .Gpc)(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c)));
};

TuiTbodyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiTbodyComponent,
  selectors: [["tbody", "tuiTbody", ""]],
  contentQueries: function TuiTbodyComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _directives_row_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiRowDirective */ .L, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _tr_tr_component__WEBPACK_IMPORTED_MODULE_5__/* .TuiTrComponent */ .f, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.row = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.rows = _t);
    }
  },
  inputs: {
    data: "data",
    heading: "heading",
    open: "open"
  },
  outputs: {
    openChange: "openChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵProvidersFeature"] */ ._Bn(_providers_table_provider__WEBPACK_IMPORTED_MODULE_4__/* .TUI_TABLE_PROVIDER */ .W)],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], [1, "t-heading", 3, "colSpan"], ["type", "button", 1, "t-expand", 3, "click"], [1, "t-name"], [4, "polymorpheusOutlet"], ["src", "tuiIconChevronDownLarge", 1, "t-chevron"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TuiTbodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵprojection"] */ .Hsn(0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtemplate"] */ .YNc(1, TuiTbodyComponent_tr_1_Template, 6, 4, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtemplate"] */ .YNc(2, TuiTbodyComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.open && ctx.row);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__/* .PolymorpheusOutletDirective */ .Li, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_6__/* .TuiSvgComponent */ .P, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgTemplateOutlet */ .tP],
  pipes: [_cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_10__/* .TuiMapperPipe */ .c],
  styles: ["[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:bold;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:\"\";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}table[data-size=\"l\"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size=\"l\"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size=\"l\"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size=\"l\"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTbodyComponent.prototype, "data", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTbodyComponent.prototype, "heading", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiTbodyComponent.prototype, "open", void 0);

/***/ }),

/***/ 48598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TuiTdComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);


const _c0 = ["tuiTd", ""];
const _c1 = ["*"];
let TuiTdComponent = /*#__PURE__*/(() => {
  class TuiTdComponent {}

  TuiTdComponent.ɵfac = function TuiTdComponent_Factory(t) {
    return new (t || TuiTdComponent)();
  };

  TuiTdComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TuiTdComponent,
    selectors: [["th", "tuiTd", ""], ["td", "tuiTd", ""]],
    contentQueries: function TuiTdComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControl */ .a5, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.control = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function TuiTdComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .ekj("_editable", ctx.control);
      }
    },
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function TuiTdComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .F$t();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .Hsn(0);
      }
    },
    styles: ["[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;transform:translate(0)}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode=\"onDark\"][_nghost-%COMP%]:after, table[data-mode=\"onDark\"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size=\"l\"][_nghost-%COMP%], table[data-size=\"l\"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size=\"l\"]._editable[_nghost-%COMP%], table[data-size=\"l\"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}"],
    changeDetection: 0
  });
  return TuiTdComponent;
})();

/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ TuiThGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88002);
/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78979);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19582);
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35436);
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96408);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12057);











const _c0 = ["tuiThGroup", ""];

function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", key_r3.toString(), " ");
  }
}

function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template, 2, 1, "th", 4);
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r5.th && !ctx_r5.heads.length);
  }
}

function TuiThGroupComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const key_r3 = ctx.$implicit;

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .MAs(2);

    const headings_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", (headings_r1[key_r3.toString()] == null ? null : headings_r1[key_r3.toString()].template) || _r4);
  }
}

function TuiThGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiThGroupComponent_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.table.columns);
  }
}

const _c1 = ["*"];
let TuiThGroupComponent = /*#__PURE__*/(() => {
  class TuiThGroupComponent {
    constructor(table) {
      this.table = table;
      this.heads = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.EMPTY_QUERY;
      this.heads$ = null;
    }

    ngAfterContentInit() {
      this.heads$ = this.heads.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(() => this.heads.reduce((record, item) => Object.assign(Object.assign({}, record), {
        [item.tuiHead]: item
      }), {})));
    }

  }

  TuiThGroupComponent.ɵfac = function TuiThGroupComponent_Factory(t) {
    return new (t || TuiThGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__/* .forwardRef */ .Gpc)(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiTableDirective */ .c)));
  };

  TuiThGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TuiThGroupComponent,
    selectors: [["tr", "tuiThGroup", ""]],
    contentQueries: function TuiThGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _th_th_component__WEBPACK_IMPORTED_MODULE_3__/* .TuiThComponent */ .W, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _directives_head_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiHeadDirective */ .D, 4);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.th = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.heads = _t);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn([_providers_table_provider__WEBPACK_IMPORTED_MODULE_2__/* .TUI_TABLE_PROVIDER */ .W])],
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTh", "", 4, "ngIf"], ["tuiTh", ""]],
    template: function TuiThGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵprojectionDef"] */ .F$t();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵprojection"] */ .Hsn(0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiThGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .ALo(2, "async");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .lcZ(2, 1, ctx.heads$));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgTemplateOutlet */ .tP, _th_th_component__WEBPACK_IMPORTED_MODULE_3__/* .TuiThComponent */ .W],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiThGroupComponent;
})();

/***/ }),

/***/ 96408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ TuiThComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28680);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90987);
/* harmony import */ var _directives_head_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78979);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12057);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34880);
/* harmony import */ var _directives_resized_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17706);













const _c0 = ["tuiTh", ""];

function TuiThComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("click", function TuiThComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r4.table.updateSorter(ctx_r4.sorter);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainer"] */ .GkF(1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .ALo(3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(4, "tui-svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(2);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵclassProp"] */ .ekj("t-sort_sorted", ctx_r0.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .lcZ(3, 7, ctx_r0.table.change$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵclassProp"] */ .ekj("t-sort-icon_rotated", ctx_r0.isCurrent && ctx_r0.table.direction === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r0.icon);
  }
}

function TuiThComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵprojection"] */ .Hsn(0);
  }
}

function TuiThComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .NdJ("tuiResized", function TuiThComponent_div_3_Template_div_tuiResized_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r6.onResized($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .qZA();
  }
}

const _c1 = ["*"];
class TuiThComponent {
  constructor(head, table) {
    this.head = head;
    this.table = table;
    this.sorter = this.head ? (a, b) => (0,_taiga_ui_addon_table_utils__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultSort */ .A)(a[this.key], b[this.key]) : null;
    this.resizable = false;
    this.sticky = false;
    this.width = null;
  }

  get key() {
    if (!this.head) {
      throw new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.TuiTableSortKeyException();
    }

    return this.head.tuiHead;
  }

  get isCurrent() {
    return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
  }

  get icon() {
    return this.isCurrent ? `tuiIconSortDown` : `tuiIconSortOff`;
  }

  onResized(width) {
    this.width = width;
  }

}

TuiThComponent.ɵfac = function TuiThComponent_Factory(t) {
  return new (t || TuiThComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_directives_head_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiHeadDirective */ .D, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_6__/* .forwardRef */ .Gpc)(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiTableDirective */ .c), 8));
};

TuiThComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiThComponent,
  selectors: [["th", "tuiTh", ""]],
  hostVars: 4,
  hostBindings: function TuiThComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵstyleProp"] */ .Udp("width", ctx.width, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵclassProp"] */ .ekj("_sticky", ctx.sticky);
    }
  },
  inputs: {
    sorter: "sorter",
    resizable: "resizable",
    sticky: "sticky"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵProvidersFeature"] */ ._Bn([{
    provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_ELEMENT_REF,
    useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_6__/* .ElementRef */ .SBq
  }])],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 3,
  consts: [["type", "button", "class", "t-sort", 3, "t-sort_sorted", "click", 4, "ngIf", "ngIfElse"], ["content", ""], ["class", "t-bar", 3, "tuiResized", 4, "ngIf"], ["type", "button", 1, "t-sort", 3, "click"], [3, "ngTemplateOutlet"], [1, "t-sort-icon", 3, "src"], [1, "t-bar", 3, "tuiResized"]],
  template: function TuiThComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(0, TuiThComponent_button_0_Template, 5, 9, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(1, TuiThComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(3, TuiThComponent_div_3_Template, 1, 0, "div", 2);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(2);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.sorter && ctx.table)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.resizable);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgTemplateOutlet */ .tP, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__/* .TuiSvgComponent */ .P, _directives_resized_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiResizedDirective */ .Y],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Ov],
  styles: ["[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;z-index:20;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:bold;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem rgba(237,237,237,0);border:1px solid var(--tui-base-04)}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size=\"l\"][_nghost-%COMP%], table[data-size=\"l\"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem rgba(237,237,237,.7)}table[data-mode=\"onDark\"][_nghost-%COMP%]:after, table[data-mode=\"onDark\"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode=\"onDark\"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode=\"onDark\"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem rgba(60,60,60,.9)}table[data-mode=\"onDark\"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode=\"onDark\"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem rgba(60,60,60,.9)}table[data-size=\"l\"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size=\"l\"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size=\"m\"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size=\"m\"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size=\"s\"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size=\"s\"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:bold;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort_sorted[_ngcontent-%COMP%]   .t-sort-icon_rotated[_ngcontent-%COMP%]{transform:scaleY(-1)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiThComponent.prototype, "sorter", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiThComponent.prototype, "resizable", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiThComponent.prototype, "sticky", void 0);

/***/ }),

/***/ 84190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ TuiTrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88002);
/* harmony import */ var _directives_cell_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62818);
/* harmony import */ var _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19582);
/* harmony import */ var _providers_table_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35436);
/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12057);
/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48598);












const _c0 = ["tuiTr", ""];

function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.ngIf;
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .hij(" ", item_r7[key_r3], " ");
  }
}

function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template, 2, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(1, "async");
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx_r5.item$));
  }
}

function TuiTrComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const key_r3 = ctx.$implicit;

    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(2);

    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", (items_r1[key_r3] == null ? null : items_r1[key_r3].template) || _r4);
  }
}

function TuiTrComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, TuiTrComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.table.columns);
  }
}

let TuiTrComponent = /*#__PURE__*/(() => {
  class TuiTrComponent {
    constructor(table, body) {
      this.table = table;
      this.body = body;
      this.cells = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.EMPTY_QUERY;
      this.cells$ = this.cells.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(() => this.cells.reduce((record, item) => Object.assign(Object.assign({}, record), {
        [item.tuiCell]: item
      }), {})));
      this.item$ = this.body.rows.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .U)(() => this.body.sorted[this.body.rows.toArray().findIndex(row => row === this)]));
    }

  }

  TuiTrComponent.ɵfac = function TuiTrComponent_Factory(t) {
    return new (t || TuiTrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .forwardRef */ .Gpc)(() => _directives_table_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiTableDirective */ .c)), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36((0,_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .forwardRef */ .Gpc)(() => _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_4__/* .TuiTbodyComponent */ .j)));
  };

  TuiTrComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TuiTrComponent,
    selectors: [["tr", "tuiTr", ""]],
    contentQueries: function TuiTrComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _directives_cell_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiCellDirective */ .B, 4);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.cells = _t);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵProvidersFeature"] */ ._Bn([_providers_table_provider__WEBPACK_IMPORTED_MODULE_3__/* .TUI_TABLE_PROVIDER */ .W])],
    attrs: _c0,
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTd", "", 4, "ngIf"], ["tuiTd", ""]],
    template: function TuiTrComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(0, TuiTrComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .ALo(1, "async");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.cells$));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgTemplateOutlet */ .tP, _td_td_component__WEBPACK_IMPORTED_MODULE_9__/* .TuiTdComponent */ .K],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTrComponent;
})();

/***/ }),

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ AbstractTuiTableFilter)
/* harmony export */ });
class AbstractTuiTableFilter {}

/***/ }),

/***/ 92338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ TuiGenericFilterDirective)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _abstract_table_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);



let TuiGenericFilterDirective = /*#__PURE__*/(() => {
  class TuiGenericFilterDirective extends _abstract_table_filter__WEBPACK_IMPORTED_MODULE_1__/* .AbstractTuiTableFilter */ .Y {
    constructor() {
      super(...arguments);
      this.tuiGenericFilter = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_TRUE_HANDLER;
    }

    filter(item, value) {
      return this.tuiGenericFilter(item, value);
    }

  }

  TuiGenericFilterDirective.ɵfac = /*@__PURE__*/function () {
    let ɵTuiGenericFilterDirective_BaseFactory;
    return function TuiGenericFilterDirective_Factory(t) {
      return (ɵTuiGenericFilterDirective_BaseFactory || (ɵTuiGenericFilterDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetInheritedFactory"] */ .n5z(TuiGenericFilterDirective)))(t || TuiGenericFilterDirective);
    };
  }();

  TuiGenericFilterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiGenericFilterDirective,
    selectors: [["", "tuiGenericFilter", ""]],
    inputs: {
      tuiGenericFilter: "tuiGenericFilter"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ ._Bn([{
      provide: _abstract_table_filter__WEBPACK_IMPORTED_MODULE_1__/* .AbstractTuiTableFilter */ .Y,
      useExisting: TuiGenericFilterDirective
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .qOj]
  });
  return TuiGenericFilterDirective;
})();

/***/ }),

/***/ 98777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TuiTableFilterDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23738);
/* harmony import */ var _taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87519);
/* harmony import */ var _abstract_table_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3453);
/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);











let TuiTableFilterDirective = /*#__PURE__*/(() => {
  class TuiTableFilterDirective {
    constructor(head, delegate, control, filters) {
      this.head = head;
      this.delegate = delegate;
      this.control = control;
      this.filters = filters;
      this.refresh$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .defer */ .P)(() => {
        var _a;

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .T)(this.control.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY */ .E, ((_a = this.control.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChanged */ .x)())) || rxjs__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY */ .E);
      });
      this.filters.register(this);
    }

    ngOnDestroy() {
      this.filters.unregister(this);
    }

    filter(item) {
      const {
        disabled,
        value
      } = this.control;
      return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
    }

    get key() {
      var _a;

      return this.tuiTableFilter || ((_a = this.head) === null || _a === void 0 ? void 0 : _a.tuiHead);
    }

  }

  TuiTableFilterDirective.ɵfac = function TuiTableFilterDirective_Factory(t) {
    return new (t || TuiTableFilterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_addon_table_components__WEBPACK_IMPORTED_MODULE_0__/* .TuiHeadDirective */ .DZ, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_abstract_table_filter__WEBPACK_IMPORTED_MODULE_6__/* .AbstractTuiTableFilter */ .Y), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControl */ .a5), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_table_filters_directive__WEBPACK_IMPORTED_MODULE_8__/* .TuiTableFiltersDirective */ .w));
  };

  TuiTableFilterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiTableFilterDirective,
    selectors: [["", "tuiTableFilter", ""]],
    inputs: {
      tuiTableFilter: "tuiTableFilter"
    }
  });
  return TuiTableFilterDirective;
})();

/***/ }),

/***/ 76215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TuiTableFiltersDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74788);



let TuiTableFiltersDirective = /*#__PURE__*/(() => {
  class TuiTableFiltersDirective {
    constructor() {
      this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .ReplaySubject */ .t(1);
      this.filters = [];
    }

    register(filter) {
      this.filters = this.filters.concat(filter);
      this.update();
    }

    unregister(filter) {
      this.filters = this.filters.filter(item => item !== filter);
      this.update();
    }

    filter(items) {
      return this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .switchMap */ .w)(rxjs__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .y), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(() => items.filter(item => this.check(item))));
    }

    check(item) {
      return this.filters.every(filter => filter.filter(item));
    }

    update() {
      this.refresh$.next((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .merge */ .T)(...this.filters.map(({
        refresh$
      }) => refresh$)));
    }

  }

  TuiTableFiltersDirective.ɵfac = function TuiTableFiltersDirective_Factory(t) {
    return new (t || TuiTableFiltersDirective)();
  };

  TuiTableFiltersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiTableFiltersDirective,
    selectors: [["", "tuiTableFilters", ""]]
  });
  return TuiTableFiltersDirective;
})();

/***/ }),

/***/ 44910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ TuiTableFiltersPipe)
/* harmony export */ });
/* harmony import */ var _table_filters_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);



let TuiTableFiltersPipe = /*#__PURE__*/(() => {
  class TuiTableFiltersPipe {
    constructor(filters) {
      this.filters = filters;
    }

    transform(items) {
      return this.filters.filter(items);
    }

  }

  TuiTableFiltersPipe.ɵfac = function TuiTableFiltersPipe_Factory(t) {
    return new (t || TuiTableFiltersPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .Y36(_table_filters_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiTableFiltersDirective */ .w, 16));
  };

  TuiTableFiltersPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiTableFilters",
    type: TuiTableFiltersPipe,
    pure: true
  });
  return TuiTableFiltersPipe;
})();

/***/ }),

/***/ 36256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AbstractTuiTableFilter": () => (/* reexport */ abstract_table_filter/* AbstractTuiTableFilter */.Y),
  "TUI_STUCK": () => (/* reexport */ components/* TUI_STUCK */.I3),
  "TUI_STUCK_PROVIDER": () => (/* reexport */ components/* TUI_STUCK_PROVIDER */.yj),
  "TUI_TABLE_PAGINATION_DEFAULT_OPTIONS": () => (/* reexport */ components/* TUI_TABLE_PAGINATION_DEFAULT_OPTIONS */.Vl),
  "TUI_TABLE_PAGINATION_OPTIONS": () => (/* reexport */ components/* TUI_TABLE_PAGINATION_OPTIONS */.R9),
  "TUI_TABLE_PAGINATION_TEXTS": () => (/* reexport */ tokens/* TUI_TABLE_PAGINATION_TEXTS */.J),
  "TUI_TABLE_PROVIDER": () => (/* reexport */ components/* TUI_TABLE_PROVIDER */.Wb),
  "TUI_TABLE_PROVIDERS": () => (/* reexport */ components/* TUI_TABLE_PROVIDERS */.yc),
  "TUI_TABLE_SHOW_HIDE_MESSAGE": () => (/* reexport */ tokens/* TUI_TABLE_SHOW_HIDE_MESSAGE */.s),
  "TuiCellDirective": () => (/* reexport */ components/* TuiCellDirective */.Bl),
  "TuiGenericFilterDirective": () => (/* reexport */ generic_filter_directive/* TuiGenericFilterDirective */.C),
  "TuiHeadDirective": () => (/* reexport */ components/* TuiHeadDirective */.DZ),
  "TuiReorderComponent": () => (/* reexport */ components/* TuiReorderComponent */.eO),
  "TuiReorderModule": () => (/* reexport */ components/* TuiReorderModule */.tk),
  "TuiResizedDirective": () => (/* reexport */ components/* TuiResizedDirective */.YX),
  "TuiRowDirective": () => (/* reexport */ components/* TuiRowDirective */.LU),
  "TuiSortByDirective": () => (/* reexport */ components/* TuiSortByDirective */.PQ),
  "TuiSortableDirective": () => (/* reexport */ components/* TuiSortableDirective */.gJ),
  "TuiTableDirective": () => (/* reexport */ components/* TuiTableDirective */.c4),
  "TuiTableFilterDirective": () => (/* reexport */ table_filter_directive/* TuiTableFilterDirective */.X),
  "TuiTableFiltersDirective": () => (/* reexport */ table_filters_directive/* TuiTableFiltersDirective */.w),
  "TuiTableFiltersModule": () => (/* reexport */ TuiTableFiltersModule),
  "TuiTableFiltersPipe": () => (/* reexport */ table_filters_pipe/* TuiTableFiltersPipe */.h),
  "TuiTableModule": () => (/* reexport */ components/* TuiTableModule */.jz),
  "TuiTablePaginationComponent": () => (/* reexport */ components/* TuiTablePaginationComponent */.WT),
  "TuiTablePaginationModule": () => (/* reexport */ components/* TuiTablePaginationModule */.y3),
  "TuiTableSortPipe": () => (/* reexport */ components/* TuiTableSortPipe */.yS),
  "TuiTbodyComponent": () => (/* reexport */ components/* TuiTbodyComponent */.jY),
  "TuiTdComponent": () => (/* reexport */ components/* TuiTdComponent */.Kt),
  "TuiThComponent": () => (/* reexport */ components/* TuiThComponent */.Ws),
  "TuiThGroupComponent": () => (/* reexport */ components/* TuiThGroupComponent */.EE),
  "TuiTheadDirective": () => (/* reexport */ components/* TuiTheadDirective */.Nx),
  "TuiTrComponent": () => (/* reexport */ components/* TuiTrComponent */.fu),
  "tuiDefaultSort": () => (/* reexport */ utils/* tuiDefaultSort */.A),
  "tuiTablePaginationOptionsProvider": () => (/* reexport */ components/* tuiTablePaginationOptionsProvider */.PT)
});

// EXTERNAL MODULE: ./projects/addon-table/components/index.ts + 4 modules
var components = __webpack_require__(57971);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/abstract-table-filter.ts
var abstract_table_filter = __webpack_require__(3453);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/generic-filter.directive.ts
var generic_filter_directive = __webpack_require__(92338);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filter.directive.ts
var table_filter_directive = __webpack_require__(98777);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filters.directive.ts
var table_filters_directive = __webpack_require__(76215);
// EXTERNAL MODULE: ./projects/addon-table/directives/table-filters/table-filters.pipe.ts
var table_filters_pipe = __webpack_require__(44910);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-table/directives/table-filters/table-filters.module.ts





let TuiTableFiltersModule = /*#__PURE__*/(() => {
  class TuiTableFiltersModule {}

  TuiTableFiltersModule.ɵfac = function TuiTableFiltersModule_Factory(t) {
    return new (t || TuiTableFiltersModule)();
  };

  TuiTableFiltersModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiTableFiltersModule
  });
  TuiTableFiltersModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({});
  return TuiTableFiltersModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiTableFiltersModule, {
    declarations: [table_filters_directive/* TuiTableFiltersDirective */.w, table_filter_directive/* TuiTableFilterDirective */.X, table_filters_pipe/* TuiTableFiltersPipe */.h, generic_filter_directive/* TuiGenericFilterDirective */.C],
    exports: [table_filters_directive/* TuiTableFiltersDirective */.w, table_filter_directive/* TuiTableFilterDirective */.X, table_filters_pipe/* TuiTableFiltersPipe */.h, generic_filter_directive/* TuiGenericFilterDirective */.C]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-table/directives/table-filters/index.ts







;// CONCATENATED MODULE: ./projects/addon-table/directives/index.ts

// EXTERNAL MODULE: ./projects/addon-table/tokens/index.ts + 1 modules
var tokens = __webpack_require__(47119);
// EXTERNAL MODULE: ./projects/addon-table/utils/index.ts + 1 modules
var utils = __webpack_require__(28680);
;// CONCATENATED MODULE: ./projects/addon-table/index.ts






/***/ }),

/***/ 28680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ tuiDefaultSort)
});

// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/addon-table/utils/default-sort.ts

function tuiDefaultSort(x, y) {
  const a = x instanceof cdk.TuiDay ? Number(x.toUtcNativeDate()) : x;
  const b = y instanceof cdk.TuiDay ? Number(y.toUtcNativeDate()) : y;

  if (a === b) {
    return 0;
  }

  if ((0,cdk.tuiIsString)(a) && (0,cdk.tuiIsString)(b)) {
    return a.localeCompare(b);
  }

  return a > b ? 1 : -1;
}
;// CONCATENATED MODULE: ./projects/addon-table/utils/index.ts


/***/ })

}]);