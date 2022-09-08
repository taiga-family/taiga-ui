"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46482],{

/***/ 46482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDataListModule": () => (/* binding */ ExampleTuiDataListModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 20 modules
var addon_commerce = __webpack_require__(55970);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.component.ts
var primitive_textfield_component = __webpack_require__(63060);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.directive.ts
var primitive_textfield_directive = __webpack_require__(62733);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/opt-group.directive.ts
var opt_group_directive = __webpack_require__(89786);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts + 1 modules
var let_directive = __webpack_require__(5723);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.component.ts
var multi_select_group_component = __webpack_require__(31363);
// EXTERNAL MODULE: ./projects/kit/components/multi-select/multi-select-group/multi-select-group.directive.ts
var multi_select_group_directive = __webpack_require__(20501);
// EXTERNAL MODULE: ./projects/cdk/pipes/filter/filter.pipe.ts
var filter_pipe = __webpack_require__(47305);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/4/custom-list/custom-list.component.ts
















function CustomListComponent_tui_opt_group_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r5.items);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.name, " only ");
  }
}

function CustomListComponent_tui_opt_group_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(2, " All ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, CustomListComponent_tui_opt_group_6_button_3_Template, 2, 2, "button", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r2.all);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.items);
  }
}

function CustomListComponent_ng_container_7_tui_opt_group_1_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", item_r11);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r11, " ");
  }
}

function CustomListComponent_ng_container_7_tui_opt_group_1_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(1, CustomListComponent_ng_container_7_tui_opt_group_1_tui_opt_group_1_button_1_Template, 2, 2, "button", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const filtered_r8 = fesm2015_core/* ɵɵnextContext */.oxw().tuiLet;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", filtered_r8);
  }
}

function CustomListComponent_ng_container_7_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(1, CustomListComponent_ng_container_7_tui_opt_group_1_tui_opt_group_1_Template, 2, 1, "tui-opt-group", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const filtered_r8 = ctx.tuiLet;
    const item_r6 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("label", item_r6.name);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", filtered_r8.length);
  }
}

function CustomListComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, CustomListComponent_ng_container_7_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 8);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFilter");
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", fesm2015_core/* ɵɵpipeBind3 */.Dn7(2, 1, item_r6.items, ctx_r3.filter, ctx_r3.value));
  }
}

let CustomListComponent = /*#__PURE__*/(() => {
  class CustomListComponent {
    constructor() {
      this.items = [];
      this.value = ``;
      this.all = cdk/* EMPTY_ARRAY */.LZ8;
      this.filter = cdk/* TUI_DEFAULT_MATCHER */.LQM;
    }

    onArrowDown(list, event) {
      list.onFocus(event, true);
    }

    onKeyDown(key, element) {
      if (element && (0,core/* tuiIsEditingKey */.kLy)(key)) {
        element.focus({
          preventScroll: true
        });
      }
    }

  }

  CustomListComponent.ɵfac = function CustomListComponent_Factory(t) {
    return new (t || CustomListComponent)();
  };

  CustomListComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: CustomListComponent,
    selectors: [["custom-list"]],
    inputs: {
      items: "items"
    },
    decls: 8,
    vars: 4,
    consts: [["tuiTextfieldIconLeft", "tuiIconSearchLarge", 1, "tui-space_all-2", 3, "tuiTextfieldLabelOutside", "value", "valueChange", "keydown.arrowDown.prevent"], ["input", ""], ["emptyContent", "No results found", 3, "keydown"], ["list", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], [3, "label", 4, "tuiLet"], [3, "label"], ["tuiMultiSelectGroup", "", 4, "ngIf"], ["tuiMultiSelectGroup", ""]],
    template: function CustomListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-primitive-textfield", 0, 1);
        fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function CustomListComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
          return ctx.value = $event;
        })("keydown.arrowDown.prevent", function CustomListComponent_Template_tui_primitive_textfield_keydown_arrowDown_prevent_0_listener($event) {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r14);

          const _r1 = fesm2015_core/* ɵɵreference */.MAs(5);

          return ctx.onArrowDown(_r1, $event);
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Search categories\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "hr");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-data-list", 2, 3);
        fesm2015_core/* ɵɵlistener */.NdJ("keydown", function CustomListComponent_Template_tui_data_list_keydown_4_listener($event) {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r14);

          const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

          return ctx.onKeyDown($event.key, _r0.nativeFocusableElement);
        });
        fesm2015_core/* ɵɵtemplate */.YNc(6, CustomListComponent_tui_opt_group_6_Template, 4, 2, "tui-opt-group", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(7, CustomListComponent_ng_container_7_Template, 3, 5, "ng-container", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", !ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
      }
    },
    directives: [primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, data_list_component/* TuiDataListComponent */.q, common/* NgIf */.O5, common/* NgForOf */.sg, opt_group_directive/* TuiOptGroupDirective */.R, option_component/* TuiOptionComponent */.v, let_directive/* TuiLetDirective */.L, multi_select_group_component/* TuiMultiSelectGroupComponent */.g, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q],
    pipes: [filter_pipe/* TuiFilterPipe */.S],
    encapsulation: 2,
    changeDetection: 0
  });
  return CustomListComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/4/index.ts







