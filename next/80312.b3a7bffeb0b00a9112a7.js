"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[80312],{

/***/ 89104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DropdownDocumentationComponent)
/* harmony export */ });
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66263);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17023);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);








function DropdownDocumentationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function DropdownDocumentationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 9);
  }
}

function DropdownDocumentationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 10);
  }
}

function DropdownDocumentationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function DropdownDocumentationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 12);
  }
}

let DropdownDocumentationComponent = /*#__PURE__*/(() => {
  class DropdownDocumentationComponent {
    constructor(documentedComponent) {
      this.documentedComponent = documentedComponent;
    }

  }

  DropdownDocumentationComponent.ɵfac = function DropdownDocumentationComponent_Factory(t) {
    return new (t || DropdownDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__/* .ABSTRACT_PROPS_ACCESSOR */ .x));
  };

  DropdownDocumentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: DropdownDocumentationComponent,
    selectors: [["dropdown-documentation"]],
    decls: 13,
    vars: 8,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8735754952214867633$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiDropdown {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8735754952214867633$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟a0eee56984adde56072e2112676be6bf21dfb29a␟8735754952214867633: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiDropdown ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6653398799439643090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Align of dropdown (does not work together with {$startTagCode}limitWidth === 'fixed'{$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6653398799439643090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:limitWidth === 'fixed'${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8159982415408745443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Set a vertical direction of dropdown ");
        i18n_4 = MSG_EXTERNAL_8159982415408745443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6158927642754956379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Limit width of dropdown ");
        i18n_6 = MSG_EXTERNAL_6158927642754956379$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4679692758727259251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__9 = goog.getMsg(" Minimum height to calculate that dropdown fits to setted {$startTagCode}tuiDropdownDirection{$closeTagCode}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_4679692758727259251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownDirection${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5657510849972139844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__11 = goog.getMsg(" Maximum height of dropdown ");
        i18n_10 = MSG_EXTERNAL_5657510849972139844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_DROPDOWN_DOCUMENTATION_DROPDOWN_DOCUMENTATION_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `;
      }

      return [[1, "tui-text_h6"], i18n_0, ["tuiLink", "", "target", "_blank", "routerLink", "/directives/dropdown"], ["documentationPropertyName", "tuiDropdownAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiVerticalDirection | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownLimitWidth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDropdownWidthT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMinHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMaxHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10];
    },
    template: function DropdownDocumentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6, "TuiDropdownModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, DropdownDocumentationComponent_ng_template_8_Template, 2, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
          return ctx.documentedComponent.dropdownAlign = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, DropdownDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
          return ctx.documentedComponent.dropdownDirection = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, DropdownDocumentationComponent_ng_template_10_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
          return ctx.documentedComponent.dropdownLimitWidth = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, DropdownDocumentationComponent_ng_template_11_Template, 2, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
          return ctx.documentedComponent.dropdownMinHeight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, DropdownDocumentationComponent_ng_template_12_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function DropdownDocumentationComponent_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
          return ctx.documentedComponent.dropdownMaxHeight = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownAlignVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownAlign);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue", ctx.documentedComponent.dropdownLimitWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.dropdownMinHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.dropdownMaxHeight);
      }
    },
    directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLinkComponent */ .V, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterLinkWithHref */ .yS, _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiDocDocumentationComponent */ .z, _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiDocDocumentationPropertyConnectorDirective */ .B],
    encapsulation: 2,
    changeDetection: 0
  });
  return DropdownDocumentationComponent;
})();

/***/ }),

/***/ 19180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DropdownDocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);






let DropdownDocumentationModule = /*#__PURE__*/(() => {
  class DropdownDocumentationModule {}

  DropdownDocumentationModule.ɵfac = function DropdownDocumentationModule_Factory(t) {
    return new (t || DropdownDocumentationModule)();
  };

  DropdownDocumentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: DropdownDocumentationModule
  });
  DropdownDocumentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule]]
  });
  return DropdownDocumentationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsetNgModuleScope"] */ .kYT(DropdownDocumentationModule, {
    declarations: [_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .DropdownDocumentationComponent */ .X],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule],
    exports: [_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .DropdownDocumentationComponent */ .X]
  });
})();

/***/ }),

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AbstractExampleTuiDropdown)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);

class AbstractExampleTuiDropdown {
  constructor() {
    this.dropdownAlignVariants = [`left`, `right`];
    this.dropdownLimitWidthVariants = [`fixed`, `min`, `auto`];
    this.dropdownDirectionVariants = [`bottom`, `top`];
    this.dropdownAlign = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    this.dropdownDirection = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    this.dropdownLimitWidth = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth;
    this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
  }

}

/***/ }),

/***/ 98204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ABSTRACT_PROPS_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class`);

/***/ }),

/***/ 80312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHostedDropdownModule": () => (/* binding */ ExampleTuiHostedDropdownModule)
});

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
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.module.ts
var dropdown_documentation_module = __webpack_require__(19180);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/hosted-dropdown/examples/1/index.ts










function TuiHostedDropdownExample1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 4);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵclassProp */.ekj("icon_rotated", ctx_r1.open);
  }
}

