"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75695],{

/***/ 82880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AbstractExampleTuiControl)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57750);


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__/* .AbstractExampleTuiInteractive */ .O {
  constructor() {
    super(...arguments);
    this.sizeVariants = [`s`, `m`, `l`];
    this.hintContentVariants = [``, `Some content`];
    this.hintDirectionVariants = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_HINT_DIRECTIONS;
    this.hintAppearanceVariants = [``, `error`, `onDark`];
    this.typeVariants = [`text`, `email`, `password`, `tel`, `url`];
    this.maxLengthVariants = [10];
    this.autocompleteVariants = [``, `off`, `cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-type`, `given-name`, `additional-name`, `family-name`, `username`, `email`, `street-address`, `postal-code`, `country-name`];
    this.inputModeVariants = [`text`, `numeric`];
    this.customContentVariants = [CUSTOM_SVG_NAME, `tuiIconSearchLarge`, `tuiIconCalendarLarge`, `tuiIconVisaMono`, `tuiIconMastercardMono`];
    this.customContentSelected = ``;
    this.inputMode = this.inputModeVariants[0];
    this.autocomplete = ``;
    this.maxLength = null;
    this.type = this.typeVariants[0];
    this.cleaner = false;
    this.pseudoInvalid = null;
    this.success = false;
    this.readOnly = false;
    this.labelOutside = false;
    this.size = this.sizeVariants[2];
    this.exampleText = ``;
    this.maxHeight = null;
    this.iconLeftVariants = [``, `tuiIconMailLarge`, `tuiIconPiechartLarge`];
    this.iconLeft = this.iconLeftVariants[0];
    this.hintContent = this.hintContentVariants[0];
    this.hintDirection = this.hintDirectionVariants[0];
    this.hintAppearance = this.hintAppearanceVariants[0];
    this.dropdownAlignVariants = [`left`, `right`];
    this.dropdownAlign = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    this.dropdownLimitWidthVariants = [`fixed`, `min`, `auto`];
    this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
    this.dropdownDirectionVariants = [`bottom`, `top`];
    this.dropdownDirection = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
  }

  get customContent() {
    return this.customContentSelected === CUSTOM_SVG_NAME ? CUSTOM_SVG : this.customContentSelected;
  }

  get disabled() {
    return this.control.disabled;
  }

  set disabled(value) {
    if (value) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

}

/***/ }),

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

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ HintControllerDocumentationComponent)
/* harmony export */ });
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66263);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17023);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82880);








function HintControllerDocumentationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 6);
  }
}

function HintControllerDocumentationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 7);
  }
}

function HintControllerDocumentationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 8);
  }
}

