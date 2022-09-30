"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12796],{

/***/ 12796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTableModule": () => (/* binding */ ExampleTuiTableModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/scrolling.js + 7 modules
var scrolling = __webpack_require__(63737);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/intersection-observer/fesm2015/ng-web-apis-intersection-observer.js
var ng_web_apis_intersection_observer = __webpack_require__(11693);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th-group/th-group.component.ts
var th_group_component = __webpack_require__(222);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tbody/tbody.component.ts
var tbody_component = __webpack_require__(57681);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/row.directive.ts
var row_directive = __webpack_require__(35459);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tr/tr.component.ts
var tr_component = __webpack_require__(84190);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/cell.directive.ts
var cell_directive = __webpack_require__(62818);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/core/pipes/format-number/format-number.pipe.ts
var format_number_pipe = __webpack_require__(59544);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/1/index.ts











function TuiTableExample1_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 8);
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

function TuiTableExample1_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample1_tr_8_td_1_Template, 3, 3, "td", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "balance");
  }
}

let TuiTableExample1 = /*#__PURE__*/(() => {
  class TuiTableExample1 {
    constructor() {
      this.data = [{
        name: `Alex Inkin`,
        balance: 1323525
      }, {
        name: `Roman Sedov`,
        balance: 423242
      }];
      this.columns = Object.keys(this.data[0]);
    }

  }

  TuiTableExample1.ɵfac = function TuiTableExample1_Factory(t) {
    return new (t || TuiTableExample1)();
  };

  TuiTableExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample1,
    selectors: [["tui-table-example-1"]],
    decls: 9,
    vars: 4,
    consts: [["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "resizable"], ["tuiTh", ""], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]],
    template: function TuiTableExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "table", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tr", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "th", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Name ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "th", 3);
        fesm2015_core/* ɵɵtext */._uU(6, "Balance");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tbody", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiTableExample1_tr_8_Template, 2, 1, "tr", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("resizable", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("data", ctx.data);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.data);
      }
    },
    directives: [table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, th_component/* TuiThComponent */.W, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K],
    pipes: [format_number_pipe/* TuiFormatNumberPipe */.m],
    styles: [".table[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return TuiTableExample1;
})();
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/head.directive.ts
var head_directive = __webpack_require__(78979);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/kit/components/tag/tag.component.ts
var tag_component = __webpack_require__(49195);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/2/index.ts















function TuiTableExample2_th_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 6);
    fesm2015_core/* ɵɵtext */._uU(1, " Name ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample2_th_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 6);
    fesm2015_core/* ɵɵtext */._uU(1, " E-mail ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample2_th_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 6);
    fesm2015_core/* ɵɵtext */._uU(1, " Status ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample2_th_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 7);
    fesm2015_core/* ɵɵtext */._uU(1, " Tags ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("sorter", null);
  }
}

function TuiTableExample2_th_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "th", 7);
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("sorter", null);
  }
}

function TuiTableExample2_tr_9_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 10);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
    const index_r7 = ctx_r13.index;
    const item_r6 = ctx_r13.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate2 */.AsE(" ", index_r7 + 1, ". ", item_r6.name, " ");
  }
}

function TuiTableExample2_tr_9_td_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 12);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("href", "mailto:" + item_r6.email, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r6.email, " ");
  }
}

function TuiTableExample2_tr_9_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample2_tr_9_td_2_a_1_Template, 2, 2, "a", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", item_r6.email);
  }
}

function TuiTableExample2_tr_9_td_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵclassMap */.Tol(item_r6.status);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r6.status);
  }
}

function TuiTableExample2_tr_9_td_4_tui_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-tag", 14);
  }

  if (rf & 2) {
    const tag_r19 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", tag_r19)("autoColor", true);
  }
}

function TuiTableExample2_tr_9_td_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample2_tr_9_td_4_tui_tag_1_Template, 1, 2, "tui-tag", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", item_r6.tags);
  }
}

function TuiTableExample2_tr_9_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTableExample2_tr_9_td_5_Template_button_click_1_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r23);
      const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.remove(item_r6);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample2_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample2_tr_9_td_1_Template, 2, 2, "td", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample2_tr_9_td_2_Template, 2, 1, "td", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample2_tr_9_td_3_Template, 3, 3, "td", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTableExample2_tr_9_td_4_Template, 2, 1, "td", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample2_tr_9_td_5_Template, 2, 0, "td", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "email");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "status");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "tags");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "actions");
  }
}

let TuiTableExample2 = /*#__PURE__*/(() => {
  class TuiTableExample2 {
    constructor() {
      this.columns = [`name`, `email`, `status`, `tags`, `actions`];
      this.users = [{
        name: `Michael Palin`,
        email: `m.palin@montypython.com`,
        status: `alive`,
        tags: [`Funny`]
      }, {
        name: `Eric Idle`,
        email: `e.idle@montypython.com`,
        status: `alive`,
        tags: [`Funny`, `Music`]
      }, {
        name: `John Cleese`,
        email: `j.cleese@montypython.com`,
        status: `alive`,
        tags: [`Funny`, `Tall`, `Actor`]
      }, {
        name: `Terry Jones`,
        email: ``,
        status: `deceased`,
        tags: [`Funny`, `Director`]
      }, {
        name: `Terry Gilliam`,
        email: `t.gilliam@montypython.com`,
        status: `alive`,
        tags: [`Funny`, `Director`]
      }, {
        name: `Graham Chapman`,
        email: ``,
        status: `deceased`,
        tags: [`Funny`, `King Arthur`]
      }];
    }

    remove(item) {
      this.users = this.users.filter(user => user !== item);
    }

  }

  TuiTableExample2.ɵfac = function TuiTableExample2_Factory(t) {
    return new (t || TuiTableExample2)();
  };

  TuiTableExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample2,
    selectors: [["tui-table-example-2"]],
    decls: 10,
    vars: 8,
    consts: [["tuiTable", "", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 4, "tuiHead"], ["tuiTh", "", 3, "sorter", 4, "tuiHead"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTh", ""], ["tuiTh", "", 3, "sorter"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], ["tuiLink", "", 3, "href", 4, "ngIf"], ["tuiLink", "", 3, "href"], ["class", "tui-space_right-1", 3, "value", "autoColor", 4, "ngFor", "ngForOf"], [1, "tui-space_right-1", 3, "value", "autoColor"], ["tuiIconButton", "", "appearance", "flat", "size", "s", "icon", "tuiIconTrash", "title", "Remove", "shape", "rounded", 1, "remove", 3, "click"]],
    template: function TuiTableExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "table", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tr", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample2_th_3_Template, 2, 0, "th", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTableExample2_th_4_Template, 2, 0, "th", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample2_th_5_Template, 2, 0, "th", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample2_th_6_Template, 2, 1, "th", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTableExample2_th_7_Template, 1, 1, "th", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tbody", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiTableExample2_tr_9_Template, 6, 5, "tr", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "name");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "email");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "status");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "tags");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "actions");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("data", ctx.users);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.users);
      }
    },
    directives: [table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, head_directive/* TuiHeadDirective */.D, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, th_component/* TuiThComponent */.W, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K, common/* NgIf */.O5, link_component/* TuiLinkComponent */.V, common/* NgForOf */.sg, tag_component/* TuiTagComponent */.G, button_component/* TuiButtonComponent */.v],
    styles: ["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{white-space:nowrap;border-color:transparent;border-right-color:var(--tui-base-04)}td[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]:last-child{border-right-color:transparent}tbody[_ngcontent-%COMP%]{border-color:transparent}tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%]{background:var(--tui-base-02)}.alive[_ngcontent-%COMP%], .deceased[_ngcontent-%COMP%]{display:flex;align-items:center;text-transform:capitalize}.alive[_ngcontent-%COMP%]:before, .deceased[_ngcontent-%COMP%]:before{content:\"\";width:.5rem;height:.5rem;border-radius:100%;margin-right:.5rem;background:var(--tui-base-04)}.alive[_ngcontent-%COMP%]:before{background:var(--tui-success-fill)}.remove[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}tr[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:focus-within   .remove[_ngcontent-%COMP%]{opacity:1}"],
    changeDetection: 0
  });
  return TuiTableExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollbar.component.ts
