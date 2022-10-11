"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[23121],{

/***/ 32675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ TuiCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12057);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34880);






function TuiCardComponent_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "tui-svg", 5);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r0.brandLogo);
  }
}

function TuiCardComponent_tui_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "tui-svg", 6);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("src", ctx_r1.paymentSystemLogo);
  }
}

const icons = {
  mir: `tuiIconMirMono`,
  visa: `tuiIconVisaMono`,
  electron: `tuiIconElectronMono`,
  mastercard: `tuiIconMastercard`,
  maestro: `tuiIconMaestro`
};
class TuiCardComponent {
  constructor() {
    this.active = false;
    this.brandLogo = ``;
    this.cardNumber = ``;
    this.paymentSystem = null;
    this.size = `m`;
  }

  get hasBrandLogo() {
    return !!this.brandLogo && this.size === `m`;
  }

  get paymentSystemLogo() {
    return this.paymentSystem ? icons[this.paymentSystem] : ``;
  }

}

TuiCardComponent.ɵfac = function TuiCardComponent_Factory(t) {
  return new (t || TuiCardComponent)();
};

TuiCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiCardComponent,
  selectors: [["tui-card"]],
  hostVars: 3,
  hostBindings: function TuiCardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassProp"] */ .ekj("_active", ctx.active);
    }
  },
  inputs: {
    active: "active",
    brandLogo: "brandLogo",
    cardNumber: "cardNumber",
    paymentSystem: "paymentSystem",
    size: "size"
  },
  decls: 6,
  vars: 3,
  consts: [[1, "t-front"], ["class", "t-brand-logo", 3, "src", 4, "ngIf"], [1, "t-number"], ["class", "t-payment-system-logo", 3, "src", 4, "ngIf"], [1, "t-back"], [1, "t-brand-logo", 3, "src"], [1, "t-payment-system-logo", 3, "src"]],
  template: function TuiCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, TuiCardComponent_tui_svg_1_Template, 1, 1, "tui-svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(4, TuiCardComponent_tui_svg_4_Template, 1, 1, "tui-svg", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(5, "div", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasBrandLogo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.cardNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", !!ctx.paymentSystem);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiSvgComponent */ .P],
  styles: ["[_nghost-%COMP%]{position:relative;display:block;color:var(--tui-base-01);transform-style:preserve-3d;cursor:default;border-radius:var(--tui-radius-xs);background-size:100%}[data-size=s][_nghost-%COMP%]{width:2rem;height:1.5rem}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem}._active[_nghost-%COMP%]{box-shadow:0 0 0 1px var(--tui-base-01)}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.t-brand-logo[_ngcontent-%COMP%]{position:absolute;top:.1875rem;left:.125rem;height:.875rem;width:.875rem}.t-number[_ngcontent-%COMP%]{position:absolute;right:.25rem;display:flex;justify-content:center;align-items:center}[data-size=s][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.125rem;height:.625rem;width:1.1875rem;font-size:.5rem}[data-size=m][_nghost-%COMP%]   .t-number[_ngcontent-%COMP%]{top:.1875rem;height:.875rem;width:1.5rem;font-size:.625rem}.t-payment-system-logo[_ngcontent-%COMP%]{position:absolute;right:.25rem;bottom:-.5rem;width:2rem;height:2rem;transform:scale(.5);transform-origin:right}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background-color:var(--tui-base-05);border-radius:var(--tui-radius-xs)}.t-back[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:20%;left:0;right:0;height:20%;background-color:var(--tui-base-06)}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiCardComponent.prototype, "active", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiCardComponent.prototype, "brandLogo", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)(({
  length
}) => !length || length === 4, `cardNumber should contain 4 symbols`)], TuiCardComponent.prototype, "cardNumber", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiCardComponent.prototype, "paymentSystem", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiCardComponent.prototype, "size", void 0);

/***/ }),

/***/ 72602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TuiInputCardGroupedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23738);
/* harmony import */ var _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60028);
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70954);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90987);
/* harmony import */ var _input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12057);
/* harmony import */ var _core_directives_wrapper_wrapper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2697);
/* harmony import */ var _core_directives_dropdown_dropdown_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33250);
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26072);
/* harmony import */ var _core_directives_dropdown_dropdown_driver_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9829);
/* harmony import */ var _core_directives_dropdown_dropdown_position_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82886);
/* harmony import */ var _core_directives_dropdown_dropdown_manual_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7860);
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17163);
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40939);
/* harmony import */ var _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13176);
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48893);
/* harmony import */ var _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11189);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(89570);
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34880);
/* harmony import */ var _pipes_format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9063);
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35271);



























const _c0 = ["inputCard"];
const _c1 = ["inputExpire"];
const _c2 = ["inputCVC"];

function TuiInputCardGroupedComponent_div_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(1, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function TuiInputCardGroupedComponent_div_0_label_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw(2);
      return ctx_r10.onCardChange($event);
    })("focus", function TuiInputCardGroupedComponent_div_0_label_2_Template_input_focus_1_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipe"] */ .ALo(3, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtext"] */ ._uU(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const formattedCard_r8 = ctx.tuiLet;
    const texts_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-input_inert", ctx_r2.cardPrefilled)("t-input_hidden", !ctx_r2.card.length && ctx_r2.focused);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("placeholder", ctx_r2.cardPrefilled ? "" : ctx_r2.exampleText)("autocomplete", ctx_r2.autocompleteCard)("disabled", ctx_r2.computedDisabled)("readOnly", ctx_r2.readOnly)("textMask", ctx_r2.maskCard)("tuiFocusable", ctx_r2.cardFocusable)("ngModel", formattedCard_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵattribute"] */ .uIk("id", ctx_r2.idCard)("aria-invalid", !ctx_r2.cardPrefilled && !_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipeBind2"] */ .xi3(3, 22, ctx_r2.card, ctx_r2.cardValidator));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-collapsed_enable-mask", ctx_r2.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵattribute"] */ .uIk("data-before", ctx_r2.masked);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-value_collapsed", ctx_r2.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtextInterpolate1"] */ .hij(" ", formattedCard_r8, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-placeholder_raised", ctx_r2.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.cardNumberText, " ");
  }
}

function TuiInputCardGroupedComponent_div_0_div_17_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelement"] */ ._UZ(0, "tui-svg", 23);
  }

  if (rf & 2) {
    const text_r15 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("src", text_r15);
  }
}

function TuiInputCardGroupedComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(1, TuiInputCardGroupedComponent_div_0_div_17_tui_svg_1_Template, 1, 1, "tui-svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("polymorpheusOutlet", ctx_r5.icon);
  }
}

function TuiInputCardGroupedComponent_div_0_tui_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("click", function TuiInputCardGroupedComponent_div_0_tui_svg_18_Template_tui_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw(2);
      return ctx_r16.clear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
  }
}

function TuiInputCardGroupedComponent_div_0_tui_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("click", function TuiInputCardGroupedComponent_div_0_tui_svg_19_Template_tui_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw(2);
      return ctx_r18.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-icon_rotated", ctx_r7.open);
  }
}

function TuiInputCardGroupedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("tuiActiveZoneChange", function TuiInputCardGroupedComponent_div_0_Template_div_tuiActiveZoneChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r20.onActiveZoneChange($event);
    })("scroll", function TuiInputCardGroupedComponent_div_0_Template_div_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r22.onScroll($event);
    })("mousedown", function TuiInputCardGroupedComponent_div_0_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r23.onMouseDown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(2, TuiInputCardGroupedComponent_div_0_label_2_Template, 10, 25, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipe"] */ .ALo(3, "tuiFormatCard");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(6, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function TuiInputCardGroupedComponent_div_0_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r24.onExpireChange($event);
    })("focus", function TuiInputCardGroupedComponent_div_0_Template_input_focus_6_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtext"] */ ._uU(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(11, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(12, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("ngModelChange", function TuiInputCardGroupedComponent_div_0_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r26.onCVCChange($event);
    })("focus", function TuiInputCardGroupedComponent_div_0_Template_input_focus_12_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtext"] */ ._uU(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementStart"] */ .TgZ(16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(17, TuiInputCardGroupedComponent_div_0_div_17_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(18, TuiInputCardGroupedComponent_div_0_tui_svg_18_Template, 1, 0, "tui-svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(19, TuiInputCardGroupedComponent_div_0_tui_svg_19_Template, 1, 2, "tui-svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("appearance", ctx_r0.appearance)("readOnly", ctx_r0.readOnly)("disabled", ctx_r0.computedDisabled)("focus", ctx_r0.computedFocused)("hover", ctx_r0.pseudoHover)("invalid", ctx_r0.computedInvalid)("tuiDropdownManual", ctx_r0.open)("tuiDropdown", ctx_r0.dropdown || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipeBind2"] */ .xi3(3, 42, ctx_r0.value == null ? null : ctx_r0.value.card, ctx_r0.cardPrefilled));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-wrapper_active", ctx_r0.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-input_inert", !ctx_r0.expireFocusable);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("autocomplete", ctx_r0.autocompleteExpire)("disabled", ctx_r0.computedDisabled)("readOnly", ctx_r0.readOnly)("tuiFocusable", ctx_r0.expireFocusable)("textMask", ctx_r0.maskExpire)("ngModel", ctx_r0.expire);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵattribute"] */ .uIk("id", ctx_r0.idExpire)("name", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-placeholder_raised", ctx_r0.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.expiryText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-wrapper_active", ctx_r0.isCardCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-input_prefilled", ctx_r0.cvcPrefilled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("placeholder", ctx_r0.cvcPrefilled ? "\u2022\u2022\u2022" : ctx_r0.exampleTextCVC)("disabled", ctx_r0.computedDisabled)("readOnly", ctx_r0.readOnly || ctx_r0.cvcPrefilled)("autocomplete", ctx_r0.autocompleteCVC)("textMask", ctx_r0.maskCVC)("tuiFocusable", ctx_r0.cvcFocusable)("ngModel", ctx_r0.cvc);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵattribute"] */ .uIk("id", ctx_r0.idCVC);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵclassProp"] */ .ekj("t-placeholder_raised", ctx_r0.placeholderRaised);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtextInterpolate1"] */ .hij(" ", texts_r1.cvcText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.hasCleaner);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.hasDropdown);
  }
}