function TuiHostedDropdownExample1_ng_template_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiHostedDropdownExample1_ng_template_5_button_1_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r6.onClick();
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

function TuiHostedDropdownExample1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiHostedDropdownExample1_ng_template_5_button_1_Template, 2, 1, "button", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r3.items);
  }
}

let TuiHostedDropdownExample1 = /*#__PURE__*/(() => {
  class TuiHostedDropdownExample1 {
    constructor() {
      this.items = [`Edit`, `Download`, `Rename`, `Delete`];
      this.open = false;
    }

    onClick() {
      var _a, _b;

      this.open = false;
      (_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement) === null || _b === void 0 ? void 0 : _b.focus();
    }

  }

  TuiHostedDropdownExample1.ɵfac = function TuiHostedDropdownExample1_Factory(t) {
    return new (t || TuiHostedDropdownExample1)();
  };

  TuiHostedDropdownExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHostedDropdownExample1,
    selectors: [["tui-hosted-dropdown-example-1"]],
    viewQuery: function TuiHostedDropdownExample1_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiHostedDropdownComponent, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.component = _t.first);
      }
    },
    decls: 7,
    vars: 3,
    consts: [["tuiDropdownAlign", "left", 3, "content", "open", "openChange"], ["tuiButton", "", "type", "button", "appearance", "flat", 3, "iconRight"], ["icon", ""], ["dropdown", ""], ["src", "tuiIconChevronDown", 1, "icon"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "click"]],
    template: function TuiHostedDropdownExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiHostedDropdownExample1_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiHostedDropdownExample1_ng_template_3_Template, 1, 2, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiHostedDropdownExample1_ng_template_5_Template, 2, 1, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(4);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(6);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r2)("open", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", _r0);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, button_component/* TuiButtonComponent */.v, svg_component/* TuiSvgComponent */.P, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, option_component/* TuiOptionComponent */.v],
    styles: [".icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
    changeDetection: 0
  });
  return TuiHostedDropdownExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown-connector.directive.ts
var hosted_dropdown_connector_directive = __webpack_require__(25121);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/hosted-dropdown/examples/2/index.ts

















function TuiHostedDropdownExample2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 6);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵclassProp */.ekj("icon_rotated", ctx_r1.open);
  }
}

function TuiHostedDropdownExample2_ng_template_7_tui_data_list_wrapper_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 11);
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r5.selectItems);
  }
}

function TuiHostedDropdownExample2_ng_template_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiHostedDropdownExample2_ng_template_7_button_9_Template_button_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r8.onClick();
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r7, " ");
  }
}