var scrollbar_component = __webpack_require__(3881);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/thead.directive.ts
var thead_directive = __webpack_require__(13073);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.component.ts
var text_area_component = __webpack_require__(40329);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.directive.ts
var text_area_directive = __webpack_require__(78665);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/cdk/directives/validator/validator.directive.ts
var validator_directive = __webpack_require__(21082);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.component.ts
var input_date_component = __webpack_require__(41833);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.directive.ts
var input_date_directive = __webpack_require__(40813);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/3/index.ts

































function TuiTableExample3_th_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 16);
    fesm2015_core/* ɵɵtext */._uU(1, " Name ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("sorter", null)("sticky", true);
  }
}

function TuiTableExample3_th_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 17);
    fesm2015_core/* ɵɵtext */._uU(1, " Price,\u00A0$ ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("sticky", true);
  }
}

function TuiTableExample3_th_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 18);
    fesm2015_core/* ɵɵtext */._uU(1, " Purchase ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵproperty */.Q6J("sorter", null);
  }
}

function TuiTableExample3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainer */.GkF(0);
  }
}

function TuiTableExample3_th_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 19);
    fesm2015_core/* ɵɵtext */._uU(1, " Date ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample3_th_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 20);
    fesm2015_core/* ɵɵtext */._uU(1, " Total ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("sorter", ctx_r5.totalSorter);
  }
}

function TuiTableExample3_th_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 21);
    fesm2015_core/* ɵɵtext */._uU(1, " Quantity ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample3_th_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 22);
    fesm2015_core/* ɵɵtext */._uU(1, " Units ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample3_tr_14_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 28);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-text-area", 29);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_14_th_1_Template_tui_text_area_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r21);
      const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.onValueChange($event, "name", item_r12, ctx_r19.pythons);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("colSpan", item_r12.price > 1000 ? 2 : 0);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("expandable", true)("ngModel", item_r12.name)("ngModelOptions", ctx_r13.options);
  }
}

function TuiTableExample3_tr_14_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 31);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 32);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_14_ng_container_2_th_1_Template_tui_input_number_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r26);
      const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.onValueChange($event, "price", item_r12, ctx_r24.pythons);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2).$implicit;
    const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiValidator", ctx_r23.minPrice)("ngModel", item_r12.price)("ngModelOptions", ctx_r23.options);
  }
}

function TuiTableExample3_tr_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample3_tr_14_ng_container_2_th_1_Template, 2, 3, "th", 30);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", item_r12.price <= 1000);
  }
}

function TuiTableExample3_tr_14_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-count", 34);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_14_td_3_Template_tui_input_count_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r31);
      const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.onValueChange($event, "quantity", item_r12, ctx_r29.pythons);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r12.quantity)("ngModelOptions", ctx_r15.options);
  }
}

function TuiTableExample3_tr_14_td_4_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 37);
  }

  if (rf & 2) {
    const ctx_r33 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r33.units);
  }
}

function TuiTableExample3_tr_14_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 35);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_14_td_4_Template_tui_select_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r36);
      const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r34 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r34.onValueChange($event, "unit", item_r12, ctx_r34.pythons);
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample3_tr_14_td_4_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r12.unit)("ngModelOptions", ctx_r16.options);
  }
}

function TuiTableExample3_tr_14_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-date", 34);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_14_td_5_Template_tui_input_date_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r40);
      const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r38 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r38.onValueChange($event, "date", item_r12, ctx_r38.pythons);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r12.date)("ngModelOptions", ctx_r17.options);
  }
}

function TuiTableExample3_tr_14_td_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 38);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatNumber");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r12 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx_r18.getTotal(item_r12)), " ");
  }
}

function TuiTableExample3_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 23);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample3_tr_14_th_1_Template, 2, 4, "th", 24);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample3_tr_14_ng_container_2_Template, 2, 1, "ng-container", 25);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample3_tr_14_td_3_Template, 2, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTableExample3_tr_14_td_4_Template, 3, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample3_tr_14_td_5_Template, 2, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample3_tr_14_td_6_Template, 3, 3, "td", 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "price");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "quantity");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "unit");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "date");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "total");
  }
}

function TuiTableExample3_tr_16_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-text-area", 29);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_16_th_1_Template_tui_text_area_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r52);
      const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r50 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r50.onValueChange($event, "name", item_r43, ctx_r50.starwars);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r44 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("expandable", true)("ngModel", item_r43.name)("ngModelOptions", ctx_r44.options);
  }
}

function TuiTableExample3_tr_16_th_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 31);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 40);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_16_th_2_Template_tui_input_number_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r56);
      const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r54 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r54.onValueChange($event, "price", item_r43, ctx_r54.starwars);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r45 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiValidator", ctx_r45.minPrice)("ngModel", item_r43.price)("ngModelOptions", ctx_r45.options);
  }
}

function TuiTableExample3_tr_16_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-count", 34);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_16_td_3_Template_tui_input_count_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r60);
      const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r58 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r58.onValueChange($event, "quantity", item_r43, ctx_r58.starwars);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r46 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r43.quantity)("ngModelOptions", ctx_r46.options);
  }
}

function TuiTableExample3_tr_16_td_4_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 37);
  }

  if (rf & 2) {
    const ctx_r62 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r62.units);
  }
}

function TuiTableExample3_tr_16_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-select", 35);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_16_td_4_Template_tui_select_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r65);
      const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r63 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r63.onValueChange($event, "unit", item_r43, ctx_r63.starwars);
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample3_tr_16_td_4_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r47 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r43.unit)("ngModelOptions", ctx_r47.options);
  }
}

function TuiTableExample3_tr_16_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-date", 34);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample3_tr_16_td_5_Template_tui_input_date_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r69);
      const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r67 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r67.onValueChange($event, "date", item_r43, ctx_r67.starwars);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r48 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", item_r43.date)("ngModelOptions", ctx_r48.options);
  }
}

function TuiTableExample3_tr_16_td_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 38);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatNumber");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r43 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r49 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx_r49.getTotal(item_r43)), " ");
  }
}

function TuiTableExample3_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 23);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample3_tr_16_th_1_Template, 2, 3, "th", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample3_tr_16_th_2_Template, 2, 3, "th", 39);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample3_tr_16_td_3_Template, 2, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTableExample3_tr_16_td_4_Template, 3, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample3_tr_16_td_5_Template, 2, 2, "td", 26);
    fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample3_tr_16_td_6_Template, 3, 3, "td", 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "price");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "quantity");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "unit");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "date");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "total");
  }
}

function TuiTableExample3_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 41);
    fesm2015_core/* ɵɵtext */._uU(1, " Star Wars\n");
  }
}