function TuiDataListExample4_custom_list_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "custom-list", 2);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.items);
  }
}

const INCOME = {
  name: `Income`,
  items: [`Donations`, `Product placement`, `Sponsorship`, `Found on the street`, `Unexpected inheritance`, `Investments`, `Color copier`]
};
const EXPENSES = {
  name: `Expenses`,
  items: [`Energy drinks`, `Coffee`, `Ramen`, `Bills`, `Back medicine`, `Warhammer 40000 figurines`]
};
let TuiDataListExample4 = /*#__PURE__*/(() => {
  class TuiDataListExample4 {
    constructor() {
      this.value = [];
      this.items = [INCOME, EXPENSES];

      this.identityMatcher = (items1, items2) => items1.length === items2.length && items1.every(item => items2.includes(item));

      this.valueContent = ({
        $implicit
      }) => {
        if (!$implicit.length) {
          return `All`;
        }

        const selected = this.items.find(({
          items
        }) => this.identityMatcher($implicit, items));
        return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
      };
    }

  }

  TuiDataListExample4.ɵfac = function TuiDataListExample4_Factory(t) {
    return new (t || TuiDataListExample4)();
  };

  TuiDataListExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample4,
    selectors: [["tui-data-list-example-4"]],
    decls: 3,
    vars: 3,
    consts: [[1, "control", 3, "identityMatcher", "valueContent", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiDataListExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-select", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDataListExample4_Template_tui_select_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Open-source budget ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiDataListExample4_custom_list_2_Template, 1, 1, "custom-list", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("identityMatcher", ctx.identityMatcher)("valueContent", ctx.valueContent)("ngModel", ctx.value);
      }
    },
    directives: [select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, CustomListComponent],
    styles: [".control[_ngcontent-%COMP%]{width:320px}"],
    changeDetection: 0
  });
  return TuiDataListExample4;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/1/index.ts











function TuiDataListExample1_ng_template_3_tui_opt_group_1_a_1_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 10);
  }
}

function TuiDataListExample1_ng_template_3_tui_opt_group_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "a", 7, 8);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample1_ng_template_3_tui_opt_group_1_a_1_tui_svg_3_Template, 1, 0, "tui-svg", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;

    const _r6 = fesm2015_core/* ɵɵreference */.MAs(1);

    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", item_r5.routerLink);
    fesm2015_core/* ɵɵattribute */.uIk("aria-checked", _r6.isActive);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5.label, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", _r6.isActive);
  }
}

function TuiDataListExample1_ng_template_3_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample1_ng_template_3_tui_opt_group_1_a_1_Template, 4, 4, "a", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("label", group_r3.label);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", group_r3.items);
  }
}

function TuiDataListExample1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample1_ng_template_3_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.groups);
  }
}

let TuiDataListExample1 = /*#__PURE__*/(() => {
  class TuiDataListExample1 {
    constructor() {
      this.arrow = kit/* TUI_ARROW */.SXC;
      this.groups = [{
        label: $localize`Components`,
        items: [{
          label: `Input`,
          routerLink: `/components/input`
        }, {
          label: `Select`,
          routerLink: `/components/select`
        }, {
          label: `DataList`,
          routerLink: `/components/data-list`
        }]
      }, {
        label: $localize`Styles`,
        items: [{
          label: $localize`Icons`,
          routerLink: `/icons`
        }, {
          label: $localize`Typography`,
          routerLink: `/typography`
        }]
      }, {
        label: ``,
        items: [{
          label: $localize`Changelog`,
          routerLink: `/changelog`
        }]
      }];
    }

  }

  TuiDataListExample1.ɵfac = function TuiDataListExample1_Factory(t) {
    return new (t || TuiDataListExample1)();
  };

  TuiDataListExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample1,
    selectors: [["tui-data-list-example-1"]],
    decls: 5,
    vars: 2,
    consts: [[3, "content"], ["tuiButton", "", "type", "button", 3, "iconRight"], ["content", ""], ["role", "menu"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["tuiOption", "", "role", "menuitemradio", "routerLinkActive", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["tuiOption", "", "role", "menuitemradio", "routerLinkActive", "", 3, "routerLink"], ["rla", "routerLinkActive"], ["src", "tuiIconCheckLarge", 4, "ngIf"], ["src", "tuiIconCheckLarge"]],
    template: function TuiDataListExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Menu ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample1_ng_template_3_Template, 2, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", ctx.arrow);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, button_component/* TuiButtonComponent */.v, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, opt_group_directive/* TuiOptGroupDirective */.R, option_component/* TuiOptionComponent */.v, router/* RouterLinkWithHref */.yS, router/* RouterLinkActive */.Od, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDataListExample1;
})();
// EXTERNAL MODULE: ./projects/kit/directives/data-list-dropdown-manager/data-list-dropdown-manager.directive.ts
var data_list_dropdown_manager_directive = __webpack_require__(94370);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position-sided.directive.ts
var dropdown_position_sided_directive = __webpack_require__(37606);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown.directive.ts
var dropdown_directive = __webpack_require__(26072);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-driver.directive.ts
var dropdown_driver_directive = __webpack_require__(9829);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-manual.directive.ts
var dropdown_manual_directive = __webpack_require__(7860);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/2/index.ts

















function TuiDataListExample2_ng_template_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDataListExample2_ng_template_3_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const item_r10 = restoredCtx.tuiLet;
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r11.selectOption(item_r10);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r10 = ctx.tuiLet;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r4.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r10, " ");
  }
}