function TuiHostedDropdownExample2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 7);
    fesm2015_core/* ɵɵtext */._uU(1, " There is ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3, "let-activeZone");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " in dropdown template context to work with nested dropdowns ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-select", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiHostedDropdownExample2_ng_template_7_Template_tui_select_ngModelChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.selected = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(6, " Nested Select ");
    fesm2015_core/* ɵɵtemplate */.YNc(7, TuiHostedDropdownExample2_ng_template_7_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(9, TuiHostedDropdownExample2_ng_template_7_button_9_Template, 2, 1, "button", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const activeZone_r4 = ctx.$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", activeZone_r4)("ngModel", ctx_r3.selected);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r3.items);
  }
}

let TuiHostedDropdownExample2 = /*#__PURE__*/(() => {
  class TuiHostedDropdownExample2 {
    constructor() {
      this.items = [`Edit`, `Download`, `Rename`, `Delete`];
      this.selectItems = [`Item 1`, `Item 2`];
      this.open = false;
      this.selected = null;
    }

    onClick() {
      var _a, _b;

      this.open = false;
      (_b = (_a = this.component) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement) === null || _b === void 0 ? void 0 : _b.focus();
    }

  }

  TuiHostedDropdownExample2.ɵfac = function TuiHostedDropdownExample2_Factory(t) {
    return new (t || TuiHostedDropdownExample2)();
  };

  TuiHostedDropdownExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHostedDropdownExample2,
    selectors: [["tui-hosted-dropdown-example-2"]],
    viewQuery: function TuiHostedDropdownExample2_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(core.TuiHostedDropdownComponent, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.component = _t.first);
      }
    },
    decls: 9,
    vars: 3,
    consts: [[3, "content", "open", "openChange"], ["tuiGroup", ""], ["tuiButton", "", "type", "button", "size", "l", 1, "tui-group__auto-width-item"], ["tuiIconButton", "", "type", "button", "tuiHostedDropdownHost", "", "title", "Menu", "size", "l", 1, "tui-group__auto-width-item", 3, "iconRight"], ["icon", ""], ["dropdown", ""], ["src", "tuiIconChevronDown", 1, "icon"], [1, "margin"], [1, "margin", 3, "tuiActiveZoneParent", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "items"], ["tuiOption", "", 3, "click"]],
    template: function TuiHostedDropdownExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-hosted-dropdown", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiHostedDropdownExample2_Template_tui_hosted_dropdown_openChange_0_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Button ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "button", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiHostedDropdownExample2_ng_template_5_Template, 1, 2, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiHostedDropdownExample2_ng_template_7_Template, 10, 3, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(6);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵproperty */.Q6J("content", _r2)("open", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("iconRight", _r0);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, group_directive/* TuiGroupDirective */.g, button_component/* TuiButtonComponent */.v, hosted_dropdown_connector_directive/* TuiHostedDropdownConnectorDirective */.i, svg_component/* TuiSvgComponent */.P, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, active_zone_directive/* TuiActiveZoneDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, option_component/* TuiOptionComponent */.v],
    styles: [".margin[_ngcontent-%COMP%]{margin:1rem}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
    changeDetection: 0
  });
  return TuiHostedDropdownExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/components/data-list/opt-group.directive.ts
var opt_group_directive = __webpack_require__(89786);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/hosted-dropdown/examples/3/index.ts










function TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_button_1_tui_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 10);
  }
}

function TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(3);
      return ctx_r7.onClick(item_r5);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_button_1_tui_svg_2_Template, 1, 0, "tui-svg", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r4.itemIsActive(item_r5));
  }
}

function TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-opt-group");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_button_1_Template, 3, 2, "button", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", group_r3);
  }
}

function TuiHostedDropdownExample3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiHostedDropdownExample3_ng_template_6_tui_opt_group_1_Template, 2, 1, "tui-opt-group", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.items);
  }
}