let TuiTableExample3 = /*#__PURE__*/(() => {
  class TuiTableExample3 {
    constructor() {
      this.options = {
        updateOn: `blur`
      };
      this.units = [`items`, `kg`, `m`];
      this.pythons = [{
        name: `Holy Grail`,
        price: 999999,
        quantity: 1,
        unit: this.units[0],
        date: cdk.TuiDay.currentLocal()
      }, {
        name: `Foot`,
        price: 29.95,
        quantity: 5,
        unit: this.units[2],
        date: cdk.TuiDay.currentLocal().append({
          day: -42
        })
      }, {
        name: `Shed`,
        price: 499,
        quantity: 2,
        unit: this.units[0],
        date: cdk.TuiDay.currentLocal().append({
          day: -237
        })
      }];
      this.starwars = [{
        name: `Lightsaber`,
        price: 4999,
        quantity: 3,
        unit: this.units[0],
        date: cdk.TuiDay.currentLocal()
      }, {
        name: `Spaceship`,
        price: 19999,
        quantity: 1,
        unit: this.units[0],
        date: cdk.TuiDay.currentLocal().append({
          day: -237
        })
      }, {
        name: `Stormtrooper helmet`,
        price: 14.95,
        quantity: 5,
        unit: this.units[0],
        date: cdk.TuiDay.currentLocal().append({
          day: -42
        })
      }];
      this.columns = [`name`, `price`, `quantity`, `unit`, `total`];

      this.minPrice = ({
        value
      }) => value > 400 ? null : {
        minPrice: `Price must be above $400`
      };

      this.totalSorter = (a, b) => (0,addon_table.tuiDefaultSort)(a.price * a.quantity, b.price * b.quantity);
    }

    getTotal({
      price,
      quantity
    }) {
      return price * quantity;
    }

    onValueChange(value, key, current, data) {
      const updated = Object.assign(Object.assign({}, current), {
        [key]: value
      });
      this.pythons = data === this.pythons ? this.pythons.map(item => item === current ? updated : item) : this.pythons;
      this.starwars = data === this.starwars ? this.starwars.map(item => item === current ? updated : item) : this.starwars;
    }

  }

  TuiTableExample3.ɵfac = function TuiTableExample3_Factory(t) {
    return new (t || TuiTableExample3)();
  };

  TuiTableExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample3,
    selectors: [["tui-table-example-3"]],
    decls: 19,
    vars: 15,
    consts: [["waIntersectionRoot", "", 1, "scrollbar", 3, "hidden"], ["tuiTable", "", "size", "l", 1, "table", 3, "columns"], ["tuiThead", ""], ["tuiThGroup", ""], ["tuiTh", "", "rowspan", "2", "class", "first", 3, "sorter", "sticky", 4, "tuiHead"], ["tuiTh", "", "rowspan", "2", "class", "number second", 3, "sticky", 4, "tuiHead"], ["tuiTh", "", "colspan", "2", 3, "sorter", 4, "tuiHead"], [4, "tuiHead"], ["tuiTh", "", "rowspan", "2", 4, "tuiHead"], ["tuiTh", "", "rowspan", "2", "class", "number", 3, "sorter", 4, "tuiHead"], ["tuiTh", "", "class", "number border", 4, "tuiHead"], ["tuiTh", "", 4, "tuiHead"], ["tuiTbody", "", "heading", "Monty Python", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTbody", "", 3, "heading", "data"], ["template", ""], ["tuiTh", "", "rowspan", "2", 1, "first", 3, "sorter", "sticky"], ["tuiTh", "", "rowspan", "2", 1, "number", "second", 3, "sticky"], ["tuiTh", "", "colspan", "2", 3, "sorter"], ["tuiTh", "", "rowspan", "2"], ["tuiTh", "", "rowspan", "2", 1, "number", 3, "sorter"], ["tuiTh", "", 1, "number", "border"], ["tuiTh", ""], ["tuiTr", ""], ["tuiTd", "", 3, "colSpan", 4, "tuiCell"], [4, "tuiCell"], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", "", "class", "number text", 4, "tuiCell"], ["tuiTd", "", 3, "colSpan"], [1, "textarea", 3, "expandable", "ngModel", "ngModelOptions", "ngModelChange"], ["tuiTd", "", "class", "second", 4, "ngIf"], ["tuiTd", "", 1, "second"], [1, "number", 3, "tuiValidator", "ngModel", "ngModelOptions", "ngModelChange"], ["tuiTd", ""], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "select", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"], ["tuiTd", "", 1, "number", "text"], ["tuiTd", "", "class", "second", 4, "tuiCell"], [3, "tuiValidator", "ngModel", "ngModelOptions", "ngModelChange"], ["src", "tuiIconStarLarge", 1, "tui-space_right-3"]],
    template: function TuiTableExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-scrollbar", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "table", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "thead", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tr", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiTableExample3_th_4_Template, 2, 2, "th", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample3_th_5_Template, 2, 1, "th", 5);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample3_th_6_Template, 2, 1, "th", 6);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTableExample3_ng_container_7_Template, 1, 0, "ng-container", 7);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiTableExample3_th_8_Template, 2, 0, "th", 8);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiTableExample3_th_9_Template, 2, 1, "th", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tr", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(11, TuiTableExample3_th_11_Template, 2, 0, "th", 10);
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiTableExample3_th_12_Template, 2, 0, "th", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "tbody", 12);
        fesm2015_core/* ɵɵtemplate */.YNc(14, TuiTableExample3_tr_14_Template, 7, 6, "tr", 13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tbody", 14);
        fesm2015_core/* ɵɵtemplate */.YNc(16, TuiTableExample3_tr_16_Template, 7, 6, "tr", 13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(17, TuiTableExample3_ng_template_17_Template, 2, 0, "ng-template", null, 15, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r10 = fesm2015_core/* ɵɵreference */.MAs(18);

        fesm2015_core/* ɵɵproperty */.Q6J("hidden", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "name");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "price");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "quantity");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "unit");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "date");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "total");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "quantity");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "unit");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("data", ctx.pythons);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.pythons);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("heading", _r10)("data", ctx.starwars);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.starwars);
      }
    },
    directives: [scrollbar_component/* TuiScrollbarComponent */.I, ng_web_apis_intersection_observer/* IntersectionRootDirective */.Q7, table_directive/* TuiTableDirective */.c, thead_directive/* TuiTheadDirective */.N, th_group_component/* TuiThGroupComponent */.E, head_directive/* TuiHeadDirective */.D, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, th_component/* TuiThComponent */.W, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgIf */.O5, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, validator_directive/* TuiValidatorDirective */.W, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, svg_component/* TuiSvgComponent */.P],
    pipes: [format_number_pipe/* TuiFormatNumberPipe */.m],
    styles: [".table[_ngcontent-%COMP%]{table-layout:fixed}.textarea[_ngcontent-%COMP%]{min-height:var(--tui-height-l)}.number[_ngcontent-%COMP%]{text-align:right;flex-direction:row-reverse}.first[_ngcontent-%COMP%]{min-width:11.25rem;max-width:11.25rem}.second[_ngcontent-%COMP%]{left:11.25rem}.text[_ngcontent-%COMP%]{vertical-align:top;padding-top:1rem}.border[_ngcontent-%COMP%]{border-left:none}.select[_ngcontent-%COMP%]{width:6.25rem}.scrollbar[_ngcontent-%COMP%]{max-height:18.75rem}"],
    changeDetection: 0
  });
  return TuiTableExample3;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(9112);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js