const STUB = {
  card: ``,
  expire: ``,
  cvc: ``
};
const ICONS = {
  mir: `tuiIconMir`,
  visa: `tuiIconVisa`,
  electron: `tuiIconElectron`,
  mastercard: `tuiIconMastercard`,
  maestro: `tuiIconMaestro`
};
class TuiInputCardGroupedComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.AbstractTuiNullableControl {
  constructor(control, changeDetectorRef, elementRef, mode$, cardGroupedTexts$, appearance) {
    super(control, changeDetectorRef);
    this.elementRef = elementRef;
    this.mode$ = mode$;
    this.cardGroupedTexts$ = cardGroupedTexts$;
    this.appearance = appearance;
    this.expireInert = false;
    this.autocompleteEnabled = false;
    this.cardSrc = ``;
    this.exampleText = `0000 0000 0000 0000`;
    this.cardValidator = _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultCardValidator */ .sV;
    this.autofilledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_15__/* .EventEmitter */ .vpe();
    this.binChange = new _angular_core__WEBPACK_IMPORTED_MODULE_15__/* .EventEmitter */ .vpe();
    this.dropdown = ``;
    this.exampleTextCVC = `000`;
    this.maskCVC = {
      mask: new Array(3).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP),
      guide: false
    };
    this.maskCard = {
      mask: _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_0__/* .TUI_CARD_MASK */ .Aj,
      guide: false,
      pipe: conformedValue => conformedValue.trim()
    };
    this.maskExpire = {
      mask: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP, `/`, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP],
      pipe: (0,_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__/* .tuiCreateAutoCorrectedExpirePipe */ .Em)(),
      guide: false
    };
    this.open = false;
  }

  set codeLength(length) {
    this.exampleTextCVC = `0`.repeat(length);
    this.maskCVC = {
      mask: new Array(length).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_DIGIT_REGEXP),
      guide: false
    };
  }

  get nativeFocusableElement() {
    return this.inputCard ? this.inputCard.nativeElement : null;
  }

  get focused() {
    return this.open || (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsNativeFocusedIn)(this.elementRef.nativeElement);
  }

  get card() {
    var _a;

    return ((_a = this.value) === null || _a === void 0 ? void 0 : _a.card) || ``;
  }

  get expire() {
    var _a;

    return ((_a = this.value) === null || _a === void 0 ? void 0 : _a.expire) || ``;
  }

  get cvc() {
    var _a;

    return ((_a = this.value) === null || _a === void 0 ? void 0 : _a.cvc) || ``;
  }

  get hasCleaner() {
    var _a, _b;

    return !!((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.trim()) && !this.readOnly && !this.computedDisabled;
  }

  get hasDropdown() {
    return !!this.dropdown;
  }

  get defaultIcon() {
    const {
      paymentSystem
    } = this;
    return paymentSystem && ICONS[paymentSystem];
  }

  get icon() {
    return this.cardSrc || this.defaultIcon;
  }

  get bin() {
    return !this.value || this.value.card.length < 6 ? null : this.value.card.slice(0, 6);
  }

  get placeholderRaised() {
    return this.computedFocused && !this.readOnly || this.hasCardNumber;
  }

  get hasCardNumber() {
    var _a, _b;

    return !!((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.trim());
  }

  get idCard() {
    return `${this.id}_card`;
  }

  get idExpire() {
    return `${this.id}_expire`;
  }

  get idCVC() {
    return `${this.id}_cvc`;
  }

  get isCardCollapsed() {
    return this.isFocusable(this.card) && !this.cardFocused;
  }

  get autocompleteCard() {
    return this.autocompleteEnabled ? `cc-number` : `off`;
  }

  get autocompleteExpire() {
    return this.autocompleteEnabled ? `cc-exp` : `off`;
  }

  get autocompleteCVC() {
    return this.autocompleteEnabled ? `cc-csc` : `off`;
  } // Safari expiration date autofill workaround


  get name() {
    return this.autocompleteEnabled ? `ccexpiryyear` : null;
  }

  get cardPrefilled() {
    return !!this.card.match(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_NON_DIGIT_REGEXP);
  }

  get cvcPrefilled() {
    return !!this.cvc.match(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_NON_DIGIT_REGEXP);
  }

  get cardFocusable() {
    return this.focusable && !this.cardPrefilled;
  }

  get expireFocusable() {
    return this.isFocusable(this.card) && !this.expireInert;
  }

  get cvcFocusable() {
    return this.isFocusable(this.card);
  }

  get masked() {
    return this.cardPrefilled ? `*${this.card.slice(-4)}` : `*`;
  }

  onEsc() {
    this.open = false;
  }

  onArrow(element, step) {
    var _a;

    this.open = this.hasDropdown;
    this.changeDetectorRef.detectChanges();
    (_a = this.datalist) === null || _a === void 0 ? void 0 : _a.onKeyDownArrow(element, step);
  }

  handleOption(option) {
    var _a, _b;

    const {
      card = ``,
      expire = ``,
      cvc = ``
    } = option;
    const {
      bin
    } = this;
    const element = !expire && ((_a = this.inputExpire) === null || _a === void 0 ? void 0 : _a.nativeElement) || ((_b = this.inputCVC) === null || _b === void 0 ? void 0 : _b.nativeElement);
    this.updateValue({
      card,
      expire,
      cvc
    });
    this.updateBin(bin);
    this.open = false;
    this.expireInert = !!expire;
    element === null || element === void 0 ? void 0 : element.focus();
  }

  onCardChange(card) {
    const {
      value,
      bin
    } = this;
    const parsed = card.split(` `).join(``);

    if (value && value.card === parsed) {
      return;
    }

    this.updateProperty(parsed, `card`);
    this.updateBin(bin);

    if (this.cardValidator(this.card) && !this.expire && this.inputExpire) {
      this.focusExpire();
    }
  }

  onExpireChange(expire) {
    // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
    // @bad TODO: Think about a solution without mask at all
    if (!this.inputExpire) {
      return;
    }

    if (parseInt(expire.slice(0, 2), 10) > 12) {
      expire = `12${expire.slice(2)}`;
    }

    if (expire.slice(0, 2) === `00`) {
      expire = `01${expire.slice(2)}`;
    }

    this.inputExpire.nativeElement.value = expire;
    this.updateProperty(expire, `expire`);

    if (expire.length === 5) {
      this.focusCVC();
    }
  }

  onCVCChange(cvc) {
    this.updateProperty(cvc, `cvc`);
  }

  onActiveZoneChange(active) {
    this.updateFocused(active);
    this.open = active && this.open;
  }

  onMouseDown(event) {
    if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsElement)(event.target) && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsInput)(event.target)) {
      return;
    }

    event.preventDefault();
    this.focusInput();
  }

  onScroll({
    currentTarget
  }) {
    if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsElement)(currentTarget)) {
      currentTarget.scrollLeft = 0;
    }
  }

  clear() {
    this.updateValue(null);
    this.focusCard();
  }

  toggle() {
    this.open = !this.open;
  }

  writeValue(value) {
    const {
      bin
    } = this;
    super.writeValue(value);
    this.updateBin(bin);
    this.expireInert = !!this.expire && this.cardPrefilled;
  }
  /** Public API for manual focus management */


  focusCard() {
    var _a;

    (_a = this.inputCard) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
  }

  focusExpire() {
    var _a;

    (_a = this.inputExpire) === null || _a === void 0 ? void 0 : _a.nativeElement.focus({
      preventScroll: true
    });
  }

  focusCVC() {
    var _a;

    (_a = this.inputCVC) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
  }

  get cardFocused() {
    return !!this.inputCard && (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiIsNativeFocused)(this.inputCard.nativeElement);
  }

  get paymentSystem() {
    return this.value && (0,_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__/* .tuiGetPaymentSystem */ .Vn)(this.value.card);
  }

  isFocusable(card) {
    return this.focusable && (this.cardValidator(card) || this.cardPrefilled);
  }

  updateBin(oldBin) {
    const {
      bin
    } = this;

    if (bin !== oldBin && !this.cardPrefilled) {
      this.binChange.emit(bin);
    }
  }

  updateProperty(propValue, propName) {
    const {
      card,
      expire,
      cvc
    } = this.value || STUB;
    const newValue = {
      card,
      expire,
      cvc
    };
    newValue[propName] = propValue;

    if (!newValue.expire && !newValue.cvc && !newValue.card) {
      this.updateValue(null);
    } else {
      this.updateValue(newValue);
    }
  }

  focusInput() {
    var _a, _b, _c;

    const element = this.cardFocusable && ((_a = this.inputCard) === null || _a === void 0 ? void 0 : _a.nativeElement) || this.expireFocusable && ((_b = this.inputExpire) === null || _b === void 0 ? void 0 : _b.nativeElement) || ((_c = this.inputCVC) === null || _c === void 0 ? void 0 : _c.nativeElement);
    element === null || element === void 0 ? void 0 : element.focus();
  }

}

TuiInputCardGroupedComponent.ɵfac = function TuiInputCardGroupedComponent_Factory(t) {
  return new (t || TuiInputCardGroupedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NgControl */ .a5, 10), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_15__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_15__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_MODE), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_input_card_grouped_providers__WEBPACK_IMPORTED_MODULE_4__/* .TUI_INPUT_CARD_GROUPED_TEXTS */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TUI_TEXTFIELD_APPEARANCE));
};

TuiInputCardGroupedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiInputCardGroupedComponent,
  selectors: [["tui-input-card-grouped"]],
  contentQueries: function TuiInputCardGroupedComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiDataListDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_15__/* .TemplateRef */ .Rgc);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiDataListComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.dropdown = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.datalist = _t.first);
    }
  },
  viewQuery: function TuiInputCardGroupedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵviewQuery"] */ .Gf(_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.inputCard = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.inputExpire = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.inputCVC = _t.first);
    }
  },
  hostAttrs: ["data-size", "l"],
  hostBindings: function TuiInputCardGroupedComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵlistener"] */ .NdJ("$.data-mode.attr", function TuiInputCardGroupedComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      })("keydown.esc", function TuiInputCardGroupedComponent_keydown_esc_HostBindingHandler() {
        return ctx.onEsc();
      })("keydown.arrowDown.prevent", function TuiInputCardGroupedComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
        return ctx.onArrow($event.target, 1);
      })("keydown.arrowUp.prevent", function TuiInputCardGroupedComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
        return ctx.onArrow($event.target, -1);
      });
    }
  },
  inputs: {
    autocompleteEnabled: "autocompleteEnabled",
    cardSrc: "cardSrc",
    exampleText: "exampleText",
    cardValidator: "cardValidator",
    codeLength: "codeLength"
  },
  outputs: {
    autofilledChange: "autofilledChange",
    binChange: "binChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵProvidersFeature"] */ ._Bn([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiAsFocusableItemAccessor)(TuiInputCardGroupedComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiAsControl)(TuiInputCardGroupedComponent), (0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.tuiAsDataListHost)(TuiInputCardGroupedComponent), _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.MODE_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
  decls: 2,
  vars: 3,
  consts: [["tuiWrapper", "", "tuiDropdownLimitWidth", "fixed", "class", "t-common-wrapper", 3, "appearance", "readOnly", "disabled", "focus", "hover", "invalid", "tuiDropdownManual", "tuiDropdown", "tuiActiveZoneChange", "scroll", "mousedown", 4, "ngIf"], ["tuiWrapper", "", "tuiDropdownLimitWidth", "fixed", 1, "t-common-wrapper", 3, "appearance", "readOnly", "disabled", "focus", "hover", "invalid", "tuiDropdownManual", "tuiDropdown", "tuiActiveZoneChange", "scroll", "mousedown"], [1, "t-wrapper"], ["tuiPreventDefault", "click", 4, "tuiLet"], [1, "t-wrapper", "t-wrapper_expire"], ["tuiPreventDefault", "click"], ["type", "text", "placeholder", "00/00", "automation-id", "tui-input-card-grouped__expire", "inputmode", "numeric", "translate", "no", 1, "t-input", 3, "autocomplete", "disabled", "readOnly", "tuiFocusable", "textMask", "ngModel", "ngModelChange", "focus"], ["inputExpire", ""], [1, "t-placeholder"], [1, "t-wrapper", "t-wrapper_cvc"], ["type", "text", "automation-id", "tui-input-card-grouped__cvc", "inputmode", "numeric", "translate", "no", 1, "t-input", 3, "placeholder", "disabled", "readOnly", "autocomplete", "textMask", "tuiFocusable", "ngModel", "ngModelChange", "focus"], ["inputCVC", ""], [1, "t-icons"], ["class", "t-icon-outlet", 4, "ngIf"], ["src", "tuiIconCloseLarge", "class", "t-icon", 3, "click", 4, "ngIf"], ["src", "tuiIconChevronDownLarge", "class", "t-icon", 3, "t-icon_rotated", "click", 4, "ngIf"], ["type", "text", "automation-id", "tui-input-card-grouped__card", "inputmode", "numeric", "translate", "no", 1, "t-input", "t-input_card", 3, "placeholder", "autocomplete", "disabled", "readOnly", "textMask", "tuiFocusable", "ngModel", "ngModelChange", "focus"], ["inputCard", ""], ["translate", "no", "aria-hidden", "true", 1, "t-collapsed"], [1, "t-collapsed-wrapper"], [1, "t-value"], [1, "t-icon-outlet"], ["automation-id", "tui-input-card-grouped__icon", "class", "t-card", 3, "src", 4, "polymorpheusOutlet"], ["automation-id", "tui-input-card-grouped__icon", 1, "t-card", 3, "src"], ["src", "tuiIconCloseLarge", 1, "t-icon", 3, "click"], ["src", "tuiIconChevronDownLarge", 1, "t-icon", 3, "click"]],
  template: function TuiInputCardGroupedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵtemplate"] */ .YNc(0, TuiInputCardGroupedComponent_div_0_Template, 20, 45, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipe"] */ .ALo(1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵproperty"] */ .Q6J("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_15__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.cardGroupedTexts$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _core_directives_wrapper_wrapper_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiWrapperDirective */ .o, _core_directives_dropdown_dropdown_options_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiDropdownOptionsDirective */ .Ek, _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiDropdownDirective */ .t, _core_directives_dropdown_dropdown_driver_directive__WEBPACK_IMPORTED_MODULE_8__/* .TuiDropdownDriverDirective */ .V, _core_directives_dropdown_dropdown_position_directive__WEBPACK_IMPORTED_MODULE_9__/* .TuiDropdownPositionDirective */ .A, _core_directives_dropdown_dropdown_manual_directive__WEBPACK_IMPORTED_MODULE_10__/* .TuiDropdownManualDirective */ .T, _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_11__/* .TuiActiveZoneDirective */ .e, _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_18__/* .TuiLetDirective */ .L, _cdk_directives_prevent_default_prevent_default_directive__WEBPACK_IMPORTED_MODULE_12__/* .TuiPreventDefaultDirective */ .A, _angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .DefaultValueAccessor */ .Fj, _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_19__/* .TuiFocusableDirective */ .t, _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_13__/* .MaskedInputDirective */ .h, _angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NgModel */ .On, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_20__/* .PolymorpheusOutletDirective */ .Li, _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__/* .TuiSvgComponent */ .P],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .AsyncPipe */ .Ov, _pipes_format_card_format_card_pipe__WEBPACK_IMPORTED_MODULE_21__/* .TuiFormatCardPipe */ .o, _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_22__/* .TuiMapperPipe */ .c],
  styles: ["[_nghost-%COMP%]{display:block;height:var(--tui-height-l);width:29.5rem;border-radius:var(--tui-radius-m)}[data-mode=onDark][_nghost-%COMP%]{--tui-autofill: var(--tui-autofill-night)}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{width:18rem}.t-outline[_ngcontent-%COMP%]{height:100%;width:100%}.t-common-wrapper[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}.t-wrapper[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;width:100%;height:100%}.t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:7.1875rem;transform:translate(100%)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:4.0625rem}.t-wrapper_expire[_ngcontent-%COMP%]{transform:translate(100%)}.t-wrapper_active[_ngcontent-%COMP%]{transform:translate(6.5625rem)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%]{transform:translate(4.125rem)}.t-card[_ngcontent-%COMP%]{width:2rem;height:2rem;margin-right:.625rem}.t-collapsed[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;padding:0 var(--tui-padding-m);border:solid transparent;border-width:0 var(--border-end, 0) 0 var(--border-start, 0);border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none;border:0;padding-left:1rem;line-height:2.25rem;pointer-events:none}.t-collapsed[_ngcontent-%COMP%]:-webkit-autofill, .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[data-mode=onDark][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill, .t-collapsed   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, .t-collapsed   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, [data-mode=onDark][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-collapsed   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, .t-collapsed   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, [data-mode=onDark][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-collapsed   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus, .t-collapsed   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[data-size=s][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"s\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-collapsed   tui-text-area[data-size=\"s\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=l][_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"l\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-collapsed   tui-text-area[data-size=\"l\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-collapsed   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.125rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-collapsed[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-collapsed[_ngcontent-%COMP%], .t-collapsed   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-collapsed_enable-mask[_ngcontent-%COMP%]:before{content:attr(data-before)}.t-collapsed_enable-mask[_ngcontent-%COMP%]   .t-collapsed-wrapper[_ngcontent-%COMP%]{left:1.375rem}.t-collapsed-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;display:block;width:100%;height:100%;overflow:hidden}.t-value[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;bottom:0;right:100%;display:block;transform:translate(100%)}.t-value_collapsed[_ngcontent-%COMP%]{transform:translate(4ch)}.t-input[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;padding:0 var(--tui-padding-m);border:solid transparent;border-width:0 var(--border-end, 0) 0 var(--border-start, 0);border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border:0;padding:0 1rem}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, .t-input   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill, [data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, .t-input   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:hover, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:hover, [data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   tui-primitive-textfield[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, tui-primitive-textfield[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus, .t-input   tui-text-area[data-mode=\"onDark\"][_nghost-%COMP%]:-webkit-autofill:focus, tui-text-area[data-mode=\"onDark\"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"s\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-text-area[data-size=\"s\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"s\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-text-area[data-size=\"l\"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size=\"l\"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"l\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.125rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size=\"m\"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--tui-text-03)}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03)}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), [data-mode=onDark][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, [data-mode=onDark][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill, [data-mode=onDark][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill{caret-color:var(--tui-base-09);color:transparent!important;-webkit-text-fill-color:transparent!important}.t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, [data-mode=onDark][_nghost-%COMP%]   .t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button{pointer-events:none;background-color:transparent!important;-webkit-mask-image:none!important}.t-input_inert[_ngcontent-%COMP%]{pointer-events:none}.t-icons[_ngcontent-%COMP%]{position:absolute;right:.75rem;display:flex;align-items:center;height:100%}.t-icon-outlet[_ngcontent-%COMP%]{display:flex}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;color:var(--tui-text-03);position:relative;box-sizing:border-box;cursor:pointer;transition-property:color,transform}.t-icon[_ngcontent-%COMP%]:hover{color:var(--tui-text-02)}._readonly[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{pointer-events:none}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]:hover{color:var(--tui-text-01-night)}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;font:var(--tui-font-text-s);color:var(--tui-text-01);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0);margin:1.125rem 1rem;line-height:1.25rem}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}[data-mode=onDark]._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], [data-mode=onDark]._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.9375rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[data-mode=onDark][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m][data-mode=onDark]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l][data-mode=onDark]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m][data-mode=onDark]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l][data-mode=onDark]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardGroupedComponent.prototype, "autocompleteEnabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardGroupedComponent.prototype, "cardSrc", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardGroupedComponent.prototype, "exampleText", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardGroupedComponent.prototype, "cardValidator", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiRequiredSetter)()], TuiInputCardGroupedComponent.prototype, "codeLength", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiPure], TuiInputCardGroupedComponent.prototype, "isFocusable", null);

/***/ }),

