"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[60617],{

/***/ 60617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ColorsModule": () => (/* binding */ ColorsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/colors/colors.constants.ts
const BASE = [{
  name: `--tui-base-01`,
  desc: $localize`Page primary background and icon fill for color inverted background`
}, {
  name: `--tui-base-02`,
  desc: $localize`Page secondary background, tile on primary background and background of static marker icons`
}, {
  name: `--tui-base-03`,
  desc: $localize`Table borders, islands and blocks`
}, {
  name: `--tui-base-04`,
  desc: $localize`Hovered island border or other interactive blocks`
}, {
  name: `--tui-base-05`,
  desc: $localize`Interface icons color`
}, {
  name: `--tui-base-06`,
  desc: $localize`Hovered color for interactive interface icons with --tui-base-05`
}, {
  name: `--tui-base-07`,
  desc: $localize`For blocks with inverted background color`
}, {
  name: `--tui-base-08`,
  desc: $localize`Alternative interface icons color`
}, {
  name: `--tui-base-09`,
  desc: $localize`Icons color over inverted background`
}, {
  name: `--tui-primary`,
  desc: $localize`Background of buttons, marker icons`
}, {
  name: `--tui-primary-hover`,
  desc: $localize`Hovered state background of buttons, marker icons`
}, {
  name: `--tui-primary-active`,
  desc: $localize`Active state background of buttons`
}, {
  name: `--tui-secondary`,
  desc: $localize`Background of input field and secondary buttons`
}, {
  name: `--tui-secondary-hover`,
  desc: $localize`Hovered state background of input field and secondary buttons`
}, {
  name: `--tui-secondary-active`,
  desc: $localize`Active state background of input field and secondary buttons`
}, {
  name: `--tui-accent`,
  desc: $localize`Background of accent icons or buttons`
}, {
  name: `--tui-accent-hover`,
  desc: $localize`Hovered state background of accent icons or buttons`
}, {
  name: `--tui-accent-active`,
  desc: $localize`Active state background of accent icons or buttons`
}, {
  name: `--tui-selection`,
  desc: $localize`Selected text highlight color`
}, {
  name: `--tui-focus`,
  desc: $localize`Focused element border color`
}, {
  name: `--tui-clear`,
  desc: $localize`Filling color of interface elements on colored background: tages, badges, buttons`
}, {
  name: `--tui-clear-hover`,
  desc: $localize`Hovered state of filling color of interface elements on colored background`
}, {
  name: `--tui-clear-active`,
  desc: $localize`Active state of filling color of interface elements on colored background`
}, {
  name: `--tui-elevation-01`,
  desc: $localize`Background color of elevated elements: dialogs, dropdowns`
}, {
  name: `--tui-elevation-02`,
  desc: $localize`Background color of elevated elements: islands inside dialogs`
}];
const BASE_NIGHT = [{
  name: `--tui-clear-inverse`,
  desc: $localize`Filling color of interface elements on dark background: tages, badges, buttons`
}, {
  name: `--tui-clear-inverse-hover`,
  desc: $localize`Hovered state of filling color of interface elements on dark background`
}, {
  name: `--tui-clear-inverse-active`,
  desc: $localize`Active state of filling color of interface elements on dark background`
}];
const STATUS = [{
  name: `--tui-error-fill`,
  desc: $localize`Icons or other elements with error status`
}, {
  name: `--tui-error-bg`,
  desc: $localize`Background for elements with error status`
}, {
  name: `--tui-error-bg-hover`,
  desc: $localize`Hovered state of background for elements with error status`
}, {
  name: `--tui-success-fill`,
  desc: $localize`Icons or other elements with success status`
}, {
  name: `--tui-success-bg`,
  desc: $localize`Background for elements with success status`
}, {
  name: `--tui-success-bg-hover`,
  desc: $localize`Hovered state of background for elements with success status`
}, {
  name: `--tui-warning-fill`,
  desc: $localize`Icons or other elements with warning status`
}, {
  name: `--tui-warning-bg`,
  desc: $localize`Background icons or other elements with warning status`
}, {
  name: `--tui-warning-bg-hover`,
  desc: $localize`Hovered status of background icons or other elements with warning status`
}, {
  name: `--tui-info-fill`,
  desc: $localize`Icons or other elements with info status`
}, {
  name: `--tui-info-bg`,
  desc: $localize`Background icons or other elements with info status`
}, {
  name: `--tui-info-bg-hover`,
  desc: $localize`Hovered status of background icons or other elements with info status`
}, {
  name: `--tui-neutral-fill`,
  desc: $localize`Icons or other elements with neutral status`
}, {
  name: `--tui-neutral-bg`,
  desc: $localize`Background icons or other elements with neutral status`
}, {
  name: `--tui-neutral-bg-hover`,
  desc: $localize`Hovered status of background icons or other elements with neutral status`
}];
const STATUS_NIGHT = [{
  name: `--tui-error-fill-night`,
  desc: $localize`Icons or other elements with error status`
}, {
  name: `--tui-error-bg-night`,
  desc: $localize`Background for elements with error status`
}, {
  name: `--tui-error-bg-night-hover`,
  desc: $localize`Hovered state of background for elements with error status`
}, {
  name: `--tui-success-fill-night`,
  desc: $localize`Icons or other elements with success status`
}, {
  name: `--tui-success-bg-night`,
  desc: $localize`Background for elements with success status`
}, {
  name: `--tui-success-bg-night-hover`,
  desc: $localize`Hovered state of background for elements with success status`
}, {
  name: `--tui-warning-fill-night`,
  desc: $localize`Icons or other elements with warning status`
}, {
  name: `--tui-warning-bg-night`,
  desc: $localize`Background icons or other elements with warning status`
}, {
  name: `--tui-warning-bg-night-hover`,
  desc: $localize`Hovered status of background icons or other elements with warning status`
}, {
  name: `--tui-info-fill-night`,
  desc: $localize`Icons or other elements with info status`
}, {
  name: `--tui-info-bg-night`,
  desc: $localize`Background icons or other elements with info status`
}, {
  name: `--tui-info-bg-night-hover`,
  desc: $localize`Hovered status of background icons or other elements with info status`
}, {
  name: `--tui-neutral-fill-night`,
  desc: $localize`Icons or other elements with neutral status`
}, {
  name: `--tui-neutral-bg-night`,
  desc: $localize`Background icons or other elements with neutral status`
}, {
  name: `--tui-neutral-bg-night-hover`,
  desc: $localize`Hovered status of background icons or other elements with neutral status`
}];
const SUPPORT = [`--tui-support-01`, `--tui-support-02`, `--tui-support-03`, `--tui-support-04`, `--tui-support-05`, `--tui-support-06`, `--tui-support-07`, `--tui-support-08`, `--tui-support-09`, `--tui-support-10`, `--tui-support-11`, `--tui-support-12`, `--tui-support-13`, `--tui-support-14`, `--tui-support-15`, `--tui-support-16`, `--tui-support-17`, `--tui-support-18`, `--tui-support-19`, `--tui-support-20`, `--tui-support-21`];
const TEXT = [{
  name: `--tui-text-01`,
  desc: $localize`Primary text and headings`
}, {
  name: `--tui-text-02`,
  desc: $localize`Secondary text and descriptions`
}, {
  name: `--tui-text-03`,
  desc: $localize`Inactive and additional points, minor information and helpers`
}, {
  name: `--tui-link`,
  desc: $localize`Link and secondary buttons text`
}, {
  name: `--tui-link-hover`,
  desc: $localize`Hovered state of link and secondary buttons text`
}, {
  name: `--tui-positive`,
  desc: $localize`Positive values: income, stock price grow, etc.`
}, {
  name: `--tui-positive-hover`,
  desc: $localize`Hovered state of positive values: income, stock price grow, etc.`
}, {
  name: `--tui-negative`,
  desc: $localize`Negative values: expense, stock price fall, etc.`
}, {
  name: `--tui-negative-hover`,
  desc: $localize`Hovered state of negative values: expense, stock price fall, etc.`
}];
const TEXT_NIGHT = [{
  name: `--tui-text-01-night`,
  desc: $localize`Primary text and headings`
}, {
  name: `--tui-text-02-night`,
  desc: $localize`Secondary text and descriptions`
}, {
  name: `--tui-text-03-night`,
  desc: $localize`Inactive and additional points, minor information and helpers`
}, {
  name: `--tui-link-night`,
  desc: $localize`Link and secondary buttons text`
}, {
  name: `--tui-link-night-hover`,
  desc: $localize`Hovered state of link and secondary buttons text`
}, {
  name: `--tui-positive-night`,
  desc: $localize`Positive values: income, stock price grow, etc.`
}, {
  name: `--tui-positive-night-hover`,
  desc: $localize`Hovered state of positive values: income, stock price grow, etc.`
}, {
  name: `--tui-negative-night`,
  desc: $localize`Negative values: expense, stock price fall, etc.`
}, {
  name: `--tui-negative-night-hover`,
  desc: $localize`Hovered state of negative values: expense, stock price fall, etc.`
}];
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var ng_web_apis_common = __webpack_require__(62579);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
// EXTERNAL MODULE: ./projects/demo/src/modules/app/theme.service.ts
var theme_service = __webpack_require__(66092);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/colors/table/table.component.ts