var debounceTime = __webpack_require__(54395);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/share.js + 1 modules
var share = __webpack_require__(18819);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__(45435);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
// EXTERNAL MODULE: ./projects/addon-table/components/reorder/reorder.component.ts
var reorder_component = __webpack_require__(52061);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/sort-by.directive.ts
var sort_by_directive = __webpack_require__(61006);
// EXTERNAL MODULE: ./projects/addon-table/components/table-pagination/table-pagination.component.ts
var table_pagination_component = __webpack_require__(56946);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/sortable.directive.ts
var sortable_directive = __webpack_require__(10435);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/4/index.ts
































function TuiTableExample4_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-reorder", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("itemsChange", function TuiTableExample4_ng_template_8_Template_tui_reorder_itemsChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.initial = $event;
    })("enabledChange", function TuiTableExample4_ng_template_8_Template_tui_reorder_enabledChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.onEnabled($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("enabled", ctx_r1.enabled)("items", ctx_r1.initial);
  }
}

function TuiTableExample4_table_12_th_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 16);
    fesm2015_core/* ɵɵtext */._uU(1, " Name ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample4_table_12_th_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 16);
    fesm2015_core/* ɵɵtext */._uU(1, " Date of Birth ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample4_table_12_th_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 16);
    fesm2015_core/* ɵɵtext */._uU(1, " Age ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiTableExample4_table_12_tr_9_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 19);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r11 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵclassProp */.ekj("match", ctx_r12.isMatch(item_r11.name));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r11.name, " ");
  }
}

function TuiTableExample4_table_12_tr_9_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 19);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r11 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵclassProp */.ekj("match", ctx_r13.isMatch(item_r11.dob));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r11.dob, " ");
  }
}

function TuiTableExample4_table_12_tr_9_td_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 19);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r11 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵclassProp */.ekj("match", ctx_r14.isMatch(ctx_r14.getAge(item_r11)));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r14.getAge(item_r11), " ");
  }
}

function TuiTableExample4_table_12_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 17);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample4_table_12_tr_9_td_1_Template, 2, 3, "td", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample4_table_12_tr_9_td_2_Template, 2, 3, "td", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample4_table_12_tr_9_td_3_Template, 2, 3, "td", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "dob");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "age");
  }
}

function TuiTableExample4_table_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "table", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiSortByChange", function TuiTableExample4_table_12_Template_table_tuiSortByChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.sorter$.next($event);
    })("directionChange", function TuiTableExample4_table_12_Template_table_directionChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.direction$.next($event);
    });
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "thead");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tr", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiTableExample4_table_12_th_5_Template, 2, 0, "th", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample4_table_12_th_6_Template, 2, 0, "th", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTableExample4_table_12_th_7_Template, 2, 0, "th", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tbody", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(9, TuiTableExample4_table_12_tr_9_Template, 4, 3, "tr", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tfoot");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tr");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "td", 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-table-pagination", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("pageChange", function TuiTableExample4_table_12_Template_tui_table_pagination_pageChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.onPage($event);
    })("sizeChange", function TuiTableExample4_table_12_Template_tui_table_pagination_sizeChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.onSize($event);
    });
    fesm2015_core/* ɵɵpipe */.ALo(14, "async");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r6 = ctx.ngIf;
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx_r2.columns)("direction", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 10, ctx_r2.direction$) || 1)("tuiSortBy", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 12, ctx_r2.sorter$));
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "dob");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "age");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("data", data_r6);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", data_r6);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("colSpan", ctx_r2.columns.length);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("total", fesm2015_core/* ɵɵpipeBind1 */.lcZ(14, 14, ctx_r2.total$) || 0);
  }
}

const TODAY = cdk.TuiDay.currentLocal();
const FIRST = [`John`, `Jane`, `Jack`, `Jill`, `James`, `Joan`, `Jim`, `Julia`, `Joe`, `Julia`];
const LAST = [`Smith`, `West`, `Brown`, `Jones`, `Davis`, `Miller`, `Johnson`, `Jackson`, `Williams`, `Wilson`];
const DATA = Array.from({
  length: 300
}, () => ({
  name: `${LAST[Math.floor(Math.random() * 10)]}, ${FIRST[Math.floor(Math.random() * 10)]}`,
  dob: TODAY.append({
    day: -Math.floor(Math.random() * 4000) - 7500
  })
}));
const KEYS = {
  Name: `name`,
  Age: `age`,
  'Date of Birth': `dob`
};
let TuiTableExample4 = /*#__PURE__*/(() => {
  class TuiTableExample4 {
    constructor() {
      this.size$ = new BehaviorSubject/* BehaviorSubject */.X(10);
      this.page$ = new BehaviorSubject/* BehaviorSubject */.X(0);
      this.direction$ = new BehaviorSubject/* BehaviorSubject */.X(-1);
      this.sorter$ = new BehaviorSubject/* BehaviorSubject */.X(`name`);
      this.minAge = new fesm2015_forms/* FormControl */.NI(21);
      this.request$ = (0,combineLatest/* combineLatest */.aj)([this.sorter$, this.direction$, this.page$, this.size$, (0,cdk.tuiControlValue)(this.minAge)]).pipe( // zero time debounce for a case when both key and direction change
      (0,debounceTime/* debounceTime */.b)(0), (0,switchMap/* switchMap */.w)(query => this.getData(...query).pipe((0,startWith/* startWith */.O)(null))), (0,share/* share */.B)());
      this.initial = [`Name`, `Date of Birth`, `Age`];
      this.enabled = this.initial;
      this.columns = [`name`, `dob`, `age`];
      this.search = ``;
      this.arrow = kit.TUI_ARROW;
      this.loading$ = this.request$.pipe((0,map/* map */.U)(value => !value));
      this.total$ = this.request$.pipe((0,filter/* filter */.h)(cdk.tuiIsPresent), (0,map/* map */.U)(({
        length
      }) => length), (0,startWith/* startWith */.O)(1));
      this.data$ = this.request$.pipe((0,filter/* filter */.h)(cdk.tuiIsPresent), (0,map/* map */.U)(users => users.filter(cdk.tuiIsPresent)), (0,startWith/* startWith */.O)([]));
    }

    onEnabled(enabled) {
      this.enabled = enabled;
      this.columns = this.initial.filter(column => enabled.includes(column)).map(column => KEYS[column]);
    }

    onDirection(direction) {
      this.direction$.next(direction);
    }

    onSize(size) {
      this.size$.next(size);
    }

    onPage(page) {
      this.page$.next(page);
    }

    isMatch(value) {
      return !!this.search && (0,cdk.TUI_DEFAULT_MATCHER)(value, this.search);
    }

    getAge(user) {
      return getAge(user);
    }

    getData(key, direction, page, size, minAge) {
      console.info(`Making a request`);
      const start = page * size;
      const end = start + size;
      const result = [...DATA].sort(sortBy(key, direction)).filter(user => getAge(user) >= minAge).map((user, index) => index >= start && index < end ? user : null); // Imitating server response

      return (0,timer/* timer */.H)(3000).pipe((0,mapTo/* mapTo */.h)(result));
    }

  }

  TuiTableExample4.ɵfac = function TuiTableExample4_Factory(t) {
    return new (t || TuiTableExample4)();
  };

  TuiTableExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample4,
    selectors: [["tui-table-example-4"]],
    decls: 14,
    vars: 12,
    consts: [["tuiTextfieldSize", "m", 1, "filters"], [1, "input", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"], [1, "tui-space_horizontal-3", 3, "formControl"], [3, "content"], ["tuiButton", "", "size", "m", 3, "iconRight"], ["dropdown", ""], [3, "overlay", "showLoader"], ["tuiTable", "", "class", "table", 3, "columns", "direction", "tuiSortBy", "tuiSortByChange", "directionChange", 4, "ngIf"], [1, "columns", 3, "enabled", "items", "itemsChange", "enabledChange"], ["tuiTable", "", 1, "table", 3, "columns", "direction", "tuiSortBy", "tuiSortByChange", "directionChange"], ["tuiThGroup", ""], ["tuiTh", "", "tuiSortable", "", 4, "tuiHead"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], [3, "colSpan"], [1, "tui-space_top-2", 3, "total", "pageChange", "sizeChange"], ["tuiTh", "", "tuiSortable", ""], ["tuiTr", ""], ["tuiTd", "", 3, "match", 4, "tuiCell"], ["tuiTd", ""]],
    template: function TuiTableExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTableExample4_Template_tui_input_ngModelChange_1_listener($event) {
          return ctx.search = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Find on page ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-count", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Minimum age ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-hosted-dropdown", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(7, " Columns ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiTableExample4_ng_template_8_Template, 1, 2, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-loader", 6);
        fesm2015_core/* ɵɵpipe */.ALo(11, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiTableExample4_table_12_Template, 15, 16, "table", 7);
        fesm2015_core/* ɵɵpipe */.ALo(13, "async");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(9);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("ngModel", ctx.search);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.minAge);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", ctx.arrow);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("overlay", true)("showLoader", !!fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 8, ctx.loading$));
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(13, 10, ctx.data$));
      }
    },
    directives: [textfield_size_directive/* TuiTextfieldSizeDirective */.s, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* FormControlDirective */.oH, hosted_dropdown_component/* TuiHostedDropdownComponent */.o, button_component/* TuiButtonComponent */.v, loader_component/* TuiLoaderComponent */.k, common/* NgIf */.O5, reorder_component/* TuiReorderComponent */.e, table_directive/* TuiTableDirective */.c, sort_by_directive/* TuiSortByDirective */.P, th_group_component/* TuiThGroupComponent */.E, head_directive/* TuiHeadDirective */.D, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, table_pagination_component/* TuiTablePaginationComponent */.W, th_component/* TuiThComponent */.W, sortable_directive/* TuiSortableDirective */.g, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".table[_ngcontent-%COMP%]{width:100%}.filters[_ngcontent-%COMP%]{display:flex}.input[_ngcontent-%COMP%]{flex:1}.columns[_ngcontent-%COMP%]{width:10.625rem}.match[_ngcontent-%COMP%]{background:var(--tui-selection)}"],
    changeDetection: 0
  });
  return TuiTableExample4;
})();

