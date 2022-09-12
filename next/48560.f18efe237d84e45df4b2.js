"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48560],{

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
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78697);
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

/***/ 48560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDropdownHoverModule": () => (/* binding */ ExampleTuiDropdownHoverModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.module.ts
var dropdown_documentation_module = __webpack_require__(19180);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
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
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-hover.directive.ts
var dropdown_hover_directive = __webpack_require__(27084);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown.directive.ts
var dropdown_directive = __webpack_require__(26072);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-driver.directive.ts
var dropdown_driver_directive = __webpack_require__(9829);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-position.directive.ts
var dropdown_position_directive = __webpack_require__(82886);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-hover/examples/1/index.ts





let TuiDropdownHoverExample1 = /*#__PURE__*/(() => {
  class TuiDropdownHoverExample1 {}

  TuiDropdownHoverExample1.ɵfac = function TuiDropdownHoverExample1_Factory(t) {
    return new (t || TuiDropdownHoverExample1)();
  };

  TuiDropdownHoverExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownHoverExample1,
    selectors: [["tui-dropdown-hover-example-1"]],
    decls: 2,
    vars: 0,
    consts: [["tuiDropdownHover", "", "tuiDropdown", "Great Scott!"]],
    template: function TuiDropdownHoverExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " This is heavy!\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [dropdown_hover_directive/* TuiDropdownHoverDirective */.E, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiDropdownHoverExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/tabs/tabs/tabs.component.ts
var tabs_component = __webpack_require__(892);
// EXTERNAL MODULE: ./projects/kit/components/tabs/tab/tab.component.ts
var tab_component = __webpack_require__(97611);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown.component.ts
var hosted_dropdown_component = __webpack_require__(62939);
// EXTERNAL MODULE: ./projects/core/components/hosted-dropdown/hosted-dropdown-connector.directive.ts
var hosted_dropdown_connector_directive = __webpack_require__(25121);
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.component.ts
var data_list_component = __webpack_require__(20933);
// EXTERNAL MODULE: ./projects/core/components/data-list/option/option.component.ts
var option_component = __webpack_require__(35065);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-hover/examples/2/index.ts














function TuiDropdownHoverExample2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-data-list", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiDropdownHoverExample2_ng_template_6_Template_tui_data_list_click_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.onClick();
    });
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 9);
    fesm2015_core/* ɵɵtext */._uU(2, "Option 1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 9);
    fesm2015_core/* ɵɵtext */._uU(4, "Option 2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 9);
    fesm2015_core/* ɵɵtext */._uU(6, "Option 3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiDropdownHoverExample2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 10);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-toggle", 11);
    fesm2015_core/* ɵɵtext */._uU(2, " Turn option ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.testForm);
  }
}

let TuiDropdownHoverExample2 = /*#__PURE__*/(() => {
  class TuiDropdownHoverExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        option: new fesm2015_forms/* FormControl */.NI(false)
      });
      this.open = false;
      this.openSettings = false;
      this.index = 0;
    }

    onClick() {
      this.open = false;
      this.index = 1;
    }

  }

  TuiDropdownHoverExample2.ɵfac = function TuiDropdownHoverExample2_Factory(t) {
    return new (t || TuiDropdownHoverExample2)();
  };

  TuiDropdownHoverExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiDropdownHoverExample2,
    selectors: [["tui-dropdown-hover-example-2"]],
    decls: 15,
    vars: 5,
    consts: [["tuiTabs", "", 3, "activeItemIndex", "activeItemIndexChange"], ["tuiTab", ""], ["tuiDropdownHover", "", 3, "content", "open", "openChange"], ["tuiHostedDropdownHost", "", "tuiTab", "", 3, "tui-tab-activate.stop"], ["content", ""], ["tuiDropdownAlign", "right", "tuiDropdownHover", "", 3, "content", "open", "openChange"], ["src", "tuiIconSettingsLarge"], ["settings", ""], [3, "click"], ["tuiOption", ""], [1, "settings", 3, "formGroup"], ["formControlName", "option", "size", "l"]],
    template: function TuiDropdownHoverExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "nav", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiDropdownHoverExample2_Template_nav_activeItemIndexChange_0_listener($event) {
          return ctx.index = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Just a tab");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-hosted-dropdown", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiDropdownHoverExample2_Template_tui_hosted_dropdown_openChange_3_listener($event) {
          return ctx.open = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("tui-tab-activate.stop", function TuiDropdownHoverExample2_Template_button_tui_tab_activate_stop_4_listener() {
          return 0;
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Hoverable/Clickable ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiDropdownHoverExample2_ng_template_6_Template, 7, 0, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 1);
        fesm2015_core/* ɵɵtext */._uU(9, "Another tab");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-hosted-dropdown", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("openChange", function TuiDropdownHoverExample2_Template_tui_hosted_dropdown_openChange_10_listener($event) {
          return ctx.openSettings = $event;
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("tui-tab-activate.stop", function TuiDropdownHoverExample2_Template_button_tui_tab_activate_stop_11_listener() {
          return 0;
        });
        fesm2015_core/* ɵɵelement */._UZ(12, "tui-svg", 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(13, TuiDropdownHoverExample2_ng_template_13_Template, 3, 1, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(14);

        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", ctx.index);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("open", ctx.open);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r2)("open", ctx.openSettings);
      }
    },
    directives: [tabs_component/* TuiTabsComponent */.H, tab_component/* TuiTabComponent */.y, hosted_dropdown_component/* TuiHostedDropdownComponent */.o, dropdown_hover_directive/* TuiDropdownHoverDirective */.E, hosted_dropdown_connector_directive/* TuiHostedDropdownConnectorDirective */.i, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, svg_component/* TuiSvgComponent */.P, data_list_component/* TuiDataListComponent */.q, option_component/* TuiOptionComponent */.v, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".settings[_ngcontent-%COMP%]{margin:1rem}"],
    changeDetection: 0
  });
  return TuiDropdownHoverExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/dropdown-documentation/dropdown-documentation.component.ts
var dropdown_documentation_component = __webpack_require__(89104);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-hover/dropdown-hover.component.ts




















function ExampleTuiDropdownHoverComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-dropdown-hover-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-dropdown-hover-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 10);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 11);
    fesm2015_core/* ɵɵelement */._UZ(2, "p");
    fesm2015_core/* ɵɵelement */._UZ(3, "button", 12);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiDropdownHoverComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p", 5);
    fesm2015_core/* ɵɵi18nStart */.tHW(2, 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDropdownHoverComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.showDelay = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiDropdownHoverComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiDropdownHoverComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.hideDelay = $event;
    });
    fesm2015_core/* ɵɵelement */._UZ(9, "dropdown-documentation");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(5);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiDropdownShowDelay", ctx_r1.showDelay)("tuiDropdownHideDelay", ctx_r1.hideDelay)("tuiDropdown", _r3)("tuiDropdownMinHeight", ctx_r1.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.dropdownMaxHeight)("tuiDropdownAlign", ctx_r1.dropdownAlign)("tuiDropdownDirection", ctx_r1.dropdownDirection)("tuiDropdownLimitWidth", ctx_r1.dropdownLimitWidth);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showDelay);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideDelay);
  }
}

function ExampleTuiDropdownHoverComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 16);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 19);
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

let ExampleTuiDropdownHoverComponent = /*#__PURE__*/(() => {
  class ExampleTuiDropdownHoverComponent extends dropdown/* AbstractExampleTuiDropdown */.X {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 53425).then(__webpack_require__.t.bind(__webpack_require__, 53425, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 61118).then(__webpack_require__.t.bind(__webpack_require__, 61118, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 81486).then(__webpack_require__.t.bind(__webpack_require__, 81486, 17)),
        HTML: __webpack_require__.e(/* import() */ 74088).then(__webpack_require__.t.bind(__webpack_require__, 74088, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 42559).then(__webpack_require__.t.bind(__webpack_require__, 42559, 17)),
        HTML: __webpack_require__.e(/* import() */ 46893).then(__webpack_require__.t.bind(__webpack_require__, 46893, 17)),
        LESS: __webpack_require__.e(/* import() */ 28101).then(__webpack_require__.t.bind(__webpack_require__, 28101, 17))
      };
      this.showDelay = 200;
      this.hideDelay = 500;
    }

  }

  ExampleTuiDropdownHoverComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiDropdownHoverComponent_BaseFactory;
    return function ExampleTuiDropdownHoverComponent_Factory(t) {
      return (ɵExampleTuiDropdownHoverComponent_BaseFactory || (ɵExampleTuiDropdownHoverComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiDropdownHoverComponent)))(t || ExampleTuiDropdownHoverComponent);
    };
  }();

  ExampleTuiDropdownHoverComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDropdownHoverComponent,
    selectors: [["example-tui-dropdown-hover"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiDropdownHoverComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_760871280642216110$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}DropdownHover{$closeTagCode} shows dropdown with custom template upon hover ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_760871280642216110$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟6c6069ff38579db4b0091a21a1d4cf69afca2936␟760871280642216110:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:DropdownHover${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: shows dropdown with custom template upon hover `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3071282834002471381$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__5 = goog.getMsg(" Hover pointer over {$startTagStrong}to see a dropdown{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_3071282834002471381$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟941abe23d04054c72f2966b2032b530220a322d6␟3071282834002471381: Hover pointer over ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:to see a dropdown${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3745698783499999973$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___7 = goog.getMsg(" Here you can have any content {$startParagraph}You can select a text inside a dropdown and it will not close a dropdown{$closeParagraph}{$startTagButton} Button {$closeTagButton}", {
          "startParagraph": "\uFFFD#2\uFFFD",
          "closeParagraph": "\uFFFD/#2\uFFFD",
          "startTagButton": "\uFFFD#3\uFFFD",
          "closeTagButton": "\uFFFD/#3\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_3745698783499999973$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟57dfffe78ad66f88475054d12e085cc38d437029␟3745698783499999973: Here you can have any content ${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:You can select a text inside a dropdown and it will not close a dropdown${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_BUTTON: Button ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_BUTTON:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5340246919956962646$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___9 = goog.getMsg(" Show delay for dropdown appearance after hover ");
        i18n_8 = MSG_EXTERNAL_5340246919956962646$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟c866169f93bbb4f7b61a733999e43d840f6f8e38␟5340246919956962646: Show delay for dropdown appearance after hover `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3232543568506996335$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___11 = goog.getMsg(" Hide delay for dropdown to disappear after pointer is moved away ");
        i18n_10 = MSG_EXTERNAL_3232543568506996335$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟f6f91f29d201c7aafb8cbefaaeae8e81f2155c4f␟3232543568506996335: Hide delay for dropdown to disappear after pointer is moved away `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_1816878685679044442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_DROPDOWN_HOVER_DROPDOWN_HOVER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "DropdownHover", "package", "CORE", "type", "directives"], ["pageTab", ""], i18n_0, ["id", "basic", "heading", i18n_2, 3, "content"], ["id", "hosted-dropdown", "heading", "HostedDropdown", 3, "content"], ["tuiDropdownHover", "", 3, "tuiDropdownShowDelay", "tuiDropdownHideDelay", "tuiDropdown", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth"], i18n_4, ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdownShowDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownHideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "dropdown"], i18n_6, ["tuiButton", "", "type", "button"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiDropdownHoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDropdownHoverComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDropdownHoverComponent_ng_template_2_Template, 10, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDropdownHoverComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiDropdownHoverExample1, TuiDropdownHoverExample2, demo_component/* TuiDocDemoComponent */.F, dropdown_hover_directive/* TuiDropdownHoverDirective */.E, dropdown_directive/* TuiDropdownDirective */.t, dropdown_driver_directive/* TuiDropdownDriverDirective */.V, dropdown_position_directive/* TuiDropdownPositionDirective */.A, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, dropdown_documentation_component/* DropdownDocumentationComponent */.X, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiDropdownHoverComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/dropdown-hover/dropdown-hover.module.ts












let ExampleTuiDropdownHoverModule = /*#__PURE__*/(() => {
  class ExampleTuiDropdownHoverModule {}

  ExampleTuiDropdownHoverModule.ɵfac = function ExampleTuiDropdownHoverModule_Factory(t) {
    return new (t || ExampleTuiDropdownHoverModule)();
  };

  ExampleTuiDropdownHoverModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDropdownHoverModule
  });
  ExampleTuiDropdownHoverModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiDropdownModule, public_api/* TuiAddonDocModule */.fV, kit.TuiTabsModule, core.TuiSvgModule, kit.TuiToggleModule, core.TuiHostedDropdownModule, core.TuiDataListModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDropdownHoverComponent)), dropdown_documentation_module/* DropdownDocumentationModule */.F]]
  });
  return ExampleTuiDropdownHoverModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDropdownHoverModule, {
    declarations: [ExampleTuiDropdownHoverComponent, TuiDropdownHoverExample1, TuiDropdownHoverExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiDropdownModule, public_api/* TuiAddonDocModule */.fV, kit.TuiTabsModule, core.TuiSvgModule, kit.TuiToggleModule, core.TuiHostedDropdownModule, core.TuiDataListModule, router/* RouterModule */.Bz, dropdown_documentation_module/* DropdownDocumentationModule */.F],
    exports: [ExampleTuiDropdownHoverComponent]
  });
})();

/***/ })

}]);