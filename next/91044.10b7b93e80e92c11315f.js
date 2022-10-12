"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91044],{

/***/ 91044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiAccordionModule": () => (/* binding */ ExampleTuiAccordionModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/examples/1/index.ts





function TuiAccordionExample1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
  }
}

function TuiAccordionExample1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", null, 2);
    fesm2015_core/* ɵɵtext */._uU(2, " Basic elements needed to develop components, directives and more using Taiga UI design system ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiAccordionExample1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " The main set of components used to build Taiga UI based Angular applications ");
  }
}

let TuiAccordionExample1 = /*#__PURE__*/(() => {
  class TuiAccordionExample1 {}

  TuiAccordionExample1.ɵfac = function TuiAccordionExample1_Factory(t) {
    return new (t || TuiAccordionExample1)();
  };

  TuiAccordionExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAccordionExample1,
    selectors: [["tui-accordion-example-1"]],
    decls: 10,
    vars: 0,
    consts: [[1, "container"], ["tuiAccordionItemContent", ""], ["content", ""]],
    template: function TuiAccordionExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion-item");
        fesm2015_core/* ɵɵtext */._uU(2, " Taiga UI cdk ");
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiAccordionExample1_ng_template_3_Template, 1, 0, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-accordion-item");
        fesm2015_core/* ɵɵtext */._uU(5, " Taiga UI core ");
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiAccordionExample1_ng_template_6_Template, 3, 0, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-accordion-item");
        fesm2015_core/* ɵɵtext */._uU(8, " Taiga UI kit ");
        fesm2015_core/* ɵɵtemplate */.YNc(9, TuiAccordionExample1_ng_template_9_Template, 1, 0, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d],
    styles: [".container[_ngcontent-%COMP%]{max-width:37.5rem}"],
    changeDetection: 0
  });
  return TuiAccordionExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/examples/2/index.ts


















function TuiAccordionExample2_tui_accordion_0_ng_template_15_tui_data_list_wrapper_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 24);
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r5.accounts);
  }
}

function TuiAccordionExample2_tui_accordion_0_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3", 15);
    fesm2015_core/* ɵɵtext */._uU(1, "Payment form");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 17);
    fesm2015_core/* ɵɵtext */._uU(4, " Your name ");
    fesm2015_core/* ɵɵelement */._UZ(5, "input", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-select", 19);
    fesm2015_core/* ɵɵtext */._uU(7, " Choose an account ");
    fesm2015_core/* ɵɵtemplate */.YNc(8, TuiAccordionExample2_tui_accordion_0_ng_template_15_tui_data_list_wrapper_8_Template, 1, 1, "tui-data-list-wrapper", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 21);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 22);
    fesm2015_core/* ɵɵtext */._uU(11, " Send ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "button", 23);
    fesm2015_core/* ɵɵtext */._uU(13, " Cancel ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r2.testForm);
  }
}

function TuiAccordionExample2_tui_accordion_0_ng_template_30_tui_data_list_wrapper_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 24);
  }

  if (rf & 2) {
    const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r6.accounts);
  }
}

function TuiAccordionExample2_tui_accordion_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3", 15);
    fesm2015_core/* ɵɵtext */._uU(1, "Payment form");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 17);
    fesm2015_core/* ɵɵtext */._uU(4, " Your name ");
    fesm2015_core/* ɵɵelement */._UZ(5, "input", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-select", 19);
    fesm2015_core/* ɵɵtext */._uU(7, " Choose an account ");
    fesm2015_core/* ɵɵtemplate */.YNc(8, TuiAccordionExample2_tui_accordion_0_ng_template_30_tui_data_list_wrapper_8_Template, 1, 1, "tui-data-list-wrapper", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 21);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 22);
    fesm2015_core/* ɵɵtext */._uU(11, " Send ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "button", 23);
    fesm2015_core/* ɵɵtext */._uU(13, " Cancel ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.testForm);
  }
}