function sortBy(key, direction) {
  return (a, b) => key === `age` ? direction * (0,addon_table.tuiDefaultSort)(getAge(a), getAge(b)) : direction * (0,addon_table.tuiDefaultSort)(a[key], b[key]);
}

function getAge({
  dob
}) {
  const years = TODAY.year - dob.year;
  const months = TODAY.month - dob.month;
  const days = TODAY.day - dob.day;
  const offset = (0,cdk.tuiToInt)(months > 0 || !months && days > 9);
  return years + offset;
}
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollable.directive.ts
var scrollable_directive = __webpack_require__(62500);
// EXTERNAL MODULE: ./projects/addon-table/components/table/pipes/table-sort.pipe.ts
var table_sort_pipe = __webpack_require__(23301);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/5/index.ts















function TuiTableExample5_th_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 8);
    fesm2015_core/* ɵɵtext */._uU(1, " Name ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

    fesm2015_core/* ɵɵstyleProp */.Udp("top", -_r0["_renderedContentOffset"], "px");
    fesm2015_core/* ɵɵproperty */.Q6J("sticky", true);
  }
}

function TuiTableExample5_th_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 8);
    fesm2015_core/* ɵɵtext */._uU(1, " Date of Birth ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

    fesm2015_core/* ɵɵstyleProp */.Udp("top", -_r0["_renderedContentOffset"], "px");
    fesm2015_core/* ɵɵproperty */.Q6J("sticky", true);
  }
}

function TuiTableExample5_th_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 9);
    fesm2015_core/* ɵɵtext */._uU(1, " Age ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

    fesm2015_core/* ɵɵstyleProp */.Udp("top", -_r0["_renderedContentOffset"], "px");
    fesm2015_core/* ɵɵproperty */.Q6J("sticky", true)("sorter", ctx_r3.ageSorter);
  }
}

function TuiTableExample5_tr_10_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 12);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.name, " ");
  }
}

function TuiTableExample5_tr_10_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 12);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.dob, " ");
  }
}

function TuiTableExample5_tr_10_td_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 12);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r8.getAge(item_r5), " ");
  }
}

function TuiTableExample5_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample5_tr_10_td_1_Template, 2, 1, "td", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiTableExample5_tr_10_td_2_Template, 2, 1, "td", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiTableExample5_tr_10_td_3_Template, 2, 1, "td", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "dob");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "age");
  }
}

const _5_TODAY = cdk.TuiDay.currentLocal();
const _5_FIRST = [`John`, `Jane`, `Jack`, `Jill`, `James`, `Joan`, `Jim`, `Julia`, `Joe`, `Julia`];
const _5_LAST = [`Smith`, `West`, `Brown`, `Jones`, `Davis`, `Miller`, `Johnson`, `Jackson`, `Williams`, `Wilson`];
const _5_DATA = Array.from({
  length: 300
}, () => ({
  name: `${_5_LAST[Math.floor(Math.random() * 10)]}, ${_5_FIRST[Math.floor(Math.random() * 10)]}`,
  dob: _5_TODAY.append({
    day: -Math.floor(Math.random() * 4000) - 7500
  })
}));
let TuiTableExample5 = /*#__PURE__*/(() => {
  class TuiTableExample5 {
    constructor() {
      this.data = _5_DATA;
      this.columns = [`name`, `dob`, `age`];

      this.ageSorter = (a, b) => _5_getAge(a) - _5_getAge(b);
    }

    getAge(user) {
      return _5_getAge(user);
    }

  }

  TuiTableExample5.ɵfac = function TuiTableExample5_Factory(t) {
    return new (t || TuiTableExample5)();
  };

  TuiTableExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample5,
    selectors: [["tui-table-example-5"]],
    decls: 12,
    vars: 10,
    consts: [["tuiScrollable", "", 1, "viewport", "tui-zero-scrollbar", 3, "itemSize", "maxBufferPx", "minBufferPx"], ["viewport", ""], ["tuiTable", "", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "sticky", "top", 4, "tuiHead"], ["tuiTh", "", 3, "sticky", "sorter", "top", 4, "tuiHead"], ["tuiTbody", ""], ["tuiTr", "", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiTh", "", 3, "sticky"], ["tuiTh", "", 3, "sticky", "sorter"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]],
    template: function TuiTableExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-scrollbar");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "cdk-virtual-scroll-viewport", 0, 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "table", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tr", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiTableExample5_th_6_Template, 2, 3, "th", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTableExample5_th_7_Template, 2, 3, "th", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiTableExample5_th_8_Template, 2, 4, "th", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tbody", 6);
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiTableExample5_tr_10_Template, 4, 3, "tr", 7);
        fesm2015_core/* ɵɵpipe */.ALo(11, "tuiTableSort");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("itemSize", 45)("maxBufferPx", 500)("minBufferPx", 400);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "name");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "dob");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", "age");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("cdkVirtualForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 8, ctx.data));
      }
    },
    directives: [scrollbar_component/* TuiScrollbarComponent */.I, scrolling/* CdkVirtualScrollViewport */.N7, scrolling/* CdkFixedSizeVirtualScroll */.xd, scrollable_directive/* TuiScrollableDirective */.R, table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, head_directive/* TuiHeadDirective */.D, tbody_component/* TuiTbodyComponent */.j, scrolling/* CdkVirtualForOf */.x0, th_component/* TuiThComponent */.W, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K],
    pipes: [table_sort_pipe/* TuiTableSortPipe */.y],
    styles: ["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:45px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:10rem;font-weight:bold}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{width:3rem}.viewport[_ngcontent-%COMP%]{height:250px}"],
    changeDetection: 0
  });
  return TuiTableExample5;
})();

