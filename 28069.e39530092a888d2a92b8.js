"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[28069],{

/***/ 28069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiIslandModule": () => (/* binding */ ExampleTuiIslandModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/island/examples/1/index.ts




let TuiIslandExample1 = /*#__PURE__*/(() => {
  class TuiIslandExample1 {}

  TuiIslandExample1.ɵfac = function TuiIslandExample1_Factory(t) {
    return new (t || TuiIslandExample1)();
  };

  TuiIslandExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiIslandExample1,
    selectors: [["tui-island-example-1"]],
    decls: 32,
    vars: 0,
    consts: [[1, "container"], [1, "tui-row"], [1, "tui-col_md-4"], [1, "tui-island__category"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_link"], ["href", "/", "tuiLink", ""], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "m", 1, "tui-island__footer-button"], [1, "tui-island__content"], [1, "tui-island__figure"], [1, "some-figure"]],
    template: function TuiIslandExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-island");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(5, "category");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "h3", 4);
        fesm2015_core/* ɵɵtext */._uU(7, "Some heading");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "p", 5);
        fesm2015_core/* ɵɵtext */._uU(9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "p", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 7);
        fesm2015_core/* ɵɵtext */._uU(12, " Link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-island");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "h3", 4);
        fesm2015_core/* ɵɵtext */._uU(16, "Title");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "p", 5);
        fesm2015_core/* ɵɵtext */._uU(18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "button", 8);
        fesm2015_core/* ɵɵtext */._uU(20, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "tui-island");
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "figure", 10);
        fesm2015_core/* ɵɵelement */._UZ(25, "div", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(27, "p", 5);
        fesm2015_core/* ɵɵtext */._uU(28, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "p", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "a", 7);
        fesm2015_core/* ɵɵtext */._uU(31, " Fill some papers ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, link_component/* TuiLinkComponent */.V, button_component/* TuiButtonComponent */.v],
    styles: [".container[_ngcontent-%COMP%]{max-width:62.5rem}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:3rem;height:3rem;background-color:var(--tui-secondary-active)}"],
    changeDetection: 0
  });
  return TuiIslandExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/island/examples/2/index.ts







let TuiIslandExample2 = /*#__PURE__*/(() => {
  class TuiIslandExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(true)
      });
    }

  }

  TuiIslandExample2.ɵfac = function TuiIslandExample2_Factory(t) {
    return new (t || TuiIslandExample2)();
  };

  TuiIslandExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiIslandExample2,
    selectors: [["tui-island-example-2"]],
    decls: 40,
    vars: 2,
    consts: [[1, "container"], [1, "tui-row"], [1, "tui-col_md-4"], ["size", "l"], [1, "tui-island__content"], [1, "tui-island__figure"], [3, "formGroup"], ["size", "l", "formControlName", "testValue"], [1, "tui-island__category"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_link"], ["href", "/", "tuiLink", ""], ["size", "l", "href", "http://ng-web-apis.github.io/", "tuiIsland", "", "target", "_blank", 3, "hoverable"], [1, "some-figure"], ["size", "l", "textAlign", "center"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "m", 1, "tui-island__footer-button"]],
    template: function TuiIslandExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-island", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "form", 6);
        fesm2015_core/* ɵɵelement */._UZ(7, "tui-toggle", 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p", 8);
        fesm2015_core/* ɵɵtext */._uU(10, "Section");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "h3", 9);
        fesm2015_core/* ɵɵtext */._uU(12, "Title");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p", 10);
        fesm2015_core/* ɵɵtext */._uU(14, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p", 11);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "a", 12);
        fesm2015_core/* ɵɵtext */._uU(17, " Link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "a", 13);
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "figure", 5);
        fesm2015_core/* ɵɵelement */._UZ(22, "div", 14);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "h3", 9);
        fesm2015_core/* ɵɵtext */._uU(25, "Credit card");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "p", 10);
        fesm2015_core/* ɵɵtext */._uU(27, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-island", 15);
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "figure", 5);
        fesm2015_core/* ɵɵelement */._UZ(32, "div", 14);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(34, "h3", 9);
        fesm2015_core/* ɵɵtext */._uU(35, "Debit card");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "p", 10);
        fesm2015_core/* ɵɵtext */._uU(37, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "button", 16);
        fesm2015_core/* ɵɵtext */._uU(39, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(13);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, link_component/* TuiLinkComponent */.V, button_component/* TuiButtonComponent */.v],
    styles: [".container[_ngcontent-%COMP%]{max-width:62.5rem}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:3rem;height:3rem;background-color:var(--tui-secondary-active)}"],
    changeDetection: 0
  });
  return TuiIslandExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.component.ts
var input_phone_component = __webpack_require__(78750);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.directive.ts
var input_phone_directive = __webpack_require__(45303);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/island/examples/3/index.ts