function TuiAccordionExample2_tui_accordion_0_ng_template_45_tui_data_list_wrapper_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 24);
  }

  if (rf & 2) {
    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r7.accounts);
  }
}

function TuiAccordionExample2_tui_accordion_0_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3", 15);
    fesm2015_core/* ɵɵtext */._uU(1, "Payment form");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input", 17);
    fesm2015_core/* ɵɵtext */._uU(4, " Your name ");
    fesm2015_core/* ɵɵelement */._UZ(5, "input", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-select", 19);
    fesm2015_core/* ɵɵtext */._uU(7, " Choose an account ");
    fesm2015_core/* ɵɵtemplate */.YNc(8, TuiAccordionExample2_tui_accordion_0_ng_template_45_tui_data_list_wrapper_8_Template, 1, 1, "tui-data-list-wrapper", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 21);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 22);
    fesm2015_core/* ɵɵtext */._uU(11, " Send ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "button", 23);
    fesm2015_core/* ɵɵtext */._uU(13, " Cancel ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r4.testForm);
  }
}

function TuiAccordionExample2_tui_accordion_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion", 1);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion-item", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(4, " 4 ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 5);
    fesm2015_core/* ɵɵtext */._uU(6, "May");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 6);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-svg", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 8);
    fesm2015_core/* ɵɵtext */._uU(10, "Get your money");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 9);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-money", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 11);
    fesm2015_core/* ɵɵtext */._uU(14, "Waiting for approve");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(15, TuiAccordionExample2_tui_accordion_0_ng_template_15_Template, 14, 1, "ng-template", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-accordion-item", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(19, " 5 ");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "div", 5);
    fesm2015_core/* ɵɵtext */._uU(21, "May");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "div", 6);
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-svg", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "div", 8);
    fesm2015_core/* ɵɵtext */._uU(25, "Get your money back");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "div", 9);
    fesm2015_core/* ɵɵelement */._UZ(27, "tui-money", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "div", 13);
    fesm2015_core/* ɵɵtext */._uU(29, "Approved");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(30, TuiAccordionExample2_tui_accordion_0_ng_template_30_Template, 14, 1, "ng-template", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "tui-accordion-item", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "div", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "div", 4);
    fesm2015_core/* ɵɵtext */._uU(34, " 6 ");
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "div", 5);
    fesm2015_core/* ɵɵtext */._uU(36, "May");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "div", 6);
    fesm2015_core/* ɵɵelement */._UZ(38, "tui-svg", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "div", 8);
    fesm2015_core/* ɵɵtext */._uU(40, "Get your neighbor's money");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "div", 9);
    fesm2015_core/* ɵɵelement */._UZ(42, "tui-money", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "div", 14);
    fesm2015_core/* ɵɵtext */._uU(44, "Declined");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(45, TuiAccordionExample2_tui_accordion_0_ng_template_45_Template, 14, 1, "ng-template", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const lazySvg_r1 = ctx.ngIf;
    fesm2015_core/* ɵɵproperty */.Q6J("rounded", false);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("showArrow", false);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 23000);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("showArrow", false);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 23000);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("showArrow", false);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 23000);
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