function _5_getAge({
  dob
}) {
  const years = _5_TODAY.year - dob.year;
  const months = _5_TODAY.month - dob.month;
  const days = _5_TODAY.day - dob.day;
  const offset = (0,cdk.tuiToInt)(months > 0 || !months && days > 9);
  return years + offset;
}
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/examples/6/index.ts













function TuiTableExample6_ng_container_7_th_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "th", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const col_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", col_r2, " ");
  }
}

function TuiTableExample6_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample6_ng_container_7_th_1_Template, 2, 1, "th", 7);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHead", col_r2);
  }
}

function TuiTableExample6_tr_9_ng_container_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 11);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const col_r7 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const item_r5 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5[col_r7], " ");
  }
}

function TuiTableExample6_tr_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample6_tr_9_ng_container_1_td_1_Template, 2, 1, "td", 10);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", col_r7);
  }
}

function TuiTableExample6_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiTableExample6_tr_9_ng_container_1_Template, 2, 1, "ng-container", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.columns);
  }
}

let TuiTableExample6 = /*#__PURE__*/(() => {
  class TuiTableExample6 {
    constructor() {
      this.data = [{
        id: 1,
        name: `name`
      }];
    }

    get columns() {
      return Object.keys(this.data[0]);
    }

    addColumn() {
      this.data = this.data.map(item => Object.assign(Object.assign({}, item), {
        [`extra-${this.columns.length + 1}`]: `extra column ${this.columns.length + 1}`
      }));
    }

    addRows() {
      this.data = [...this.data, Object.assign(Object.assign({}, this.data[0]), {
        id: this.data.length + 1
      })];
    }

  }

  TuiTableExample6.ɵfac = function TuiTableExample6_Factory(t) {
    return new (t || TuiTableExample6)();
  };

  TuiTableExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTableExample6,
    selectors: [["tui-table-example-6"]],
    decls: 10,
    vars: 4,
    consts: [["tuiButton", "", "size", "s", 3, "click"], ["tuiButton", "", "size", "s", 1, "tui-space_left-2", 3, "click"], ["tuiTable", "", 1, "table", "tui-space_top-3", 3, "columns"], ["tuiThGroup", ""], [4, "ngFor", "ngForOf"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTh", "", 4, "tuiHead"], ["tuiTh", ""], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""]],
    template: function TuiTableExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTableExample6_Template_button_click_0_listener() {
          return ctx.addColumn();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Add column\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiTableExample6_Template_button_click_2_listener() {
          return ctx.addRows();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Add row\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "table", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tr", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTableExample6_ng_container_7_Template, 2, 1, "ng-container", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tbody", 5);
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiTableExample6_tr_9_Template, 2, 1, "tr", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("data", ctx.data);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.data);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, common/* NgForOf */.sg, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, head_directive/* TuiHeadDirective */.D, th_component/* TuiThComponent */.W, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K],
    styles: [".table[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return TuiTableExample6;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion.component.ts
var accordion_component = __webpack_require__(36710);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item.component.ts
var accordion_item_component = __webpack_require__(23178);
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-content.directive.ts
var accordion_item_content_directive = __webpack_require__(7406);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/table.component.ts

















function ExampleTuiTableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "p");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-table-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-table-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-table-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-table-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-table-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-table-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵtext */._uU(1, "table[tuiTable]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵtext */._uU(3, "Parent directive that sets the table up.");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_8_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "h2");
    fesm2015_core/* ɵɵtext */._uU(11, "thead[tuiThead]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵtext */._uU(13, " Used on ");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "code");
    fesm2015_core/* ɵɵtext */._uU(15, "thead");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(16, " to make it sticky ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "h2");
    fesm2015_core/* ɵɵtext */._uU(19, "tr[tuiThGroup]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
    fesm2015_core/* ɵɵtext */._uU(21, " Used inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "code");
    fesm2015_core/* ɵɵtext */._uU(23, "thead");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(24, " to layout headings for the columns. You can have multiple rows and use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "code");
    fesm2015_core/* ɵɵtext */._uU(26, "rowSpan");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(27, " on ");
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "code");
    fesm2015_core/* ɵɵtext */._uU(29, "th");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(30, " elements if you want to create some complex heading for your table. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(31, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "h2");
    fesm2015_core/* ɵɵtext */._uU(33, "th[tuiTh]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "p");
    fesm2015_core/* ɵɵtext */._uU(35, " Used inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(36, "code");
    fesm2015_core/* ɵɵtext */._uU(37, "tr[tuiThGroup]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(38, " to style heading cells. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "tui-doc-documentation", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(40, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_40_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(41, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_41_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵtemplate */.YNc(42, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_42_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(43, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(44, "h2");
    fesm2015_core/* ɵɵtext */._uU(45, "tbody[tuiTbody]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(46, "p");
    fesm2015_core/* ɵɵtext */._uU(47, " Sets up a group of data. You can have multiple ");
    fesm2015_core/* ɵɵelementStart */.TgZ(48, "code");
    fesm2015_core/* ɵɵtext */._uU(49, "tbody");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(50, " inside your table. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "tui-doc-documentation", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(52, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_52_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵtemplate */.YNc(53, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_53_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵtemplate */.YNc(54, ExampleTuiTableComponent_ng_template_2_ng_template_3_ng_template_54_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(55, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(56, "h2");
    fesm2015_core/* ɵɵtext */._uU(57, "tr[tuiTr]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(58, "p");
    fesm2015_core/* ɵɵtext */._uU(59, " Used inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(60, "code");
    fesm2015_core/* ɵɵtext */._uU(61, "tbody");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(62, " to layout cells. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(63, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(64, "h2");
    fesm2015_core/* ɵɵtext */._uU(65, "td[tuiTd] or th[tuiTd]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(66, "p");
    fesm2015_core/* ɵɵtext */._uU(67, " A cell directive to be placed in ");
    fesm2015_core/* ɵɵelementStart */.TgZ(68, "code");
    fesm2015_core/* ɵɵtext */._uU(69, "tr");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(70, " of ");
    fesm2015_core/* ɵɵelementStart */.TgZ(71, "code");
    fesm2015_core/* ɵɵtext */._uU(72, "tbody");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(73, " . Use it on ");
    fesm2015_core/* ɵɵelementStart */.TgZ(74, "code");
    fesm2015_core/* ɵɵtext */._uU(75, "th");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(76, " if you want to make a sticky column ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
    fesm2015_core/* ɵɵadvance */.xp6(35);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("showValues", false);
  }
}

function ExampleTuiTableComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵtext */._uU(1, "*tuiHead=\"key\"");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵtext */._uU(3, " Used to define template for ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "em");
    fesm2015_core/* ɵɵtext */._uU(5, "heading");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " for particular key ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵtext */._uU(8, " Goes inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "tr");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " element inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "code");
    fesm2015_core/* ɵɵtext */._uU(13, "thead");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "h2");
    fesm2015_core/* ɵɵtext */._uU(16, "*tuiRow=\"let item of data\"");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵtext */._uU(18, " Used to define template for a ");
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "em");
    fesm2015_core/* ɵɵtext */._uU(20, "row");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(21, "hr");
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "h2");
    fesm2015_core/* ɵɵtext */._uU(23, "*tuiCell=\"key\"");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "p");
    fesm2015_core/* ɵɵtext */._uU(25, " Used to define template for ");
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "em");
    fesm2015_core/* ɵɵtext */._uU(27, "cell");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(28, " for particular key ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "p");
    fesm2015_core/* ɵɵtext */._uU(30, " Goes inside ");
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "code");
    fesm2015_core/* ɵɵtext */._uU(32, "tr");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(33, " element ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion-item", 9);
    fesm2015_core/* ɵɵtext */._uU(2, " Directives ");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTableComponent_ng_template_2_ng_template_3_Template, 77, 3, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-accordion-item");
    fesm2015_core/* ɵɵtext */._uU(5, " Structural directives ");
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTableComponent_ng_template_2_ng_template_6_Template, 34, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("open", true);
  }
}

function ExampleTuiTableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 32);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 33);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 35);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiTableComponent = /*#__PURE__*/(() => {
  class ExampleTuiTableComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 33798).then(__webpack_require__.t.bind(__webpack_require__, 33798, 17)),
        HTML: __webpack_require__.e(/* import() */ 29969).then(__webpack_require__.t.bind(__webpack_require__, 29969, 17)),
        LESS: __webpack_require__.e(/* import() */ 10227).then(__webpack_require__.t.bind(__webpack_require__, 10227, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 35225).then(__webpack_require__.t.bind(__webpack_require__, 35225, 17)),
        HTML: __webpack_require__.e(/* import() */ 21885).then(__webpack_require__.t.bind(__webpack_require__, 21885, 17)),
        LESS: __webpack_require__.e(/* import() */ 25995).then(__webpack_require__.t.bind(__webpack_require__, 25995, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 20336).then(__webpack_require__.t.bind(__webpack_require__, 20336, 17)),
        HTML: __webpack_require__.e(/* import() */ 66635).then(__webpack_require__.t.bind(__webpack_require__, 66635, 17)),
        LESS: __webpack_require__.e(/* import() */ 910).then(__webpack_require__.t.bind(__webpack_require__, 910, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 84154).then(__webpack_require__.t.bind(__webpack_require__, 84154, 17)),
        HTML: __webpack_require__.e(/* import() */ 75319).then(__webpack_require__.t.bind(__webpack_require__, 26474, 17)),
        LESS: __webpack_require__.e(/* import() */ 68002).then(__webpack_require__.t.bind(__webpack_require__, 68002, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 9182).then(__webpack_require__.t.bind(__webpack_require__, 9182, 17)),
        HTML: __webpack_require__.e(/* import() */ 37669).then(__webpack_require__.t.bind(__webpack_require__, 37669, 17)),
        LESS: __webpack_require__.e(/* import() */ 65993).then(__webpack_require__.t.bind(__webpack_require__, 65993, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 90918).then(__webpack_require__.t.bind(__webpack_require__, 90918, 17)),
        HTML: __webpack_require__.e(/* import() */ 40821).then(__webpack_require__.t.bind(__webpack_require__, 40821, 17)),
        LESS: __webpack_require__.e(/* import() */ 25497).then(__webpack_require__.t.bind(__webpack_require__, 25497, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 48901).then(__webpack_require__.t.bind(__webpack_require__, 48901, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 85177).then(__webpack_require__.t.bind(__webpack_require__, 85177, 17));
    }

  }

  ExampleTuiTableComponent.ɵfac = function ExampleTuiTableComponent_Factory(t) {
    return new (t || ExampleTuiTableComponent)();
  };

  ExampleTuiTableComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTableComponent,
    selectors: [["example-table"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__4 = goog.getMsg("Custom");
        i18n_3 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4208877297843037352$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__6 = goog.getMsg("Editable");
        i18n_5 = MSG_EXTERNAL_4208877297843037352$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟4a01c175f90dd92b432f4a4a199d2c7bb9d997ff␟4208877297843037352:Editable`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_874907631161735200$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__8 = goog.getMsg("Server sorting");
        i18n_7 = MSG_EXTERNAL_874907631161735200$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟6c1d856595ca5300d7740ce8f523471f48b29099␟874907631161735200:Server sorting`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3924785165106362812$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__10 = goog.getMsg("Virtual scroll");
        i18n_9 = MSG_EXTERNAL_3924785165106362812$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟bdb7f01db95540f02fe9e127d968a3592650bdfb␟3924785165106362812:Virtual scroll`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6643859279645459462$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__12 = goog.getMsg("Dynamic columns");
        i18n_11 = MSG_EXTERNAL_6643859279645459462$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟e0b737f153d982532856fe5a286d779605284495␟6643859279645459462:Dynamic columns`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7749222044535914888$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__13 = goog.getMsg("{$startParagraph}This module allows you to create various tables, both static and editable.{$closeParagraph}{$startTagTuiDocExample}{$startTagTuiTableExample_1}{$closeTagTuiTableExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiTableExample_2}{$closeTagTuiTableExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiTableExample_3}{$closeTagTuiTableExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiTableExample_4}{$closeTagTuiTableExample_4}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiTableExample_5}{$closeTagTuiTableExample_5}{$closeTagTuiDocExample}{$startTagTuiDocExample_5}{$startTagTuiTableExample_6}{$closeTagTuiTableExample_6}{$closeTagTuiDocExample}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD",
          "startTagTuiDocExample": "\uFFFD#2\uFFFD",
          "startTagTuiTableExample_1": "\uFFFD#3\uFFFD",
          "closeTagTuiTableExample_1": "\uFFFD/#3\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#4\uFFFD",
          "startTagTuiTableExample_2": "\uFFFD#5\uFFFD",
          "closeTagTuiTableExample_2": "\uFFFD/#5\uFFFD",
          "startTagTuiDocExample_2": "\uFFFD#6\uFFFD",
          "startTagTuiTableExample_3": "\uFFFD#7\uFFFD",
          "closeTagTuiTableExample_3": "\uFFFD/#7\uFFFD",
          "startTagTuiDocExample_3": "\uFFFD#8\uFFFD",
          "startTagTuiTableExample_4": "\uFFFD#9\uFFFD",
          "closeTagTuiTableExample_4": "\uFFFD/#9\uFFFD",
          "startTagTuiDocExample_4": "\uFFFD#10\uFFFD",
          "startTagTuiTableExample_5": "\uFFFD#11\uFFFD",
          "closeTagTuiTableExample_5": "\uFFFD/#11\uFFFD",
          "startTagTuiDocExample_5": "\uFFFD#12\uFFFD",
          "startTagTuiTableExample_6": "\uFFFD#13\uFFFD",
          "closeTagTuiTableExample_6": "\uFFFD/#13\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7749222044535914888$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__13;
      } else {
        i18n_0 = $localize`:␟8a4d986afc5665eb7f4c905be82beeb1b954617d␟7749222044535914888:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:This module allows you to create various tables, both static and editable.${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_1:${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_1:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_2:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_2:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#7\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_3:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_3:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#9\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_4:${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_4:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_5:${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_5:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#12\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\uFFFD#13\uFFFD"}:START_TAG_TUI_TABLE_EXAMPLE_6:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_TUI_TABLE_EXAMPLE_6:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6038105766511382280$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____15 = goog.getMsg(" An array of keys to set up columns order ");
        i18n_14 = MSG_EXTERNAL_6038105766511382280$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____15;
      } else {
        i18n_14 = $localize`:␟89bed7b5e22562ade0aaeb0e5d89d02e9a38f9f5␟6038105766511382280: An array of keys to set up columns order `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9176490006062528137$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____17 = goog.getMsg(" Cells size ");
        i18n_16 = MSG_EXTERNAL_9176490006062528137$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____17;
      } else {
        i18n_16 = $localize`:␟503db49326c453553c75c17bd84c246da7b8cc42␟9176490006062528137: Cells size `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_956753889439190452$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____19 = goog.getMsg(" Sort function (basic JavaScript array sort API) ");
        i18n_18 = MSG_EXTERNAL_956753889439190452$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____19;
      } else {
        i18n_18 = $localize`:␟c6a7ce5ce655e7c9b56eb96bc0d8d4c065e40487␟956753889439190452: Sort function (basic JavaScript array sort API) `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3356602485871191914$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____21 = goog.getMsg(" Direction for sorting ");
        i18n_20 = MSG_EXTERNAL_3356602485871191914$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____21;
      } else {
        i18n_20 = $localize`:␟edd5c209c3efa39caa8dd54e71fd30074d587f93␟3356602485871191914: Direction for sorting `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3861989173407506687$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____23 = goog.getMsg(" Makes this column resizable ");
        i18n_22 = MSG_EXTERNAL_3861989173407506687$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____23;
      } else {
        i18n_22 = $localize`:␟e1020d055839d52f953a984a64f21f9045702d7c␟3861989173407506687: Makes this column resizable `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3840502432103986973$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____25 = goog.getMsg(" Sorter function for this column ");
        i18n_24 = MSG_EXTERNAL_3840502432103986973$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____25;
      } else {
        i18n_24 = $localize`:␟ed304d2a0bd803a2c13af82cddc57f334fb715a3␟3840502432103986973: Sorter function for this column `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5718794858755814002$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____27 = goog.getMsg(" Makes heading cell horizontally sticky ");
        i18n_26 = MSG_EXTERNAL_5718794858755814002$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____27;
      } else {
        i18n_26 = $localize`:␟5661e3c2c1a8a03afc71f5d4c5c8d35d55a102a5␟5718794858755814002: Makes heading cell horizontally sticky `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7067793220185461117$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____29 = goog.getMsg(" Data to display ");
        i18n_28 = MSG_EXTERNAL_7067793220185461117$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____29;
      } else {
        i18n_28 = $localize`:␟55833d9c282a8bc8cd8badf77ce8a06785559c2b␟7067793220185461117: Data to display `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1883323480392210677$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____31 = goog.getMsg(" Optional heading content for the group that makes it collapsable ");
        i18n_30 = MSG_EXTERNAL_1883323480392210677$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____31;
      } else {
        i18n_30 = $localize`:␟7f8211250b905745b68129739616ce034938332b␟1883323480392210677: Optional heading content for the group that makes it collapsable `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1451038701451306374$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____33 = goog.getMsg(" Open/collapsed state of the group ");
        i18n_32 = MSG_EXTERNAL_1451038701451306374$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS____33;
      } else {
        i18n_32 = $localize`:␟03fc9e5cecea44e0eeda5c8918d4d9a65da6d61a␟1451038701451306374: Open/collapsed state of the group `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1455119302450018015$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__35 = goog.getMsg(" Import {$startTagCode}TuiTableModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_1455119302450018015$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟a26f59dd5869b43c41a873c4cb2d0d94ad46d4b8␟1455119302450018015: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTableModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__37 = goog.getMsg("Add to the template:");
        i18n_36 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_TABLES_TABLE_TABLE_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Table", "package", "ADDON-TABLE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "basic", "heading", i18n_1, 3, "content"], ["id", "custom", "heading", i18n_3, 3, "content"], ["id", "editable", "heading", i18n_5, 3, "content"], ["id", "server", "heading", i18n_7, "description", "With tuiSortBy directive to work with column titles instead of sorters", 3, "content"], ["id", "virtual", "heading", i18n_9, 3, "content"], ["id", "dynamic", "heading", i18n_11, 3, "content"], [3, "open"], ["tuiAccordionItemContent", ""], [3, "showValues"], ["documentationPropertyName", "columns", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL"], ["documentationPropertyName", "sorter", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiComparator<T>"], ["documentationPropertyName", "direction", "documentationPropertyMode", "input-output", "documentationPropertyType", "-1 | 1"], ["documentationPropertyName", "resizable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean"], ["documentationPropertyName", "sorter", "documentationPropertyMode", "input", "documentationPropertyType", "TuiComparator<T> | null"], ["documentationPropertyName", "sticky", "documentationPropertyMode", "input", "documentationPropertyType", "boolean"], ["documentationPropertyName", "data", "documentationPropertyMode", "input", "documentationPropertyType", "readonly T[]"], ["documentationPropertyName", "heading", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "open", "documentationPropertyMode", "input-output", "documentationPropertyType", "boolean"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, [1, "b-demo-steps"], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTableComponent_ng_template_1_Template, 14, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTableComponent_ng_template_2_Template, 7, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTableComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTableExample1, TuiTableExample2, TuiTableExample3, TuiTableExample4, TuiTableExample5, TuiTableExample6, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTableComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/tables/table/table.module.ts



















let ExampleTuiTableModule = /*#__PURE__*/(() => {
  class ExampleTuiTableModule {}

  ExampleTuiTableModule.ɵfac = function ExampleTuiTableModule_Factory(t) {
    return new (t || ExampleTuiTableModule)();
  };

  ExampleTuiTableModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTableModule
  });
  ExampleTuiTableModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, scrolling/* ScrollingModule */.Cl, ng_web_apis_intersection_observer/* IntersectionObserverModule */.$v, core.TuiNotificationModule, core.TuiScrollbarModule, addon_table.TuiTableModule, kit.TuiInputModule, kit.TuiTextAreaModule, kit.TuiInputNumberModule, kit.TuiInputCountModule, kit.TuiSelectModule, kit.TuiInputDateModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiFormatNumberPipeModule, cdk.TuiValidatorModule, core.TuiSvgModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiTagModule, kit.TuiAccordionModule, core.TuiLoaderModule, cdk.TuiLetModule, addon_table.TuiTablePaginationModule, core.TuiTextfieldControllerModule, core.TuiHostedDropdownModule, kit.TuiArrowModule, addon_table.TuiReorderModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTableComponent))]]
  });
  return ExampleTuiTableModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTableModule, {
    declarations: [ExampleTuiTableComponent, TuiTableExample1, TuiTableExample2, TuiTableExample3, TuiTableExample4, TuiTableExample5, TuiTableExample6],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, scrolling/* ScrollingModule */.Cl, ng_web_apis_intersection_observer/* IntersectionObserverModule */.$v, core.TuiNotificationModule, core.TuiScrollbarModule, addon_table.TuiTableModule, kit.TuiInputModule, kit.TuiTextAreaModule, kit.TuiInputNumberModule, kit.TuiInputCountModule, kit.TuiSelectModule, kit.TuiInputDateModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiFormatNumberPipeModule, cdk.TuiValidatorModule, core.TuiSvgModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiTagModule, kit.TuiAccordionModule, core.TuiLoaderModule, cdk.TuiLetModule, addon_table.TuiTablePaginationModule, core.TuiTextfieldControllerModule, core.TuiHostedDropdownModule, kit.TuiArrowModule, addon_table.TuiReorderModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTableComponent]
  });
})();

/***/ })

}]);