/***/ 17713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ TUI_INPUT_CARD_GROUPED_TEXTS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62579);
/* harmony import */ var _taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69971);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9112);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88002);







const TUI_INPUT_CARD_GROUPED_TEXTS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__/* .InjectionToken */ .OlP(`[TUI_INPUT_CARD_GROUPED_TEXTS]: InputCardGrouped texts`, {
  factory: () => {
    const windowRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .inject */ .f3M)(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_4__/* .WINDOW */ .m9);
    const cardNumberTexts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .inject */ .f3M)(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_0__/* .TUI_CARD_NUMBER_TEXTS */ .M0);
    const expiryTexts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .inject */ .f3M)(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_0__/* .TUI_CARD_EXPIRY_TEXTS */ .Hx);
    const cvcTexts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .inject */ .f3M)(_taiga_ui_addon_commerce_tokens__WEBPACK_IMPORTED_MODULE_0__/* .TUI_CARD_CVC_TEXTS */ .p3);
    const {
      desktopSmall
    } = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__/* .inject */ .f3M)(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_MEDIA);
    const media = windowRef.matchMedia(`screen and (min-width: ${(desktopSmall - 1) / 16}em)`);
    return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiTypedFromEvent)(media, `change`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .w)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .aj)([(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(Number(media.matches)), cardNumberTexts, expiryTexts, cvcTexts])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .map */ .U)(([index, cardNumber, expiry, cvcTexts]) => ({
      cardNumberText: cardNumber[index],
      expiryText: expiry[index],
      cvcText: cvcTexts[index]
    })));
  }
});

/***/ }),

/***/ 98537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ TuiInputCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23738);
/* harmony import */ var _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60028);
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70954);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90987);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63060);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62733);
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48214);
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6707);
/* harmony import */ var _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11189);














const _c0 = ["*", [["input"]]];
const _c1 = ["*", "input"];
const icons = {
  mir: `tuiIconMir`,
  visa: `tuiIconVisa`,
  electron: `tuiIconElectron`,
  mastercard: `tuiIconMastercard`,
  maestro: `tuiIconMaestro`
};
class TuiInputCardComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.AbstractTuiControl {
  constructor(control, changeDetectorRef) {
    super(control, changeDetectorRef);
    this.cardSrc = ``;
    this.autocompleteEnabled = false;
    this.binChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__/* .EventEmitter */ .vpe();
    this.textMaskOptions = {
      mask: _taiga_ui_addon_commerce_constants__WEBPACK_IMPORTED_MODULE_0__/* .TUI_CARD_MASK */ .Aj,
      guide: false,
      pipe: conformedValue => conformedValue.trim()
    };
  }

  get defaultCardIcon() {
    const {
      paymentSystem
    } = this;
    return paymentSystem ? icons[paymentSystem] : null;
  }

  get nativeFocusableElement() {
    return this.input ? this.input.nativeFocusableElement : null;
  }

  get focused() {
    return !!this.input && this.input.focused;
  }

  get icon() {
    return this.cardSrc || this.defaultCardIcon;
  }

  get autocomplete() {
    return this.autocompleteEnabled ? `cc-number` : `off`;
  }

  get paymentSystem() {
    return (0,_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_1__/* .tuiGetPaymentSystem */ .Vn)(this.value);
  }

  get bin() {
    return this.value.length < 6 ? null : this.value.slice(0, 6);
  }

  get formattedCard() {
    return this.value.split(``).map((char, index) => index && index % 4 === 0 ? ` ${char}` : char).join(``);
  }

  onValueChange(value) {
    const parsed = value.split(` `).join(``);
    const currentBin = this.bin;
    this.updateValue(parsed);
    const newBin = this.bin;

    if (currentBin !== newBin) {
      this.binChange.emit(newBin);
    }
  }

  onFocused(focused) {
    this.updateFocused(focused);
  }

  writeValue(value) {
    const currentBin = this.bin;
    super.writeValue(value);
    const newBin = this.bin;

    if (currentBin !== newBin) {
      this.binChange.emit(newBin);
    }
  }

  getFallbackValue() {
    return ``;
  }

}

TuiInputCardComponent.ɵfac = function TuiInputCardComponent_Factory(t) {
  return new (t || TuiInputCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControl */ .a5, 10), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* .ChangeDetectorRef */ .sBO));
};

TuiInputCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiInputCardComponent,
  selectors: [["tui-input-card"]],
  viewQuery: function TuiInputCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__.TuiPrimitiveTextfieldComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.input = _t.first);
    }
  },
  inputs: {
    cardSrc: "cardSrc",
    autocompleteEnabled: "autocompleteEnabled"
  },
  outputs: {
    binChange: "binChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵProvidersFeature"] */ ._Bn([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiAsFocusableItemAccessor)(TuiInputCardComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiAsControl)(TuiInputCardComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 11,
  consts: [["tuiValueAccessor", "", 1, "t-input", 3, "tuiTextfieldCustomContent", "readOnly", "disabled", "focusable", "nativeId", "invalid", "pseudoHover", "pseudoActive", "pseudoFocus", "textMask", "value", "valueChange", "focusedChange"]],
  template: function TuiInputCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-primitive-textfield", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("valueChange", function TuiInputCardComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
        return ctx.onValueChange($event);
      })("focusedChange", function TuiInputCardComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
        return ctx.onFocused($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵprojection"] */ .Hsn(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵprojection"] */ .Hsn(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("tuiTextfieldCustomContent", ctx.icon)("readOnly", ctx.readOnly)("disabled", ctx.disabled)("focusable", ctx.focusable)("nativeId", ctx.nativeId)("invalid", ctx.computedInvalid)("pseudoHover", ctx.pseudoHover)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("textMask", ctx.textMaskOptions)("value", ctx.formattedCard);
    }
  },
  directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_4__/* .TuiPrimitiveTextfieldComponent */ .y, _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiPrimitiveTextfieldDirective */ .B, _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiValueAccessorDirective */ .n, _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiTextfieldCustomContentDirective */ .B, _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_8__/* .MaskedInputDirective */ .h],
  styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardComponent.prototype, "cardSrc", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.tuiDefaultProp)()], TuiInputCardComponent.prototype, "autocompleteEnabled", void 0);

/***/ }),

/***/ 22436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ TuiInputCardDirective)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);


let TuiInputCardDirective = /*#__PURE__*/(() => {
  class TuiInputCardDirective extends _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiTextfieldHost {
    onValueChange(value) {
      this.host.onValueChange(value);
    }

    ngAfterViewInit() {
      const {
        nativeFocusableElement
      } = this.host;

      if (!nativeFocusableElement) {
        return;
      }

      nativeFocusableElement.inputMode = `numeric`;
      nativeFocusableElement.placeholder = nativeFocusableElement.placeholder || `0000 0000 0000 0000`;
    }

  }

  TuiInputCardDirective.ɵfac = /*@__PURE__*/function () {
    let ɵTuiInputCardDirective_BaseFactory;
    return function TuiInputCardDirective_Factory(t) {
      return (ɵTuiInputCardDirective_BaseFactory || (ɵTuiInputCardDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .n5z(TuiInputCardDirective)))(t || TuiInputCardDirective);
    };
  }();

  TuiInputCardDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .lG2({
    type: TuiInputCardDirective,
    selectors: [["tui-input-card"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ ._Bn([(0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.tuiAsTextfieldHost)(TuiInputCardDirective)]), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .qOj]
  });
  return TuiInputCardDirective;
})();

/***/ }),