function TuiDataListExample2_ng_template_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDataListExample2_ng_template_3_button_6_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r15);
      const item_r13 = restoredCtx.tuiLet;
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r14.selectOption(item_r13);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r13 = ctx.tuiLet;
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r5.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r13, " ");
  }
}

function TuiDataListExample2_ng_template_3_ng_template_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDataListExample2_ng_template_3_ng_template_7_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const burger_r17 = restoredCtx.$implicit;
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r18.selectOption(burger_r17);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const burger_r17 = ctx.$implicit;
    const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r16.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", burger_r17, " ");
  }
}

function TuiDataListExample2_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample2_ng_template_3_ng_template_7_button_1_Template, 2, 2, "button", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(3, " Nested menu ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const activeZone_r3 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;

    const _r8 = fesm2015_core/* ɵɵreference */.MAs(10);

    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r7.burgers);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r7.size)("tuiDropdownManual", false)("tuiDropdown", _r8);
  }
}

function TuiDataListExample2_ng_template_3_ng_template_9_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDataListExample2_ng_template_3_ng_template_9_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r24);
      const drink_r22 = restoredCtx.$implicit;
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r23.selectOption(drink_r22);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const drink_r22 = ctx.$implicit;
    const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r21.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", drink_r22, " ");
  }
}

function TuiDataListExample2_ng_template_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample2_ng_template_3_ng_template_9_button_1_Template, 2, 2, "button", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r9.drinks);
  }
}

function TuiDataListExample2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample2_ng_template_3_button_1_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(3, " Burgers ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(5, " Drinks ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDataListExample2_ng_template_3_button_6_Template, 2, 2, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(7, TuiDataListExample2_ng_template_3_ng_template_7_Template, 4, 5, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(9, TuiDataListExample2_ng_template_3_ng_template_9_Template, 2, 1, "ng-template", null, 8, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
  }

  if (rf & 2) {
    const activeZone_r3 = ctx.$implicit;

    const _r6 = fesm2015_core/* ɵɵreference */.MAs(8);

    const _r8 = fesm2015_core/* ɵɵreference */.MAs(10);

    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", "French Fries");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r2.size)("tuiDropdownManual", false)("tuiDropdown", _r6);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r2.size)("tuiDropdownManual", false)("tuiDropdown", _r8);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiLet", "Ice Cream");
  }
}

let TuiDataListExample2 = /*#__PURE__*/(() => {
  class TuiDataListExample2 {
    constructor(dialogService) {
      this.dialogService = dialogService;
      this.dropdownOpen = false;
      this.size = `s`;
      this.burgers = [`Classic`, `Cheeseburger`, `Royal Cheeseburger`];
      this.drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];
    }

    selectOption(item) {
      this.dropdownOpen = false;
      this.dialogService.open(`You selected ${item}`).subscribe();
    }

  }

  TuiDataListExample2.ɵfac = function TuiDataListExample2_Factory(t) {
    return new (t || TuiDataListExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core/* TuiDialogService */.ROA));
  };

  TuiDataListExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample2,
    selectors: [["tui-data-list-example-2"]],
    decls: 5,
    vars: 3,
    consts: [[3, "content", "open", "openChange"], ["dropdown", ""], ["tuiIconButton", "", "appearance", "flat", "icon", "tuiIconMoreVer", "type", "button", 3, "pseudoHover"], ["content", ""], ["tuiDataListDropdownManager", "", 3, "tuiActiveZoneParent"], ["tuiOption", "", 3, "size", "click", 4, "tuiLet"], ["tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", 3, "size", "tuiDropdownManual", "tuiDropdown"], ["burgersTmp", ""], ["drinksTmp", ""], ["tuiOption", "", 3, "size", "click"], ["tuiOption", "", 3, "size", "click", 4, "ngFor", "ngForOf"]],
    template: function TuiDataListExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0, 1);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiDataListExample2_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.dropdownOpen = $event;
        });
        fesm2015_core/* ɵɵelement */._UZ(2, "button", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample2_ng_template_3_Template, 11, 9, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r1)("open", ctx.dropdownOpen);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("pseudoHover", _r0.open || null);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, button_component/* TuiButtonComponent */.v, data_list_component/* TuiDataListComponent */.q, data_list_dropdown_manager_directive/* TuiDataListDropdownManagerDirective */.p, active_zone_directive/* TuiActiveZoneDirective */.e, let_directive/* TuiLetDirective */.L, option_component/* TuiOptionComponent */.v, dropdown_position_sided_directive/* TuiDropdownPositionSidedDirective */.C, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_manual_directive/* TuiDropdownManualDirective */.T, common/* NgForOf */.sg],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDataListExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/3/index.ts













