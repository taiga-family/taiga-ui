"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[78977],{

/***/ 78977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SkeletonModule": () => (/* binding */ SkeletonModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/skeleton/examples/1/index.ts








let TuiSkeletonExample1 = /*#__PURE__*/(() => {
  class TuiSkeletonExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(true)
      });
      this.skeletonVisible = false;
      this.lightMode = false;
      this.placeholder = `Some paragraph with information`;
    }

    showSkeleton() {
      this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight() {
      this.lightMode = !this.lightMode;
    }

  }

  TuiSkeletonExample1.ɵfac = function TuiSkeletonExample1_Factory(t) {
    return new (t || TuiSkeletonExample1)();
  };

  TuiSkeletonExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSkeletonExample1,
    selectors: [["tui-skeleton-example-1"]],
    decls: 43,
    vars: 80,
    consts: [["tuiButton", "", "type", "button", "size", "xs", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "xs", 3, "click"], [1, "container", 3, "tuiMode"], [1, "tui-row"], [1, "tui-col_md-4", "tui-col_stretch"], ["size", "l", 1, "island", 3, "transparent"], [1, "tui-island__content"], [1, "tui-island__figure"], [3, "formGroup"], ["size", "l", "formControlName", "testValue"], [1, "island-content"], [1, "tui-island__category"], [1, "tui-island__title"], [1, "tui-island__paragraph"], [1, "tui-island__paragraph", "tui-island__paragraph_link"], ["href", "https://github.com/tinkoff/taiga-ui", "target", "_blank", "tuiLink", ""], ["size", "l", "href", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", "tuiIsland", "", "target", "_blank", 1, "island", 3, "hoverable", "transparent"], [1, "some-figure"], ["size", "l", "textAlign", "center", 1, "island", 3, "transparent"]],
    template: function TuiSkeletonExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSkeletonExample1_Template_button_click_1_listener() {
          return ctx.showSkeleton();
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Show/hide skeleton ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSkeletonExample1_Template_button_click_3_listener() {
          return ctx.toggleLight();
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Light mode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-island", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "div", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "form", 8);
        fesm2015_core/* ɵɵelement */._UZ(12, "tui-toggle", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "p", 11);
        fesm2015_core/* ɵɵtext */._uU(15, " A category ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "h3", 12);
        fesm2015_core/* ɵɵtext */._uU(17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "p", 13);
        fesm2015_core/* ɵɵtext */._uU(19);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "p", 14);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "a", 15);
        fesm2015_core/* ɵɵtext */._uU(22, " Link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "a", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "div", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "figure", 7);
        fesm2015_core/* ɵɵelement */._UZ(27, "div", 17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "div", 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "h3", 12);
        fesm2015_core/* ɵɵtext */._uU(30);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "p", 13);
        fesm2015_core/* ɵɵtext */._uU(32);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(34, "tui-island", 18);
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "div", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "figure", 7);
        fesm2015_core/* ɵɵelement */._UZ(37, "div", 17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "div", 10);
        fesm2015_core/* ɵɵelementStart */.TgZ(39, "h3", 12);
        fesm2015_core/* ɵɵtext */._uU(40);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(41, "p", 13);
        fesm2015_core/* ɵɵtext */._uU(42);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵclassProp */.ekj("container_dark", ctx.lightMode);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiMode", ctx.lightMode ? "onDark" : null);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("transparent", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : "Title", " ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : ctx.placeholder, " ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true)("transparent", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_rounded", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : "Another title", " ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : "And some new text again", " ");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("transparent", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_rounded", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_center", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : "One more title", " ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.skeletonVisible ? "" : "All right, I get it", " ");
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, mode_directive/* TuiModeDirective */.w, island_component/* TuiIslandComponent */.h, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, link_component/* TuiLinkComponent */.V],
    styles: [".container[_ngcontent-%COMP%]{max-width:62.5rem;padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7)}.container_dark[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.island[_ngcontent-%COMP%]{width:100%}.some-figure[_ngcontent-%COMP%]{border-radius:100%;width:3rem;height:3rem;background-color:var(--tui-secondary-active)}.island-content[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return TuiSkeletonExample1;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.component.ts
var input_password_component = __webpack_require__(52721);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.directive.ts
var input_password_directive = __webpack_require__(21991);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/kit/components/input-time/input-time.component.ts
var input_time_component = __webpack_require__(86730);
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/skeleton/examples/2/index.ts















let TuiSkeletonExample2 = /*#__PURE__*/(() => {
  class TuiSkeletonExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        nameValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        passwordValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        moneyValue: new fesm2015_forms/* FormControl */.NI(`100`, fesm2015_forms/* Validators.required */.kI.required),
        timeValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiTime(12, 30), fesm2015_forms/* Validators.required */.kI.required),
        osnoValue: new fesm2015_forms/* FormControl */.NI(false),
        usnValue: new fesm2015_forms/* FormControl */.NI(false),
        eshnValue: new fesm2015_forms/* FormControl */.NI(false),
        envdValue: new fesm2015_forms/* FormControl */.NI(false)
      });
      this.skeletonVisible = false;
      this.lightMode = false;
    }

    showSkelet() {
      this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight() {
      this.lightMode = !this.lightMode;
    }

  }

  TuiSkeletonExample2.ɵfac = function TuiSkeletonExample2_Factory(t) {
    return new (t || TuiSkeletonExample2)();
  };

  TuiSkeletonExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSkeletonExample2,
    selectors: [["tui-skeleton-example-2"]],
    decls: 40,
    vars: 54,
    consts: [["tuiButton", "", "type", "button", "size", "xs", 1, "tui-space_right-2", 3, "click"], ["tuiButton", "", "type", "button", "size", "xs", 3, "click"], [1, "tui-container"], [3, "formGroup"], [1, "tui-row", "tui-row_sme"], [1, "tui-col_8"], [1, "container", 3, "tuiMode"], [1, "tui-form__header", "tui-form__header_margin-top_none"], [1, "tui-form__row"], ["formControlName", "nameValue", "tuiHintContent", "With a hint"], ["tuiTextfield", "", "placeholder", "Name Surname"], [1, "tui-form__row", "tui-form__row_multi-fields"], [1, "tui-form__multi-field"], ["formControlName", "passwordValue"], ["formControlName", "moneyValue"], [1, "tui-form__row", "tui-form__row_half-width"], ["formControlName", "timeValue"], [1, "tui-form__row", "tui-form__row_checkboxes"], ["formControlName", "osnoValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "eshnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "envdValue", "size", "l", 1, "tui-form__checkbox"], [1, "tui-form__buttons"], ["tuiButton", "", "size", "l", "type", "submit", 1, "tui-form__button"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l", 1, "tui-form__button"]],
    template: function TuiSkeletonExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSkeletonExample2_Template_button_click_1_listener() {
          return ctx.showSkelet();
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Show/hide skeleton ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSkeletonExample2_Template_button_click_3_listener() {
          return ctx.toggleLight();
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Light mode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "form", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "div", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "h3", 7);
        fesm2015_core/* ɵɵtext */._uU(11, " A header ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "div", 8);
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-input", 9);
        fesm2015_core/* ɵɵtext */._uU(14, " Some input ");
        fesm2015_core/* ɵɵelement */._UZ(15, "input", 10);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div", 11);
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "div", 12);
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-input-password", 13);
        fesm2015_core/* ɵɵtext */._uU(19, " Some password input ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "div", 12);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-input-number", 14);
        fesm2015_core/* ɵɵtext */._uU(22, " Some number input ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div", 15);
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "tui-input-time", 16);
        fesm2015_core/* ɵɵtext */._uU(25, " Some textfield ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "div", 17);
        fesm2015_core/* ɵɵelementStart */.TgZ(27, "tui-checkbox-labeled", 18);
        fesm2015_core/* ɵɵtext */._uU(28, " First option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-checkbox-labeled", 19);
        fesm2015_core/* ɵɵtext */._uU(30, " Cool option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "tui-checkbox-labeled", 20);
        fesm2015_core/* ɵɵtext */._uU(32, " Boring option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "tui-checkbox-labeled", 21);
        fesm2015_core/* ɵɵtext */._uU(34, " Interesting option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "div", 22);
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "button", 23);
        fesm2015_core/* ɵɵtext */._uU(37, " Submit ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "button", 24);
        fesm2015_core/* ɵɵtext */._uU(39, " Cancel ");
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
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("container_dark", ctx.lightMode);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiMode", ctx.lightMode ? "onDark" : null);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_text", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_short", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("tui-skeleton", ctx.skeletonVisible)("tui-skeleton_light", ctx.lightMode);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, mode_directive/* TuiModeDirective */.w, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, input_password_component/* TuiInputPasswordComponent */.V, input_password_directive/* TuiInputPasswordDirective */.F, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, input_time_component/* TuiInputTimeComponent */.G, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p],
    styles: ["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{padding:1.5rem}.container_dark[_ngcontent-%COMP%]{background-image:linear-gradient(225deg,#3023ae,#c86dd7);color:var(--tui-text-01-night)}"],
    changeDetection: 0
  });
  return TuiSkeletonExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/skeleton/skeleton.component.ts







function SkeletonComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵelement */._UZ(3, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "p");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "ul", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
    fesm2015_core/* ɵɵtext */._uU(8, ".tui-skeleton");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(9, " : ");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "ul", 6);
    fesm2015_core/* ɵɵi18nStart */.tHW(11, 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li", 5);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "li", 5);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li", 5);
    fesm2015_core/* ɵɵelement */._UZ(17, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "li", 5);
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "li", 5);
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "div", 8);
    fesm2015_core/* ɵɵi18nStart */.tHW(23, 9);
    fesm2015_core/* ɵɵelement */._UZ(24, "strong");
    fesm2015_core/* ɵɵelement */._UZ(25, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(27, "tui-skeleton-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(29, "tui-skeleton-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(26);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

let SkeletonComponent = /*#__PURE__*/(() => {
  class SkeletonComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 62451).then(__webpack_require__.t.bind(__webpack_require__, 62451, 17)),
        HTML: __webpack_require__.e(/* import() */ 40116).then(__webpack_require__.t.bind(__webpack_require__, 40116, 17)),
        LESS: __webpack_require__.e(/* import() */ 30316).then(__webpack_require__.t.bind(__webpack_require__, 30316, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 26402).then(__webpack_require__.t.bind(__webpack_require__, 26402, 17)),
        HTML: __webpack_require__.e(/* import() */ 66331).then(__webpack_require__.t.bind(__webpack_require__, 19728, 17)),
        LESS: __webpack_require__.e(/* import() */ 19926).then(__webpack_require__.t.bind(__webpack_require__, 19926, 17))
      };
    }

  }

  SkeletonComponent.ɵfac = function SkeletonComponent_Factory(t) {
    return new (t || SkeletonComponent)();
  };

  SkeletonComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: SkeletonComponent,
    selectors: [["skeleton"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4656232853685757300$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS_1 = goog.getMsg("Skeleton");
        i18n_0 = MSG_EXTERNAL_4656232853685757300$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟3d714c5dfb4cdcdf38f7b054714c763b71ed066f␟4656232853685757300:Skeleton`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3092178411056451298$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__3 = goog.getMsg("{$startParagraph} Use {$startTagStrong}.tui-skeleton{$closeTagStrong} class on an element to add skeleton of the same size above it. {$closeParagraph}{$startParagraph}You can also use the following modifiers:{$closeParagraph}", {
          "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD",
          "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"
        });
        i18n_2 = MSG_EXTERNAL_3092178411056451298$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟8fc38383a8162dc72e287093df05aaee22dc92a1␟3092178411056451298:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: Use ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:.tui-skeleton${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: class on an element to add skeleton of the same size above it. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:You can also use the following modifiers:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4554716163680077475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__5 = goog.getMsg("{$startListItem}{$startTagCode}.tui-skeleton_light{$closeTagCode} : style for dark background {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_rounded{$closeTagCode} : rounded as an element {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_short{$closeTagCode} : short mode {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_center{$closeTagCode} : short centered mode {$closeListItem}{$startListItem}{$startTagCode}.tui-skeleton_text{$closeTagCode} : for containers with texts {$closeListItem}", {
          "startListItem": "[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]",
          "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]",
          "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]",
          "closeListItem": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_4554716163680077475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟8703418486123b35f151e21eb69555aae5f8620b␟4554716163680077475:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_light${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : style for dark background ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_rounded${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : rounded as an element ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_short${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : short mode ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_center${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : short centered mode ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#20\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#17\uFFFD|\uFFFD#19\uFFFD|\uFFFD#21\uFFFD]"}:START_TAG_CODE:.tui-skeleton_text${"[\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#21\uFFFD]"}:CLOSE_TAG_CODE: : for containers with texts ${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#20\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1498917243270038051$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__7 = goog.getMsg("{$startTagStrong}Classes{$closeTagStrong} are included into global import {$startTagCode}@taiga-ui/styles/taiga-ui-global{$closeTagCode} . You do not need to import anything, just use them ", {
          "startTagStrong": "\uFFFD#24\uFFFD",
          "closeTagStrong": "\uFFFD/#24\uFFFD",
          "startTagCode": "\uFFFD#25\uFFFD",
          "closeTagCode": "\uFFFD/#25\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_1498917243270038051$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟d7779f7ec39c02122d38c17c7d2312ffa863a274␟1498917243270038051:${"\uFFFD#24\uFFFD"}:START_TAG_STRONG:Classes${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_STRONG: are included into global import ${"\uFFFD#25\uFFFD"}:START_TAG_CODE:@taiga-ui/styles/taiga-ui-global${"\uFFFD/#25\uFFFD"}:CLOSE_TAG_CODE: . You do not need to import anything, just use them `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1956073378030411818$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__9 = goog.getMsg("Classes");
        i18n_8 = MSG_EXTERNAL_1956073378030411818$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟1172ffb28e42ff5ae0d36af63448744a3af23d41␟1956073378030411818:Classes`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5391778508352850475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__11 = goog.getMsg("Mixins");
        i18n_10 = MSG_EXTERNAL_5391778508352850475$$PROJECTS_DEMO_SRC_MODULES_MARKUP_SKELETON_SKELETON_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟7503a8046c7cb804d840f16206896e9075dcc0e0␟5391778508352850475:Mixins`;
      }

      return [["header", i18n_0], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_2, [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], i18n_4, [1, "tui-space_top-3", "tui-space_bottom-3"], i18n_6, ["id", "classes", "heading", i18n_8, 3, "content"], ["id", "mixins", "heading", i18n_10, 3, "content"]];
    },
    template: function SkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, SkeletonComponent_ng_template_1_Template, 30, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiSkeletonExample1, TuiSkeletonExample2],
    encapsulation: 2,
    changeDetection: 0
  });
  return SkeletonComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/skeleton/skeleton.module.ts











let SkeletonModule = /*#__PURE__*/(() => {
  class SkeletonModule {}

  SkeletonModule.ɵfac = function SkeletonModule_Factory(t) {
    return new (t || SkeletonModule)();
  };

  SkeletonModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: SkeletonModule
  });
  SkeletonModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiModeModule, kit.TuiInputTimeModule, kit.TuiCheckboxLabeledModule, core.TuiButtonModule, kit.TuiInputPasswordModule, kit.TuiInputModule, kit.TuiInputNumberModule, kit.TuiIslandModule, core.TuiLinkModule, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(SkeletonComponent))]]
  });
  return SkeletonModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(SkeletonModule, {
    declarations: [SkeletonComponent, TuiSkeletonExample1, TuiSkeletonExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiModeModule, kit.TuiInputTimeModule, kit.TuiCheckboxLabeledModule, core.TuiButtonModule, kit.TuiInputPasswordModule, kit.TuiInputModule, kit.TuiInputNumberModule, kit.TuiIslandModule, core.TuiLinkModule, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [SkeletonComponent]
  });
})();

/***/ })

}]);