/***/ 22444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ TuiInputCVCComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23738);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63060);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62733);
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48214);
/* harmony import */ var _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11189);
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91030);













const _c0 = ["*"];
class TuiInputCVCComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.AbstractTuiControl {
  constructor(control, changeDetectorRef, textfieldLabelOutside) {
    super(control, changeDetectorRef);
    this.textfieldLabelOutside = textfieldLabelOutside;
    this.autocompleteEnabled = false;
    this.exampleText = `000`;
    this.textMaskOptions = {
      mask: new Array(3).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP),
      guide: false
    };
  }

  set length(length) {
    this.exampleText = `0`.repeat(length);
    this.textMaskOptions = {
      mask: new Array(length).fill(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_DIGIT_REGEXP),
      guide: false
    };
  }

  get nativeFocusableElement() {
    return this.input ? this.input.nativeFocusableElement : null;
  }

  get focused() {
    return !!this.input && this.input.focused;
  }

  get autocomplete() {
    return this.autocompleteEnabled ? `cc-csc` : `off`;
  }

  get computedPlaceholder() {
    return this.textfieldLabelOutside.labelOutside ? `` : this.exampleText;
  }

  onFocused(focused) {
    this.updateFocused(focused);
  }

  onCopy() {}

  onValueChange(value) {
    this.updateValue(value);
  }

  getFallbackValue() {
    return ``;
  }

}

TuiInputCVCComponent.ɵfac = function TuiInputCVCComponent_Factory(t) {
  return new (t || TuiInputCVCComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControl */ .a5, 10), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* .ChangeDetectorRef */ .sBO), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TUI_TEXTFIELD_LABEL_OUTSIDE));
};

TuiInputCVCComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiInputCVCComponent,
  selectors: [["tui-input-cvc"]],
  viewQuery: function TuiInputCVCComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiPrimitiveTextfieldComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.input = _t.first);
    }
  },
  inputs: {
    autocompleteEnabled: "autocompleteEnabled",
    length: "length"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵProvidersFeature"] */ ._Bn([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiAsFocusableItemAccessor)(TuiInputCVCComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiAsControl)(TuiInputCVCComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 12,
  consts: [["tuiValueAccessor", "", 1, "t-input", 3, "disabled", "readOnly", "nativeId", "textMask", "invalid", "focusable", "pseudoHover", "pseudoActive", "pseudoFocus", "value", "valueChange", "focusedChange", "copy.prevent"], ["tuiTextfield", "", "inputmode", "numeric", 3, "autocomplete", "placeholder"]],
  template: function TuiInputCVCComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-primitive-textfield", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .NdJ("valueChange", function TuiInputCVCComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
        return ctx.onValueChange($event);
      })("focusedChange", function TuiInputCVCComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
        return ctx.onFocused($event);
      })("copy.prevent", function TuiInputCVCComponent_Template_tui_primitive_textfield_copy_prevent_0_listener() {
        return ctx.onCopy();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵprojection"] */ .Hsn(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(2, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.disabled)("readOnly", ctx.readOnly)("nativeId", ctx.nativeId)("textMask", ctx.textMaskOptions)("invalid", ctx.computedInvalid)("focusable", ctx.focusable)("pseudoHover", ctx.pseudoHover)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("value", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("autocomplete", ctx.autocomplete)("placeholder", ctx.computedPlaceholder);
    }
  },
  directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiPrimitiveTextfieldComponent */ .y, _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiPrimitiveTextfieldDirective */ .B, _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiValueAccessorDirective */ .n, _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_5__/* .MaskedInputDirective */ .h, _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_6__/* .TuiTextfieldComponent */ .M],
  styles: ["[_nghost-%COMP%]{display:block;max-width:11rem;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiInputCVCComponent.prototype, "autocompleteEnabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiRequiredSetter)()], TuiInputCVCComponent.prototype, "length", null);

/***/ }),

/***/ 56021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ TuiInputExpireComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23738);
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70954);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36692);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90987);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63060);
/* harmony import */ var _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62733);
/* harmony import */ var _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48214);
/* harmony import */ var _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11189);
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91030);













const _c0 = ["*"];
class TuiInputExpireComponent extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.AbstractTuiControl {
  constructor(control, changeDetectorRef) {
    super(control, changeDetectorRef);
    this.autocompleteEnabled = false;
    this.textMaskOptions = {
      mask: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_DIGIT_REGEXP, `/`, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_DIGIT_REGEXP, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TUI_DIGIT_REGEXP],
      pipe: (0,_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__/* .tuiCreateAutoCorrectedExpirePipe */ .Em)(),
      guide: false
    };
  }

  get nativeFocusableElement() {
    return this.input ? this.input.nativeFocusableElement : null;
  }

  get focused() {
    return !!this.input && this.input.focused;
  }

  get autocomplete() {
    return this.autocompleteEnabled ? `cc-exp` : `off`;
  }

  onValueChange(value) {
    var _a; // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
    // @bad TODO: Think about a solution without mask at all


    if (!((_a = this.input) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement)) {
      return;
    }

    if (parseInt(value.slice(0, 2), 10) > 12) {
      value = `12${value.slice(2)}`;
    }

    if (value.slice(0, 2) === `00`) {
      value = `01${value.slice(2)}`;
    }

    this.input.nativeFocusableElement.value = value;

    if (this.value !== value) {
      this.updateValue(value);
    }
  }

  onFocused(focused) {
    this.updateFocused(focused);
  }

  getFallbackValue() {
    return ``;
  }

}

TuiInputExpireComponent.ɵfac = function TuiInputExpireComponent_Factory(t) {
  return new (t || TuiInputExpireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControl */ .a5, 10), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* .ChangeDetectorRef */ .sBO));
};

TuiInputExpireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiInputExpireComponent,
  selectors: [["tui-input-expire"]],
  viewQuery: function TuiInputExpireComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__.TuiPrimitiveTextfieldComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.input = _t.first);
    }
  },
  inputs: {
    autocompleteEnabled: "autocompleteEnabled"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵProvidersFeature"] */ ._Bn([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAsFocusableItemAccessor)(TuiInputExpireComponent), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiAsControl)(TuiInputExpireComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵInheritDefinitionFeature"] */ .qOj],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 10,
  consts: [["tuiValueAccessor", "", 1, "t-input", 3, "nativeId", "disabled", "textMask", "readOnly", "invalid", "pseudoHover", "pseudoActive", "pseudoFocus", "value", "valueChange", "focusedChange"], ["tuiTextfield", "", "inputmode", "numeric", "placeholder", "00/00"]],
  template: function TuiInputExpireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-primitive-textfield", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("valueChange", function TuiInputExpireComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
        return ctx.onValueChange($event);
      })("focusedChange", function TuiInputExpireComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
        return ctx.onFocused($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵprojection"] */ .Hsn(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("nativeId", ctx.nativeId)("disabled", ctx.disabled)("textMask", ctx.textMaskOptions)("readOnly", ctx.readOnly)("invalid", ctx.computedInvalid)("pseudoHover", ctx.pseudoHover)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("value", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵattribute"] */ .uIk("autocomplete", ctx.autocomplete);
    }
  },
  directives: [_core_components_primitive_textfield_primitive_textfield_component__WEBPACK_IMPORTED_MODULE_3__/* .TuiPrimitiveTextfieldComponent */ .y, _core_components_primitive_textfield_primitive_textfield_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiPrimitiveTextfieldDirective */ .B, _kit_directives_value_accessor_value_accessor_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiValueAccessorDirective */ .n, _kit_directives_mask_legacy_mask__WEBPACK_IMPORTED_MODULE_6__/* .MaskedInputDirective */ .h, _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__/* .TuiTextfieldComponent */ .M],
  styles: ["[_nghost-%COMP%]{display:block;max-width:11rem;border-radius:var(--tui-radius-m);text-align:left}.t-input[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.tuiDefaultProp)()], TuiInputExpireComponent.prototype, "autocompleteEnabled", void 0);

/***/ }),