let HintControllerDocumentationComponent = /*#__PURE__*/(() => {
  class HintControllerDocumentationComponent {
    constructor(documentedComponent) {
      this.documentedComponent = documentedComponent;
    }

  }

  HintControllerDocumentationComponent.ɵfac = function HintControllerDocumentationComponent_Factory(t) {
    return new (t || HintControllerDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__/* .ABSTRACT_PROPS_ACCESSOR */ .x));
  };

  HintControllerDocumentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: HintControllerDocumentationComponent,
    selectors: [["hint-controller-documentation"]],
    decls: 11,
    vars: 6,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1556534800121967700$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiHint {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1556534800121967700$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟55d8bcff386968465d55461bbcbfef7dec3920eb␟1556534800121967700: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiHint ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8937165331794777466$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Content of a hint ");
        i18n_2 = MSG_EXTERNAL_8937165331794777466$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟d7bf3bc8da1353613dbc213e46fd9c27e74579a0␟8937165331794777466: Content of a hint `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3935903673702800277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Hint direction ");
        i18n_4 = MSG_EXTERNAL_3935903673702800277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e18800c0fc9d48ba52db6f2e70f4e1af09510798␟3935903673702800277: Hint direction `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5804056483239337159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Hint mode ");
        i18n_6 = MSG_EXTERNAL_5804056483239337159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_HINT_CONTROLLER_DOCUMENTATION_HINT_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟bc52b3a9e02da71ae232468999e85f548d2afc40␟5804056483239337159: Hint mode `;
      }

      return [[1, "tui-text_h6"], i18n_0, ["tuiLink", "", "target", "_blank", "routerLink", "/directives/hint"], ["documentationPropertyName", "tuiHintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintAppearance", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, i18n_6];
    },
    template: function HintControllerDocumentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6, "TuiHintModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, HintControllerDocumentationComponent_ng_template_8_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
          return ctx.documentedComponent.hintContent = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, HintControllerDocumentationComponent_ng_template_9_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
          return ctx.documentedComponent.hintDirection = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, HintControllerDocumentationComponent_ng_template_10_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function HintControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
          return ctx.documentedComponent.hintAppearance = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.hintContentVariants)("documentationPropertyValue", ctx.documentedComponent.hintContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.hintDirectionVariants)("documentationPropertyValue", ctx.documentedComponent.hintDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.hintAppearanceVariants)("documentationPropertyValue", ctx.documentedComponent.hintAppearance);
      }
    },
    directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLinkComponent */ .V, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterLinkWithHref */ .yS, _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiDocDocumentationComponent */ .z, _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiDocDocumentationPropertyConnectorDirective */ .B],
    encapsulation: 2,
    changeDetection: 0
  });
  return HintControllerDocumentationComponent;
})();

/***/ }),

/***/ 77788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ HintControllerDocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);






let HintControllerDocumentationModule = /*#__PURE__*/(() => {
  class HintControllerDocumentationModule {}

  HintControllerDocumentationModule.ɵfac = function HintControllerDocumentationModule_Factory(t) {
    return new (t || HintControllerDocumentationModule)();
  };

  HintControllerDocumentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: HintControllerDocumentationModule
  });
  HintControllerDocumentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule]]
  });
  return HintControllerDocumentationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsetNgModuleScope"] */ .kYT(HintControllerDocumentationModule, {
    declarations: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .HintControllerDocumentationComponent */ .F],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule],
    exports: [_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .HintControllerDocumentationComponent */ .F]
  });
})();

/***/ }),

/***/ 93352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ AbstractExampleTuiHint)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);

class AbstractExampleTuiHint {
  constructor() {
    this.appearanceVariants = [``, `error`, `onDark`];
    this.appearance = this.appearanceVariants[0];
    this.directionVariants = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_HINT_DIRECTIONS;
    this.direction = this.directionVariants[0];
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

/***/ 54218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ InheritedDocumentationComponent)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82880);
/* harmony import */ var _hint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93352);
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57750);
/* harmony import */ var _abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12057);
/* harmony import */ var _dropdown_documentation_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89104);
/* harmony import */ var _hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16406);
/* harmony import */ var _textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15800);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66263);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17023);













function InheritedDocumentationComponent_dropdown_documentation_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(0, "dropdown-documentation");
  }
}

function InheritedDocumentationComponent_ng_container_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 5);
  }
}

function InheritedDocumentationComponent_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 6);
  }
}

function InheritedDocumentationComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(1, "hint-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(2, "textfield-controller-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(3, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18nStart"] */ .tHW(4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18nEnd"] */ .N_p();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(6, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(7, InheritedDocumentationComponent_ng_container_1_ng_template_7_Template, 1, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_1_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r6.documentedComponent.readOnly = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(8, InheritedDocumentationComponent_ng_container_1_ng_template_8_Template, 1, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_1_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r8.documentedComponent.pseudoInvalid = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx_r1.documentedComponent.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r1.booleanVariants)("documentationPropertyValue", ctx_r1.documentedComponent.pseudoInvalid);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 16);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 17);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 18);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 19);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 20);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 21);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 22);
  }
}

function InheritedDocumentationComponent_ng_container_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 23);
  }
}

function InheritedDocumentationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(1, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18nStart"] */ .tHW(2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18nEnd"] */ .N_p();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(5, InheritedDocumentationComponent_ng_container_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r17.documentedComponent.focusable = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(6, InheritedDocumentationComponent_ng_container_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(7, InheritedDocumentationComponent_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r19.documentedComponent.pseudoHovered = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(8, InheritedDocumentationComponent_ng_container_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r20.documentedComponent.pseudoFocused = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(9, InheritedDocumentationComponent_ng_container_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_ng_container_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r21.documentedComponent.pseudoPressed = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(10, InheritedDocumentationComponent_ng_container_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(11, InheritedDocumentationComponent_ng_container_2_ng_template_11_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(12, InheritedDocumentationComponent_ng_container_2_ng_template_12_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx_r2.documentedComponent.focusable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoHovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r2.booleanVariants)("documentationPropertyValue", ctx_r2.documentedComponent.pseudoPressed);
  }
}

function InheritedDocumentationComponent_tui_doc_documentation_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 26);
  }
}

function InheritedDocumentationComponent_tui_doc_documentation_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵi18n"] */ .SDv(0, 27);
  }
}

function InheritedDocumentationComponent_tui_doc_documentation_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(1, InheritedDocumentationComponent_tui_doc_documentation_3_ng_template_1_Template, 1, 0, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_tui_doc_documentation_3_Template_ng_template_documentationPropertyValueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r24.documentedComponent.direction = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(2, InheritedDocumentationComponent_tui_doc_documentation_3_ng_template_2_Template, 1, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function InheritedDocumentationComponent_tui_doc_documentation_3_Template_ng_template_documentationPropertyValueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r26.documentedComponent.appearance = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r3.directionVariants)("documentationPropertyValue", ctx_r3.documentedComponent.direction);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx_r3.appearanceVariants)("documentationPropertyValue", ctx_r3.documentedComponent.appearance);
  }
}

let InheritedDocumentationComponent = /*#__PURE__*/(() => {
  class InheritedDocumentationComponent {
    constructor(documentedComponent) {
      this.documentedComponent = documentedComponent;
      this.dropdown = false;
      this.booleanVariants = [false, true];
      this.directionVariants = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_HINT_DIRECTIONS;
      this.appearanceVariants = [``, `error`, `onDark`];
    }

    isTuiReactiveControl(documentedComponent) {
      return documentedComponent instanceof _control__WEBPACK_IMPORTED_MODULE_1__/* .AbstractExampleTuiControl */ .b;
    }

    isTuiInteractive(documentedComponent) {
      return documentedComponent instanceof _interactive__WEBPACK_IMPORTED_MODULE_9__/* .AbstractExampleTuiInteractive */ .O;
    }

    isTuiHint(documentedComponent) {
      return documentedComponent instanceof _hint__WEBPACK_IMPORTED_MODULE_2__/* .AbstractExampleTuiHint */ .l;
    }

  }

  InheritedDocumentationComponent.ɵfac = function InheritedDocumentationComponent_Factory(t) {
    return new (t || InheritedDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_3__/* .ABSTRACT_PROPS_ACCESSOR */ .x));
  };

  InheritedDocumentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: InheritedDocumentationComponent,
    selectors: [["inherited-documentation"]],
    inputs: {
      dropdown: "dropdown"
    },
    decls: 4,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_721276220650916123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__1 = goog.getMsg(" Inherited from {$startTagCode}TuiReactiveControl{$closeTagCode}", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_721276220650916123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟39a776c9650df9dd4c25fe602323fe1433491943␟721276220650916123: Inherited from ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:TuiReactiveControl${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1258207454480608117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___3 = goog.getMsg(" Component is read only ");
        i18n_2 = MSG_EXTERNAL_1258207454480608117$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___3;
      } else {
        i18n_2 = $localize`:␟7ea3fa99762b474f8370d948e5f3be06543b8341␟1258207454480608117: Component is read only `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2775038340083920167$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___5 = goog.getMsg(" Set invalid state regardless of control ");
        i18n_4 = MSG_EXTERNAL_2775038340083920167$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___5;
      } else {
        i18n_4 = $localize`:␟d7ec9bdfdb46e69878e54260fe303245b70e9b75␟2775038340083920167: Set invalid state regardless of control `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1337301013174865835$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Inherited from {$startTagCode}TuiInteractive{$closeTagCode}", {
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_1337301013174865835$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟bb142ed71f7c1acc4a9a33b0286f1c99ff5aa873␟1337301013174865835: Inherited from ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiInteractive${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5558345549391106839$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___9 = goog.getMsg(" Element can be focused ");
        i18n_8 = MSG_EXTERNAL_5558345549391106839$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟2c8de4e0b3d5250d418a789a5ad2dd652cff0a43␟5558345549391106839: Element can be focused `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8633113156251760283$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___11 = goog.getMsg(" Native ID attribute for element. It helps users with Screen Readers to use a page ");
        i18n_10 = MSG_EXTERNAL_8633113156251760283$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟2650b3b61836ba5aa3f00821a8e942ecfab8a7b0␟8633113156251760283: Native ID attribute for element. It helps users with Screen Readers to use a page `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1957913849253912534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___13 = goog.getMsg(" Visual hovered state ");
        i18n_12 = MSG_EXTERNAL_1957913849253912534$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟7f3b87d2db71ad7f32d92a6532a474e3c84a7ccc␟1957913849253912534: Visual hovered state `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5377656771004740058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___15 = goog.getMsg(" Visual focused state ");
        i18n_14 = MSG_EXTERNAL_5377656771004740058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟4a0d9f7f4da08da0f70e0d4df8b8ca42af9b4a31␟5377656771004740058: Visual focused state `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5687635438532492053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___17 = goog.getMsg(" Visual pressed state ");
        i18n_16 = MSG_EXTERNAL_5687635438532492053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟20357105a7da32d6aaee2c23e59b116319736295␟5687635438532492053: Visual pressed state `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3889016178641587251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___19 = goog.getMsg(" Emits on focus and blur ");
        i18n_18 = MSG_EXTERNAL_3889016178641587251$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟f9e99dc6cc483a556226b171a54d8b9ae132c379␟3889016178641587251: Emits on focus and blur `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2576134130150040377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___21 = goog.getMsg(" Emits on hover and unhover ");
        i18n_20 = MSG_EXTERNAL_2576134130150040377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟bb9fc77151c99bfdc5675ba9110914936bb5ab59␟2576134130150040377: Emits on hover and unhover `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2329009025401191718$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___23 = goog.getMsg(" Emits on press down and up ");
        i18n_22 = MSG_EXTERNAL_2329009025401191718$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟f89c4cd7a56942ddf2fcacd5afb9bf6aa76c25a1␟2329009025401191718: Emits on press down and up `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3935903673702800277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___25 = goog.getMsg(" Hint direction ");
        i18n_24 = MSG_EXTERNAL_3935903673702800277$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟e18800c0fc9d48ba52db6f2e70f4e1af09510798␟3935903673702800277: Hint direction `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5804056483239337159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___27 = goog.getMsg(" Hint mode ");
        i18n_26 = MSG_EXTERNAL_5804056483239337159$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_INHERITED_DOCUMENTATION_INHERITED_DOCUMENTATION_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟bc52b3a9e02da71ae232468999e85f548d2afc40␟5804056483239337159: Hint mode `;
      }

      return [[4, "ngIf"], [1, "tui-text_h6"], i18n_0, ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoInvalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, i18n_6, ["documentationPropertyName", "focusable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "nativeId", "documentationPropertyMode", "input", "documentationPropertyType", "string"], ["documentationPropertyName", "pseudoHovered", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoFocused", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoPressed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "focusedChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], ["documentationPropertyName", "hoveredChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], ["documentationPropertyName", "pressedChange", "documentationPropertyMode", "output", "documentationPropertyType", "boolean"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, ["documentationPropertyName", "tuiHintDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiHintAppearance", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_24, i18n_26];
    },
    template: function InheritedDocumentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(0, InheritedDocumentationComponent_dropdown_documentation_0_Template, 1, 0, "dropdown-documentation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(1, InheritedDocumentationComponent_ng_container_1_Template, 9, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(2, InheritedDocumentationComponent_ng_container_2_Template, 13, 7, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(3, InheritedDocumentationComponent_tui_doc_documentation_3_Template, 3, 4, "tui-doc-documentation", 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.dropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTuiReactiveControl(ctx.documentedComponent));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTuiInteractive(ctx.documentedComponent));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.isTuiHint(ctx.documentedComponent));
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .O5, _dropdown_documentation_dropdown_documentation_component__WEBPACK_IMPORTED_MODULE_4__/* .DropdownDocumentationComponent */ .X, _hint_controller_documentation_hint_controller_documentation_component__WEBPACK_IMPORTED_MODULE_5__/* .HintControllerDocumentationComponent */ .F, _textfield_controller_documentation_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_6__/* .TextfieldControllerDocumentationComponent */ .O, _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_7__/* .TuiDocDocumentationComponent */ .z, _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__/* .TuiDocDocumentationPropertyConnectorDirective */ .B],
    encapsulation: 2,
    changeDetection: 0
  });
  return InheritedDocumentationComponent;
})();

/***/ }),

/***/ 75695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InheritedDocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12057);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _dropdown_documentation_dropdown_documentation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19180);
/* harmony import */ var _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77788);
/* harmony import */ var _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82387);
/* harmony import */ var _inherited_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74788);







let InheritedDocumentationModule = /*#__PURE__*/(() => {
  class InheritedDocumentationModule {}

  InheritedDocumentationModule.ɵfac = function InheritedDocumentationModule_Factory(t) {
    return new (t || InheritedDocumentationModule)();
  };

  InheritedDocumentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: InheritedDocumentationModule
  });
  InheritedDocumentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .CommonModule */ .ez, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _dropdown_documentation_dropdown_documentation_module__WEBPACK_IMPORTED_MODULE_1__/* .DropdownDocumentationModule */ .F, _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_2__/* .HintControllerDocumentationModule */ .I, _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__/* .TextfieldControllerDocumentationModule */ .J]]
  });
  return InheritedDocumentationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵsetNgModuleScope"] */ .kYT(InheritedDocumentationModule, {
    declarations: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_4__/* .InheritedDocumentationComponent */ .w],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .CommonModule */ .ez, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _dropdown_documentation_dropdown_documentation_module__WEBPACK_IMPORTED_MODULE_1__/* .DropdownDocumentationModule */ .F, _hint_controller_documentation_hint_controller_documentation_module__WEBPACK_IMPORTED_MODULE_2__/* .HintControllerDocumentationModule */ .I, _textfield_controller_documentation_textfield_controller_documentation_module__WEBPACK_IMPORTED_MODULE_3__/* .TextfieldControllerDocumentationModule */ .J],
    exports: [_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_4__/* .InheritedDocumentationComponent */ .w]
  });
})();

/***/ }),

/***/ 57750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AbstractExampleTuiInteractive)
/* harmony export */ });
class AbstractExampleTuiInteractive {
  constructor() {
    this.pseudoVariants = [false, true];
    this.focusable = true;
    this.pseudoFocused = null;
    this.pseudoHovered = null;
    this.pseudoPressed = null;
  }

}

/***/ }),

/***/ 15800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ TextfieldControllerDocumentationComponent)
/* harmony export */ });
/* harmony import */ var _inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66263);
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17023);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82880);








function TextfieldControllerDocumentationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 8);
  }
}

function TextfieldControllerDocumentationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function TextfieldControllerDocumentationComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

function TextfieldControllerDocumentationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18n"] */ .SDv(0, 13);
  }
}

function TextfieldControllerDocumentationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
  }
}

let TextfieldControllerDocumentationComponent = /*#__PURE__*/(() => {
  class TextfieldControllerDocumentationComponent {
    constructor(documentedComponent) {
      this.documentedComponent = documentedComponent;
    }

  }

  TextfieldControllerDocumentationComponent.ɵfac = function TextfieldControllerDocumentationComponent_Factory(t) {
    return new (t || TextfieldControllerDocumentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_0__/* .ABSTRACT_PROPS_ACCESSOR */ .x));
  };

  TextfieldControllerDocumentationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: TextfieldControllerDocumentationComponent,
    selectors: [["textfield-controller-documentation"]],
    decls: 13,
    vars: 8,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1572963165264754773$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1 = goog.getMsg(" Can be expanded with {$startLink} TuiTextfieldController {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1572963165264754773$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟0f16016fd47f3e9ccfc14daf7f94aff13d49e3be␟1572963165264754773: Can be expanded with ${"\uFFFD#2\uFFFD"}:START_LINK: TuiTextfieldController ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6662346409225163623$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3 = goog.getMsg(" Shows a cross to reset a value ");
        i18n_2 = MSG_EXTERNAL_6662346409225163623$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟86c783c312258a4cc253591b5a817b17c223dc95␟6662346409225163623: Shows a cross to reset a value `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5707424768258205077$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5 = goog.getMsg(" Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as {$startTagCode}src{$closeTagCode} or as icon name into {$startLink} tui-svg {$closeLink}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5707424768258205077$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟977f2847987a4300141e647213ea25dd30c1fddc␟5707424768258205077: Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:src${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: or as icon name into ${"\uFFFD#2\uFFFD"}:START_LINK: tui-svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8186517819514631991$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}{$startParagraph} ( {$startTagCode}labelOutside = false{$closeTagCode} does not work together with {$startTagCode}size === 's'{$closeTagCode} : for s-size inputs use only outside labels) {$closeParagraph}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startParagraph": "\uFFFD#3\uFFFD",
          "closeParagraph": "\uFFFD/#3\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_8186517819514631991$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0c2110b3b3ff8d6f28e7505a79d295d58b028a3d␟8186517819514631991: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Label${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:${"\uFFFD#3\uFFFD"}:START_PARAGRAPH: ( ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:labelOutside = false${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: does not work together with ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:size === 's'${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: : for s-size inputs use only outside labels) ${"\uFFFD/#3\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      i18n_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nPostprocess"] */ .Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1502661819829929661$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9 = goog.getMsg(" Size ");
        i18n_8 = MSG_EXTERNAL_1502661819829929661$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟13eed072cbe605d542b91197fe1edd6674cca0e4␟1502661819829929661: Size `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5680086222992448668$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11 = goog.getMsg(" A left icon. It can be stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5680086222992448668$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ABSTRACT_TEXTFIELD_CONTROLLER_DOCUMENTATION_TEXTFIELD_CONTROLLER_DOCUMENTATION_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟dbe9750b4cf5345aff5b3c3d29c4027fc3a9fad8␟5680086222992448668: A left icon. It can be stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      return [[1, "tui-text_h6"], i18n_0, ["tuiLink", "", "target", "_blank", "routerLink", "/directives/textfield-controller"], ["documentationPropertyName", "tuiTextfieldCleaner", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCustomContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldIconLeft", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_2, i18n_4, ["routerLink", "/components/svg", "tuiLink", ""], i18n_6, ["tuiLink", "", "routerLink", "/components/label"], i18n_8, i18n_10, ["tuiLink", "", "routerLink", "/services/svg-service"]];
    },
    template: function TextfieldControllerDocumentationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nStart"] */ .tHW(1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵi18nEnd"] */ .N_p();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(4, " Requires you to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(6, "TuiTextfieldControllerModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(7, "tui-doc-documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, TextfieldControllerDocumentationComponent_ng_template_8_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
          return ctx.documentedComponent.cleaner = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(9, TextfieldControllerDocumentationComponent_ng_template_9_Template, 3, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
          return ctx.documentedComponent.customContentSelected = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(10, TextfieldControllerDocumentationComponent_ng_template_10_Template, 6, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
          return ctx.documentedComponent.labelOutside = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, TextfieldControllerDocumentationComponent_ng_template_11_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
          return ctx.documentedComponent.size = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, TextfieldControllerDocumentationComponent_ng_template_12_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("documentationPropertyValueChange", function TextfieldControllerDocumentationComponent_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
          return ctx.documentedComponent.iconLeft = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.cleaner);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.customContentVariants)("documentationPropertyValue", ctx.documentedComponent.customContentSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValue", ctx.documentedComponent.labelOutside);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.sizeVariants)("documentationPropertyValue", ctx.documentedComponent.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("documentationPropertyValues", ctx.documentedComponent.iconLeftVariants)("documentationPropertyValue", ctx.documentedComponent.iconLeft);
      }
    },
    directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLinkComponent */ .V, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterLinkWithHref */ .yS, _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiDocDocumentationComponent */ .z, _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiDocDocumentationPropertyConnectorDirective */ .B],
    encapsulation: 2,
    changeDetection: 0
  });
  return TextfieldControllerDocumentationComponent;
})();

/***/ }),

/***/ 82387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ TextfieldControllerDocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12021);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90987);
/* harmony import */ var _textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74788);






let TextfieldControllerDocumentationModule = /*#__PURE__*/(() => {
  class TextfieldControllerDocumentationModule {}

  TextfieldControllerDocumentationModule.ɵfac = function TextfieldControllerDocumentationModule_Factory(t) {
    return new (t || TextfieldControllerDocumentationModule)();
  };

  TextfieldControllerDocumentationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .oAB({
    type: TextfieldControllerDocumentationModule
  });
  TextfieldControllerDocumentationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .cJS({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule]]
  });
  return TextfieldControllerDocumentationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵsetNgModuleScope"] */ .kYT(TextfieldControllerDocumentationModule, {
    declarations: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TextfieldControllerDocumentationComponent */ .O],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .ez, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .Bz, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__/* .TuiDocDocumentationModule */ .Lx, _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiLinkModule],
    exports: [_textfield_controller_documentation_component__WEBPACK_IMPORTED_MODULE_2__/* .TextfieldControllerDocumentationComponent */ .O]
  });
})();

/***/ })

}]);