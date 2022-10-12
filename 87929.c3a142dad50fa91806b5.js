"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[87929],{

/***/ 87929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMultiSelectModule": () => (/* binding */ ExampleTuiMultiSelectModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/scrolling.js + 7 modules
var scrolling = __webpack_require__(63737);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select.component.ts
var multi_select_component = __webpack_require__(93251);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.directive.ts
var multi_select_group_directive = __webpack_require__(20501);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/1/index.ts











function TuiMultiSelectExample1_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.filter(ctx_r0.search));
  }
}

const ITEMS = [`Luke Skywalker`, `Leia Organa Solo`, `Darth Vader`, `Han Solo`, `Obi-Wan Kenobi`, `Yoda`];
class TuiMultiSelectExample1 {
  constructor() {
    this.search = ``;
    this.control = new fesm2015_forms/* FormControl */.NI([ITEMS[0]]);
  }

  filter(search) {
    return ITEMS.filter(item => (0,cdk.TUI_DEFAULT_MATCHER)(item, search || ``));
  }

}

TuiMultiSelectExample1.ɵfac = function TuiMultiSelectExample1_Factory(t) {
  return new (t || TuiMultiSelectExample1)();
};

TuiMultiSelectExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiMultiSelectExample1,
  selectors: [["tui-multi-select-example-1"]],
  decls: 3,
  vars: 4,
  consts: [["placeholder", "Ignored text", 1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "editable", "search", "searchChange"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items"]],
  template: function TuiMultiSelectExample1_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 0);
      fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function TuiMultiSelectExample1_Template_tui_multi_select_searchChange_0_listener($event) {
        return ctx.search = $event;
      });
      fesm2015_core/* ɵɵtext */._uU(1, " Star Wars persons ");
      fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample1_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tuiTextfieldLabelOutside", true)("editable", false)("search", ctx.search);
    }
  },
  directives: [multi_select_component/* TuiMultiSelectComponent */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiMultiSelectExample1.prototype, "filter", null);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__(45435);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts
var let_directive = __webpack_require__(40939);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/hide-selected.pipe.ts
var hide_selected_pipe = __webpack_require__(73139);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/2/index.ts
















function TuiMultiSelectExample2_tui_multi_select_0_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 5);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiHideSelected");
  }

  if (rf & 2) {
    const items_r3 = fesm2015_core/* ɵɵnextContext */.oxw().tuiLet;
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

    fesm2015_core/* ɵɵproperty */.Q6J("items", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, items_r3))("itemContent", _r1);
  }
}

function TuiMultiSelectExample2_tui_multi_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 2, 3);
    fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function TuiMultiSelectExample2_tui_multi_select_0_Template_tui_multi_select_searchChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.onSearchChange($event);
    });
    fesm2015_core/* ɵɵtext */._uU(2, " Rock Star Frontend Developers ");
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiMultiSelectExample2_tui_multi_select_0_tui_data_list_wrapper_3_Template, 2, 4, "tui-data-list-wrapper", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r0.testValue)("tuiTextfieldLabelOutside", true)("expandable", false);
  }
}

function TuiMultiSelectExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 6);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-avatar", 7);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("avatarUrl", data_r9.avatarUrl)("text", data_r9.toString());
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", data_r9, " ");
  }
}