function TuiIslandExample3_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtext */._uU(1, "less");
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }
}

function TuiIslandExample3_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "more");
  }
}

const _c0 = function () {
  return [];
};

let TuiIslandExample3 = /*#__PURE__*/(() => {
  class TuiIslandExample3 {
    constructor() {
      this.bannerImage = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
      this.expanded = false;
      this.index = 1;
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required)
      });
      this.collapsingText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit ` + `sed do eiusmod tempor incididunt ut labore et dolore ` + `magna aliqua.`;
    }

    get linesLimit() {
      return this.expanded ? 10 : 3;
    }

    expandText() {
      this.expanded = !this.expanded;
    }

    onIndexChange(index) {
      this.index = index;
    }

  }

  TuiIslandExample3.ɵfac = function TuiIslandExample3_Factory(t) {
    return new (t || TuiIslandExample3)();
  };

  TuiIslandExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiIslandExample3,
    selectors: [["tui-island-example-3"]],
    decls: 46,
    vars: 13,
    consts: [[1, "container"], [1, "tui-row"], [1, "tui-col_md-4"], ["size", "l"], [1, "tui-list"], [1, "tui-list__item"], ["size", "l", "textAlign", "center"], [1, "title"], [3, "formGroup"], ["formControlName", "testValue", 1, "input", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", 3, "error"], ["tuiIsland", "", "href", "http://ng-web-apis.github.io/", "size", "l", "target", "_blank", 3, "hoverable"], ["alt", "Taiga", 1, "image", 3, "src"], [1, "title", "title_size_s"], [1, "text"], ["tuiButton", "", "type", "button", "href", "https://ng-web-apis.github.io", "mode", "secondary", "size", "m", "target", "_blank", 1, "button"], [1, "tui-row", "tui-space_top-5"], ["textAlign", "center"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_link"], ["tuiLink", "", "type", "button", 3, "click"], [4, "ngIf", "ngIfElse"], ["more", ""]],
    template: function TuiIslandExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-island", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "ul", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "li", 5);
        fesm2015_core/* ɵɵtext */._uU(6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "li", 5);
        fesm2015_core/* ɵɵtext */._uU(8, " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "li", 5);
        fesm2015_core/* ɵɵtext */._uU(10, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "li", 5);
        fesm2015_core/* ɵɵtext */._uU(12, " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-island", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "h3", 7);
        fesm2015_core/* ɵɵtext */._uU(16, "Title!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "form", 8);
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-input-phone", 9);
        fesm2015_core/* ɵɵtext */._uU(19, " Input phone ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(20, "tui-error", 10);
        fesm2015_core/* ɵɵpipe */.ALo(21, "async");
        fesm2015_core/* ɵɵpipe */.ALo(22, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "a", 11);
        fesm2015_core/* ɵɵelement */._UZ(25, "img", 12);
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "h3", 13);
        fesm2015_core/* ɵɵtext */._uU(27, "Title");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "p", 14);
        fesm2015_core/* ɵɵtext */._uU(29, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "a", 15);
        fesm2015_core/* ɵɵtext */._uU(31, " Visit a website ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(32, "div", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(34, "tui-island", 17);
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "h3", 18);
        fesm2015_core/* ɵɵtext */._uU(36, "Some product");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(37, "p", 19);
        fesm2015_core/* ɵɵtext */._uU(38);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(39, "p", 20);
        fesm2015_core/* ɵɵelementStart */.TgZ(40, "button", 21);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiIslandExample3_Template_button_click_40_listener() {
          return ctx.expandText();
        });
        fesm2015_core/* ɵɵtext */._uU(41, " Show ");
        fesm2015_core/* ɵɵtemplate */.YNc(42, TuiIslandExample3_ng_container_42_Template, 2, 0, "ng-container", 22);
        fesm2015_core/* ɵɵtemplate */.YNc(43, TuiIslandExample3_ng_template_43_Template, 1, 0, "ng-template", null, 23, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(45, "div", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(44);

        fesm2015_core/* ɵɵadvance */.xp6(17);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(21, 8, fesm2015_core/* ɵɵpipeBind1 */.lcZ(22, 10, fesm2015_core/* ɵɵpureFunction0 */.DdM(12, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("src", ctx.bannerImage, fesm2015_core/* ɵɵsanitizeUrl */.LSH);
        fesm2015_core/* ɵɵadvance */.xp6(13);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.collapsingText);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.expanded)("ngIfElse", _r1);
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, error_component/* TuiErrorComponent */.v, button_component/* TuiButtonComponent */.v, link_component/* TuiLinkComponent */.V, common/* NgIf */.O5],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".container[_ngcontent-%COMP%]{max-width:62.5rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-4);margin:0 0 1rem}.title_size_s[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:0 0 .75rem}.text[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin:0 0 1.5rem}.image[_ngcontent-%COMP%]{display:block;max-width:calc(100% + 2.5rem);margin:-1.25rem -1.25rem 1.25rem;border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}"],
    changeDetection: 0
  });
  return TuiIslandExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/island/island.component.ts

















function ExampleTuiIslandComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(3, " This component requires ");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
    fesm2015_core/* ɵɵtext */._uU(5, "@taiga-ui/styles");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(6, " optional package with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵtext */._uU(8, "@taiga-ui/styles/taiga-ui-global");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "a", 5);
    fesm2015_core/* ɵɵtext */._uU(10, " added to your global styles ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " . ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "strong");
    fesm2015_core/* ɵɵtext */._uU(13, ".tui-island");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(14, " : ");
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "ul", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "code");
    fesm2015_core/* ɵɵtext */._uU(18, ".tui-island__category");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "code");
    fesm2015_core/* ɵɵtext */._uU(21, ".tui-island__title");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "code");
    fesm2015_core/* ɵɵtext */._uU(24, ".tui-island__paragraph");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "ul", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(27, "code");
    fesm2015_core/* ɵɵtext */._uU(28, ".tui-island__paragraph_link");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(29, " : paragraph with links. Margin top ");
    fesm2015_core/* ɵɵelementStart */.TgZ(30, "code");
    fesm2015_core/* ɵɵtext */._uU(31, "16px");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "code");
    fesm2015_core/* ɵɵtext */._uU(34, ".tui-island__paragraph_button");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(35, " : paragraph with buttons. Margin to ");
    fesm2015_core/* ɵɵelementStart */.TgZ(36, "code");
    fesm2015_core/* ɵɵtext */._uU(37, "20px");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(39, "code");
    fesm2015_core/* ɵɵtext */._uU(40, ".tui-island__figure");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(42, "code");
    fesm2015_core/* ɵɵtext */._uU(43, ".tui-island__content");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(44, " : a class for a case when figure is aside ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(45, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(46, "code");
    fesm2015_core/* ɵɵtext */._uU(47, ".tui-island__carousel-controls");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(48, " : block with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(49, "b");
    fesm2015_core/* ɵɵtext */._uU(50, "carousel actions");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(51, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(52, "code");
    fesm2015_core/* ɵɵtext */._uU(53, ".tui-island__carousel-button");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(54, " : ");
    fesm2015_core/* ɵɵelementStart */.TgZ(55, "b");
    fesm2015_core/* ɵɵtext */._uU(56, "button for carousel");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(57, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(58, "code");
    fesm2015_core/* ɵɵtext */._uU(59, ".tui-island__carousel-pages");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(60, " : ");
    fesm2015_core/* ɵɵelementStart */.TgZ(61, "b");
    fesm2015_core/* ɵɵtext */._uU(62, "carousel pages");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(63, "li", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(64, "code");
    fesm2015_core/* ɵɵtext */._uU(65, ".tui-island__footer-button");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(66, " : ");
    fesm2015_core/* ɵɵelementStart */.TgZ(67, "b");
    fesm2015_core/* ɵɵtext */._uU(68, "footer button");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(69, " with island width ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(70, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(71, "tui-island-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(72, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(73, "tui-island-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(74, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(75, "tui-island-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(70);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiIslandComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiIslandComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiIslandComponent_ng_template_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Text align ");
  }
}

function ExampleTuiIslandComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-island", 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "figure", 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "div", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "h3", 16);
    fesm2015_core/* ɵɵtext */._uU(7, "Some heading");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p", 17);
    fesm2015_core/* ɵɵtext */._uU(9, "Some information");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "p", 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "button", 19);
    fesm2015_core/* ɵɵtext */._uU(12, " Button ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiIslandComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiIslandComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.hoverable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiIslandComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiIslandComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(16, ExampleTuiIslandComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiIslandComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.textAlign = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", ctx_r1.hoverable)("size", ctx_r1.size)("textAlign", ctx_r1.textAlign);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hoverable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.textAlignVariants)("documentationPropertyValue", ctx_r1.textAlign);
  }
}

function ExampleTuiIslandComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 25);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 26);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 29);
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

let ExampleTuiIslandComponent = /*#__PURE__*/(() => {
  class ExampleTuiIslandComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 70951).then(__webpack_require__.t.bind(__webpack_require__, 70951, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 20173).then(__webpack_require__.t.bind(__webpack_require__, 20173, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 60344).then(__webpack_require__.t.bind(__webpack_require__, 24934, 17)),
        HTML: __webpack_require__.e(/* import() */ 69935).then(__webpack_require__.t.bind(__webpack_require__, 69935, 17)),
        LESS: __webpack_require__.e(/* import() */ 91975).then(__webpack_require__.t.bind(__webpack_require__, 91975, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 46859).then(__webpack_require__.t.bind(__webpack_require__, 46859, 17)),
        HTML: __webpack_require__.e(/* import() */ 28265).then(__webpack_require__.t.bind(__webpack_require__, 28265, 17)),
        LESS: __webpack_require__.e(/* import() */ 17319).then(__webpack_require__.t.bind(__webpack_require__, 17319, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 44335).then(__webpack_require__.t.bind(__webpack_require__, 44335, 17)),
        HTML: __webpack_require__.e(/* import() */ 4935).then(__webpack_require__.t.bind(__webpack_require__, 4935, 17)),
        LESS: __webpack_require__.e(/* import() */ 58574).then(__webpack_require__.t.bind(__webpack_require__, 58574, 17))
      };
      this.hoverable = false;
      this.textAlignVariants = [`left`, `right`, `center`];
      this.textAlign = this.textAlignVariants[0];
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[0];
    }

  }

  ExampleTuiIslandComponent.ɵfac = function ExampleTuiIslandComponent_Factory(t) {
    return new (t || ExampleTuiIslandComponent)();
  };

  ExampleTuiIslandComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiIslandComponent,
    selectors: [["example-island"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7912968149047974014$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__1 = goog.getMsg(" Islands show information in rounded block with a border ");
        i18n_0 = MSG_EXTERNAL_7912968149047974014$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟eb6542647a1bc5698361464023be472e12ef6f37␟7912968149047974014: Islands show information in rounded block with a border `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_447780896627997582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__5 = goog.getMsg("Many options");
        i18n_4 = MSG_EXTERNAL_447780896627997582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟914fefb7608fa1fcad09f4894910173649e1baac␟447780896627997582:Many options`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__7 = goog.getMsg("Custom");
        i18n_6 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8770112115490915365$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS___9 = goog.getMsg(" Hoverable ");
        i18n_8 = MSG_EXTERNAL_8770112115490915365$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟ff9e5ad1afd85d16854e4b116cf6fef63e4b2088␟8770112115490915365: Hoverable `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS___11 = goog.getMsg(" Size ");
        i18n_10 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1213007318742367556$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiIslandModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_1213007318742367556$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟cd4e714dcc07efd631c5e6d868b41a74a42edbea␟1213007318742367556: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiIslandModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ISLAND_ISLAND_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Island", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, [1, "tui-space_vertical-4"], ["tuiLink", "", "routerLink", "/getting-started", "fragment", "styles"], [1, "tui-list", "tui-list_small", "tui-space_top-3"], [1, "tui-list__item"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "full-featured", "heading", i18n_4, 3, "content"], ["id", "custom", "heading", i18n_6, 3, "content"], [1, "island", 3, "hoverable", "size", "textAlign"], [1, "tui-island__content"], [1, "tui-island__figure"], [1, "some-figure"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_button"], ["tuiButton", "", "type", "button", "appearance", "secondary", 3, "size"], ["documentationPropertyName", "hoverable", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "textAlign", "documentationPropertyMode", "input", "documentationPropertyType", "'left' | 'right' | 'center'", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiIslandComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiIslandComponent_ng_template_1_Template, 76, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiIslandComponent_ng_template_2_Template, 17, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiIslandComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiIslandExample1, TuiIslandExample2, TuiIslandExample3, demo_component/* TuiDocDemoComponent */.F, island_component/* TuiIslandComponent */.h, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".island[_ngcontent-%COMP%]{max-width:25rem}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:4rem;height:4rem;background-color:var(--tui-secondary-active)}"],
    changeDetection: 0
  });
  return ExampleTuiIslandComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/island/island.module.ts












let ExampleTuiIslandModule = /*#__PURE__*/(() => {
  class ExampleTuiIslandModule {}

  ExampleTuiIslandModule.ɵfac = function ExampleTuiIslandModule_Factory(t) {
    return new (t || ExampleTuiIslandModule)();
  };

  ExampleTuiIslandModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiIslandModule
  });
  ExampleTuiIslandModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiIslandModule, core.TuiLinkModule, kit.TuiToggleModule, core.TuiButtonModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiInputPhoneModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiIslandComponent))]]
  });
  return ExampleTuiIslandModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiIslandModule, {
    declarations: [ExampleTuiIslandComponent, TuiIslandExample1, TuiIslandExample2, TuiIslandExample3],
    imports: [kit.TuiIslandModule, core.TuiLinkModule, kit.TuiToggleModule, core.TuiButtonModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiInputPhoneModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiTextfieldControllerModule, public_api/* TuiAddonDocModule */.fV, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiIslandComponent]
  });
})();

/***/ })

}]);