function TuiDataListExample3_ng_template_3_button_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const burger_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", burger_r5);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", burger_r5, " ");
  }
}

function TuiDataListExample3_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const drink_r6 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("value", drink_r6);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", drink_r6, " ");
  }
}

function TuiDataListExample3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-opt-group", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDataListExample3_ng_template_3_Template_tui_opt_group_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.value = $event;
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-opt-group", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample3_ng_template_3_button_3_Template, 2, 2, "button", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-opt-group", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiDataListExample3_ng_template_3_button_5_Template, 2, 2, "button", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r2.value);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.burgers);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.drinks);
  }
}

let TuiDataListExample3 = /*#__PURE__*/(() => {
  class TuiDataListExample3 {
    constructor() {
      this.value = [];
      this.burgers = [`Hamburger`, `Cheeseburger`];
      this.drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];
      this.arrow = kit/* TUI_ARROW */.SXC;
    }

  }

  TuiDataListExample3.ɵfac = function TuiDataListExample3_Factory(t) {
    return new (t || TuiDataListExample3)();
  };

  TuiDataListExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample3,
    selectors: [["tui-data-list-example-3"]],
    decls: 7,
    vars: 5,
    consts: [[3, "tuiDropdownMaxHeight", "content"], ["dropdown", ""], ["tuiIconButton", "", "appearance", "flat", "type", "button", 3, "icon", "pseudoHover"], ["content", ""], ["tuiMultiSelectGroup", "", 3, "ngModel", "ngModelChange"], ["label", "Food"], ["tuiOption", "", "size", "l", 3, "value", 4, "ngFor", "ngForOf"], ["label", "Drinks"], ["tuiOption", "", "size", "l", 3, "value"]],
    template: function TuiDataListExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0, 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "button", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample3_ng_template_3_Template, 6, 3, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownMaxHeight", 500)("content", _r1);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("icon", ctx.arrow)("pseudoHover", _r0.open || null);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.value);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, data_list_component/* TuiDataListComponent */.q, opt_group_directive/* TuiOptGroupDirective */.R, multi_select_group_component/* TuiMultiSelectGroupComponent */.g, multi_select_group_directive/* TuiMultiSelectGroupDirective */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDataListExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/calendar/calendar.component.ts
var calendar_component = __webpack_require__(49746);
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.component.ts
var input_date_range_component = __webpack_require__(92483);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.directive.ts
var input_date_range_directive = __webpack_require__(48706);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/5/index.ts























function TuiDataListExample5_ng_template_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 15);
    fesm2015_core/* ɵɵtext */._uU(2, " RUB ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-data-list", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 16);
    fesm2015_core/* ɵɵtext */._uU(5, " Exchange Rates: ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const activeZone_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;

    const _r9 = fesm2015_core/* ɵɵreference */.MAs(16);

    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r4.moneyForm);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownManual", true)("tuiDropdown", _r9);
  }
}

function TuiDataListExample5_ng_template_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-calendar", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("mousedown.silent.prevent", function TuiDataListExample5_ng_template_3_ng_template_11_Template_tui_calendar_mousedown_silent_prevent_0_listener() {
      return 0;
    })("dayClick", function TuiDataListExample5_ng_template_3_ng_template_11_Template_tui_calendar_dayClick_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r15.onDayClick($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r6.dateValue);
  }
}

function TuiDataListExample5_ng_template_3_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 18);
    fesm2015_core/* ɵɵtext */._uU(2, " Email ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r8.testForm);
  }
}

function TuiDataListExample5_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDataListExample5_ng_template_3_ng_template_15_Template_tui_input_ngModelChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r17.dollar = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(3, "1 Rub = (X) Dollars");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDataListExample5_ng_template_3_ng_template_15_Template_tui_input_ngModelChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r19.euro = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(5, "1 Rub = (Y) Euros");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "ul", 21);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li", 22);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-money", 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "li", 22);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-money", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r10.dollar);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r10.euro);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r10.moneyValue / ctx_r10.dollar);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r10.moneyValue / ctx_r10.euro);
  }
}

function TuiDataListExample5_ng_template_3_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-range", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiDataListExample5_ng_template_3_ng_template_17_Template_tui_input_date_range_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r21);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r20.rangeValue = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Range ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r12.rangeValue);
  }
}