let TuiAccordionExample2 = /*#__PURE__*/(() => {
  class TuiAccordionExample2 {
    constructor() {
      this.accounts = [new Account(`Rubles`, 500), new Account(`Dollar`, 237), new Account(`Euro`, 100)];
      this.svgIcons = {
        rubles: __webpack_require__.e(/* import() */ 14399).then(__webpack_require__.t.bind(__webpack_require__, 14399, 17))
      };
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        name: new fesm2015_forms/* FormControl */.NI(``),
        accounts: new fesm2015_forms/* FormControl */.NI(this.accounts[0])
      });
    }

  }

  TuiAccordionExample2.ɵfac = function TuiAccordionExample2_Factory(t) {
    return new (t || TuiAccordionExample2)();
  };

  TuiAccordionExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAccordionExample2,
    selectors: [["tui-accordion-example-2"]],
    decls: 2,
    vars: 3,
    consts: [["class", "container", 3, "rounded", 4, "ngIf"], [1, "container", 3, "rounded"], ["borders", "top-bottom", 3, "showArrow"], [1, "operation-header"], [1, "operation-date"], [1, "operation-month"], [1, "operation-pic"], [1, "operation-icon", 3, "src"], [1, "operation-title"], [1, "operation-info"], [1, "operation-amount", 3, "value"], [1, "operation-status"], ["tuiAccordionItemContent", ""], [1, "operation-status", "operation-status_success"], [1, "operation-status", "operation-status_error"], [1, "form-title"], [1, "operation-form", 3, "formGroup"], ["formControlName", "name", 1, "input"], ["tuiTextfield", "", "placeholder", "Roman Sedov"], ["formControlName", "accounts", 1, "input"], [3, "items", 4, "tuiDataList"], [1, "buttons"], ["tuiButton", "", "type", "submit", "size", "l", 1, "tui-space_right-2"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l"], [3, "items"]],
    template: function TuiAccordionExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiAccordionExample2_tui_accordion_0_Template, 46, 10, "tui-accordion", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.svgIcons.rubles));
      }
    },
    directives: [common/* NgIf */.O5, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, svg_component/* TuiSvgComponent */.P, money_component/* TuiMoneyComponent */.o, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, data_list_directive/* TuiDataListDirective */.g, button_component/* TuiButtonComponent */.v, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".container[_ngcontent-%COMP%]{max-width:46.875rem}.operation-header[_ngcontent-%COMP%]{font:var(--tui-font-text-l);display:flex;align-items:center}.operation-date[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);text-align:center}.operation-date[_ngcontent-%COMP%], .operation-info[_ngcontent-%COMP%]{color:var(--tui-text-02)}.operation-month[_ngcontent-%COMP%], .operation-status[_ngcontent-%COMP%]{font:var(--tui-font-text-s)}.operation-pic[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-shrink:0;margin:0 1.5rem;background:var(--tui-secondary-active);border-radius:100%;width:3rem;height:3rem;color:var(--tui-text-03)}.operation-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:1.5rem;flex-grow:1}.operation-info[_ngcontent-%COMP%]{text-align:right}.operation-status_success[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.operation-status_error[_ngcontent-%COMP%]{color:var(--tui-error-fill)}.form-title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:0 0 1.25rem}.input[_ngcontent-%COMP%]{max-width:28.75rem;margin-bottom:1.25rem}.buttons[_ngcontent-%COMP%]{display:flex}"],
    changeDetection: 0
  });
  return TuiAccordionExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/examples/3/index.ts




function TuiAccordionExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
  }
}

let TuiAccordionExample3 = /*#__PURE__*/(() => {
  class TuiAccordionExample3 {}

  TuiAccordionExample3.ɵfac = function TuiAccordionExample3_Factory(t) {
    return new (t || TuiAccordionExample3)();
  };

  TuiAccordionExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAccordionExample3,
    selectors: [["tui-accordion-example-3"]],
    decls: 3,
    vars: 0,
    consts: [[1, "container"], ["tuiAccordionItemContent", ""]],
    template: function TuiAccordionExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion-item", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Taiga UI cdk ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiAccordionExample3_ng_template_2_Template, 1, 0, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d],
    styles: [".container[_ngcontent-%COMP%]{max-width:37.5rem}"],
    changeDetection: 0
  });
  return TuiAccordionExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/accordion/accordion-item/accordion-item-eager-content.directive.ts
var accordion_item_eager_content_directive = __webpack_require__(68218);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/examples/4/index.ts





function TuiAccordionExample4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "I'm lazy content");
  }
}