/***/ 71179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HF": () => (/* binding */ TUI_MONEY_DEFAULT_DEFAULT_OPTIONS),
/* harmony export */   "qB": () => (/* binding */ TUI_MONEY_OPTIONS),
/* harmony export */   "iA": () => (/* binding */ tuiMoneyOptionsProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

const TUI_MONEY_DEFAULT_DEFAULT_OPTIONS = {
  decimal: `not-zero`,
  currency: "RUB"
  /* Ruble */
  ,
  sign: `negative-only`,
  colored: false,
  precision: 2,
  singleColor: false
};
const TUI_MONEY_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[TUI_MONEY_OPTIONS]: Default parameters for money component`, {
  factory: () => TUI_MONEY_DEFAULT_DEFAULT_OPTIONS
});
const tuiMoneyOptionsProvider = options => ({
  provide: TUI_MONEY_OPTIONS,
  useValue: Object.assign(Object.assign({}, TUI_MONEY_DEFAULT_DEFAULT_OPTIONS), options)
});

/***/ }),

/***/ 16996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ TuiMoneyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);
/* harmony import */ var _money_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71179);
/* harmony import */ var _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74788);
/* harmony import */ var _pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94354);
/* harmony import */ var _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41055);
/* harmony import */ var _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2270);
/* harmony import */ var _pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99886);









class TuiMoneyComponent {
  constructor(options) {
    this.options = options;
    this.value = NaN;
    this.decimal = this.options.decimal;
    this.currency = this.options.currency;
    this.sign = this.options.sign;
    this.colored = this.options.colored;
    this.precision = this.options.precision;
    this.singleColor = this.options.singleColor;
  }

  get signSymbol() {
    return (0,_utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_2__/* .tuiFormatSignSymbol */ .$)(this.value, this.sign);
  }

  get red() {
    return this.colored && (this.signSymbol === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_MINUS || this.value < 0 && this.sign !== `force-positive`);
  }

  get green() {
    return this.colored && (this.signSymbol === _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_PLUS || this.value > 0 && this.sign !== `force-negative`);
  }

  get inheritColor() {
    return this.singleColor || this.value === 0 && this.colored;
  }

}

TuiMoneyComponent.ɵfac = function TuiMoneyComponent_Factory(t) {
  return new (t || TuiMoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_money_options__WEBPACK_IMPORTED_MODULE_1__/* .TUI_MONEY_OPTIONS */ .qB));
};

TuiMoneyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiMoneyComponent,
  selectors: [["tui-money"]],
  hostVars: 6,
  hostBindings: function TuiMoneyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵclassProp"] */ .ekj("_red", ctx.red)("_green", ctx.green)("_inherit-color", ctx.inheritColor);
    }
  },
  inputs: {
    value: "value",
    decimal: "decimal",
    currency: "currency",
    sign: "sign",
    colored: "colored",
    precision: "precision",
    singleColor: "singleColor"
  },
  decls: 9,
  vars: 16,
  consts: [["automation-id", "tui-money__sign", 3, "textContent"], ["automation-id", "tui-money__integer-part", 3, "textContent"], [1, "t-lighter"], ["automation-id", "tui-money__fraction-part", 3, "textContent"], ["automation-id", "tui-money__currency", 1, "t-currency", 3, "textContent"]],
  template: function TuiMoneyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .ALo(1, "tuiSignSymbol");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(2, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .ALo(3, "tuiIntegerPart");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .ALo(6, "tuiFractionPart");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ ._UZ(7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .ALo(8, "tuiCurrency");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind2"] */ .xi3(1, 4, ctx.value, ctx.sign));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind2"] */ .xi3(3, 7, ctx.value, ctx.precision));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind3"] */ .Dn7(6, 10, ctx.value, ctx.decimal, ctx.precision));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Q6J("textContent", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .lcZ(8, 14, ctx.currency));
    }
  },
  pipes: [_pipes_sign_symbol_pipe__WEBPACK_IMPORTED_MODULE_3__/* .TuiSignSymbolPipe */ .e, _pipes_integer_part_pipe__WEBPACK_IMPORTED_MODULE_4__/* .TuiIntegerPartPipe */ .w, _pipes_fraction_part_pipe__WEBPACK_IMPORTED_MODULE_5__/* .TuiFractionPartPipe */ .A, _pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_6__/* .TuiCurrencyPipe */ .i],
  styles: ["[_nghost-%COMP%]{white-space:nowrap}._red[_nghost-%COMP%]{color:var(--tui-negative)}._green[_nghost-%COMP%]{color:var(--tui-positive)}[_nghost-%COMP%]:not(._inherit-color)   .t-lighter[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-currency[_ngcontent-%COMP%]:not(:empty){padding-left:.2rem}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "decimal", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "currency", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "sign", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "colored", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "precision", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.tuiDefaultProp)()], TuiMoneyComponent.prototype, "singleColor", void 0);

/***/ }),

/***/ 2270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ TuiFractionPartPipe)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);



let TuiFractionPartPipe = /*#__PURE__*/(() => {
  class TuiFractionPartPipe {
    constructor(numberFormat) {
      this.numberFormat = numberFormat;
    }

    transform(value, decimal, precision) {
      return (0,_utils_format_fraction_part__WEBPACK_IMPORTED_MODULE_1__/* .tuiFormatFractionPart */ .O)({
        value,
        decimal,
        precision,
        numberFormat: this.numberFormat
      });
    }

  }

  TuiFractionPartPipe.ɵfac = function TuiFractionPartPipe_Factory(t) {
    return new (t || TuiFractionPartPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_NUMBER_FORMAT, 16));
  };

  TuiFractionPartPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiFractionPart",
    type: TuiFractionPartPipe,
    pure: true
  });
  return TuiFractionPartPipe;
})();

/***/ }),

/***/ 41055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TuiIntegerPartPipe)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);


let TuiIntegerPartPipe = /*#__PURE__*/(() => {
  class TuiIntegerPartPipe {
    constructor(numberFormat) {
      this.numberFormat = numberFormat;
    }

    transform(value, precision) {
      return (0,_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.tuiFormatNumber)(Math.floor(Math.abs(Number(value.toFixed(precision)))), this.numberFormat);
    }

  }

  TuiIntegerPartPipe.ɵfac = function TuiIntegerPartPipe_Factory(t) {
    return new (t || TuiIntegerPartPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_NUMBER_FORMAT, 16));
  };

  TuiIntegerPartPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiIntegerPart",
    type: TuiIntegerPartPipe,
    pure: true
  });
  return TuiIntegerPartPipe;
})();

/***/ }),

/***/ 94354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TuiSignSymbolPipe)
/* harmony export */ });
/* harmony import */ var _utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);


let TuiSignSymbolPipe = /*#__PURE__*/(() => {
  class TuiSignSymbolPipe {
    transform(value, sign) {
      return (0,_utils_format_sign_symbol__WEBPACK_IMPORTED_MODULE_0__/* .tuiFormatSignSymbol */ .$)(value, sign);
    }

  }

  TuiSignSymbolPipe.ɵfac = function TuiSignSymbolPipe_Factory(t) {
    return new (t || TuiSignSymbolPipe)();
  };

  TuiSignSymbolPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiSignSymbol",
    type: TuiSignSymbolPipe,
    pure: true
  });
  return TuiSignSymbolPipe;
})();

/***/ }),

/***/ 31593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ tuiFormatFractionPart)
/* harmony export */ });
function tuiFormatFractionPart(options) {
  const {
    value,
    decimal,
    numberFormat,
    precision
  } = options;
  const fraction = value.toFixed(precision).split(`.`)[1];
  const shouldShow = decimal !== `never` && (decimal === `always` || !!parseInt(fraction, 10));
  return shouldShow ? `${numberFormat.decimalSeparator}${fraction}` : ``;
}

/***/ }),

/***/ 49173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ tuiFormatSignSymbol)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36692);

function tuiFormatSignSymbol(value, sign) {
  if (sign === `never` || !value || sign === `negative-only` && value > 0) {
    return ``;
  }

  if (sign === `force-negative` || value < 0 && sign !== `force-positive`) {
    return _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_MINUS;
  }

  return _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.CHAR_PLUS;
}

/***/ }),

/***/ 60028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Aj": () => (/* reexport */ TUI_CARD_MASK),
  "k5": () => (/* reexport */ cardHolderMask),
  "sV": () => (/* reexport */ tuiDefaultCardValidator)
});

// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
;// CONCATENATED MODULE: ./projects/addon-commerce/constants/card-holder-mask.ts

const ALLOWED_REGEXP = /[A-Z]| /;
const MAP = {
  А: `F`,
  В: `D`,
  Г: `U`,
  Д: `L`,
  Е: `T`,
  З: `P`,
  И: `B`,
  Й: `Q`,
  К: `R`,
  Л: `K`,
  М: `V`,
  Н: `Y`,
  О: `J`,
  П: `G`,
  Р: `H`,
  С: `C`,
  Т: `N`,
  У: `E`,
  Ф: `A`,
  Ц: `W`,
  Ч: `X`,
  Ш: `I`,
  Щ: `O`,
  Ы: `S`,
  Ь: `M`,
  Я: `Z`
};

function toEnglishUppercase(char) {
  const uppercase = char.toUpperCase();
  const result = ALLOWED_REGEXP.test(uppercase) ? uppercase : MAP[uppercase];
  return result || null;
}

const cardHolderMask = (0,core.tuiCreateCorrectionMask)(ALLOWED_REGEXP, toEnglishUppercase);
;// CONCATENATED MODULE: ./projects/addon-commerce/constants/card-mask.ts

/**
 * @internal
 */

const TUI_CARD_MASK = [core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, ` `, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, ` `, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, ` `, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, ` `, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP, core.TUI_DIGIT_REGEXP];
// EXTERNAL MODULE: ./projects/addon-commerce/utils/index.ts + 7 modules
var utils = __webpack_require__(70954);
;// CONCATENATED MODULE: ./projects/addon-commerce/constants/default-card-validator.ts

const tuiDefaultCardValidator = card => card.length > 11 && (0,utils/* tuiIsCardLengthValid */.ul)(card) && (0,utils/* tuiIsCardNumberValid */.Tb)(card);
;// CONCATENATED MODULE: ./projects/addon-commerce/constants/index.ts




/***/ }),

/***/ 23121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TUI_CARD_CVC_TEXTS": () => (/* reexport */ tokens/* TUI_CARD_CVC_TEXTS */.p3),
  "TUI_CARD_EXPIRY_TEXTS": () => (/* reexport */ tokens/* TUI_CARD_EXPIRY_TEXTS */.Hx),
  "TUI_CARD_MASK": () => (/* reexport */ constants/* TUI_CARD_MASK */.Aj),
  "TUI_CARD_NUMBER_TEXTS": () => (/* reexport */ tokens/* TUI_CARD_NUMBER_TEXTS */.M0),
  "TUI_INPUT_CARD_GROUPED_TEXTS": () => (/* reexport */ input_card_grouped_providers/* TUI_INPUT_CARD_GROUPED_TEXTS */.m),
  "TUI_MONEY_DEFAULT_DEFAULT_OPTIONS": () => (/* reexport */ money_options/* TUI_MONEY_DEFAULT_DEFAULT_OPTIONS */.HF),
  "TUI_MONEY_OPTIONS": () => (/* reexport */ money_options/* TUI_MONEY_OPTIONS */.qB),
  "TuiCardComponent": () => (/* reexport */ card_component/* TuiCardComponent */.S),
  "TuiCardModule": () => (/* reexport */ TuiCardModule),
  "TuiCurrency": () => (/* reexport */ TuiCurrency),
  "TuiCurrencyCode": () => (/* reexport */ TuiCurrencyCode),
  "TuiCurrencyPipe": () => (/* reexport */ currency_pipe/* TuiCurrencyPipe */.i),
  "TuiCurrencyPipeModule": () => (/* reexport */ TuiCurrencyPipeModule),
  "TuiFormatCardModule": () => (/* reexport */ TuiFormatCardModule),
  "TuiFormatCardPipe": () => (/* reexport */ format_card_pipe/* TuiFormatCardPipe */.o),
  "TuiFractionPartPipe": () => (/* reexport */ fraction_part_pipe/* TuiFractionPartPipe */.A),
  "TuiInputCVCComponent": () => (/* reexport */ input_cvc_component/* TuiInputCVCComponent */.U),
  "TuiInputCVCModule": () => (/* reexport */ TuiInputCVCModule),
  "TuiInputCardComponent": () => (/* reexport */ input_card_component/* TuiInputCardComponent */.z),
  "TuiInputCardDirective": () => (/* reexport */ input_card_directive/* TuiInputCardDirective */.a),
  "TuiInputCardGroupedComponent": () => (/* reexport */ input_card_grouped_component/* TuiInputCardGroupedComponent */.c),
  "TuiInputCardGroupedModule": () => (/* reexport */ TuiInputCardGroupedModule),
  "TuiInputCardModule": () => (/* reexport */ TuiInputCardModule),
  "TuiInputExpireComponent": () => (/* reexport */ input_expire_component/* TuiInputExpireComponent */.h),
  "TuiInputExpireModule": () => (/* reexport */ TuiInputExpireModule),
  "TuiIntegerPartPipe": () => (/* reexport */ integer_part_pipe/* TuiIntegerPartPipe */.w),
  "TuiMoneyComponent": () => (/* reexport */ money_component/* TuiMoneyComponent */.o),
  "TuiMoneyModule": () => (/* reexport */ TuiMoneyModule),
  "TuiSignSymbolPipe": () => (/* reexport */ sign_symbol_pipe/* TuiSignSymbolPipe */.e),
  "cardHolderMask": () => (/* reexport */ constants/* cardHolderMask */.k5),
  "tuiCardExpireValidator": () => (/* reexport */ tuiCardExpireValidator),
  "tuiCardNumberValidator": () => (/* reexport */ tuiCardNumberValidator),
  "tuiCreateAutoCorrectedExpirePipe": () => (/* reexport */ utils/* tuiCreateAutoCorrectedExpirePipe */.Em),
  "tuiCreateLuhnValidator": () => (/* reexport */ tuiCreateLuhnValidator),
  "tuiDefaultCardValidator": () => (/* reexport */ constants/* tuiDefaultCardValidator */.sV),
  "tuiFormatCurrency": () => (/* reexport */ utils/* tuiFormatCurrency */.BP),
  "tuiFormatFractionPart": () => (/* reexport */ format_fraction_part/* tuiFormatFractionPart */.O),
  "tuiFormatSignSymbol": () => (/* reexport */ format_sign_symbol/* tuiFormatSignSymbol */.$),
  "tuiGetCurrencySymbol": () => (/* reexport */ utils/* tuiGetCurrencySymbol */.CE),
  "tuiGetPaymentSystem": () => (/* reexport */ utils/* tuiGetPaymentSystem */.Vn),
  "tuiIsCardLengthValid": () => (/* reexport */ utils/* tuiIsCardLengthValid */.ul),
  "tuiIsCardNumberValid": () => (/* reexport */ utils/* tuiIsCardNumberValid */.Tb),
  "tuiIsElectron": () => (/* reexport */ utils/* tuiIsElectron */.gP),
  "tuiIsExpireValid": () => (/* reexport */ utils/* tuiIsExpireValid */.Sr),
  "tuiIsMaestro": () => (/* reexport */ utils/* tuiIsMaestro */.fN),
  "tuiIsMastercard": () => (/* reexport */ utils/* tuiIsMastercard */.g$),
  "tuiIsMir": () => (/* reexport */ utils/* tuiIsMir */.er),
  "tuiIsVisa": () => (/* reexport */ utils/* tuiIsVisa */.tJ),
  "tuiMoneyOptionsProvider": () => (/* reexport */ money_options/* tuiMoneyOptionsProvider */.iA)
});

// EXTERNAL MODULE: ./projects/addon-commerce/components/card/card.component.ts
var card_component = __webpack_require__(32675);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/card/card.module.ts




let TuiCardModule = /*#__PURE__*/(() => {
  class TuiCardModule {}

  TuiCardModule.ɵfac = function TuiCardModule_Factory(t) {
    return new (t || TuiCardModule)();
  };

  TuiCardModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiCardModule
  });
  TuiCardModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiSvgModule]]
  });
  return TuiCardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiCardModule, {
    declarations: [card_component/* TuiCardComponent */.S],
    imports: [common/* CommonModule */.ez, core.TuiSvgModule],
    exports: [card_component/* TuiCardComponent */.S]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/components/card/index.ts


// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.component.ts
var input_card_component = __webpack_require__(98537);
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card/input-card.directive.ts
var input_card_directive = __webpack_require__(22436);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-card/input-card.module.ts





let TuiInputCardModule = /*#__PURE__*/(() => {
  class TuiInputCardModule {}

  TuiInputCardModule.ɵfac = function TuiInputCardModule_Factory(t) {
    return new (t || TuiInputCardModule)();
  };

  TuiInputCardModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiInputCardModule
  });
  TuiInputCardModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule]]
  });
  return TuiInputCardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiInputCardModule, {
    declarations: [input_card_component/* TuiInputCardComponent */.z, input_card_directive/* TuiInputCardDirective */.a],
    imports: [kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule],
    exports: [input_card_component/* TuiInputCardComponent */.z, input_card_directive/* TuiInputCardDirective */.a, core.TuiTextfieldComponent]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-card/index.ts



// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card-grouped/input-card-grouped.component.ts
var input_card_grouped_component = __webpack_require__(72602);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/currency/currency.pipe.ts
var currency_pipe = __webpack_require__(99886);
;// CONCATENATED MODULE: ./projects/addon-commerce/pipes/currency/currency.module.ts


let TuiCurrencyPipeModule = /*#__PURE__*/(() => {
  class TuiCurrencyPipeModule {}

  TuiCurrencyPipeModule.ɵfac = function TuiCurrencyPipeModule_Factory(t) {
    return new (t || TuiCurrencyPipeModule)();
  };

  TuiCurrencyPipeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiCurrencyPipeModule
  });
  TuiCurrencyPipeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({});
  return TuiCurrencyPipeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiCurrencyPipeModule, {
    declarations: [currency_pipe/* TuiCurrencyPipe */.i],
    exports: [currency_pipe/* TuiCurrencyPipe */.i]
  });
})();
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/format-card/format-card.pipe.ts
var format_card_pipe = __webpack_require__(9063);
;// CONCATENATED MODULE: ./projects/addon-commerce/pipes/format-card/format-card.module.ts


let TuiFormatCardModule = /*#__PURE__*/(() => {
  class TuiFormatCardModule {}

  TuiFormatCardModule.ɵfac = function TuiFormatCardModule_Factory(t) {
    return new (t || TuiFormatCardModule)();
  };

  TuiFormatCardModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiFormatCardModule
  });
  TuiFormatCardModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({});
  return TuiFormatCardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiFormatCardModule, {
    declarations: [format_card_pipe/* TuiFormatCardPipe */.o],
    exports: [format_card_pipe/* TuiFormatCardPipe */.o]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/pipes/index.ts




// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-card-grouped/input-card-grouped.module.ts









let TuiInputCardGroupedModule = /*#__PURE__*/(() => {
  class TuiInputCardGroupedModule {}

  TuiInputCardGroupedModule.ɵfac = function TuiInputCardGroupedModule_Factory(t) {
    return new (t || TuiInputCardGroupedModule)();
  };

  TuiInputCardGroupedModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiInputCardGroupedModule
  });
  TuiInputCardGroupedModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TextMaskModule, cdk.TuiFocusableModule, core.TuiSvgModule, core.TuiWrapperModule, cdk.TuiActiveZoneModule, cdk.TuiMapperPipeModule, core.TuiDropdownModule, cdk.TuiPreventDefaultModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiLetModule, TuiFormatCardModule]]
  });
  return TuiInputCardGroupedModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiInputCardGroupedModule, {
    declarations: [input_card_grouped_component/* TuiInputCardGroupedComponent */.c],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TextMaskModule, cdk.TuiFocusableModule, core.TuiSvgModule, core.TuiWrapperModule, cdk.TuiActiveZoneModule, cdk.TuiMapperPipeModule, core.TuiDropdownModule, cdk.TuiPreventDefaultModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiLetModule, TuiFormatCardModule],
    exports: [input_card_grouped_component/* TuiInputCardGroupedComponent */.c]
  });
})();
// EXTERNAL MODULE: ./projects/addon-commerce/components/input-card-grouped/input-card-grouped.providers.ts
var input_card_grouped_providers = __webpack_require__(17713);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-card-grouped/index.ts



// EXTERNAL MODULE: ./projects/addon-commerce/components/input-cvc/input-cvc.component.ts
var input_cvc_component = __webpack_require__(22444);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-cvc/input-cvc.module.ts




let TuiInputCVCModule = /*#__PURE__*/(() => {
  class TuiInputCVCModule {}

  TuiInputCVCModule.ɵfac = function TuiInputCVCModule_Factory(t) {
    return new (t || TuiInputCVCModule)();
  };

  TuiInputCVCModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiInputCVCModule
  });
  TuiInputCVCModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule]]
  });
  return TuiInputCVCModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiInputCVCModule, {
    declarations: [input_cvc_component/* TuiInputCVCComponent */.U],
    imports: [kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule],
    exports: [input_cvc_component/* TuiInputCVCComponent */.U]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-cvc/index.ts


// EXTERNAL MODULE: ./projects/addon-commerce/components/input-expire/input-expire.component.ts
var input_expire_component = __webpack_require__(56021);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-expire/input-expire.module.ts




let TuiInputExpireModule = /*#__PURE__*/(() => {
  class TuiInputExpireModule {}

  TuiInputExpireModule.ɵfac = function TuiInputExpireModule_Factory(t) {
    return new (t || TuiInputExpireModule)();
  };

  TuiInputExpireModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiInputExpireModule
  });
  TuiInputExpireModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule]]
  });
  return TuiInputExpireModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiInputExpireModule, {
    declarations: [input_expire_component/* TuiInputExpireComponent */.h],
    imports: [kit.TextMaskModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, kit.TuiValueAccessorModule],
    exports: [input_expire_component/* TuiInputExpireComponent */.h]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/components/input-expire/index.ts


// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/pipes/fraction-part.pipe.ts
var fraction_part_pipe = __webpack_require__(2270);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/pipes/integer-part.pipe.ts
var integer_part_pipe = __webpack_require__(41055);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/pipes/sign-symbol.pipe.ts
var sign_symbol_pipe = __webpack_require__(94354);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/money/money.module.ts







let TuiMoneyModule = /*#__PURE__*/(() => {
  class TuiMoneyModule {}

  TuiMoneyModule.ɵfac = function TuiMoneyModule_Factory(t) {
    return new (t || TuiMoneyModule)();
  };

  TuiMoneyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiMoneyModule
  });
  TuiMoneyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, TuiCurrencyPipeModule]]
  });
  return TuiMoneyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiMoneyModule, {
    declarations: [money_component/* TuiMoneyComponent */.o, fraction_part_pipe/* TuiFractionPartPipe */.A, integer_part_pipe/* TuiIntegerPartPipe */.w, sign_symbol_pipe/* TuiSignSymbolPipe */.e],
    imports: [common/* CommonModule */.ez, TuiCurrencyPipeModule],
    exports: [money_component/* TuiMoneyComponent */.o]
  });
})();
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money-options.ts
var money_options = __webpack_require__(71179);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/utils/format-fraction-part.ts
var format_fraction_part = __webpack_require__(31593);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/utils/format-sign-symbol.ts
var format_sign_symbol = __webpack_require__(49173);
;// CONCATENATED MODULE: ./projects/addon-commerce/components/money/index.ts








;// CONCATENATED MODULE: ./projects/addon-commerce/components/index.ts






// EXTERNAL MODULE: ./projects/addon-commerce/constants/index.ts + 3 modules
var constants = __webpack_require__(60028);
;// CONCATENATED MODULE: ./projects/addon-commerce/enums/currency.ts
/**
 * **Active ISO 4217 alphabetic currency codes**
 *
 * @description The ISO 4217 classification is used to describe alphabetic and numeric currency codes.
 * @description Alphabetic code is also called "alfa-3".
 *
 * @link https://en.wikipedia.org/wiki/ISO_4217
 */
var TuiCurrency = /*#__PURE__*/(() => {
  (function (TuiCurrency) {
    /**
     * Russian ruble
     *
     * @description Numeric code: 643
     * @description Alphabetic code: RUB
     * @description Countries and territories: Russia
     * @description Currency symbol: ₽
     */
    TuiCurrency["Ruble"] = "RUB";
    /**
     * Euro
     *
     * @description Numeric code: 978
     * @description Alphabetic code: EUR
     * @description Countries and territories: Åland Islands (AX), European Union (EU), Andorra (AD), Austria (AT), Belgium (BE), Cyprus (CY), Estonia (EE), Finland (FI), France (FR), French Southern and Antarctic Lands (TF), Germany (DE), Greece (GR), Guadeloupe (GP), Ireland (IE), Italy (IT), Latvia (LV), Lithuania (LT), Luxembourg (LU), Malta (MT), French Guiana (GF), Martinique (MQ), Mayotte (YT), Monaco (MC), Montenegro (ME), Netherlands (NL), Portugal (PT), Réunion (RE), Saint Barthélemy (BL), Saint Martin (MF), Saint Pierre and Miquelon (PM), San Marino (SM), Slovakia (SK), Slovenia (SI), Spain (ES), Vatican City (VA)
     * @description Currency symbol: €
     */

    TuiCurrency["Euro"] = "EUR";
    /**
     * United States dollar
     *
     * @description Numeric code: 840
     * @description Alphabetic code: USD
     * @description Countries and territories: United States, American Samoa (AS), British Indian Ocean Territory (IO) (also uses GBP), British Virgin Islands (VG), Caribbean Netherlands (BQ – Bonaire, Sint Eustatius and Saba), Ecuador (EC), El Salvador (SV), Guam (GU), Marshall Islands (MH), Federated States of Micronesia (FM), Northern Mariana Islands (MP), Palau (PW), Panama (PA) (as well as Panamanian Balboa), Puerto Rico (PR), Timor-Leste (TL), Turks and Caicos Islands (TC), U.S. Virgin Islands (VI), United States Minor Outlying Islands (UM)
     * @description Currency symbol: $
     */

    TuiCurrency["Dollar"] = "USD";
    /**
     * Pound sterling
     *
     * @description Numeric code: 826
     * @description Alphabetic code: GBP
     * @description Countries and territories: United Kingdom, Isle of Man (IM, see Manx pound), Jersey (JE, see Jersey pound), Guernsey (GG, see Guernsey pound), Tristan da Cunha (SH-TA)
     * @description Currency symbol: £
     */

    TuiCurrency["Pound"] = "GBP";
    /**
     * Thai baht
     *
     * @description Numeric code: 764
     * @description Alphabetic code: THB
     * @description Countries and territories: Thailand
     * @description Currency symbol: ฿
     */

    TuiCurrency["Baht"] = "THB";
    /**
     * Turkish lira
     *
     * @description Numeric code: 949
     * @description Alphabetic code: TRY
     * @description Countries and territories: Turkey
     * @description Currency symbol: ₺
     */

    TuiCurrency["TurkishLira"] = "TRY";
    /**
     * Chinese yuan
     *
     * @description Numeric code: 156
     * @description Alphabetic code: CNY
     * @description Countries and territories: China
     * @description Currency symbol: CN¥
     */

    TuiCurrency["YuanRenminbi"] = "CNY";
    /**
     * Kazakhstani tenge
     *
     * @description Numeric code: 398
     * @description Alphabetic code: KZT
     * @description Countries and territories: Kazakhstan
     * @description Currency symbol: ₸
     */

    TuiCurrency["Tenge"] = "KZT";
    /**
     * Israeli new shekel
     *
     * @description Numeric code: 376
     * @description Alphabetic code: ILS
     * @description Countries and territories: Israel
     * @description Currency symbol: ₪
     */

    TuiCurrency["IsraeliShekel"] = "ILS";
    /**
     * Indian rupee
     *
     * @description Numeric code: 356
     * @description Alphabetic code: INR
     * @description Countries and territories: India, Bhutan
     * @description Currency symbol: ₹
     */

    TuiCurrency["IndianRupee"] = "INR";
    /**
     * Japanese yen
     *
     * @description Numeric code: 392
     * @description Alphabetic code: JPY
     * @description Countries and territories: Japan
     * @description Currency symbol: ¥
     */

    TuiCurrency["Yen"] = "JPY";
    /**
     * South Korean won
     *
     * @description Numeric code: 410
     * @description Alphabetic code: KRW
     * @description Countries and territories: South Korea
     * @description Currency symbol: ₩
     */

    TuiCurrency["Won"] = "KRW";
    /**
     * Swiss franc
     *
     * @description Numeric code: 756
     * @description Alphabetic code: CHF
     * @description Countries and territories: Switzerland, Liechtenstein (LI)
     * @description Currency symbol: ₣
     */

    TuiCurrency["SwissFranc"] = "CHF";
    /**
     * Singapore dollar
     *
     * @description Numeric code: 702
     * @description Alphabetic code: SGD
     * @description Countries and territories: Singapore
     * @description Currency symbol: S$
     */

    TuiCurrency["SingaporeDollar"] = "SGD";
    /**
     * Australian dollar
     *
     * @description Numeric code: 036
     * @description Alphabetic code: AUD
     * @description Countries and territories: Australia, Christmas Island (CX), Cocos (Keeling) Islands (CC), Heard Island and McDonald Islands (HM), Kiribati (KI), Nauru (NR), Norfolk Island (NF), Tuvalu (TV)
     * @description Currency symbol: A$
     */

    TuiCurrency["AustralianDollar"] = "AUD";
    /**
     * Hong Kong dollar
     *
     * @description Numeric code: 344
     * @description Alphabetic code: HKD
     * @description Countries and territories: Hong Kong
     * @description Currency symbol: HK$
     */

    TuiCurrency["HongKongDollar"] = "HKD";
    /**
     * Canadian dollar
     *
     * @description Numeric code: 124
     * @description Alphabetic code: CAD
     * @description Countries and territories: Canada
     * @description Currency symbol: C$
     */

    TuiCurrency["CanadianDollar"] = "CAD";
    /**
     * Armenian dram
     *
     * @description Numeric code: 051
     * @description Alphabetic code: AMD
     * @description Countries and territories: Armenia
     * @description Currency symbol: ֏
     */

    TuiCurrency["ArmenianDram"] = "AMD";
    /**
     * Ukrainian hryvnia
     *
     * @description Numeric code: 980
     * @description Alphabetic code: UAH
     * @description Countries and territories: Ukraine
     * @description Currency symbol: ₴
     */

    TuiCurrency["Hryvnia"] = "UAH";
    /**
     * Mexican peso
     *
     * @description Numeric code: 484
     * @description Alphabetic code: MXN
     * @description Countries and territories: Mexico
     * @description Currency symbol: $
     */

    TuiCurrency["MexicanPeso"] = "MXN";
    /**
     * Uzbek sum
     *
     * @description Numeric code: 860
     * @description Alphabetic code: UZS
     * @description Countries and territories: Uzbekistan
     * @description Currency symbol: So'm
     */

    TuiCurrency["UzbekSum"] = "UZS";
    /**
     * Kyrgyzstani som
     *
     * @description Numeric code: 417
     * @description Alphabetic code: KGS
     * @description Countries and territories: Kyrgyzstan
     * @description Currency symbol: c
     */

    TuiCurrency["KyrgyzstanSom"] = "KGS";
    /**
     * United Arab Emirates dirham
     *
     * @description Numeric code: 784
     * @description Alphabetic code: AED
     * @description Countries and territories: United Arab Emirates
     * @description Currency symbol: Dh
     */

    TuiCurrency["Dirham"] = "AED";
  })(TuiCurrency || (TuiCurrency = {}));

  return TuiCurrency;
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/enums/currency-code.ts
/**
 * **Active ISO 4217 numeric currency codes**
 *
 * @description The ISO 4217 classification is used to describe alphabetic and numeric currency codes.
 * @description Numeric code is also called "number-3".
 *
 * @link https://en.wikipedia.org/wiki/ISO_4217
 */
var TuiCurrencyCode = /*#__PURE__*/(() => {
  (function (TuiCurrencyCode) {
    /**
     * Russian ruble
     *
     * @description Numeric code: 643
     * @description Alphabetic code: RUB
     * @description Countries and territories: Russia
     * @description Currency symbol: ₽
     */
    TuiCurrencyCode["Ruble"] = "643";
    /**
     * Euro
     *
     * @description Numeric code: 978
     * @description Alphabetic code: EUR
     * @description Countries and territories: Åland Islands (AX), European Union (EU), Andorra (AD), Austria (AT), Belgium (BE), Cyprus (CY), Estonia (EE), Finland (FI), France (FR), French Southern and Antarctic Lands (TF), Germany (DE), Greece (GR), Guadeloupe (GP), Ireland (IE), Italy (IT), Latvia (LV), Lithuania (LT), Luxembourg (LU), Malta (MT), French Guiana (GF), Martinique (MQ), Mayotte (YT), Monaco (MC), Montenegro (ME), Netherlands (NL), Portugal (PT), Réunion (RE), Saint Barthélemy (BL), Saint Martin (MF), Saint Pierre and Miquelon (PM), San Marino (SM), Slovakia (SK), Slovenia (SI), Spain (ES), Vatican City (VA)
     * @description Currency symbol: €
     */

    TuiCurrencyCode["Euro"] = "978";
    /**
     * United States dollar
     *
     * @description Numeric code: 840
     * @description Alphabetic code: USD
     * @description Countries and territories: United States, American Samoa (AS), British Indian Ocean Territory (IO) (also uses GBP), British Virgin Islands (VG), Caribbean Netherlands (BQ – Bonaire, Sint Eustatius and Saba), Ecuador (EC), El Salvador (SV), Guam (GU), Marshall Islands (MH), Federated States of Micronesia (FM), Northern Mariana Islands (MP), Palau (PW), Panama (PA) (as well as Panamanian Balboa), Puerto Rico (PR), Timor-Leste (TL), Turks and Caicos Islands (TC), U.S. Virgin Islands (VI), United States Minor Outlying Islands (UM)
     * @description Currency symbol: $
     */

    TuiCurrencyCode["Dollar"] = "840";
    /**
     * Pound sterling
     *
     * @description Numeric code: 826
     * @description Alphabetic code: GBP
     * @description Countries and territories: United Kingdom, Isle of Man (IM, see Manx pound), Jersey (JE, see Jersey pound), Guernsey (GG, see Guernsey pound), Tristan da Cunha (SH-TA)
     * @description Currency symbol: £
     */

    TuiCurrencyCode["Pound"] = "826";
    /**
     * Thai baht
     *
     * @description Numeric code: 764
     * @description Alphabetic code: THB
     * @description Countries and territories: Thailand
     * @description Currency symbol: ฿
     */

    TuiCurrencyCode["Baht"] = "764";
    /**
     * Turkish lira
     *
     * @description Numeric code: 949
     * @description Alphabetic code: TRY
     * @description Countries and territories: Turkey
     * @description Currency symbol: ₺
     */

    TuiCurrencyCode["TurkishLira"] = "949";
    /**
     * Chinese yuan
     *
     * @description Numeric code: 156
     * @description Alphabetic code: CNY
     * @description Countries and territories: China
     * @description Currency symbol: CN¥
     */

    TuiCurrencyCode["YuanRenminbi"] = "156";
    /**
     * Kazakhstani tenge
     *
     * @description Numeric code: 398
     * @description Alphabetic code: KZT
     * @description Countries and territories: Kazakhstan
     * @description Currency symbol: ₸
     */

    TuiCurrencyCode["Tenge"] = "398";
    /**
     * Israeli new shekel
     *
     * @description Numeric code: 376
     * @description Alphabetic code: ILS
     * @description Countries and territories: Israel
     * @description Currency symbol: ₪
     */

    TuiCurrencyCode["IsraeliShekel"] = "376";
    /**
     * Indian rupee
     *
     * @description Numeric code: 356
     * @description Alphabetic code: INR
     * @description Countries and territories: India, Bhutan
     * @description Currency symbol: ₹
     */

    TuiCurrencyCode["IndianRupee"] = "356";
    /**
     * Japanese yen
     *
     * @description Numeric code: 392
     * @description Alphabetic code: JPY
     * @description Countries and territories: Japan
     * @description Currency symbol: ¥
     */

    TuiCurrencyCode["Yen"] = "392";
    /**
     * South Korean won
     *
     * @description Numeric code: 410
     * @description Alphabetic code: KRW
     * @description Countries and territories: South Korea
     * @description Currency symbol: ₩
     */

    TuiCurrencyCode["Won"] = "410";
    /**
     * Swiss franc
     *
     * @description Numeric code: 756
     * @description Alphabetic code: CHF
     * @description Countries and territories: Switzerland, Liechtenstein (LI)
     * @description Currency symbol: ₣
     */

    TuiCurrencyCode["SwissFranc"] = "756";
    /**
     * Singapore dollar
     *
     * @description Numeric code: 702
     * @description Alphabetic code: SGD
     * @description Countries and territories: Singapore
     * @description Currency symbol: S$
     */

    TuiCurrencyCode["SingaporeDollar"] = "702";
    /**
     * Australian dollar
     *
     * @description Numeric code: 036
     * @description Alphabetic code: AUD
     * @description Countries and territories: Australia, Christmas Island (CX), Cocos (Keeling) Islands (CC), Heard Island and McDonald Islands (HM), Kiribati (KI), Nauru (NR), Norfolk Island (NF), Tuvalu (TV)
     * @description Currency symbol: A$
     */

    TuiCurrencyCode["AustralianDollar"] = "036";
    /**
     * Hong Kong dollar
     *
     * @description Numeric code: 344
     * @description Alphabetic code: HKD
     * @description Countries and territories: Hong Kong
     * @description Currency symbol: HK$
     */

    TuiCurrencyCode["HongKongDollar"] = "344";
    /**
     * Canadian dollar
     *
     * @description Numeric code: 124
     * @description Alphabetic code: CAD
     * @description Countries and territories: Canada
     * @description Currency symbol: C$
     */

    TuiCurrencyCode["CanadianDollar"] = "124";
    /**
     * Armenian dram
     *
     * @description Numeric code: 051
     * @description Alphabetic code: AMD
     * @description Countries and territories: Armenia
     * @description Currency symbol: ֏
     */

    TuiCurrencyCode["ArmenianDram"] = "051";
    /**
     * Ukrainian hryvnia
     *
     * @description Numeric code: 980
     * @description Alphabetic code: UAH
     * @description Countries and territories: Ukraine
     * @description Currency symbol: ₴
     */

    TuiCurrencyCode["Hryvnia"] = "980";
    /**
     * Mexican peso
     *
     * @description Numeric code: 484
     * @description Alphabetic code: MXN
     * @description Countries and territories: Mexico
     * @description Currency symbol: $
     */

    TuiCurrencyCode["MexicanPeso"] = "484";
    /**
     * Uzbek sum
     *
     * @description Numeric code: 860
     * @description Alphabetic code: UZS
     * @description Countries and territories: Uzbekistan
     * @description Currency symbol: So'm
     */

    TuiCurrencyCode["UzbekSum"] = "860";
    /**
     * Kyrgyzstani som
     *
     * @description Numeric code: 417
     * @description Alphabetic code: KGS
     * @description Countries and territories: Kyrgyzstan
     * @description Currency symbol: c
     */

    TuiCurrencyCode["KyrgyzstanSom"] = "417";
    /**
     * United Arab Emirates dirham
     *
     * @description Numeric code: 784
     * @description Alphabetic code: AED
     * @description Countries and territories: United Arab Emirates
     * @description Currency symbol: Dh
     */

    TuiCurrencyCode["Dirham"] = "784";
  })(TuiCurrencyCode || (TuiCurrencyCode = {}));

  return TuiCurrencyCode;
})();
;// CONCATENATED MODULE: ./projects/addon-commerce/enums/index.ts


// EXTERNAL MODULE: ./projects/addon-commerce/tokens/index.ts + 1 modules
var tokens = __webpack_require__(69971);
// EXTERNAL MODULE: ./projects/addon-commerce/utils/index.ts + 7 modules
var utils = __webpack_require__(70954);
;// CONCATENATED MODULE: ./projects/addon-commerce/validators/card-expire.validator.ts


function tuiCardExpireValidator({
  value
}) {
  var _a;

  return ((_a = value === null || value === void 0 ? void 0 : value.expire) === null || _a === void 0 ? void 0 : _a.length) === 5 && !(0,utils/* tuiIsExpireValid */.Sr)(value === null || value === void 0 ? void 0 : value.expire) ? {
    expire: new cdk.TuiValidationError(`Expire date`)
  } : null;
}
;// CONCATENATED MODULE: ./projects/addon-commerce/validators/card-number.validator.ts


function tuiCardNumberValidator({
  value
}) {
  return (value === null || value === void 0 ? void 0 : value.card) && !(0,utils/* tuiIsCardNumberValid */.Tb)(value.card) ? {
    card: new cdk.TuiValidationError(`Invalid card number`)
  } : null;
}
;// CONCATENATED MODULE: ./projects/addon-commerce/validators/luhn.validator.ts


function tuiCreateLuhnValidator(message) {
  return ({
    value
  }) => {
    return (0,utils/* tuiIsCardNumberValid */.Tb)(value) ? null : {
      luhn: new cdk.TuiValidationError(message)
    };
  };
}
;// CONCATENATED MODULE: ./projects/addon-commerce/validators/index.ts



;// CONCATENATED MODULE: ./projects/addon-commerce/index.ts










/***/ }),

/***/ 99886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ TuiCurrencyPipe)
/* harmony export */ });
/* harmony import */ var _taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);


let TuiCurrencyPipe = /*#__PURE__*/(() => {
  class TuiCurrencyPipe {
    transform(currency) {
      return (0,_taiga_ui_addon_commerce_utils__WEBPACK_IMPORTED_MODULE_0__/* .tuiFormatCurrency */ .BP)(currency);
    }

  }

  TuiCurrencyPipe.ɵfac = function TuiCurrencyPipe_Factory(t) {
    return new (t || TuiCurrencyPipe)();
  };

  TuiCurrencyPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiCurrency",
    type: TuiCurrencyPipe,
    pure: true
  });
  return TuiCurrencyPipe;
})();

/***/ }),

/***/ 9063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ TuiFormatCardPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

let TuiFormatCardPipe = /*#__PURE__*/(() => {
  class TuiFormatCardPipe {
    transform(value = ``, cardPrefilled = false) {
      return value && !cardPrefilled ? value.split(``).map((char, index) => index && index % 4 === 0 ? ` ${char}` : char).join(``) : ``;
    }

  }

  TuiFormatCardPipe.ɵfac = function TuiFormatCardPipe_Factory(t) {
    return new (t || TuiFormatCardPipe)();
  };

  TuiFormatCardPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefinePipe"] */ .Yjl({
    name: "tuiFormatCard",
    type: TuiFormatCardPipe,
    pure: true
  });
  return TuiFormatCardPipe;
})();

/***/ }),

/***/ 69971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p3": () => (/* reexport */ TUI_CARD_CVC_TEXTS),
  "Hx": () => (/* reexport */ TUI_CARD_EXPIRY_TEXTS),
  "M0": () => (/* reexport */ TUI_CARD_NUMBER_TEXTS)
});

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/i18n/index.ts + 12 modules
var i18n = __webpack_require__(72773);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
;// CONCATENATED MODULE: ./projects/addon-commerce/tokens/i18n.ts



const TUI_CARD_NUMBER_TEXTS = new core/* InjectionToken */.OlP(`[TUI_CARD_NUMBER_TEXTS]: Number and card number i18n`, {
  factory: (0,i18n/* tuiExtractI18n */.vv)(`cardNumber`)
});
const TUI_CARD_EXPIRY_TEXTS = new core/* InjectionToken */.OlP(`[TUI_CARD_EXPIRY_TEXTS]: Expiry and card expiry i18n`, {
  factory: (0,i18n/* tuiExtractI18n */.vv)(`cardExpiry`)
});
const TUI_CARD_CVC_TEXTS = new core/* InjectionToken */.OlP(`[TUI_CARD_CVC_TEXTS]: Card CVC number text`, {
  factory: () => (0,of.of)([`CVC`, `CVC/CVV`])
});
;// CONCATENATED MODULE: ./projects/addon-commerce/tokens/index.ts


/***/ }),

/***/ 70954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Em": () => (/* reexport */ tuiCreateAutoCorrectedExpirePipe),
  "BP": () => (/* reexport */ tuiFormatCurrency),
  "CE": () => (/* reexport */ tuiGetCurrencySymbol),
  "Vn": () => (/* reexport */ tuiGetPaymentSystem),
  "ul": () => (/* reexport */ tuiIsCardLengthValid),
  "Tb": () => (/* reexport */ tuiIsCardNumberValid),
  "gP": () => (/* reexport */ tuiIsElectron),
  "Sr": () => (/* reexport */ tuiIsExpireValid),
  "fN": () => (/* reexport */ tuiIsMaestro),
  "g$": () => (/* reexport */ tuiIsMastercard),
  "er": () => (/* reexport */ tuiIsMir),
  "tJ": () => (/* reexport */ tuiIsVisa)
});

// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/create-auto-corrected-expire-pipe.ts

const TUI_EXP_YEAR_MONTH = /^\d{2}[/|.]\d{4}$/;
const TUI_EXP_SAFARI = /^\d{1,4}.\d{1,2}.\d{1,4}$/;
/**
 * Correct expiration date text allowing only valid months
 * @internal
 *
 * @returns MM/YY
 */

function tuiCreateAutoCorrectedExpirePipe() {
  return (conformedValue, {
    rawValue
  }) => {
    // Autofilled with MM/YYYY format
    if (TUI_EXP_YEAR_MONTH.test(rawValue)) {
      conformedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(5)}`;
    } // Autofilled with Safari crazy format


    if (rawValue.length > 7 && rawValue.length < 11 && TUI_EXP_SAFARI.test(rawValue)) {
      const array = rawValue.split(core.TUI_NON_DIGIT_REGEXP);
      const month = array[1];
      const year = array.find(({
        length
      }) => length === 4);
      conformedValue = `${`0`.repeat(2 - month.length)}${month}/${year ? year.slice(2) : ``}`;
    }

    const indexesOfPipedChars = [];
    const conformedValueArr = conformedValue.split(``);

    if (parseInt(conformedValueArr[0], 10) > 1) {
      conformedValueArr[2] = `/`;
      conformedValueArr[1] = conformedValueArr[0];
      conformedValueArr[0] = `0`;
      indexesOfPipedChars.push(0);
    }

    return {
      value: conformedValueArr.join(``),
      indexesOfPipedChars
    };
  };
}
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/get-currency-symbol.ts
function tuiGetCurrencySymbol(currency) {
  switch (currency) {
    case "RUB"
    /* Ruble */
    :
    case "643"
    /* Ruble */
    :
      return `₽`;

    case "USD"
    /* Dollar */
    :
    case "840"
    /* Dollar */
    :
    case "MXN"
    /* MexicanPeso */
    :
    case "484"
    /* MexicanPeso */
    :
      return `$`;

    case "SGD"
    /* SingaporeDollar */
    :
    case "702"
    /* SingaporeDollar */
    :
      return `S$`;

    case "AUD"
    /* AustralianDollar */
    :
    case "036"
    /* AustralianDollar */
    :
      return `A$`;

    case "HKD"
    /* HongKongDollar */
    :
    case "344"
    /* HongKongDollar */
    :
      return `HK$`;

    case "CAD"
    /* CanadianDollar */
    :
    case "124"
    /* CanadianDollar */
    :
      return `C$`;

    case "EUR"
    /* Euro */
    :
    case "978"
    /* Euro */
    :
      return `€`;

    case "GBP"
    /* Pound */
    :
    case "826"
    /* Pound */
    :
      return `£`;

    case "THB"
    /* Baht */
    :
    case "764"
    /* Baht */
    :
      return `฿`;

    case "TRY"
    /* TurkishLira */
    :
    case "949"
    /* TurkishLira */
    :
      return `₺`;

    case "CNY"
    /* YuanRenminbi */
    :
    case "156"
    /* YuanRenminbi */
    :
      return `CN¥`;

    case "JPY"
    /* Yen */
    :
    case "392"
    /* Yen */
    :
      return `¥`;

    case "ILS"
    /* IsraeliShekel */
    :
    case "376"
    /* IsraeliShekel */
    :
      return `₪`;

    case "INR"
    /* IndianRupee */
    :
    case "356"
    /* IndianRupee */
    :
      return `₹`;

    case "CHF"
    /* SwissFranc */
    :
    case "756"
    /* SwissFranc */
    :
      return `₣`;

    case "AMD"
    /* ArmenianDram */
    :
    case "051"
    /* ArmenianDram */
    :
      return `֏`;

    case "KRW"
    /* Won */
    :
    case "410"
    /* Won */
    :
      return `₩`;

    case "KZT"
    /* Tenge */
    :
    case "398"
    /* Tenge */
    :
      return `₸`;

    case "UAH"
    /* Hryvnia */
    :
    case "980"
    /* Hryvnia */
    :
      return `₴`;

    case "UZS"
    /* UzbekSum */
    :
    case "860"
    /* UzbekSum */
    :
      return `So'm`;

    case "KGS"
    /* KyrgyzstanSom */
    :
    case "417"
    /* KyrgyzstanSom */
    :
      return `c`;

    case "AED"
    /* Dirham */
    :
    case "784"
    /* Dirham */
    :
      return `Dh`;

    default:
      return null;
  }
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/format-currency.ts


function tuiFormatCurrency(currency) {
  const stringifiedCurrency = stringifyCurrency(currency);
  return tuiGetCurrencySymbol(stringifiedCurrency) || stringifiedCurrency;
}

function stringifyCurrency(currency) {
  return currency === null || (0,cdk.tuiIsString)(currency) ? currency || `` : String(currency).padStart(3, `0`);
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/get-payment-system.ts
function tuiGetPaymentSystem(cardNumber) {
  if (cardNumber === ``) {
    return null;
  }

  const one = Number.parseInt(cardNumber[0], 10);
  const two = Number.parseInt(cardNumber.slice(0, 2), 10);
  const three = Number.parseInt(cardNumber.slice(0, 3), 10);
  const four = Number.parseInt(cardNumber.slice(0, 4), 10);

  if (tuiIsMaestro(three, two, one)) {
    return `maestro`;
  }

  if (tuiIsMastercard(four, two, one)) {
    return `mastercard`;
  }

  if (tuiIsMir(four)) {
    return `mir`;
  }

  if (tuiIsElectron(four)) {
    return `electron`;
  }

  if (tuiIsVisa(one)) {
    return `visa`;
  }

  return null;
}
function tuiIsMaestro(three, two, one) {
  if (one === 6) {
    return true;
  }

  if (two === 50 || two > 55 && two < 59) {
    return true;
  }

  if (three < 500) {
    return false;
  }

  return three < 510;
}
function tuiIsMastercard(four, two, one) {
  if (one === 5) {
    return true;
  }

  if (two < 10) {
    return false;
  }

  if (two > 50 && two < 56) {
    return true;
  }

  if (four < 1000) {
    return false;
  }

  return four > 2220 && four < 2721;
}
function tuiIsMir(four) {
  return four > 2199 && four < 2205;
}
function tuiIsElectron(four) {
  switch (four) {
    case 4026:
    case 4175:
    case 4405:
    case 4508:
    case 4844:
    case 4913:
    case 4917:
      return true;

    default:
      return false;
  }
}
function tuiIsVisa(one) {
  return one === 4;
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/is-card-length-valid.ts

/**
 * Validates card number length using payment system dictionary
 */

function tuiIsCardLengthValid(cardNumber) {
  const {
    length
  } = cardNumber;
  const paymentSystem = tuiGetPaymentSystem(cardNumber);

  switch (paymentSystem) {
    case `electron`:
      return length === 16;

    case `maestro`:
      return length > 11 && length < 20;

    case `mastercard`:
    case `mir`:
      return length > 15 && length < 20;

    case `visa`:
      return length > 12 && length < 20;

    default:
      return length > 8 && length < 20;
  }
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/is-card-number-valid.ts

/**
 * Validates card number using Luhn algorithm
 */

function tuiIsCardNumberValid(value) {
  const cardNumber = String(value).replace(core.TUI_NON_DIGITS_REGEXP, ``);
  const {
    length
  } = cardNumber;
  const arr = cardNumber.split(``).map((char, index) => {
    const digit = parseInt(char, 10);

    if ((index + length) % 2 === 0) {
      const digitX2 = digit * 2;
      return digitX2 > 9 ? digitX2 - 9 : digitX2;
    }

    return digit;
  });
  return !(arr.reduce((a, b) => a + b, 0) % 10);
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/is-expire-valid.ts
function tuiIsExpireValid(expire) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear() - 2000;
  const month = parseInt(expire.slice(0, 2), 0);
  const year = parseInt(expire.slice(-2), 0);
  return year > currentYear || year === currentYear && month >= currentMonth;
}
;// CONCATENATED MODULE: ./projects/addon-commerce/utils/index.ts








/***/ })

}]);