function TuiDataListExample5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 5);
    fesm2015_core/* ɵɵtext */._uU(2, " \uD83D\uDCB0 Money: ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 6);
    fesm2015_core/* ɵɵtext */._uU(4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 7);
    fesm2015_core/* ɵɵtext */._uU(6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 8);
    fesm2015_core/* ɵɵtext */._uU(8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(9, TuiDataListExample5_ng_template_3_ng_template_9_Template, 6, 4, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(11, TuiDataListExample5_ng_template_3_ng_template_11_Template, 1, 1, "ng-template", null, 10, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(13, TuiDataListExample5_ng_template_3_ng_template_13_Template, 3, 1, "ng-template", null, 11, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(15, TuiDataListExample5_ng_template_3_ng_template_15_Template, 11, 4, "ng-template", null, 12, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵtemplate */.YNc(17, TuiDataListExample5_ng_template_3_ng_template_17_Template, 2, 1, "ng-template", null, 13, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
  }

  if (rf & 2) {
    const activeZone_r2 = ctx.$implicit;

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(10);

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(12);

    const _r7 = fesm2015_core/* ɵɵreference */.MAs(14);

    const _r11 = fesm2015_core/* ɵɵreference */.MAs(18);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownManual", true)("tuiDropdown", _r3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownManual", false)("tuiDropdown", _r5);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \uD83D\uDCC5 Calendar: ", ctx_r1.dateValue, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownManual", false)("tuiDropdown", _r7);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \uD83D\uDCE7 Email: ", ctx_r1.testValue, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownManual", false)("tuiDropdown", _r11);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \u231B Range: ", ctx_r1.rangeValue, " ");
  }
}

let TuiDataListExample5 = /*#__PURE__*/(() => {
  class TuiDataListExample5 {
    constructor() {
      this.dropdownOpen = false;
      this.dateValue = new cdk/* TuiDay */.TU1(2020, 0, 1);
      this.euro = 87; // 1 euro = 87 rub

      this.dollar = 75; // 1 dollar = 75 rub

      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(`mail@mail.ru`)
      });
      this.moneyForm = new fesm2015_forms/* FormGroup */.cw({
        moneyValue: new fesm2015_forms/* FormControl */.NI(1000)
      });
      this.rangeValue = new cdk/* TuiDayRange */.VRe(cdk/* TuiDay.currentLocal */.TU1.currentLocal(), cdk/* TuiDay.currentLocal */.TU1.currentLocal().append({
        year: 1
      }));
    }

    get testValue() {
      var _a;

      return (_a = this.testForm.get(`testValue`)) === null || _a === void 0 ? void 0 : _a.value;
    }

    get moneyValue() {
      var _a;

      return Number((_a = this.moneyForm.get(`moneyValue`)) === null || _a === void 0 ? void 0 : _a.value) || 0;
    }

    onDayClick(day) {
      this.dateValue = day;
    }

  }

  TuiDataListExample5.ɵfac = function TuiDataListExample5_Factory(t) {
    return new (t || TuiDataListExample5)();
  };

  TuiDataListExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample5,
    selectors: [["tui-data-list-example-5"]],
    decls: 14,
    vars: 7,
    consts: [["tuiDropdownLimitWidth", "fixed", 1, "example", 3, "content", "open", "openChange"], ["tuiButton", "", "appearance", "outline", "icon", "tuiIconMoreVer", "type", "button", "size", "m", 1, "example"], ["content", ""], [1, "example"], ["tuiDataListDropdownManager", "", 3, "tuiActiveZoneParent"], ["tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", "tuiDropdownDirection", "top", 3, "tuiDropdownManual", "tuiDropdown"], ["automation-id", "tui-data-list-calendar-option", "tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", 3, "tuiDropdownManual", "tuiDropdown"], ["automation-id", "tui-data-list-email-option", "tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", 3, "tuiDropdownManual", "tuiDropdown"], ["automation-id", "tui-data-list-range-option", "tuiOption", "", "tuiDropdownSided", "", "tuiDropdownAlign", "right", "tuiDropdownDirection", "top", 3, "tuiDropdownManual", "tuiDropdown"], ["money", ""], ["calendar", ""], ["input", ""], ["currency", ""], ["range", ""], [1, "form", 3, "formGroup"], ["automation-id", "tui-data-money-input", "formControlName", "moneyValue"], ["tuiOption", "", "tuiDropdownSided", "", "tuiDropdownDirection", "bottom", "tuiDropdownAlign", "right", 3, "tuiDropdownManual", "tuiDropdown"], [3, "value", "mousedown.silent.prevent", "dayClick"], ["automation-id", "tui-data-list-email-field", "formControlName", "testValue"], ["tuiGroup", "", 1, "group"], [3, "ngModel", "ngModelChange"], [1, "exchange", "tui-list", "tui-list_large"], [1, "tui-list__item"], ["currency", "USD", 3, "value"], ["currency", "EUR", 3, "value"], ["automation-id", "tui-data-list-range-field", 1, "form", 3, "ngModel", "ngModelChange"]],
    template: function TuiDataListExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiDataListExample5_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.dropdownOpen = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " List of components ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample5_ng_template_3_Template, 19, 12, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
        fesm2015_core/* ɵɵtext */._uU(9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
        fesm2015_core/* ɵɵtext */._uU(11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
        fesm2015_core/* ɵɵtext */._uU(13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("open", ctx.dropdownOpen);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Email: ", ctx.testValue, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Chosen date: ", ctx.dateValue, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Range date: ", ctx.rangeValue, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate2 */.AsE("Dol - ", ctx.dollar, ", Eur - ", ctx.euro, "");
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, data_list_component/* TuiDataListComponent */.q, data_list_dropdown_manager_directive/* TuiDataListDropdownManagerDirective */.p, active_zone_directive/* TuiActiveZoneDirective */.e, option_component/* TuiOptionComponent */.v, dropdown_position_sided_directive/* TuiDropdownPositionSidedDirective */.C, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_manual_directive/* TuiDropdownManualDirective */.T, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, calendar_component/* TuiCalendarComponent */.a, group_directive/* TuiGroupDirective */.g, fesm2015_forms/* NgModel */.On, money_component/* TuiMoneyComponent */.o, input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d],
    styles: [".example[_ngcontent-%COMP%]{margin-bottom:.5rem;min-width:20.25rem}.form[_ngcontent-%COMP%]{min-width:300px;overflow:hidden}.exchange[_ngcontent-%COMP%]{margin:25px}.group[_ngcontent-%COMP%]{max-width:30.25rem}"],
    changeDetection: 0
  });
  return TuiDataListExample5;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/examples/6/index.ts











function TuiDataListExample6_ng_template_3_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDataListExample6_ng_template_3_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r6.open = false;
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5, " ");
  }
}