class User {
  constructor(firstName, lastName, avatarUrl = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const databaseMockData = [new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`), new User(`Alex`, `Inkin`, utils/* assets */.L`/images/avatar.jpg`), new User(`Dmitriy`, `Demenskiy`), new User(`Evgeniy`, `Mamaev`), new User(`Ivan`, `Ishmametiev`), new User(`Igor`, `Katsuba`), new User(`Yulia`, `Tsareva`)];
let TuiMultiSelectExample2 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample2 {
    constructor() {
      this.search$ = new Subject/* Subject */.xQ();
      this.items$ = this.search$.pipe((0,filter/* filter */.h)(value => value !== null), (0,switchMap/* switchMap */.w)(search => this.serverRequest(search).pipe((0,startWith/* startWith */.O)(null))), (0,startWith/* startWith */.O)(databaseMockData));
      this.testValue = new fesm2015_forms/* FormControl */.NI([databaseMockData[0]]);
    }

    onSearchChange(searchQuery) {
      this.search$.next(searchQuery);
    }
    /**
     * Server request emulation
     */


    serverRequest(searchQuery) {
      const result = databaseMockData.filter(user => (0,cdk.TUI_DEFAULT_MATCHER)(user, searchQuery || ``));
      return (0,of.of)(result).pipe((0,delay/* delay */.g)(Math.random() * 1000 + 500));
    }

  }

  TuiMultiSelectExample2.ɵfac = function TuiMultiSelectExample2_Factory(t) {
    return new (t || TuiMultiSelectExample2)();
  };

  TuiMultiSelectExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample2,
    selectors: [["tui-multi-select-example-2"]],
    decls: 4,
    vars: 3,
    consts: [["placeholder", "Find by ...", "class", "control", 3, "formControl", "tuiTextfieldLabelOutside", "expandable", "searchChange", 4, "tuiLet"], ["itemContent", ""], ["placeholder", "Find by ...", 1, "control", 3, "formControl", "tuiTextfieldLabelOutside", "expandable", "searchChange"], ["component", ""], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"], [1, "template"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"]],
    template: function TuiMultiSelectExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiMultiSelectExample2_tui_multi_select_0_Template, 4, 3, "tui-multi-select", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample2_ng_template_2_Template, 3, 3, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.items$));
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, multi_select_component/* TuiMultiSelectComponent */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, avatar_component/* TuiAvatarComponent */.J],
    pipes: [common/* AsyncPipe */.Ov, hide_selected_pipe/* TuiHideSelectedPipe */.E],
    styles: [".control[_ngcontent-%COMP%]{width:31.25rem}@media screen and (max-width: 47.9625em){.control[_ngcontent-%COMP%]{width:100%}}.template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 -.25rem}"],
    changeDetection: 0
  });
  return TuiMultiSelectExample2;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/3/index.ts














function TuiMultiSelectExample3_tui_data_list_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r4);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r4.name, " ");
  }
}

function TuiMultiSelectExample3_tui_data_list_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiMultiSelectExample3_tui_data_list_3_button_1_Template, 2, 2, "button", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.items);
  }
}

function TuiMultiSelectExample3_tui_data_list_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r6);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r6.name, " ");
  }
}

function TuiMultiSelectExample3_tui_data_list_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiMultiSelectExample3_tui_data_list_6_button_1_Template, 2, 2, "button", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.items);
  }
}

function TuiMultiSelectExample3_tui_data_list_wrapper_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 9);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r2.items)("itemContent", ctx_r2.stringify);
  }
}

let TuiMultiSelectExample3 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample3 {
    constructor() {
      this.items = [{
        id: 1,
        name: `Luke Skywalker`
      }, {
        id: 2,
        name: `Leia Organa Solo`
      }, {
        id: 3,
        name: `Darth Vader`
      }, {
        id: 4,
        name: `Han Solo`
      }, {
        id: 5,
        name: `Obi-Wan Kenobi`
      }, {
        id: 6,
        name: `Yoda`
      }];
      this.control = new fesm2015_forms/* FormControl */.NI([this.items[3], this.items[4]]);

      this.stringify = item => `name` in item ? item.name : item.$implicit.name;

      this.identityMatcher = (hero1, hero2) => hero1.id === hero2.id;
    }

  }

  TuiMultiSelectExample3.ɵfac = function TuiMultiSelectExample3_Factory(t) {
    return new (t || TuiMultiSelectExample3)();
  };

  TuiMultiSelectExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample3,
    selectors: [["tui-multi-select-example-3"]],
    decls: 10,
    vars: 15,
    consts: [[1, "b-form"], ["tuiTextfieldSize", "s", 3, "formControl", "stringify", "identityMatcher", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 4, "tuiDataList"], ["tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "editable", "formControl", "stringify", "identityMatcher", "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], [1, "tui-space_top-2", 3, "editable", "formControl", "stringify", "identityMatcher", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent", 4, "tuiDataList"], ["tuiMultiSelectGroup", ""], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent"]],
    template: function TuiMultiSelectExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-multi-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose your heroes ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiMultiSelectExample3_tui_data_list_3_Template, 2, 1, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-multi-select", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Choose your heroes ");
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiMultiSelectExample3_tui_data_list_6_Template, 2, 1, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-multi-select", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Choose your heroes ");
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiMultiSelectExample3_tui_data_list_wrapper_9_Template, 1, 2, "tui-data-list-wrapper", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldCleaner", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* NgForm */.F, multi_select_component/* TuiMultiSelectComponent */.V, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, data_list_directive/* TuiDataListDirective */.g, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_component/* TuiDataListComponent */.q, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMultiSelectExample3;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js
var shareReplay = __webpack_require__(47349);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/4/index.ts














function TuiMultiSelectExample4_tui_multi_select_0_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 3);
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
  }

  if (rf & 2) {
    const items_r1 = fesm2015_core/* ɵɵnextContext */.oxw().tuiLet;
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", items_r1)("itemContent", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx_r2.stringify$));
  }
}

function TuiMultiSelectExample4_tui_multi_select_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 1);
    fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function TuiMultiSelectExample4_tui_multi_select_0_Template_tui_multi_select_searchChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.onSearch($event);
    });
    fesm2015_core/* ɵɵpipe */.ALo(1, "async");
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample4_tui_multi_select_0_tui_data_list_wrapper_2_Template, 2, 4, "tui-data-list-wrapper", 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r0.control)("tuiTextfieldLabelOutside", true)("stringify", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 3, ctx_r0.stringify$));
  }
}

const DICTIONARY = [{
  id: 1,
  name: `Luke Skywalker`
}, {
  id: 2,
  name: `Princess Leia`
}, {
  id: 3,
  name: `Darth Vader`
}, {
  id: 4,
  name: `Han Solo`
}, {
  id: 5,
  name: `Obi-Wan Kenobi`
}, {
  id: 6,
  name: `Yoda`
}];
let TuiMultiSelectExample4 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample4 {
    constructor() {
      // Server request emulation
      this.server$ = (0,timer/* timer */.H)(5000).pipe((0,mapTo/* mapTo */.h)(DICTIONARY), (0,shareReplay/* shareReplay */.d)({
        bufferSize: 1,
        refCount: true
      }));
      this.search$ = new Subject/* Subject */.xQ(); // Items only hold IDs

      this.items$ = this.search$.pipe((0,startWith/* startWith */.O)(``), (0,switchMap/* switchMap */.w)(search => this.server$.pipe((0,map/* map */.U)(items => items.filter(({
        name
      }) => (0,cdk.TUI_DEFAULT_MATCHER)(name, search)).map(({
        id
      }) => id)))), (0,startWith/* startWith */.O)(null)); // Stringify mapper that turns IDs to names

      this.stringify$ = this.server$.pipe((0,map/* map */.U)(items => new Map(items.map(({
        id,
        name
      }) => [id, name]))), (0,startWith/* startWith */.O)(new Map()), (0,map/* map */.U)(map => id => ((0,cdk.tuiIsNumber)(id) ? map.get(id) : map.get(id.$implicit)) || `Loading...`));
      this.control = new fesm2015_forms/* FormControl */.NI([2, 3]);
    }

    onSearch(search) {
      this.search$.next(search || ``);
    }

  }

  TuiMultiSelectExample4.ɵfac = function TuiMultiSelectExample4_Factory(t) {
    return new (t || TuiMultiSelectExample4)();
  };

  TuiMultiSelectExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample4,
    selectors: [["tui-multi-select-example-4"]],
    decls: 2,
    vars: 3,
    consts: [["class", "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "stringify", "searchChange", 4, "tuiLet"], [1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "stringify", "searchChange"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent"]],
    template: function TuiMultiSelectExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiMultiSelectExample4_tui_multi_select_0_Template, 3, 5, "tui-multi-select", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.items$));
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, multi_select_component/* TuiMultiSelectComponent */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMultiSelectExample4;
})();
// EXTERNAL MODULE: ./projects/core/components/data-list/opt-group.directive.ts
var opt_group_directive = __webpack_require__(89786);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.component.ts
var multi_select_group_component = __webpack_require__(31363);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/5/index.ts













function TuiMultiSelectExample5_tui_data_list_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r4);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r4, " ");
  }
}

function TuiMultiSelectExample5_tui_data_list_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r5);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5, " ");
  }
}

function TuiMultiSelectExample5_tui_data_list_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-opt-group", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample5_tui_data_list_2_button_2_Template, 2, 2, "button", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-opt-group", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiMultiSelectExample5_tui_data_list_2_button_4_Template, 2, 2, "button", 4);
    fesm2015_core/* ɵɵpipe */.ALo(5, "tuiHideSelected");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.jedi);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 2, ctx_r1.sith));
  }
}

let TuiMultiSelectExample5 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample5 {
    constructor() {
      this.jedi = [`Luke Skywalker`, `Princess Leia`, `Han Solo`, `Obi-Wan Kenobi`, `Yoda`];
      this.sith = [`Emperor`, `Darth Vader`, `Darth Maul`];
      this.value = [this.jedi[0]];
    }

  }

  TuiMultiSelectExample5.ɵfac = function TuiMultiSelectExample5_Factory(t) {
    return new (t || TuiMultiSelectExample5)();
  };

  TuiMultiSelectExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample5,
    selectors: [["tui-multi-select-example-5"]],
    decls: 3,
    vars: 4,
    consts: [[1, "b-form", 3, "editable", "expandable", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], ["component", ""], [4, "tuiDataList"], ["tuiMultiSelectGroup", "", "label", "Jedi"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["label", "Sith"], ["tuiOption", "", 3, "value"]],
    template: function TuiMultiSelectExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 0, 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiMultiSelectExample5_Template_tui_multi_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample5_tui_data_list_2_Template, 6, 4, "tui-data-list", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("expandable", false)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
      }
    },
    directives: [multi_select_component/* TuiMultiSelectComponent */.V, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, opt_group_directive/* TuiOptGroupDirective */.R, multi_select_group_component/* TuiMultiSelectGroupComponent */.g, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v],
    pipes: [hide_selected_pipe/* TuiHideSelectedPipe */.E],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMultiSelectExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/6/index.ts








function TuiMultiSelectExample6_tui_data_list_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 2);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

let TuiMultiSelectExample6 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample6 {
    constructor() {
      this.items = [`گراهام چپمن`, `جان کلیز`, `تری گیلیام`, `اریک آیدل`, `تری جونز`, `مایکل پیلین`];
      this.value = [this.items[0]];
    }

  }

  TuiMultiSelectExample6.ɵfac = function TuiMultiSelectExample6_Factory(t) {
    return new (t || TuiMultiSelectExample6)();
  };

  TuiMultiSelectExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample6,
    selectors: [["tui-multi-select-example-6"]],
    decls: 2,
    vars: 3,
    consts: [[1, "input", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiMultiSelectExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiMultiSelectExample6_Template_tui_multi_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiMultiSelectExample6_tui_data_list_wrapper_1_Template, 1, 1, "tui-data-list-wrapper", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true)("ngModel", ctx.value);
      }
    },
    directives: [multi_select_component/* TuiMultiSelectComponent */.V, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],
    changeDetection: 0
  });
  return TuiMultiSelectExample6;
})();
// EXTERNAL MODULE: ./projects/core/components/scrollbar/scrollable.directive.ts
var scrollable_directive = __webpack_require__(62500);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/7/index.ts










function TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 5);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2, " ");
  }
}

function TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "cdk-virtual-scroll-viewport", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-data-list", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_button_2_Template, 2, 2, "button", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("itemSize", 44);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("cdkVirtualForOf", ctx_r0.countries);
  }
}

let TuiMultiSelectExample7 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample7 {
    constructor() {
      this.value = [];
      this.countries = [`Afghanistan`, `Albania`, `Algeria`, `American Samoa`, `Andorra`, `Angola`, `Anguilla`, `Antarctica`, `Antigua and Barbuda`, `Argentina`, `Armenia`, `Aruba`, `Australia`, `Austria`, `Azerbaijan`, `Bahamas`, `Bahrain`, `Bangladesh`, `Barbados`, `Belarus`, `Belgium`, `Belize`, `Benin`, `Bermuda`, `Bhutan`, `Bolivia`, `Bonaire, Sint Eustatius and Saba`, `Bosnia and Herzegovina`, `Botswana`, `Bouvet Island`, `Brazil`, `British Indian Ocean Territory`, `Brunei Darussalam`, `Bulgaria`, `Burkina Faso`, `Burundi`, `Cabo Verde`, `Cambodia`, `Cameroon`, `Canada`, `Cayman Islands`, `Central African Republic`, `Chad`, `Chile`, `China`, `Christmas Island`, `Cocos (Keeling) Islands`, `Colombia`, `Comoros`, `Congo`, `Cook Islands`, `Costa Rica`, `Croatia`, `Cuba`, `Curaçao`, `Cyprus`, `Czechia`, `Côte d'Ivoire`, `Denmark`, `Djibouti`, `Dominica`, `Dominican Republic`, `Ecuador`, `Egypt`, `El Salvador`, `Equatorial Guinea`, `Eritrea`, `Estonia`, `Eswatini`, `Ethiopia`, `Falkland Islands`, `Faroe Islands`, `Fiji`, `Finland`, `France`, `French Guiana`, `French Polynesia`, `French Southern Territories`, `Gabon`, `Gambia`, `Georgia`, `Germany`, `Ghana`, `Gibraltar`, `Greece`, `Greenland`, `Grenada`, `Guadeloupe`, `Guam`, `Guatemala`, `Guernsey`, `Guinea`, `Guinea-Bissau`, `Guyana`, `Haiti`, `Heard Island and McDonald Islands`, `Holy See`, `Honduras`, `Hong Kong`, `Hungary`, `Iceland`, `India`, `Indonesia`, `Iran`, `Iraq`, `Ireland`, `Isle of Man`, `Israel`, `Italy`, `Jamaica`, `Japan`, `Jersey`, `Jordan`, `Kazakhstan`, `Kenya`, `Kiribati`, `Korea`, `Kuwait`, `Kyrgyzstan`, `Lao People's Democratic Republic`, `Latvia`, `Lebanon`, `Lesotho`, `Liberia`, `Libya`, `Liechtenstein`, `Lithuania`, `Luxembourg`, `Macao`, `Madagascar`, `Malawi`, `Malaysia`, `Maldives`, `Mali`, `Malta`, `Marshall Islands`, `Martinique`, `Mauritania`, `Mauritius`, `Mayotte`, `Mexico`, `Micronesia`, `Moldova`, `Monaco`, `Mongolia`, `Montenegro`, `Montserrat`, `Morocco`, `Mozambique`, `Myanmar`, `Namibia`, `Nauru`, `Nepal`, `Netherlands`, `New Caledonia`, `New Zealand`, `Nicaragua`, `Niger`, `Nigeria`, `Niue`, `Norfolk Island`, `Northern Mariana Islands`, `Norway`, `Oman`, `Pakistan`, `Palau`, `Palestine, State of`, `Panama`, `Papua New Guinea`, `Paraguay`, `Peru`, `Philippines`, `Pitcairn`, `Poland`, `Portugal`, `Puerto Rico`, `Qatar`, `Republic of North Macedonia`, `Romania`, `Russian Federation`, `Rwanda`, `Réunion`, `Saint Barthélemy`, `Saint Helena`, `Saint Kitts and Nevis`, `Saint Lucia`, `Saint Martin`, `Saint Pierre and Miquelon`, `Saint Vincent and the Grenadines`, `Samoa`, `San Marino`, `Sao Tome and Principe`, `Saudi Arabia`, `Senegal`, `Serbia`, `Seychelles`, `Sierra Leone`, `Singapore`, `Sint Maarten (Dutch part)`, `Slovakia`, `Slovenia`, `Solomon Islands`, `Somalia`, `South Africa`, `South Georgia`, `South Sudan`, `Spain`, `Sri Lanka`, `Sudan`, `Suriname`, `Svalbard and Jan Mayen`, `Sweden`, `Switzerland`, `Syrian Arab Republic`, `Taiwan`, `Tajikistan`, `Tanzania, United Republic of`, `Thailand`, `Timor-Leste`, `Togo`, `Tokelau`, `Tonga`, `Trinidad and Tobago`, `Tunisia`, `Turkey`, `Turkmenistan`, `Turks and Caicos Islands`, `Tuvalu`, `Uganda`, `Ukraine`, `United Arab Emirates`, `United Kingdom`, `United States of America`, `Uruguay`, `Uzbekistan`, `Vanuatu`, `Venezuela`, `Viet Nam`, `Virgin Islands (British)`, `Virgin Islands (U.S.)`, `Wallis and Futuna`, `Western Sahara`, `Yemen`, `Zambia`, `Zimbabwe`, `Åland Islands`];
    }

    get content() {
      return `Selected ${this.value.length} of ${this.countries.length}`;
    }

  }

  TuiMultiSelectExample7.ɵfac = function TuiMultiSelectExample7_Factory(t) {
    return new (t || TuiMultiSelectExample7)();
  };

  TuiMultiSelectExample7.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample7,
    selectors: [["tui-multi-select-example-7"]],
    decls: 3,
    vars: 3,
    consts: [[1, "b-form", 3, "editable", "valueContent", "ngModel", "ngModelChange"], ["tuiScrollable", "", "class", "scroll", 3, "itemSize", 4, "tuiDataList"], ["tuiScrollable", "", 1, "scroll", 3, "itemSize"], ["tuiMultiSelectGroup", ""], ["tuiOption", "", 3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiOption", "", 3, "value"]],
    template: function TuiMultiSelectExample7_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiMultiSelectExample7_Template_tui_multi_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Applicable countries ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_Template, 3, 2, "cdk-virtual-scroll-viewport", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("valueContent", ctx.content)("ngModel", ctx.value);
      }
    },
    directives: [multi_select_component/* TuiMultiSelectComponent */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, scrolling/* CdkVirtualScrollViewport */.N7, scrolling/* CdkFixedSizeVirtualScroll */.xd, scrollable_directive/* TuiScrollableDirective */.R, data_list_component/* TuiDataListComponent */.q, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, scrolling/* CdkVirtualForOf */.x0, option_component/* TuiOptionComponent */.v],
    styles: [".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;height:200px;--tui-duration: 0}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],
    changeDetection: 0
  });
  return TuiMultiSelectExample7;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/8/index.ts












function TuiMultiSelectExample8_tui_data_list_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

function TuiMultiSelectExample8_tui_data_list_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 4);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r1.items);
  }
}

const STRINGIFY_EMPLOYEE = item => `name` in item ? `${item.name} (${item.dept.title})` : `${item.$implicit.name} (${item.$implicit.dept.title})`;

const ID_MATCHER_EMPLOYEE = (item1, item2) => item1.id === item2.id;

let TuiMultiSelectExample8 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample8 {
    constructor() {
      this.testValue = new fesm2015_forms/* FormControl */.NI([]);
      this.items = [{
        id: 42,
        name: `John Cleese`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 237,
        name: `Eric Idle`,
        dept: {
          id: 560,
          title: `Staffing`
        }
      }, {
        id: 666,
        name: `Michael Palin`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 123,
        name: `Terry Gilliam`,
        dept: {
          id: 500,
          title: `Administrative`
        }
      }, {
        id: 777,
        name: `Terry Jones`,
        dept: {
          id: 566,
          title: `Financial`
        }
      }, {
        id: 999,
        name: `Graham Chapman`,
        dept: {
          id: 560,
          title: `Staffing`
        }
      }];
    }

  }

  TuiMultiSelectExample8.ɵfac = function TuiMultiSelectExample8_Factory(t) {
    return new (t || TuiMultiSelectExample8)();
  };

  TuiMultiSelectExample8.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample8,
    selectors: [["tui-multi-select-example-8"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiItemsHandlersProvider)({
      stringify: STRINGIFY_EMPLOYEE,
      identityMatcher: ID_MATCHER_EMPLOYEE
    })])],
    decls: 7,
    vars: 7,
    consts: [[1, "b-form"], ["tuiTextfieldSize", "m", 3, "editable", "formControl", "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], [1, "tui-space_top-2", 3, "editable", "formControl", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items"]],
    template: function TuiMultiSelectExample8_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-multi-select", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Employees ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiMultiSelectExample8_tui_data_list_wrapper_3_Template, 1, 1, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-multi-select", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Employees ");
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiMultiSelectExample8_tui_data_list_wrapper_6_Template, 1, 1, "tui-data-list-wrapper", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("formControl", ctx.testValue)("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("editable", false)("formControl", ctx.testValue)("tuiTextfieldCleaner", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* NgForm */.F, multi_select_component/* TuiMultiSelectComponent */.V, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMultiSelectExample8;
})();
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/examples/9/index.ts















function TuiMultiSelectExample9_ng_template_6_tui_data_list_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 8);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r3.items);
  }
}

function TuiMultiSelectExample9_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "label", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-multi-select", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiMultiSelectExample9_ng_template_6_tui_data_list_wrapper_4_Template, 1, 1, "tui-data-list-wrapper", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true)("expandable", false)("tuiTextfieldSize", data_r2.textFieldSize)("formControl", ctx_r1.testValue)("tuiTextfieldLabelOutside", true);
  }
}

let TuiMultiSelectExample9 = /*#__PURE__*/(() => {
  class TuiMultiSelectExample9 {
    constructor(dialogService) {
      this.dialogService = dialogService;
      this.testValue = new fesm2015_forms/* FormControl */.NI([]);
      this.items = [`Luke Skywalker`, `Leia Organa Solo`, `Darth Vader`, `Han Solo`, `Obi-Wan Kenobi`, `Yoda`];
    }

    showDialog(content, textFieldSize) {
      this.dialogService.open(content, {
        data: {
          textFieldSize
        }
      }).subscribe();
    }

  }

  TuiMultiSelectExample9.ɵfac = function TuiMultiSelectExample9_Factory(t) {
    return new (t || TuiMultiSelectExample9)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiDialogService));
  };

  TuiMultiSelectExample9.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMultiSelectExample9,
    selectors: [["tui-multi-select-example-9"]],
    decls: 8,
    vars: 0,
    consts: [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [1, "tui-container_fullwidth"], [1, "tui-row", "tui-form__row_multi-fields", "tui-row_adaptive"], ["tuiLabel", "Star Wars persons", 1, "tui-col_md-12"], [1, "b-form", 3, "tuiTextfieldCleaner", "expandable", "tuiTextfieldSize", "formControl", "tuiTextfieldLabelOutside"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items"]],
    template: function TuiMultiSelectExample9_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMultiSelectExample9_Template_button_click_0_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r4);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.showDialog(_r0, "s");
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show 's' size\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMultiSelectExample9_Template_button_click_2_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r4);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.showDialog(_r0, "m");
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show 'm' size\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMultiSelectExample9_Template_button_click_4_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r4);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

          return ctx.showDialog(_r0, "l");
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Show 'l' size\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiMultiSelectExample9_ng_template_6_Template, 5, 5, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, label_component/* TuiLabelComponent */.A, multi_select_component/* TuiMultiSelectComponent */.V, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMultiSelectExample9;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/multi-select.component.ts




































function ExampleTuiMultiSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-multi-select-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-multi-select-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-multi-select-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-multi-select-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-multi-select-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-multi-select-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-multi-select-example-7");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-multi-select-example-8");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 12);
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-multi-select-example-9");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
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
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example7);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example8);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example9);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 27);
  }

  if (rf & 2) {
    const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx_r12.disabledItemHandler)("items", ctx_r12.items);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-multi-select", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("searchChange", function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template_tui_multi_select_searchChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r13.search = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Choose an account ");
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template, 1, 2, "tui-data-list-wrapper", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance)("focusable", ctx_r3.focusable)("disabledItemHandler", ctx_r3.disabledItemHandler)("editable", ctx_r3.editable)("expandable", ctx_r3.expandable)("identityMatcher", ctx_r3.identityMatcher)("readOnly", ctx_r3.readOnly)("stringify", ctx_r3.stringify)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("valueContent", ctx_r3.valueContent)("search", ctx_r3.search);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 28);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 33);
    fesm2015_core/* ɵɵelement */._UZ(1, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 34);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 35);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template, 3, 26, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiMultiSelectComponent_ng_template_2_Template_button_click_6_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.setValue();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.search = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.editable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.expandable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_13_Template, 2, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.identityMatcher = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.stringify = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.valueContent = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "inherited-documentation", 24);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.search);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.editable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.expandable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.identityMatcherVariants)("documentationPropertyValue", ctx_r1.identityMatcher);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.stringifyVariants)("documentationPropertyValue", ctx_r1.stringify);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.valueContent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiMultiSelectComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 36);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 37);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 38);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 39);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(11, 40);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 41);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "p");
    fesm2015_core/* ɵɵi18n */.SDv(17, 42);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-doc-code", 43);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  toString() {
    return `${this.name} (${this.balance})`;
  }

}

let ExampleTuiMultiSelectComponent = /*#__PURE__*/(() => {
  class ExampleTuiMultiSelectComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 64068).then(__webpack_require__.t.bind(__webpack_require__, 64068, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 41064).then(__webpack_require__.t.bind(__webpack_require__, 41064, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 94054).then(__webpack_require__.t.bind(__webpack_require__, 94054, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 58395).then(__webpack_require__.t.bind(__webpack_require__, 58395, 17)),
        HTML: __webpack_require__.e(/* import() */ 96898).then(__webpack_require__.t.bind(__webpack_require__, 96898, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 72230).then(__webpack_require__.t.bind(__webpack_require__, 72230, 17)),
        HTML: __webpack_require__.e(/* import() */ 7019).then(__webpack_require__.t.bind(__webpack_require__, 7019, 17)),
        LESS: __webpack_require__.e(/* import() */ 98542).then(__webpack_require__.t.bind(__webpack_require__, 98542, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 45107).then(__webpack_require__.t.bind(__webpack_require__, 45107, 17)),
        HTML: __webpack_require__.e(/* import() */ 13760).then(__webpack_require__.t.bind(__webpack_require__, 13760, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 12989).then(__webpack_require__.t.bind(__webpack_require__, 12989, 17)),
        HTML: __webpack_require__.e(/* import() */ 51968).then(__webpack_require__.t.bind(__webpack_require__, 51968, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 26117).then(__webpack_require__.t.bind(__webpack_require__, 26117, 17)),
        HTML: __webpack_require__.e(/* import() */ 26706).then(__webpack_require__.t.bind(__webpack_require__, 26706, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 77900).then(__webpack_require__.t.bind(__webpack_require__, 77900, 17)),
        HTML: __webpack_require__.e(/* import() */ 72084).then(__webpack_require__.t.bind(__webpack_require__, 72084, 17)),
        LESS: __webpack_require__.e(/* import() */ 4755).then(__webpack_require__.t.bind(__webpack_require__, 4755, 17))
      };
      this.example7 = {
        TypeScript: __webpack_require__.e(/* import() */ 16405).then(__webpack_require__.t.bind(__webpack_require__, 16405, 17)),
        HTML: __webpack_require__.e(/* import() */ 55174).then(__webpack_require__.t.bind(__webpack_require__, 55174, 17)),
        LESS: __webpack_require__.e(/* import() */ 64992).then(__webpack_require__.t.bind(__webpack_require__, 64992, 17))
      };
      this.example8 = {
        TypeScript: __webpack_require__.e(/* import() */ 38840).then(__webpack_require__.t.bind(__webpack_require__, 38840, 17)),
        HTML: __webpack_require__.e(/* import() */ 29304).then(__webpack_require__.t.bind(__webpack_require__, 29304, 17))
      };
      this.example9 = {
        TypeScript: __webpack_require__.e(/* import() */ 89367).then(__webpack_require__.t.bind(__webpack_require__, 89367, 17)),
        HTML: __webpack_require__.e(/* import() */ 91760).then(__webpack_require__.t.bind(__webpack_require__, 91760, 17))
      };
      this.labelOutside = true;
      this.items = [new Account(`Ruble`, 500), new Account(`Dollar`, 500), new Account(`Euro`, 500), new Account(`Pounds`, 500), new Account(`Yuan`, 237)];
      this.expandable = true;
      this.editable = true;
      this.search = ``;
      this.sizeVariants = [`s`, `m`, `l`];
      this.iconVariants = [``, `tuiIconSearchLarge`, `tuiIconPiechartLarge`, `tuiIconCardsLarge`];
      this.iconLeft = ``;
      this.size = this.sizeVariants[this.sizeVariants.length - 1];
      this.stringifyVariants = [cdk.TUI_DEFAULT_STRINGIFY, item => String(String(item).match(/\d+/))];
      this.stringify = this.stringifyVariants[0];
      this.identityMatcherVariants = [(item1, item2) => item1 === item2, (item1, item2) => item1.balance === item2.balance];
      this.identityMatcher = this.identityMatcherVariants[0];
      this.maxLengthVariants = [10];
      this.maxLength = null;
      this.valueContentVariants = [``, ({
        $implicit: {
          length
        }
      }) => `Selected: ${length}`];
      this.valueContent = this.valueContentVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, item => item.balance < 300];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
    }

    setValue() {
      this.control.setValue([new Account(`Dollar`, 237)]);
    }

  }

  ExampleTuiMultiSelectComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiMultiSelectComponent_BaseFactory;
    return function ExampleTuiMultiSelectComponent_Factory(t) {
      return (ɵExampleTuiMultiSelectComponent_BaseFactory || (ɵExampleTuiMultiSelectComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiMultiSelectComponent)))(t || ExampleTuiMultiSelectComponent);
    };
  }();

  ExampleTuiMultiSelectComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMultiSelectComponent,
    selectors: [["example-tui-multi-select"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiMultiSelectComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_322443088620685867$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}MultiSelect{$closeTagCode} is a textfield with a dropdown for choosing several items ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_322443088620685867$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟1370bfd9a3bd5dbdb104246929abb8ef16f30c79␟322443088620685867:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:MultiSelect${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a textfield with a dropdown for choosing several items `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6800762720774839936$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__3 = goog.getMsg("String array");
        i18n_2 = MSG_EXTERNAL_6800762720774839936$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟18246b83094cc9589126b64e6d01e462adcdaed4␟6800762720774839936:String array`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6922213476796739115$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__5 = goog.getMsg("Custom template, async items loading");
        i18n_4 = MSG_EXTERNAL_6922213476796739115$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ddf3afb4b682a69d70584655c15b5ba47251ef19␟6922213476796739115:Custom template, async items loading`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__7 = goog.getMsg("sizes");
        i18n_6 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5247767264061245555$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__9 = goog.getMsg("With IDs");
        i18n_8 = MSG_EXTERNAL_5247767264061245555$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟5df8fff1ea32976050fbdbb2e4bdae97a7d96eeb␟5247767264061245555:With IDs`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6504226182753238526$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__11 = goog.getMsg("{$startParagraph} Set a value with copied object from items to check {$startTagCode}identityMatcher{$closeTagCode} : {$closeParagraph}{$startTagButton} Set {$closeTagButton}", {
          "startParagraph": "\uFFFD#4\uFFFD",
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD",
          "closeParagraph": "\uFFFD/#4\uFFFD",
          "startTagButton": "\uFFFD#6\uFFFD",
          "closeTagButton": "\uFFFD/#6\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_6504226182753238526$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\uFFFD#4\uFFFD"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:identityMatcher${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: : ${"\uFFFD/#4\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#6\uFFFD"}:START_TAG_BUTTON: Set ${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_BUTTON:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___13 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1886174402380484199$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___15 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside (emits {$startTagCode}null{$closeTagCode} when item from list selected) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_1886174402380484199$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: when item from list selected) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8047919531216999837$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___17 = goog.getMsg(" Handler for deactivation some items ");
        i18n_16 = MSG_EXTERNAL_8047919531216999837$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟79e3dba0f52df39ff1faa20304144f2fb6f25831␟8047919531216999837: Handler for deactivation some items `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3526829989231983253$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___19 = goog.getMsg(" Textfield can be use for typing ");
        i18n_18 = MSG_EXTERNAL_3526829989231983253$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟a50496a997fc25853e0606139234a3c23c74b872␟3526829989231983253: Textfield can be use for typing `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4902838123072095655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___21 = goog.getMsg(" Control height can be expanded to show all tags ");
        i18n_20 = MSG_EXTERNAL_4902838123072095655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4796409722932472766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___23 = goog.getMsg(" A function that compares search and value to define a match between them. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_4796409722932472766$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟543ca5b39fc7e55317cb8527b1a5a8dd1e6802b6␟4796409722932472766: A function that compares search and value to define a match between them. ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4616897131727147893$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___25 = goog.getMsg(" A function that transforms object into a string. {$startTagCode}String(value){$closeTagCode} by default. {$startTagStrong}Should be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_4616897131727147893$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:String(value)${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Should be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5590474436936398231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___27 = goog.getMsg(" A template for custom view of selected value ");
        i18n_26 = MSG_EXTERNAL_5590474436936398231$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9060611228690957196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__29 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiMultiSelectModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_9060611228690957196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟0c365cd8b95d975d574504d047bacc24fc44c09c␟9060611228690957196: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMultiSelectModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8602164619926939169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__31 = goog.getMsg(" See samples to learn more about working with {$startTagCode}tui-data-list-wrapper{$closeTagCode} or without them ", {
          "startTagCode": "\uFFFD#8\uFFFD",
          "closeTagCode": "\uFFFD/#8\uFFFD"
        });
        i18n_30 = MSG_EXTERNAL_8602164619926939169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-data-list-wrapper${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: or without them `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__33 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"
        });
        i18n_32 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_32 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_32);
      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__35 = goog.getMsg("Add to the template:");
        i18n_34 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "MultiSelect", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["id", "string-array", "heading", i18n_2, 3, "content"], ["id", "object-array", "heading", i18n_4, 3, "content"], ["id", "sizes", "heading", i18n_6, 3, "content"], ["id", "ids", "heading", i18n_8, 3, "content"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "rtl", "heading", "Direction: RTL", 3, "content"], ["id", "virtual", "heading", "Virtual scroll", 3, "content"], ["id", "options-stringify", "heading", "Options (stringify)", 3, "content"], ["id", "multiselect-inside-dialog-with-different-size", "heading", "Multiselect inside dialog with different textfield sizes", 3, "content"], [3, "control"], i18n_10, ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expandable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "stringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "tuiDropdownAlign", "tuiTextfieldIconLeft", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "focusable", "disabledItemHandler", "editable", "expandable", "identityMatcher", "readOnly", "stringify", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "valueContent", "search", "searchChange"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "items"], i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], i18n_28, ["filename", "myComponent.module.ts", 3, "code"], i18n_30, i18n_32, ["filename", "myComponent.component.ts", 3, "code"], i18n_34, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMultiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMultiSelectComponent_ng_template_1_Template, 21, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMultiSelectComponent_ng_template_2_Template, 17, 14, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiMultiSelectComponent_ng_template_3_Template, 19, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMultiSelectExample1, TuiMultiSelectExample2, TuiMultiSelectExample3, TuiMultiSelectExample4, TuiMultiSelectExample5, TuiMultiSelectExample6, TuiMultiSelectExample7, TuiMultiSelectExample8, TuiMultiSelectExample9, demo_component/* TuiDocDemoComponent */.F, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, multi_select_component/* TuiMultiSelectComponent */.V, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, code_component/* TuiDocCodeComponent */.c],
    styles: [".content[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin-right:.75rem}"],
    changeDetection: 0
  });
  return ExampleTuiMultiSelectComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/multi-select/multi-select.module.ts






