let TuiAccordionExample4 = /*#__PURE__*/(() => {
  class TuiAccordionExample4 {}

  TuiAccordionExample4.ɵfac = function TuiAccordionExample4_Factory(t) {
    return new (t || TuiAccordionExample4)();
  };

  TuiAccordionExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAccordionExample4,
    selectors: [["tui-accordion-example-4"]],
    decls: 7,
    vars: 0,
    consts: [[1, "container"], ["tuiAccordionItemContent", ""]],
    template: function TuiAccordionExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-accordion-item", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Taiga UI lazy ");
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiAccordionExample4_ng_template_2_Template, 1, 0, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-accordion-item", 0);
        fesm2015_core/* ɵɵtext */._uU(4, " Taiga UI eager ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 1);
        fesm2015_core/* ɵɵtext */._uU(6, "I'm eager content");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, accordion_item_eager_content_directive/* TuiAccordionItemEagerContentDirective */.c],
    styles: [".container[_ngcontent-%COMP%]{max-width:37.5rem}"],
    changeDetection: 0
  });
  return TuiAccordionExample4;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/accordion.component.ts
















const _c0 = ["content"];

function ExampleTuiAccordionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-accordion-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-accordion-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-accordion-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-accordion-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", null, 14);
    fesm2015_core/* ɵɵtext */._uU(2, " Basic elements needed to develop components, directives and more using Taiga UI design system ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_1_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r10.closeOthers = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_2_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r12.rounded = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r5.closeOthers);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r5.rounded);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 27);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 33);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 34);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_1_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r21.async = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_2_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r23.borders = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_3_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r24.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_4_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r25.noPadding = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_5_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r26.disableHover = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_6_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r27.onOpenChange($event);
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_7_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r28.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_8_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r29.showArrow = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.async);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r6.bordersVariants)("documentationPropertyValue", ctx_r6.borders);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.noPadding);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.disableHover);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.open);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r6.sizeVariants)("documentationPropertyValue", ctx_r6.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r6.showArrow);
  }
}

function ExampleTuiAccordionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-accordion", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-accordion-item", 9);
    fesm2015_core/* ɵɵtext */._uU(3, " Taiga UI cdk ");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiAccordionComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-accordion-item", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("openChange", function ExampleTuiAccordionComponent_ng_template_2_Template_tui_accordion_item_openChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r31);
      const ctx_r30 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r30.onOpenChange($event);
    });
    fesm2015_core/* ɵɵtext */._uU(6, " Taiga UI core ");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiAccordionComponent_ng_template_2_ng_template_7_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-accordion", 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-accordion-item", 13);
    fesm2015_core/* ɵɵtext */._uU(10, " TuiAccordionComponent ");
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template, 3, 2, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-accordion-item");
    fesm2015_core/* ɵɵtext */._uU(13, " TuiAccordionItemComponent ");
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template, 9, 10, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("closeOthers", ctx_r1.closeOthers)("rounded", ctx_r1.rounded);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("borders", ctx_r1.borders)("disabled", ctx_r1.disabled)("noPadding", ctx_r1.noPadding)("size", ctx_r1.size)("showArrow", ctx_r1.showArrow)("disableHover", ctx_r1.disableHover);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("borders", ctx_r1.borders)("disabled", ctx_r1.disabled)("noPadding", ctx_r1.noPadding)("size", ctx_r1.size)("showArrow", ctx_r1.showArrow)("disableHover", ctx_r1.disableHover)("async", ctx_r1.async)("open", ctx_r1.open);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("closeOthers", false);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("open", true);
  }
}

function ExampleTuiAccordionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 35);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(2, 36);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-doc-code", 37);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 38);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-doc-code", 39);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiAccordionComponent = /*#__PURE__*/(() => {
  class ExampleTuiAccordionComponent {
    constructor() {
      this.async = false;
      this.closeOthers = true;
      this.disabled = false;
      this.noPadding = false;
      this.open = false;
      this.rounded = true;
      this.showArrow = true;
      this.disableHover = false;
      this.exampleModule = __webpack_require__.e(/* import() */ 69303).then(__webpack_require__.t.bind(__webpack_require__, 99804, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 22085).then(__webpack_require__.t.bind(__webpack_require__, 22085, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 92178).then(__webpack_require__.t.bind(__webpack_require__, 92178, 17)),
        HTML: __webpack_require__.e(/* import() */ 72297).then(__webpack_require__.t.bind(__webpack_require__, 72297, 17)),
        LESS: __webpack_require__.e(/* import() */ 4628).then(__webpack_require__.t.bind(__webpack_require__, 4628, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 68675).then(__webpack_require__.t.bind(__webpack_require__, 68675, 17)),
        HTML: __webpack_require__.e(/* import() */ 35602).then(__webpack_require__.t.bind(__webpack_require__, 35602, 17)),
        LESS: __webpack_require__.e(/* import() */ 71448).then(__webpack_require__.t.bind(__webpack_require__, 71448, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 5859).then(__webpack_require__.t.bind(__webpack_require__, 5859, 17)),
        HTML: __webpack_require__.e(/* import() */ 36934).then(__webpack_require__.t.bind(__webpack_require__, 36934, 17)),
        LESS: __webpack_require__.e(/* import() */ 92456).then(__webpack_require__.t.bind(__webpack_require__, 92456, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 75929).then(__webpack_require__.t.bind(__webpack_require__, 75929, 17)),
        HTML: __webpack_require__.e(/* import() */ 14347).then(__webpack_require__.t.bind(__webpack_require__, 14347, 17)),
        LESS: __webpack_require__.e(/* import() */ 77763).then(__webpack_require__.t.bind(__webpack_require__, 77763, 17))
      };
      this.bordersVariants = [`all`, `top-bottom`];
      this.borders = this.bordersVariants[0];
      this.sizeVariants = [`s`, `m`];
      this.size = this.sizeVariants[1];
    }

    onOpenChange(open) {
      this.open = open;

      if (!this.async || !open) {
        return;
      }

      setTimeout(() => {
        const event = new CustomEvent(core.TUI_EXPAND_LOADED, {
          bubbles: true
        });

        if (this.content) {
          this.content.nativeElement.dispatchEvent(event);
        }
      }, 3000);
    }

  }

  ExampleTuiAccordionComponent.ɵfac = function ExampleTuiAccordionComponent_Factory(t) {
    return new (t || ExampleTuiAccordionComponent)();
  };

  ExampleTuiAccordionComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiAccordionComponent,
    selectors: [["example-accordion"]],
    viewQuery: function ExampleTuiAccordionComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.content = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2792641335962167728$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__2 = goog.getMsg("An element that allows to show and hide content in sections");
        i18n_1 = MSG_EXTERNAL_2792641335962167728$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟4cc90c6d3ea5db2e013b136be35f02de111500fa␟2792641335962167728:An element that allows to show and hide content in sections`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1228742900437480485$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__4 = goog.getMsg("Only one section of accordion can be opened by default");
        i18n_3 = MSG_EXTERNAL_1228742900437480485$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟5520bb7e6c8c7e23e7dd8f6c3ded4561db0874bc␟1228742900437480485:Only one section of accordion can be opened by default`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__6 = goog.getMsg("Basic");
        i18n_5 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9103653540782430214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__8 = goog.getMsg("with custom design");
        i18n_7 = MSG_EXTERNAL_9103653540782430214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟1ce49c32e6f22478794675bdec4de87d13585015␟9103653540782430214:with custom design`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3790244074908877572$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__10 = goog.getMsg("alone");
        i18n_9 = MSG_EXTERNAL_3790244074908877572$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟419cfdcbd1bd84eea7e9f6dd269b30d29453085b␟3790244074908877572:alone`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3762343538857855737$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__12 = goog.getMsg("Eager and Lazy content");
        i18n_11 = MSG_EXTERNAL_3762343538857855737$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟fe7afecd2b546c4b383d1668b628aaa41c5b27fa␟3762343538857855737:Eager and Lazy content`;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3501530258026681881$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____14 = goog.getMsg(" Other sections are closed when user opens one ");
        i18n_13 = MSG_EXTERNAL_3501530258026681881$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____14;
      } else {
        i18n_13 = $localize`:␟926dd95d67ad69063016fdcbabfd5eaeb26aabf9␟3501530258026681881: Other sections are closed when user opens one `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3460275408989515258$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____16 = goog.getMsg(" Rounded accordion style ");
        i18n_15 = MSG_EXTERNAL_3460275408989515258$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____16;
      } else {
        i18n_15 = $localize`:␟4bb08a552c5d432044b28d3c6bd7c43befc22aa8␟3460275408989515258: Rounded accordion style `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6499794863153942915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____18 = goog.getMsg(" Waits for a custom event {$startTagCode}TUI_EXPAND_LOADED{$closeTagCode} before opening. Content is initialized when opening starts ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_6499794863153942915$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____18;
      } else {
        i18n_17 = $localize`:␟c3ba2ea3e7296d0fa600f631402180947ac9051a␟6499794863153942915: Waits for a custom event ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:TUI_EXPAND_LOADED${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: before opening. Content is initialized when opening starts `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6941798965968576561$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____20 = goog.getMsg(" Borders variants ");
        i18n_19 = MSG_EXTERNAL_6941798965968576561$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____20;
      } else {
        i18n_19 = $localize`:␟9e235ced14e3dcb6d6dace1510193463beffc400␟6941798965968576561: Borders variants `;
      }

      let i18n_21;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1625873562635610142$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____22 = goog.getMsg(" Disabled state for an item ");
        i18n_21 = MSG_EXTERNAL_1625873562635610142$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____22;
      } else {
        i18n_21 = $localize`:␟fdb8097bc01ba38531204836b7462cae300da02b␟1625873562635610142: Disabled state for an item `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4941222037875230927$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____24 = goog.getMsg(" Removes default paddings ");
        i18n_23 = MSG_EXTERNAL_4941222037875230927$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____24;
      } else {
        i18n_23 = $localize`:␟e375f33cd1afed2474b36981688f7110db9ce6b5␟4941222037875230927: Removes default paddings `;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4817660741449421838$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____26 = goog.getMsg(" Disabled header hover state ");
        i18n_25 = MSG_EXTERNAL_4817660741449421838$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____26;
      } else {
        i18n_25 = $localize`:␟61e9921eeaf1ab0a06d8f22252fe392b587baf6d␟4817660741449421838: Disabled header hover state `;
      }

      let i18n_27;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5252016495199332761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____28 = goog.getMsg(" Open / close state of section ");
        i18n_27 = MSG_EXTERNAL_5252016495199332761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____28;
      } else {
        i18n_27 = $localize`:␟70c4c93b15b907cf921f4cef44ff700f49d5346e␟5252016495199332761: Open / close state of section `;
      }

      let i18n_29;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5835961371073265785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____30 = goog.getMsg(" Size of an accordion item ");
        i18n_29 = MSG_EXTERNAL_5835961371073265785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____30;
      } else {
        i18n_29 = $localize`:␟6b06687c142632319f7ee4d3d446d832125cbc99␟5835961371073265785: Size of an accordion item `;
      }

      let i18n_31;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3464494632133448854$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____32 = goog.getMsg(" Show / hide an arrow ");
        i18n_31 = MSG_EXTERNAL_3464494632133448854$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____32;
      } else {
        i18n_31 = $localize`:␟da5b82128342b071feb0383de41dbe47ec0dac8b␟3464494632133448854: Show / hide an arrow `;
      }

      let i18n_33;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2396218993147096007$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__34 = goog.getMsg(" Import {$startTagCode}TuiAccordionModule{$closeTagCode} into a module where you want to use our component {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "startTagTuiDocCode": "\uFFFD#4\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#4\uFFFD"
        });
        i18n_33 = MSG_EXTERNAL_2396218993147096007$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__34;
      } else {
        i18n_33 = $localize`:␟a07a65e6bca4e4abb6240aa4b35127e82aee4d7a␟2396218993147096007: Import ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiAccordionModule${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      let i18n_35;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6000680102827131318$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__36 = goog.getMsg(" Add it into template: {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagTuiDocCode": "\uFFFD#7\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#7\uFFFD"
        });
        i18n_35 = MSG_EXTERNAL_6000680102827131318$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__36;
      } else {
        i18n_35 = $localize`:␟40d05d819ab3643ca776a45d1013135affb5b967␟6000680102827131318: Add it into template: ${"\uFFFD#7\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      return [["header", "Accordion", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_1, i18n_3, ["id", "base", "heading", i18n_5, 3, "content"], ["id", "custom", "heading", i18n_7, 3, "content"], ["id", "single", "heading", i18n_9, 3, "content"], ["id", "eagerAndLazy", "heading", i18n_11, 3, "content"], [3, "closeOthers", "rounded"], [3, "borders", "disabled", "noPadding", "size", "showArrow", "disableHover"], ["tuiAccordionItemContent", ""], [3, "borders", "disabled", "noPadding", "size", "showArrow", "disableHover", "async", "open", "openChange"], [1, "b-full-width", 3, "closeOthers"], [3, "open"], ["content", ""], ["documentationPropertyName", "closeOthers", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_13, i18n_15, ["documentationPropertyName", "async", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "borders", "documentationPropertyMode", "input", "documentationPropertyType", "'all' | 'top-bottom' | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "noPadding", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disableHover", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "open", "documentationPropertyMode", "input-output", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showArrow", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_17, i18n_19, i18n_21, i18n_23, i18n_25, i18n_27, i18n_29, i18n_31, [1, "b-demo-steps"], i18n_33, ["filename", "myComponent.module.ts", 3, "code"], i18n_35, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiAccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAccordionComponent_ng_template_1_Template, 12, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAccordionComponent_ng_template_2_Template, 15, 18, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAccordionComponent_ng_template_3_Template, 8, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiAccordionExample1, TuiAccordionExample2, TuiAccordionExample3, TuiAccordionExample4, demo_component/* TuiDocDemoComponent */.F, accordion_component/* TuiAccordionComponent */.o, accordion_item_component/* TuiAccordionItemComponent */.K, accordion_item_content_directive/* TuiAccordionItemContentDirective */.d, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiAccordionComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/accordion/accordion.module.ts














let ExampleTuiAccordionModule = /*#__PURE__*/(() => {
  class ExampleTuiAccordionModule {}

  ExampleTuiAccordionModule.ɵfac = function ExampleTuiAccordionModule_Factory(t) {
    return new (t || ExampleTuiAccordionModule)();
  };

  ExampleTuiAccordionModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiAccordionModule
  });
  ExampleTuiAccordionModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiButtonModule, kit.TuiInputModule, kit.TuiSelectModule, addon_commerce.TuiMoneyModule, core.TuiSvgModule, kit.TuiAccordionModule, core.TuiModeModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiAccordionComponent))]]
  });
  return ExampleTuiAccordionModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiAccordionModule, {
    declarations: [ExampleTuiAccordionComponent, TuiAccordionExample1, TuiAccordionExample2, TuiAccordionExample3, TuiAccordionExample4],
    imports: [core.TuiButtonModule, kit.TuiInputModule, kit.TuiSelectModule, addon_commerce.TuiMoneyModule, core.TuiSvgModule, kit.TuiAccordionModule, core.TuiModeModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiAccordionComponent]
  });
})();

/***/ })

}]);