function TuiDataListExample6_ng_template_3_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample6_ng_template_3_tui_opt_group_1_button_1_Template, 2, 1, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("label", group_r3.label);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", group_r3.items);
  }
}

function TuiDataListExample6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiDataListExample6_ng_template_3_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.groups);
  }
}

let TuiDataListExample6 = /*#__PURE__*/(() => {
  class TuiDataListExample6 {
    constructor(isMobile) {
      this.isMobile = isMobile;
      this.open = false;
      this.arrow = kit/* TUI_ARROW */.SXC;
      this.groups = [{
        label: `Advantages of Taiga UI`,
        items: [`🧩 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.`, `🧙 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.`, `🦋 Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.`, `🛠 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.`, `📦 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.`, `🏗 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.`]
      }, {
        label: `Well-engineered Taiga UI components`,
        items: [`Calendar`, `Dialog`, `ComboBox`, `Select`]
      }];
    }

  }

  TuiDataListExample6.ɵfac = function TuiDataListExample6_Factory(t) {
    return new (t || TuiDataListExample6)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk/* TUI_IS_MOBILE */.fLQ));
  };

  TuiDataListExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDataListExample6,
    selectors: [["tui-data-list-example-6"]],
    decls: 5,
    vars: 5,
    consts: [["tuiDropdownAlign", "left", 3, "tuiDropdownLimitWidth", "tuiDropdownMaxHeight", "content", "open", "openChange"], ["tuiButton", "", "appearance", "flat", "type", "button", 3, "iconRight"], ["content", ""], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["tuiOption", "", "class", "option", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 1, "option", 3, "click"]],
    template: function TuiDataListExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiDataListExample6_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Select why you use Taiga UI ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiDataListExample6_ng_template_3_Template, 2, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownLimitWidth", ctx.isMobile ? "fixed" : "min")("tuiDropdownMaxHeight", 700)("content", _r0)("open", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", ctx.arrow);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, opt_group_directive/* TuiOptGroupDirective */.R, option_component/* TuiOptionComponent */.v],
    styles: [".option[_ngcontent-%COMP%]{white-space:normal}"],
    changeDetection: 0
  });
  return TuiDataListExample6;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/data-list.component.ts















function ExampleTuiDataListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-data-list-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-notification", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-data-list-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-notification", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 8);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-data-list-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-notification", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(17, 10);
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-data-list-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-notification", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(22, 12);
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-data-list-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-data-list-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleTuiDataListComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiDataListComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 19);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "em");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiDataListComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiDataListComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 21);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiDataListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
    fesm2015_core/* ɵɵtext */._uU(1, "DataList");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDataListComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiDataListComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "h2");
    fesm2015_core/* ɵɵtext */._uU(6, "OptGroup");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiDataListComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "h2");
    fesm2015_core/* ɵɵtext */._uU(10, "Option");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiDataListComponent_ng_template_2_ng_template_12_Template, 3, 0, "ng-template", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDataListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 26);
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