let ExampleTuiMultiSelectModule = /*#__PURE__*/(() => {
  class ExampleTuiMultiSelectModule {}

  ExampleTuiMultiSelectModule.ɵfac = function ExampleTuiMultiSelectModule_Factory(t) {
    return new (t || ExampleTuiMultiSelectModule)();
  };

  ExampleTuiMultiSelectModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMultiSelectModule
  });
  ExampleTuiMultiSelectModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, scrolling/* ScrollingModule */.Cl, core.TuiScrollbarModule, kit.TuiMultiSelectModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, cdk.TuiLetModule, core.TuiDropdownModule, core.TuiHintModule, core.TuiTextfieldControllerModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiLabelModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMultiSelectComponent)), tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq]]
  });
  return ExampleTuiMultiSelectModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMultiSelectModule, {
    declarations: [ExampleTuiMultiSelectComponent, TuiMultiSelectExample1, TuiMultiSelectExample2, TuiMultiSelectExample3, TuiMultiSelectExample4, TuiMultiSelectExample5, TuiMultiSelectExample6, TuiMultiSelectExample7, TuiMultiSelectExample8, TuiMultiSelectExample9],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, scrolling/* ScrollingModule */.Cl, core.TuiScrollbarModule, kit.TuiMultiSelectModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, cdk.TuiLetModule, core.TuiDropdownModule, core.TuiHintModule, core.TuiTextfieldControllerModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, core.TuiLabelModule, router/* RouterModule */.Bz, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq],
    exports: [ExampleTuiMultiSelectComponent]
  });
})();

/***/ })

}]);