const _c0 = ["colors", ""];

function TableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}

function TableComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 2);
    core/* ɵɵelementStart */.TgZ(1, "td");
    core/* ɵɵelementStart */.TgZ(2, "h3", 3);
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-copy", 4);
    core/* ɵɵi18n */.SDv(4, 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "div");
    core/* ɵɵtext */._uU(7);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "td");
    core/* ɵɵelement */._UZ(9, "div", 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "td");
    core/* ɵɵelementStart */.TgZ(11, "div", 7);
    core/* ɵɵelementStart */.TgZ(12, "tui-doc-copy", 4);
    core/* ɵɵi18n */.SDv(13, 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", "var(" + color_r2.name + ")");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", color_r2.name, " ");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(color_r2.desc);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵstyleProp */.Udp("background", ctx_r1.getValue(color_r2.name));
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", ctx_r1.getValue(color_r2.name));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r1.getValue(color_r2.name), " ");
  }
}

let TableComponent = /*#__PURE__*/(() => {
  class TableComponent {
    constructor(themeService, documentRef, windowRef) {
      this.themeService = themeService;
      this.documentRef = documentRef;
      this.windowRef = windowRef;
      this.styles = this.windowRef.getComputedStyle(this.documentRef.documentElement);
      this.colors = [];
      this.dark = false;
      this.theme$ = this.themeService.pipe((0,delay/* delay */.g)(1));
    }

    getValue(variable) {
      return this.styles.getPropertyValue(variable);
    }

  }

  TableComponent.ɵfac = function TableComponent_Factory(t) {
    return new (t || TableComponent)(core/* ɵɵdirectiveInject */.Y36(theme_service/* TuiThemeService */.ML), core/* ɵɵdirectiveInject */.Y36(common/* DOCUMENT */.K0), core/* ɵɵdirectiveInject */.Y36(ng_web_apis_common/* WINDOW */.m9));
  };

  TableComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TableComponent,
    selectors: [["table", "colors", ""]],
    hostVars: 2,
    hostBindings: function TableComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        core/* ɵɵclassProp */.ekj("_dark", ctx.dark);
      }
    },
    inputs: {
      colors: "colors",
      dark: "dark"
    },
    attrs: _c0,
    decls: 3,
    vars: 4,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6143336319923759907$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__2 = goog.getMsg(" Copy ");
        i18n_1 = MSG_EXTERNAL_6143336319923759907$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟3bbb35beaeb4d274af7f8d8c5ac596ca13655170␟6143336319923759907: Copy `;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6143336319923759907$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__4 = goog.getMsg(" Copy ");
        i18n_3 = MSG_EXTERNAL_6143336319923759907$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_TABLE_TABLE_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟3bbb35beaeb4d274af7f8d8c5ac596ca13655170␟6143336319923759907: Copy `;
      }

      return [[4, "ngIf"], ["class", "color", 4, "ngFor", "ngForOf"], [1, "color"], [1, "name"], [1, "copy", 3, "cdkCopyToClipboard"], i18n_1, [1, "demo"], [1, "value"], i18n_3];
    },
    template: function TableComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, TableComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
        core/* ɵɵtemplate */.YNc(2, TableComponent_tr_2_Template, 15, 7, "tr", 1);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx.theme$));
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.colors);
      }
    },
    directives: [common/* NgIf */.O5, common/* NgForOf */.sg, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    pipes: [common/* AsyncPipe */.Ov],
    styles: ["[_nghost-%COMP%]{width:100%}._dark[_nghost-%COMP%]{background:#333;color:var(--tui-text-01-night)}._dark[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child){border-top:1px solid var(--tui-base-06)}._dark[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-child{color:var(--tui-text-02-night);padding-right:0}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child){border-top:1px solid var(--tui-base-03)}[_nghost-%COMP%]   td[_ngcontent-%COMP%]{padding:1.5rem}[_nghost-%COMP%]   td[_ngcontent-%COMP%]:last-child{color:var(--tui-text-02);padding-right:0}.demo[_ngcontent-%COMP%]{position:relative;width:4rem;height:4rem;border-radius:100%;overflow:hidden}.name[_ngcontent-%COMP%]{transition-property:color;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;height:2rem;background:var(--tui-base-02);border-radius:var(--tui-radius-m);padding:.25rem .75rem;box-sizing:border-box}.name[_ngcontent-%COMP%]:hover{color:transparent}.name[_ngcontent-%COMP%]:hover   .copy[_ngcontent-%COMP%]{opacity:1}._dark[_nghost-%COMP%]   .name[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}.name[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{min-width:100%}.value[_ngcontent-%COMP%]{position:relative;width:11.25rem}.value[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%]{top:-.25rem}.copy[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;background:var(--tui-base-02);opacity:0}.copy[_ngcontent-%COMP%]:hover{opacity:1}"],
    changeDetection: 0
  });
  return TableComponent;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/colors/colors.component.ts







function ColorsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "table", 6);
    core/* ɵɵelement */._UZ(1, "table", 7);
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("colors", ctx_r0.text);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("colors", ctx_r0.textNight)("dark", true);
  }
}

function ColorsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "table", 6);
    core/* ɵɵelement */._UZ(1, "table", 7);
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("colors", ctx_r1.status);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("colors", ctx_r1.statusNight)("dark", true);
  }
}

function ColorsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "table", 8);
    core/* ɵɵelement */._UZ(1, "table", 7);
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("colors", ctx_r2.base);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("colors", ctx_r2.baseNight)("dark", true);
  }
}

function ColorsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "table", 6);
  }

  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("colors", ctx_r3.support);
  }
}

function ColorsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 9);
    core/* ɵɵelement */._UZ(1, "strong");
    core/* ɵɵelement */._UZ(2, "tui-doc-code", 10);
    core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("code", ctx_r4.basicImportsLess);
  }
}

let ColorsComponent = /*#__PURE__*/(() => {
  class ColorsComponent {
    constructor() {
      this.basicImportsLess = __webpack_require__.e(/* import() */ 4759).then(__webpack_require__.t.bind(__webpack_require__, 4759, 17));
      this.base = BASE;
      this.baseNight = BASE_NIGHT;
      this.support = SUPPORT.map(name => ({
        name
      }));
      this.text = TEXT;
      this.textNight = TEXT_NIGHT;
      this.status = STATUS;
      this.statusNight = STATUS_NIGHT;
    }

  }

  ColorsComponent.ɵfac = function ColorsComponent_Factory(t) {
    return new (t || ColorsComponent)();
  };

  ColorsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ColorsComponent,
    selectors: [["colors"]],
    decls: 6,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_1 = goog.getMsg("Colors");
        i18n_0 = MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6162693758764653365$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_3 = goog.getMsg("Text");
        i18n_2 = MSG_EXTERNAL_6162693758764653365$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟8ba143716c2da6e4120c0c1a804f0bdd9a7e5f5b␟6162693758764653365:Text`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5611592591303869712$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_5 = goog.getMsg("Status");
        i18n_4 = MSG_EXTERNAL_5611592591303869712$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟81b97b8ea996ad1e4f9fca8415021850214884b1␟5611592591303869712:Status`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7221654737154168574$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_7 = goog.getMsg("Base palette");
        i18n_6 = MSG_EXTERNAL_7221654737154168574$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟212013cbf1a38eca62c9071ec5a636dc3d2bbce4␟7221654737154168574:Base palette`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7692385942576242381$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_9 = goog.getMsg("Support palette");
        i18n_8 = MSG_EXTERNAL_7692385942576242381$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`:␟8a02de1af713fa314d224f316860637fa4027002␟7692385942576242381:Support palette`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_11 = goog.getMsg("Setup");
        i18n_10 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8591080595953797831$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS__13 = goog.getMsg(" Taiga UI uses {$startTagStrong}CSS custom properties{$closeTagStrong} . You do not need to import anything. Just use variables {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagStrong": "\uFFFD#1\uFFFD",
          "closeTagStrong": "\uFFFD/#1\uFFFD",
          "startTagTuiDocCode": "\uFFFD#2\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#2\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_8591080595953797831$$PROJECTS_DEMO_SRC_MODULES_MARKUP_COLORS_COLORS_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟674873ab90c165747280adf4c1606384e830618b␟8591080595953797831: Taiga UI uses ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:CSS custom properties${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . You do not need to import anything. Just use variables ${"\uFFFD#2\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      return [["header", i18n_0], ["pageTab", i18n_2], ["pageTab", i18n_4], ["pageTab", i18n_6], ["pageTab", i18n_8], ["pageTab", i18n_10], [3, "colors"], [3, "colors", "dark"], [1, "base-colors", 3, "colors"], i18n_12, ["filename", "styles.less", 3, "code"]];
    },
    template: function ColorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ColorsComponent_ng_template_1_Template, 2, 3, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ColorsComponent_ng_template_2_Template, 2, 3, "ng-template", 2);
        core/* ɵɵtemplate */.YNc(3, ColorsComponent_ng_template_3_Template, 2, 3, "ng-template", 3);
        core/* ɵɵtemplate */.YNc(4, ColorsComponent_ng_template_4_Template, 1, 1, "ng-template", 4);
        core/* ɵɵtemplate */.YNc(5, ColorsComponent_ng_template_5_Template, 3, 1, "ng-template", 5);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, TableComponent, code_component/* TuiDocCodeComponent */.c],
    styles: [".base-colors tr:first-child .demo{box-shadow:inset 0 0 0 1px var(--tui-base-03)}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return ColorsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/colors/colors.module.ts








let ColorsModule = /*#__PURE__*/(() => {
  class ColorsModule {}

  ColorsModule.ɵfac = function ColorsModule_Factory(t) {
    return new (t || ColorsModule)();
  };

  ColorsModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ColorsModule
  });
  ColorsModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ColorsComponent))]]
  });
  return ColorsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ColorsModule, {
    declarations: [ColorsComponent, TableComponent],
    imports: [common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, public_api/* TuiDocCopyModule */.k7, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ColorsComponent]
  });
})();

/***/ })

}]);