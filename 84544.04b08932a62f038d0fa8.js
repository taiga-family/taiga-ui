"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[84544],{

/***/ 82880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AbstractExampleTuiControl)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72002);
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

/***/ 98204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ABSTRACT_PROPS_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74788);

const ABSTRACT_PROPS_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .OlP(`[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class`);

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33982);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33982);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29851);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72002);
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

/***/ }),

/***/ 84544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTextfieldControllerModule": () => (/* binding */ ExampleTuiTextfieldControllerModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/textfield-controller-documentation/textfield-controller-documentation.module.ts
var textfield_controller_documentation_module = __webpack_require__(82387);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.component.ts
var primitive_textfield_component = __webpack_require__(63060);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/primitive-textfield.directive.ts
var primitive_textfield_directive = __webpack_require__(62733);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/textfield-controller/examples/1/index.ts






let TuiTextfieldControllerExample1 = /*#__PURE__*/(() => {
  class TuiTextfieldControllerExample1 {}

  TuiTextfieldControllerExample1.ɵfac = function TuiTextfieldControllerExample1_Factory(t) {
    return new (t || TuiTextfieldControllerExample1)();
  };

  TuiTextfieldControllerExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextfieldControllerExample1,
    selectors: [["tui-textfield-controller-example-1"]],
    decls: 4,
    vars: 1,
    consts: [[1, "wrapper", "tui-space_top-3", 3, "tuiTextfieldCleaner"], ["tuiTextfieldSize", "s"], ["tuiTextfield", "", "placeholder", "Hello!"]],
    template: function TuiTextfieldControllerExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-primitive-textfield", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Cool ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldCleaner", true);
      }
    },
    directives: [textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, primitive_textfield_component/* TuiPrimitiveTextfieldComponent */.y, primitive_textfield_directive/* TuiPrimitiveTextfieldDirective */.B, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTextfieldControllerExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/textfield-controller/textfield-controller.component.ts



















function ExampleTuiTextfieldControllerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18n */.SDv(9, 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-textfield-controller-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 13);
    fesm2015_core/* ɵɵtext */._uU(1, " Hello ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 15);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 16);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 18);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_1_Template, 2, 4, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.cleaner = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.customContentSelected = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.labelOutside = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTextfieldControllerComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextfieldControllerComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.cleaner);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.customContentVariants)("documentationPropertyValue", ctx_r1.customContentSelected);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.labelOutside);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiTextfieldControllerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 21);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 24);
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

let ExampleTuiTextfieldControllerComponent = /*#__PURE__*/(() => {
  class ExampleTuiTextfieldControllerComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 4272).then(__webpack_require__.t.bind(__webpack_require__, 4272, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 85875).then(__webpack_require__.t.bind(__webpack_require__, 85875, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 3303).then(__webpack_require__.t.bind(__webpack_require__, 3303, 17)),
        HTML: __webpack_require__.e(/* import() */ 29964).then(__webpack_require__.t.bind(__webpack_require__, 29964, 17))
      };
      this.sizeVariants = [`s`, `m`, `l`];
      this.inputModeVariants = [`text`, `numeric`];
      this.maxLengthVariants = [10];
      this.typeVariants = [`text`, `email`, `password`, `tel`, `url`];
      this.type = this.typeVariants[0];
      this.customContentVariants = [`Bell`];
      this.customContentSelected = null;
      this.autocompleteVariants = [``, `off`, `cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-type`, `given-name`, `additional-name`, `family-name`, `username`, `email`, `street-address`, `postal-code`, `country-name`];
      this.autocomplete = this.autocompleteVariants[0];
      this.cleaner = false;
      this.exampleText = ``;
      this.labelOutside = false;
      this.size = this.sizeVariants[2];
      this.inputMode = this.inputModeVariants[0];
      this.maxLength = null;
      this.control = new fesm2015_forms/* FormControl */.NI(`111`, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiTextfieldControllerComponent.ɵfac = function ExampleTuiTextfieldControllerComponent_Factory(t) {
    return new (t || ExampleTuiTextfieldControllerComponent)();
  };

  ExampleTuiTextfieldControllerComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTextfieldControllerComponent,
    selectors: [["example-tui-textfield-controller"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1821270709965761900$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_1 = goog.getMsg("TextfieldController");
        i18n_0 = MSG_EXTERNAL_1821270709965761900$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟57aa77a2ee8d15c32d319f3e8a96eaf3d7ed07aa␟1821270709965761900:TextfieldController`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1831276530415888301$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__5 = goog.getMsg(" Directive allows to customize {$startLink}{$startTagCode}TuiPrimitiveTextfield{$closeTagCode}{$closeLink} with parameters that it adds into DI tree. ", {
          "startLink": "\uFFFD#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_1831276530415888301$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟b5600c022ba89e7794a22ea305e420f3d56fc048␟1831276530415888301: Directive allows to customize ${"\uFFFD#2\uFFFD"}:START_LINK:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfield${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: with parameters that it adds into DI tree. `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2949888832970872846$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__7 = goog.getMsg(" That means that you can use the directive on any root element and it will customize all textfields in this scope. Most Taiga UI form controls are based on {$startLink}{$startTagCode}TuiPrimitiveTextfield{$closeTagCode}{$closeLink} and thus accept these options. ", {
          "startLink": "\uFFFD#6\uFFFD",
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD",
          "closeLink": "\uFFFD/#6\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2949888832970872846$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟b07d3d7b9a075ad77ffddf82ca4a0615a8014238␟2949888832970872846: That means that you can use the directive on any root element and it will customize all textfields in this scope. Most Taiga UI form controls are based on ${"\uFFFD#6\uFFFD"}:START_LINK:${"\uFFFD#7\uFFFD"}:START_TAG_CODE:TuiPrimitiveTextfield${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#6\uFFFD"}:CLOSE_LINK: and thus accept these options. `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5957868965468271015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__9 = goog.getMsg(" If there are several controllers above textfield, their values will be merged. The nearest directives are in priority. ");
        i18n_8 = MSG_EXTERNAL_5957868965468271015$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟f2e642fc566c604a127949e3f7f00ca82c8f6317␟5957868965468271015: If there are several controllers above textfield, their values will be merged. The nearest directives are in priority. `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__11 = goog.getMsg("Basic");
        i18n_10 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_323745116286081457$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___13 = goog.getMsg(" Shows a cross to reset a value ");
        i18n_12 = MSG_EXTERNAL_323745116286081457$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟e1ffada160eee7546458fc5bf91bf658a8dacb6d␟323745116286081457: Shows a cross to reset a value `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2893407447624443117$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___15 = goog.getMsg(" Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as {$startTagCode}src{$closeTagCode} or as icon name into {$startLink} tui-svg {$closeLink}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_2893407447624443117$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟30ed5b69385662fac8a4e68e0282033cf0ae5f6c␟2893407447624443117: Right content (e.g. avatar with maximum size 32x32px). If it gets a string, it is inserted as ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:src${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: or as icon name into ${"\uFFFD#2\uFFFD"}:START_LINK: tui-svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2914660250050831108$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___17 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_2914660250050831108$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟8755715075b5b08f672f5adda7f1629e1845d0ec␟2914660250050831108: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Label${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___19 = goog.getMsg(" Size ");
        i18n_18 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_977978780451121916$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiTextfieldControllerModule{$closeTagCode} in the same module where you want to use the directive: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_977978780451121916$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟79e6fc450056954fb7638c0a321f56adb5c14d6f␟977978780451121916: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTextfieldControllerModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use the directive: `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_251110088134451836$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__23 = goog.getMsg("Use it on Taiga UI controls or parent elements");
        i18n_22 = MSG_EXTERNAL_251110088134451836$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TEXTFIELD_CONTROLLER_TEXTFIELD_CONTROLLER_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟99dabfdd9ba1d22e4a3a0d93ba615fe563d8c209␟251110088134451836:Use it on Taiga UI controls or parent elements`;
      }

      return [["header", i18n_0, "package", "CORE", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["tuiLink", "", "target", "_blank", "routerLink", "/components/primitive-textfield"], i18n_6, i18n_8, ["id", "base", "heading", i18n_10, 3, "content"], [3, "control"], ["documentationPropertyName", "tuiTextfieldCleaner", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldCustomContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], i18n_12, i18n_14, ["routerLink", "/components/svg", "tuiLink", ""], i18n_16, ["tuiLink", "", "routerLink", "/components/label"], i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTextfieldControllerComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTextfieldControllerComponent_ng_template_1_Template, 12, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTextfieldControllerComponent_ng_template_2_Template, 7, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTextfieldControllerComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiTextfieldControllerExample1, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTextfieldControllerComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/textfield-controller/textfield-controller.module.ts











let ExampleTuiTextfieldControllerModule = /*#__PURE__*/(() => {
  class ExampleTuiTextfieldControllerModule {}

  ExampleTuiTextfieldControllerModule.ɵfac = function ExampleTuiTextfieldControllerModule_Factory(t) {
    return new (t || ExampleTuiTextfieldControllerModule)();
  };

  ExampleTuiTextfieldControllerModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTextfieldControllerModule
  });
  ExampleTuiTextfieldControllerModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, kit.TuiInputModule, textfield_controller_documentation_module/* TextfieldControllerDocumentationModule */.J, fesm2015_forms/* FormsModule */.u5, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTextfieldControllerComponent))]]
  });
  return ExampleTuiTextfieldControllerModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTextfieldControllerModule, {
    declarations: [ExampleTuiTextfieldControllerComponent, TuiTextfieldControllerExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiPrimitiveTextfieldModule, core.TuiTextfieldControllerModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, kit.TuiInputModule, textfield_controller_documentation_module/* TextfieldControllerDocumentationModule */.J, fesm2015_forms/* FormsModule */.u5, router/* RouterModule */.Bz],
    exports: [ExampleTuiTextfieldControllerComponent]
  });
})();

/***/ })

}]);