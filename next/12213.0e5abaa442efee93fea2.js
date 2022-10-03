"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12213],{

/***/ 12213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTablePaginationModule": () => (/* binding */ ExampleTuiTablePaginationModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-table/components/table-pagination/table-pagination.component.ts
var table_pagination_component = __webpack_require__(56946);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-pagination/examples/1/index.ts


let TuiTablePaginationExample1 = /*#__PURE__*/(() => {
  class TuiTablePaginationExample1 {
    constructor() {
      this.page = 3;
      this.size = 10;
    }

  }

  TuiTablePaginationExample1.ɵfac = function TuiTablePaginationExample1_Factory(t) {
    return new (t || TuiTablePaginationExample1)();
  };

  TuiTablePaginationExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiTablePaginationExample1,
    selectors: [["tui-table-pagination-example-1"]],
    decls: 5,
    vars: 5,
    consts: [[3, "total", "page", "size", "pageChange", "sizeChange"]],
    template: function TuiTablePaginationExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-table-pagination", 0);
        core/* ɵɵlistener */.NdJ("pageChange", function TuiTablePaginationExample1_Template_tui_table_pagination_pageChange_0_listener($event) {
          return ctx.page = $event;
        })("sizeChange", function TuiTablePaginationExample1_Template_tui_table_pagination_sizeChange_0_listener($event) {
          return ctx.size = $event;
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(1, "p");
        core/* ɵɵtext */._uU(2);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "p");
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("total", 237)("page", ctx.page)("size", ctx.size);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate1 */.hij("Current page: ", ctx.page, "");
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate1 */.hij("Items per page: ", ctx.size, "");
      }
    },
    directives: [table_pagination_component/* TuiTablePaginationComponent */.W],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTablePaginationExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-pagination/examples/2/index.ts




const customOptionContent = ({
  $implicit,
  total
}) => {
  switch ($implicit) {
    case 10:
      return `Ten`;

    case total:
      return `Show all rows`;

    default:
      return $implicit;
  }
};

let TuiTablePaginationExample2 = /*#__PURE__*/(() => {
  class TuiTablePaginationExample2 {
    constructor() {
      this.total = 350;
      this.sizeOptions = [10, 50, 100, this.total];
    }

  }

  TuiTablePaginationExample2.ɵfac = function TuiTablePaginationExample2_Factory(t) {
    return new (t || TuiTablePaginationExample2)();
  };

  TuiTablePaginationExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiTablePaginationExample2,
    selectors: [["tui-table-pagination-example-2"]],
    features: [core/* ɵɵProvidersFeature */._Bn([(0,addon_table.tuiTablePaginationOptionsProvider)({
      sizeOptionContent: customOptionContent
    })])],
    decls: 1,
    vars: 2,
    consts: [[3, "total", "items"]],
    template: function TuiTablePaginationExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-table-pagination", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("total", ctx.total)("items", ctx.sizeOptions);
      }
    },
    directives: [table_pagination_component/* TuiTablePaginationComponent */.W],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTablePaginationExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-pagination/examples/3/index.ts



let TuiTablePaginationExample3 = /*#__PURE__*/(() => {
  class TuiTablePaginationExample3 {
    constructor() {
      this.total = 350;
      this.sizeOptions = [10, 50, 100, this.total];
    }

  }

  TuiTablePaginationExample3.ɵfac = function TuiTablePaginationExample3_Factory(t) {
    return new (t || TuiTablePaginationExample3)();
  };

  TuiTablePaginationExample3.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiTablePaginationExample3,
    selectors: [["tui-table-pagination-example-3"]],
    features: [core/* ɵɵProvidersFeature */._Bn([(0,addon_table.tuiTablePaginationOptionsProvider)({
      showPages: false
    })])],
    decls: 1,
    vars: 2,
    consts: [[3, "total", "items"]],
    template: function TuiTablePaginationExample3_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-table-pagination", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("total", ctx.total)("items", ctx.sizeOptions);
      }
    },
    directives: [table_pagination_component/* TuiTablePaginationComponent */.W],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTablePaginationExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-pagination/table-pagination.component.ts













function ExampleTuiTablePaginationComponent_ng_template_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */._uU(0, " You can customize the component via DI-token ");
    core/* ɵɵelementStart */.TgZ(1, "code");
    core/* ɵɵtext */._uU(2, "TUI_TABLE_PAGINATION_OPTIONS");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " . ");
    core/* ɵɵelementStart */.TgZ(4, "p", 7);
    core/* ɵɵtext */._uU(5, " Use function ");
    core/* ɵɵelementStart */.TgZ(6, "code");
    core/* ɵɵtext */._uU(7, "tuiTablePaginationOptionsProvider");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(8, " to provide new value of this token. ");
    core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiTablePaginationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-table-pagination-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    core/* ɵɵtemplate */.YNc(5, ExampleTuiTablePaginationComponent_ng_template_1_ng_template_5_Template, 9, 0, "ng-template", null, 5, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelement */._UZ(7, "tui-table-pagination-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    core/* ɵɵelement */._UZ(9, "tui-table-pagination-example-3");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = core/* ɵɵreference */.MAs(6);

    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("description", _r3)("content", ctx_r0.example2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 18);
    core/* ɵɵelementStart */.TgZ(1, "p");
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 19);
    core/* ɵɵelement */._UZ(1, "p");
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 22);
    core/* ɵɵelement */._UZ(1, "code");
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTablePaginationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelementStart */.TgZ(1, "tui-table-pagination", 8);
    core/* ɵɵlistener */.NdJ("pageChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_pageChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = core/* ɵɵnextContext */.oxw();
      return ctx_r13.page = $event;
    })("sizeChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_sizeChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return ctx_r15.size = $event;
    })("pageChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_pageChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);

      const _r9 = core/* ɵɵreference */.MAs(8);

      return _r9.emitEvent($event);
    })("sizeChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_tui_table_pagination_sizeChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);

      const _r11 = core/* ɵɵreference */.MAs(10);

      return _r11.emitEvent($event);
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 9);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r18 = core/* ɵɵnextContext */.oxw();
      return ctx_r18.total = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 10);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r19 = core/* ɵɵnextContext */.oxw();
      return ctx_r19.size = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 11);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r20 = core/* ɵɵnextContext */.oxw();
      return ctx_r20.page = $event;
    });
    core/* ɵɵtemplate */.YNc(6, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTablePaginationComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r21 = core/* ɵɵnextContext */.oxw();
      return ctx_r21.items = $event;
    });
    core/* ɵɵtemplate */.YNc(7, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 13, 14, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵtemplate */.YNc(9, ExampleTuiTablePaginationComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 15, 16, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("items", ctx_r1.items)("total", ctx_r1.total)("page", ctx_r1.page)("size", ctx_r1.size);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.total);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.page);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
  }
}

function ExampleTuiTablePaginationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 23);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 24);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 25);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 26);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 27);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiTablePaginationComponent = /*#__PURE__*/(() => {
  class ExampleTuiTablePaginationComponent {
    constructor() {
      this.itemsVariants = [[10, 20, 50, 100], [10, 100, 500]];
      this.total = 1000;
      this.page = 5;
      this.items = this.itemsVariants[0];
      this.size = this.items[0];
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 29456).then(__webpack_require__.t.bind(__webpack_require__, 29456, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 11495).then(__webpack_require__.t.bind(__webpack_require__, 11495, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 3467).then(__webpack_require__.t.bind(__webpack_require__, 3467, 17)),
        HTML: __webpack_require__.e(/* import() */ 61420).then(__webpack_require__.t.bind(__webpack_require__, 61420, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 55433).then(__webpack_require__.t.bind(__webpack_require__, 50590, 17)),
        HTML: __webpack_require__.e(/* import() */ 27334).then(__webpack_require__.t.bind(__webpack_require__, 27334, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 77406).then(__webpack_require__.t.bind(__webpack_require__, 77406, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 40328).then(__webpack_require__.t.bind(__webpack_require__, 40328, 17));
    }

  }

  ExampleTuiTablePaginationComponent.ɵfac = function ExampleTuiTablePaginationComponent_Factory(t) {
    return new (t || ExampleTuiTablePaginationComponent)();
  };

  ExampleTuiTablePaginationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTablePaginationComponent,
    selectors: [["example-tui-table-pagination"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1478194324430836348$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__1 = goog.getMsg("Component to show pagination in table footer");
        i18n_0 = MSG_EXTERNAL_1478194324430836348$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__3 = goog.getMsg("Usage");
        i18n_2 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6053806451915629650$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__5 = goog.getMsg("Custom size-option content");
        i18n_4 = MSG_EXTERNAL_6053806451915629650$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5ed3a7caf5293f1c78ac7cbc21dbd599df19b3fa␟6053806451915629650:Custom size-option content`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_164304155911141863$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__7 = goog.getMsg("Toggle pages label");
        i18n_6 = MSG_EXTERNAL_164304155911141863$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟9ccae2bfa6e46d98fba869ffcd166e427cd1b236␟164304155911141863:Toggle pages label`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6816839641464864911$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___9 = goog.getMsg(" Total amount of items/lines in the table. ");
        i18n_8 = MSG_EXTERNAL_6816839641464864911$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟eaf6d24a0f009870b331ae9d771e001e06155f34␟6816839641464864911: Total amount of items/lines in the table. `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_472889151489355337$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___11 = goog.getMsg(" Items/Lines per page. {$startParagraph} Uses the first element inside {$startTagCode}items{$closeTagCode} by default. {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_472889151489355337$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟35463f4b77f9ff5411e98522c622e91581136bc8␟472889151489355337: Items/Lines per page. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Uses the first element inside ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:items${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6481797631087629204$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___13 = goog.getMsg(" Current page. {$startParagraph}Indexing starts at zero.{$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_6481797631087629204$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟eae5c93afe4b3193ae93b7c73f9f78a3b17f7219␟6481797631087629204: Current page. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:Indexing starts at zero.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8829701352843744315$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___15 = goog.getMsg(" Options to select amount of lines per page. ");
        i18n_14 = MSG_EXTERNAL_8829701352843744315$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟5945646525a4f23c75ba8716e4f1087acb1b89a7␟8829701352843744315: Options to select amount of lines per page. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8720838308796482253$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___17 = goog.getMsg(" Emits the selected page when user navigates by spin\u00A0buttons or selects new size of items per page. ");
        i18n_16 = MSG_EXTERNAL_8720838308796482253$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟31776859d3ef1d6442876c807f289e80836a2261␟8720838308796482253: Emits the selected page when user navigates by spin buttons or selects new size of items per page. `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7639320364970904664$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___19 = goog.getMsg(" Emits the new {$startTagCode}size{$closeTagCode} -property (user selects new amount of lines per page). ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_7639320364970904664$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟a2c03c2522a598de3b28473d219c75c3d84150e2␟7639320364970904664: Emits the new ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:size${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: -property (user selects new amount of lines per page). `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3424664730177588095$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__21 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiTablePaginationModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_3424664730177588095$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟29846a83e0cdbad86f552b549fcde62d80c7bf90␟3424664730177588095: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTablePaginationModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_PAGINATION_TABLE_PAGINATION_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "TablePagination", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "usage", "heading", i18n_2, 3, "content"], ["id", "custom-size-option-content", "heading", i18n_4, 3, "description", "content"], ["tokenDescription", ""], ["id", "toggle-pages-label", "heading", i18n_6, 3, "content"], [1, "tui-space_bottom-0"], [3, "items", "total", "page", "size", "pageChange", "sizeChange"], ["documentationPropertyName", "total", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "page", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pageChange", "documentationPropertyMode", "output", "documentationPropertyType", "number"], ["documentationPropertyPageChange", "documentationProperty"], ["documentationPropertyName", "sizeChange", "documentationPropertyMode", "output", "documentationPropertyType", "number"], ["documentationPropertySizeChange", "documentationProperty"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTablePaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiTablePaginationComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiTablePaginationComponent_ng_template_2_Template, 11, 9, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiTablePaginationComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTablePaginationExample1, TuiTablePaginationExample2, TuiTablePaginationExample3, demo_component/* TuiDocDemoComponent */.F, table_pagination_component/* TuiTablePaginationComponent */.W, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTablePaginationComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table-pagination/table-pagination.module.ts










let ExampleTuiTablePaginationModule = /*#__PURE__*/(() => {
  class ExampleTuiTablePaginationModule {}

  ExampleTuiTablePaginationModule.ɵfac = function ExampleTuiTablePaginationModule_Factory(t) {
    return new (t || ExampleTuiTablePaginationModule)();
  };

  ExampleTuiTablePaginationModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTablePaginationModule
  });
  ExampleTuiTablePaginationModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_table.TuiTablePaginationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTablePaginationComponent))]]
  });
  return ExampleTuiTablePaginationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTablePaginationModule, {
    declarations: [ExampleTuiTablePaginationComponent, TuiTablePaginationExample1, TuiTablePaginationExample2, TuiTablePaginationExample3],
    imports: [common/* CommonModule */.ez, addon_table.TuiTablePaginationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTablePaginationComponent]
  });
})();

/***/ })

}]);