let ExampleTuiDataListComponent = /*#__PURE__*/(() => {
  class ExampleTuiDataListComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 80708).then(__webpack_require__.t.bind(__webpack_require__, 80708, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 38912).then(__webpack_require__.t.bind(__webpack_require__, 38912, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 68853).then(__webpack_require__.t.bind(__webpack_require__, 68853, 17)),
        HTML: __webpack_require__.e(/* import() */ 6225).then(__webpack_require__.t.bind(__webpack_require__, 6225, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 62143).then(__webpack_require__.t.bind(__webpack_require__, 62143, 17)),
        HTML: __webpack_require__.e(/* import() */ 95928).then(__webpack_require__.t.bind(__webpack_require__, 95928, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 32985).then(__webpack_require__.t.bind(__webpack_require__, 32985, 17)),
        HTML: __webpack_require__.e(/* import() */ 43035).then(__webpack_require__.t.bind(__webpack_require__, 43035, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 22352).then(__webpack_require__.t.bind(__webpack_require__, 22352, 17)),
        HTML: __webpack_require__.e(/* import() */ 26450).then(__webpack_require__.t.bind(__webpack_require__, 26450, 17)),
        'custom-list.component.ts': __webpack_require__.e(/* import() */ 47209).then(__webpack_require__.t.bind(__webpack_require__, 47209, 17)),
        'custom-list.template.html': __webpack_require__.e(/* import() */ 22657).then(__webpack_require__.t.bind(__webpack_require__, 22657, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 8028).then(__webpack_require__.t.bind(__webpack_require__, 8028, 17)),
        HTML: __webpack_require__.e(/* import() */ 77340).then(__webpack_require__.t.bind(__webpack_require__, 77340, 17)),
        LESS: __webpack_require__.e(/* import() */ 72730).then(__webpack_require__.t.bind(__webpack_require__, 72730, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 12510).then(__webpack_require__.t.bind(__webpack_require__, 12510, 17)),
        HTML: __webpack_require__.e(/* import() */ 62995).then(__webpack_require__.t.bind(__webpack_require__, 62995, 17))
      };
    }

  }

  ExampleTuiDataListComponent.ɵfac = function ExampleTuiDataListComponent_Factory(t) {
    return new (t || ExampleTuiDataListComponent)();
  };

  ExampleTuiDataListComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDataListComponent,
    selectors: [["example-tui-data-list"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7885675783778291482$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}DataList{$closeTagCode} allows to make lists or menus ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7885675783778291482$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟f9d15c776cab9b795d1216098674f3a131512347␟7885675783778291482:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:DataList${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to make lists or menus `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7565716024468232322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__3 = goog.getMsg("Links");
        i18n_2 = MSG_EXTERNAL_7565716024468232322$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8571278609349877603$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiArrowModule{$closeTagCode} if you need a rotated arrow ", {
          "startTagCode": "\uFFFD#8\uFFFD",
          "closeTagCode": "\uFFFD/#8\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_8571278609349877603$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟33c95483482ed8be69df5fcc5fa64b529f061437␟8571278609349877603: Import ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:TuiArrowModule${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: if you need a rotated arrow `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1033431736972256177$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__7 = goog.getMsg("Submenu");
        i18n_6 = MSG_EXTERNAL_1033431736972256177$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365␟1033431736972256177:Submenu`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_778881707317384072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__9 = goog.getMsg(" Use {$startTagCode}TuiDataListDropdownManagerModule{$closeTagCode} for nested menus ", {
          "startTagCode": "\uFFFD#13\uFFFD",
          "closeTagCode": "\uFFFD/#13\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_778881707317384072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: for nested menus `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8033471336283613576$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiMultiSelectModule{$closeTagCode}", {
          "startTagCode": "\uFFFD#18\uFFFD",
          "closeTagCode": "\uFFFD/#18\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8033471336283613576$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟992f9aba2dd9e12cab5fdf16b03c54dae8f9703d␟8033471336283613576: Import ${"\uFFFD#18\uFFFD"}:START_TAG_CODE:TuiMultiSelectModule${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__13 = goog.getMsg("Complex");
        i18n_12 = MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_778881707317384072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__15 = goog.getMsg(" Use {$startTagCode}TuiDataListDropdownManagerModule{$closeTagCode} for nested menus ", {
          "startTagCode": "\uFFFD#23\uFFFD",
          "closeTagCode": "\uFFFD/#23\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_778881707317384072$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\uFFFD#23\uFFFD"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE: for nested menus `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8684948632137613907$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__17 = goog.getMsg("Options with long text");
        i18n_16 = MSG_EXTERNAL_8684948632137613907$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟7d11463d87d1a3fe3dd9ad14fb82af39cc356bc4␟8684948632137613907:Options with long text`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_314511360780648423$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___19 = goog.getMsg(" Content to display when there are no options inside ");
        i18n_18 = MSG_EXTERNAL_314511360780648423$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟1396678e9343696e0ba4990b23fd3107ffaf1504␟314511360780648423: Content to display when there are no options inside `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6904648380497078003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___21 = goog.getMsg(" Native accessability role \u2014 {$startTagCode}listbox{$closeTagCode}{$startEmphasisedText}(default){$closeEmphasisedText} or {$startTagCode}menu{$closeTagCode} for common usage ", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]",
          "startEmphasisedText": "\uFFFD#2\uFFFD",
          "closeEmphasisedText": "\uFFFD/#2\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_6904648380497078003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟f57d8b200294d6e6e0b0f1fb7efe62ed640add20␟6904648380497078003: Native accessability role — ${"[\uFFFD#1\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:listbox${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD#2\uFFFD"}:START_EMPHASISED_TEXT:(default)${"\uFFFD/#2\uFFFD"}:CLOSE_EMPHASISED_TEXT: or ${"[\uFFFD#1\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:menu${"[\uFFFD/#1\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: for common usage `;
      }

      i18n_20 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_20);
      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2059095426405918218$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___23 = goog.getMsg(" Group label ");
        i18n_22 = MSG_EXTERNAL_2059095426405918218$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟8c918c45e9c54837c94f25f61a68988a3b272035␟2059095426405918218: Group label `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1098780179882136171$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___25 = goog.getMsg(" Native accessability role. Set {$startTagCode}aria-checked{$closeTagCode} for all roles except {$startTagCode}menuitem{$closeTagCode} (see sample) ", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"
        });
        i18n_24 = MSG_EXTERNAL_1098780179882136171$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟1d0af9e8a86558c15856025e01265669cfcd5d2f␟1098780179882136171: Native accessability role. Set ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:aria-checked${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: for all roles except ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:menuitem${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: (see sample) `;
      }

      i18n_24 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_24);
      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_944971838556589360$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiDataListModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_944971838556589360$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟5328da1720bf2dec4cb435be14f74ff37d2609ef␟944971838556589360: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDataListModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
        i18n_28 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_DATA_LIST_DATA_LIST_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "DataList", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "custom", "heading", "Custom list", 3, "content"], ["id", "links", "heading", i18n_2, 3, "content"], [1, "tui-space_bottom-3"], i18n_4, ["id", "submenu", "heading", i18n_6, 3, "content"], i18n_8, ["id", "control", "heading", "Form control", 3, "content"], i18n_10, ["id", "complex", "heading", i18n_12, 3, "content"], i18n_14, ["id", "long-text-options", "heading", i18n_16, 3, "content"], ["documentationPropertyName", "emptyContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "role", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDataListRole"], ["documentationPropertyName", "label", "documentationPropertyMode", "input", "documentationPropertyType", "string"], ["documentationPropertyName", "role", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOptionRole"], i18n_18, i18n_20, i18n_22, i18n_24, [1, "b-demo-steps"], i18n_26, ["filename", "myComponent.module.ts", 3, "code"], i18n_28, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDataListComponent_ng_template_1_Template, 27, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDataListComponent_ng_template_2_Template, 13, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDataListComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiDataListExample4, notification_component/* TuiNotificationComponent */.L, TuiDataListExample1, TuiDataListExample2, TuiDataListExample3, TuiDataListExample5, TuiDataListExample6, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiDataListComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/data-list/data-list.module.ts


















let ExampleTuiDataListModule = /*#__PURE__*/(() => {
  class ExampleTuiDataListModule {}

  ExampleTuiDataListModule.ɵfac = function ExampleTuiDataListModule_Factory(t) {
    return new (t || ExampleTuiDataListModule)();
  };

  ExampleTuiDataListModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDataListModule
  });
  ExampleTuiDataListModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, cdk/* TuiLetModule */.WDk, kit/* TuiMultiSelectModule */.lmA, core/* TuiPrimitiveTextfieldModule */.KWI, kit/* TuiSelectModule */.Jyo, core/* TuiTextfieldControllerModule */.cnw, kit/* TuiArrowModule */.MtS, core/* TuiNotificationModule */.HiG, core/* TuiDataListModule */.pcV, kit/* TuiDataListDropdownManagerModule */.JwZ, core/* TuiSvgModule */.EIu, core/* TuiHostedDropdownModule */.jhF, core/* TuiButtonModule */.fNO, core/* TuiDropdownModule */.dpK, cdk/* TuiActiveZoneModule */.Ah6, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDataListComponent)), cdk/* TuiFilterPipeModule */.pLW, core/* TuiCalendarModule */.vVq, kit/* TuiInputModule */.QfL, kit/* TuiInputDateRangeModule */.sR_, addon_commerce/* TuiMoneyModule */.DC, core/* TuiGroupModule */.n6B]]
  });
  return ExampleTuiDataListModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDataListModule, {
    declarations: [ExampleTuiDataListComponent, CustomListComponent, TuiDataListExample1, TuiDataListExample2, TuiDataListExample3, TuiDataListExample4, TuiDataListExample5, TuiDataListExample6],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, cdk/* TuiLetModule */.WDk, kit/* TuiMultiSelectModule */.lmA, core/* TuiPrimitiveTextfieldModule */.KWI, kit/* TuiSelectModule */.Jyo, core/* TuiTextfieldControllerModule */.cnw, kit/* TuiArrowModule */.MtS, core/* TuiNotificationModule */.HiG, core/* TuiDataListModule */.pcV, kit/* TuiDataListDropdownManagerModule */.JwZ, core/* TuiSvgModule */.EIu, core/* TuiHostedDropdownModule */.jhF, core/* TuiButtonModule */.fNO, core/* TuiDropdownModule */.dpK, cdk/* TuiActiveZoneModule */.Ah6, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, cdk/* TuiFilterPipeModule */.pLW, core/* TuiCalendarModule */.vVq, kit/* TuiInputModule */.QfL, kit/* TuiInputDateRangeModule */.sR_, addon_commerce/* TuiMoneyModule */.DC, core/* TuiGroupModule */.n6B],
    exports: [ExampleTuiDataListComponent]
  });
})();

/***/ })

}]);