let TuiHostedDropdownExample3 = /*#__PURE__*/(() => {
  class TuiHostedDropdownExample3 {
    constructor() {
      this.open = false;
      this.items = [[`By interest`, `By genre`, `By release year`, `By subject`], [`Ascending`, `Descending`]];
      this.primary = `By genre`;
      this.ascending = false;
    }

    onClick(item) {
      if (this.items[0].includes(item)) {
        this.primary = item;
        return;
      }

      this.ascending = item === this.items[1][0];
    }

    itemIsActive(item) {
      return item === this.primary || this.ascending && item === this.items[1][0] || !this.ascending && item === this.items[1][1];
    }

  }

  TuiHostedDropdownExample3.ɵfac = function TuiHostedDropdownExample3_Factory(t) {
    return new (t || TuiHostedDropdownExample3)();
  };

  TuiHostedDropdownExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHostedDropdownExample3,
    selectors: [["tui-hosted-dropdown-example-3"]],
    decls: 8,
    vars: 7,
    consts: [[1, "wrapper"], ["tuiDropdownAlign", "right", 3, "content", "open", "openChange"], ["tuiLink", "", "tabindex", "0", 1, "link"], ["src", "tuiIconSortDown", 1, "sort"], ["src", "tuiIconChevronDown", 1, "arrow"], ["dropdown", ""], [4, "ngFor", "ngForOf"], ["tuiOption", "", "class", "item", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 1, "item", 3, "click"], ["src", "tuiIconCheck", 4, "ngIf"], ["src", "tuiIconCheck"]],
    template: function TuiHostedDropdownExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-hosted-dropdown", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiHostedDropdownExample3_Template_tui_hosted_dropdown_openChange_1_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 3);
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiHostedDropdownExample3_ng_template_6_Template, 2, 1, "ng-template", null, 5, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("open", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵclassProp */.ekj("sort_ascending", ctx.ascending);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.primary, " ");
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵclassProp */.ekj("arrow_open", ctx.open);
      }
    },
    directives: [hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, link_component/* TuiLinkComponent */.V, svg_component/* TuiSvgComponent */.P, data_list_component/* TuiDataListComponent */.q, common/* NgForOf */.sg, opt_group_directive/* TuiOptGroupDirective */.R, option_component/* TuiOptionComponent */.v, common/* NgIf */.O5],
    styles: [".wrapper[_ngcontent-%COMP%]{width:12.5rem;text-align:right}.link[_ngcontent-%COMP%]{font-size:1.0625rem}.sort[_ngcontent-%COMP%]{vertical-align:-.125rem}.sort_ascending[_ngcontent-%COMP%]{transform:scaleY(-1)}.item[_ngcontent-%COMP%]{min-width:12.5rem}.arrow[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.arrow_open[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
    changeDetection: 0
  });
  return TuiHostedDropdownExample3;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown.ts
var dropdown = __webpack_require__(155);
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
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.component.ts
var dropdown_documentation_component = __webpack_require__(89104);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/hosted-dropdown/hosted-dropdown.component.ts






















function ExampleTuiHostedDropdownComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵtext */._uU(4, " If a wrapped element is input, arrow down press opens a dropdown. The next press focuses the first item from the list. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 3);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-hosted-dropdown-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-hosted-dropdown-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-hosted-dropdown-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div");
    fesm2015_core/* ɵɵi18n */.SDv(2, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_4_Template_button_click_4_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r8.onClick();
    });
    fesm2015_core/* ɵɵi18n */.SDv(5, 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_4_Template_button_click_6_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r10.onClick();
    });
    fesm2015_core/* ɵɵi18n */.SDv(7, 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Content inside a dropdown ");
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-hosted-dropdown", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("openChange", function ExampleTuiHostedDropdownComponent_ng_template_2_Template_tui_hosted_dropdown_openChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.open = $event;
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiHostedDropdownComponent_ng_template_2_Template_tui_input_ngModelChange_2_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.onInput($event);
    });
    fesm2015_core/* ɵɵtext */._uU(3, " Start typing ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_4_Template, 8, 0, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHostedDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.open = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHostedDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.canOpenSelected = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiHostedDropdownComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiHostedDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.content = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "dropdown-documentation");
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.template ? _r3 : ctx_r1.content)("canOpen", ctx_r1.canOpen)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("open", ctx_r1.open);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r1.input);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.open);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.canOpenVariants)("documentationPropertyValue", ctx_r1.canOpenSelected);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.content);
  }
}

function ExampleTuiHostedDropdownComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiHostedDropdownComponent = /*#__PURE__*/(() => {
  class ExampleTuiHostedDropdownComponent extends dropdown/* AbstractExampleTuiDropdown */.X {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 59141).then(__webpack_require__.t.bind(__webpack_require__, 59141, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 71744).then(__webpack_require__.t.bind(__webpack_require__, 71744, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 29035).then(__webpack_require__.t.bind(__webpack_require__, 29035, 17)),
        HTML: __webpack_require__.e(/* import() */ 64483).then(__webpack_require__.t.bind(__webpack_require__, 64483, 17)),
        LESS: __webpack_require__.e(/* import() */ 96549).then(__webpack_require__.t.bind(__webpack_require__, 96549, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 89923).then(__webpack_require__.t.bind(__webpack_require__, 89923, 17)),
        HTML: __webpack_require__.e(/* import() */ 94291).then(__webpack_require__.t.bind(__webpack_require__, 94291, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 95725).then(__webpack_require__.t.bind(__webpack_require__, 95725, 17)),
        HTML: __webpack_require__.e(/* import() */ 45490).then(__webpack_require__.t.bind(__webpack_require__, 45490, 17)),
        LESS: __webpack_require__.e(/* import() */ 84959).then(__webpack_require__.t.bind(__webpack_require__, 84959, 17))
      };
      this.open = false;
      this.input = ``;
      this.canOpenVariants = [true, `getter this.input.length > 2`];
      this.canOpenSelected = this.canOpenVariants[0];
      this.contentVariants = [`Template`, `Custom string`];
      this.content = this.contentVariants[0];
    }

    get template() {
      return this.content === `Template`;
    }

    get canOpen() {
      return this.canOpenSelected === true || this.input.length > 2;
    }

    onInput(input) {
      this.input = input;
      this.open = this.canOpen;
    }

    onClick() {
      this.open = false;
    }

  }

  ExampleTuiHostedDropdownComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiHostedDropdownComponent_BaseFactory;
    return function ExampleTuiHostedDropdownComponent_Factory(t) {
      return (ɵExampleTuiHostedDropdownComponent_BaseFactory || (ɵExampleTuiHostedDropdownComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiHostedDropdownComponent)))(t || ExampleTuiHostedDropdownComponent);
    };
  }();

  ExampleTuiHostedDropdownComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHostedDropdownComponent,
    selectors: [["example-tui-hosted-dropdown"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiHostedDropdownComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1529513892947364529$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}tui-hosted-dropdown{$closeTagCode} is a wrapper for focusable elements to attach to them a dropdown. Working with keyboard is also included. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1529513892947364529$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟bb23b33ff55b89b4ef1ff9f42c722c963532ddde␟1529513892947364529:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tui-hosted-dropdown${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a wrapper for focusable elements to attach to them a dropdown. Working with keyboard is also included. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8899829235118307940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__3 = goog.getMsg(" If it is not, mouseclick opens and closes a dropdown. A component uses the first focusable item inside component as a host for opening a dropdown. If you want another element to be host, use {$startTagCode}tuiHostedDropdownHost{$closeTagCode} directive. ", {
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_8899829235118307940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟efdb022d31503afb246eed827285d239f0b2e604␟8899829235118307940: If it is not, mouseclick opens and closes a dropdown. A component uses the first focusable item inside component as a host for opening a dropdown. If you want another element to be host, use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:tuiHostedDropdownHost${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: directive. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5686994794020204214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__5 = goog.getMsg("With custom host");
        i18n_4 = MSG_EXTERNAL_5686994794020204214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟be00b142ca0e6e14140ce7c0edff70479c6f5246␟5686994794020204214:With custom host`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1177785284888813619$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__7 = goog.getMsg("With link");
        i18n_6 = MSG_EXTERNAL_1177785284888813619$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟09abd055702f5b0ff600b7976e401647508e9dbf␟1177785284888813619:With link`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3492793234322048620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___9 = goog.getMsg("Do you like using Taiga UI?");
        i18n_8 = MSG_EXTERNAL_3492793234322048620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟7df916223beceabaff5ce2c5d10d8c6b6223994f␟3492793234322048620:Do you like using Taiga UI?`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1986526768401672090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___11 = goog.getMsg(" Yes ");
        i18n_10 = MSG_EXTERNAL_1986526768401672090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1986526768401672090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___13 = goog.getMsg(" Yes ");
        i18n_12 = MSG_EXTERNAL_1986526768401672090$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6128312972490006384$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___15 = goog.getMsg(" Open/close state ");
        i18n_14 = MSG_EXTERNAL_6128312972490006384$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟a102f9b79d10ce912dd520a7723676aaa1e1db15␟6128312972490006384: Open/close state `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5861935679849365104$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___17 = goog.getMsg(" A handler to enable/disable opening ");
        i18n_16 = MSG_EXTERNAL_5861935679849365104$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟863c6aa88fe2ac1d5c7c7787679d04aeaf6fa6ce␟5861935679849365104: A handler to enable/disable opening `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1923024221701838874$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiHostedDropdownModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1923024221701838874$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟3fd326cbbddd540407cbe67384529cf3299d2dce␟1923024221701838874: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHostedDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_HOSTED_DROPDOWN_HOSTED_DROPDOWN_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "HostedDropdown", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, i18n_2, ["id", "menu", "heading", "Menu", 3, "content"], ["id", "tuiDropdownHost", "heading", i18n_4, 3, "content"], ["id", "native", "heading", i18n_6, 3, "content"], [3, "content", "canOpen", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "open", "openChange"], [1, "input", 3, "ngModel", "ngModelChange"], ["dropdown", ""], ["documentationPropertyName", "open", "documentationPropertyMode", "input-output", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "canOpen", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "content", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "dropdown"], i18n_8, [1, "buttons"], ["tuiButton", "", "type", "button", "size", "m", 1, "button", 3, "click"], i18n_10, ["tuiButton", "", "type", "button", "appearance", "secondary", "size", "m", 1, "button", 3, "click"], i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHostedDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHostedDropdownComponent_ng_template_1_Template, 14, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHostedDropdownComponent_ng_template_2_Template, 11, 14, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiHostedDropdownComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHostedDropdownExample1, TuiHostedDropdownExample2, TuiHostedDropdownExample3, demo_component/* TuiDocDemoComponent */.F, hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, dropdown_documentation_component/* DropdownDocumentationComponent */.X, button_component/* TuiButtonComponent */.v, code_component/* TuiDocCodeComponent */.c],
    styles: [".input[_ngcontent-%COMP%]{width:15.625rem}.dropdown[_ngcontent-%COMP%]{padding:1.25rem}.buttons[_ngcontent-%COMP%]{display:flex;margin-bottom:0}.button[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]:first-child{margin-right:.75rem}"],
    changeDetection: 0
  });
  return ExampleTuiHostedDropdownComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/hosted-dropdown/hosted-dropdown.module.ts















let ExampleTuiHostedDropdownModule = /*#__PURE__*/(() => {
  class ExampleTuiHostedDropdownModule {}

  ExampleTuiHostedDropdownModule.ɵfac = function ExampleTuiHostedDropdownModule_Factory(t) {
    return new (t || ExampleTuiHostedDropdownModule)();
  };

  ExampleTuiHostedDropdownModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHostedDropdownModule
  });
  ExampleTuiHostedDropdownModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, fesm2015_forms/* FormsModule */.u5, core.TuiHostedDropdownModule, core.TuiNotificationModule, kit.TuiTabsModule, kit.TuiInputModule, core.TuiButtonModule, core.TuiGroupModule, core.TuiSvgModule, core.TuiLinkModule, kit.TuiSelectModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, dropdown_documentation_module/* DropdownDocumentationModule */.F, public_api/* TuiAddonDocModule */.fV, kit.TuiToggleModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHostedDropdownComponent))]]
  });
  return ExampleTuiHostedDropdownModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHostedDropdownModule, {
    declarations: [TuiHostedDropdownExample1, TuiHostedDropdownExample2, TuiHostedDropdownExample3, ExampleTuiHostedDropdownComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, fesm2015_forms/* FormsModule */.u5, core.TuiHostedDropdownModule, core.TuiNotificationModule, kit.TuiTabsModule, kit.TuiInputModule, core.TuiButtonModule, core.TuiGroupModule, core.TuiSvgModule, core.TuiLinkModule, kit.TuiSelectModule, cdk.TuiActiveZoneModule, core.TuiDropdownModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, dropdown_documentation_module/* DropdownDocumentationModule */.F, public_api/* TuiAddonDocModule */.fV, kit.TuiToggleModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiHostedDropdownComponent]
  });
})();

/***/ })

}]);