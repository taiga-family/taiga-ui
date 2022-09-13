(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customization-icon-set-icon-set-module"],{

/***/ "./src/modules/customization/icon-set/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/customization/icon-set/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: iconsPath, TuiIconSetExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconsPath", function() { return iconsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiIconSetExample1", function() { return TuiIconSetExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");









const MAPPER = {
    tuiIconCalendarLarge: `date_range-24px`,
    tuiIconTooltipLarge: `help-24px`,
    tuiIconInfo: `info-16px`,
    tuiIconCloseLarge: `clear-24px`,
    tuiIconChevronLeftLarge: `keyboard_arrow_left-24px`,
    tuiIconChevronRightLarge: `keyboard_arrow_right-24px`,
};
// This assumes that icons were properly processed
function iconsPath(name) {
    return `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`;
}
class TuiIconSetExample1 {
    constructor() {
        this.date = null;
    }
}
TuiIconSetExample1.ɵfac = function TuiIconSetExample1_Factory(t) { return new (t || TuiIconSetExample1)(); };
TuiIconSetExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiIconSetExample1, selectors: [["tui-icon-set-example-1"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_ICONS_PATH"],
                useValue: iconsPath,
            },
        ])], decls: 8, vars: 2, consts: [[1, "b-form"], ["tuiHintContent", "You can use any icons you want", 1, "tui-space_top-4", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"]], template: function TuiIconSetExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " As usual with the DI this is hierarchical. Meaning you can provide different ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TUI_ICONS_PATH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and use different icons across your app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input-date-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiIconSetExample1_Template_tui_input_date_range_ngModelChange_6_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pick your favorite date range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("ngModel", ctx.date);
    } }, directives: [_core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["TuiNotificationComponent"], _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_4__["TuiInputDateRangeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldCleanerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiIconSetExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-icon-set-example-1`,
                templateUrl: `./index.html`,
                providers: [
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_ICONS_PATH"],
                        useValue: iconsPath,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/icon-set/icon-set.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/customization/icon-set/icon-set.component.ts ***!
  \******************************************************************/
/*! exports provided: IconSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSetComponent", function() { return IconSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/icons */ "../icons/public-api.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_expand_expand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/expand/expand.component */ "../core/components/expand/expand.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/customization/icon-set/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/copy/copy.component */ "../addon-doc/src/components/copy/copy.component.ts");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8811200965267882277$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_1 = goog.getMsg("Icons set");
    I18N_0 = MSG_EXTERNAL_8811200965267882277$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2065126203376070983$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_4 = goog.getMsg(" Taiga UI uses {$startLink}{$startTagCode}tui-svg{$closeTagCode}{$closeLink} component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. ", { "startLink": "\uFFFD#4\uFFFD", "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_3 = MSG_EXTERNAL_2065126203376070983$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\uFFFD#4\uFFFD"}:START_LINK:${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tui-svg${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3842005636025308996$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_6 = goog.getMsg(" These are keys of following dictionaries: {$startTagCode}tuiCoreIcons{$closeTagCode} and {$startTagCode}tuiKitIcons{$closeTagCode} . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. ", { "startTagCode": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]", "closeTagCode": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]" });
    I18N_5 = MSG_EXTERNAL_3842005636025308996$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_6;
}
else {
    I18N_5 = $localize `:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:tuiCoreIcons${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:tuiKitIcons${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1836251479999697458$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_8 = goog.getMsg(" There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular {$startTagCode}img src=\"xxx\"{$closeTagCode} with all the benefits of caching. In both cases you can control color with CSS {$startTagCode}color{$closeTagCode} style. ", { "startTagCode": "[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD]", "closeTagCode": "[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD]" });
    I18N_7 = MSG_EXTERNAL_1836251479999697458$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_8;
}
else {
    I18N_7 = $localize `:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD]"}:START_TAG_CODE:img src="xxx"${"[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD]"}:CLOSE_TAG_CODE: style. `;
}
I18N_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_7);
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_971802390501079989$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_10 = goog.getMsg(" If you want to bundle your icons, you need to provide {$startTagCode}TUI_ICONS{$closeTagCode} token with a dictionary of name to source code. Also you need to process your icons by {$startTagCode}processIcons{$closeTagCode} from {$startTagCode}@taiga-ui/icons/scripts{$closeTagCode} package. Then move icons to the assets folder and provide {$startTagCode}TUI_ICONS_PATH{$closeTagCode} as seen in example below: ", { "startTagCode": "[\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD|\uFFFD#33\uFFFD]", "closeTagCode": "[\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#33\uFFFD]" });
    I18N_9 = MSG_EXTERNAL_971802390501079989$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_10;
}
else {
    I18N_9 = $localize `:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD|\uFFFD#33\uFFFD]"}:START_TAG_CODE:TUI_ICONS${"[\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#33\uFFFD]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD|\uFFFD#33\uFFFD]"}:START_TAG_CODE:processIcons${"[\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#33\uFFFD]"}:CLOSE_TAG_CODE: from ${"[\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD|\uFFFD#33\uFFFD]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#33\uFFFD]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\uFFFD#30\uFFFD|\uFFFD#31\uFFFD|\uFFFD#32\uFFFD|\uFFFD#33\uFFFD]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\uFFFD/#30\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#33\uFFFD]"}:CLOSE_TAG_CODE: as seen in example below: `;
}
I18N_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_9);
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4928000514802786074$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_12 = goog.getMsg("Material icons");
    I18N_11 = MSG_EXTERNAL_4928000514802786074$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_12;
}
else {
    I18N_11 = $localize `:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6714212981041286774$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_15 = goog.getMsg(" If you use unsafe icons or {$startLink} Editor component {$closeLink} you need to provide {$startTagCode}TUI_SANITIZER{$closeTagCode} token, which is responsible for removing malicious code from the svg. We recommend to use {$startLink_1} NgDompurify {$closeLink} as a sanitizer. This library implements {$startLink_2} DOMPurify {$closeLink} as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. ", { "startLink": "\uFFFD#42\uFFFD", "closeLink": "[\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#45\uFFFD]", "startTagCode": "\uFFFD#43\uFFFD", "closeTagCode": "\uFFFD/#43\uFFFD", "startLink_1": "\uFFFD#44\uFFFD", "startLink_2": "\uFFFD#45\uFFFD" });
    I18N_14 = MSG_EXTERNAL_6714212981041286774$$SRC_MODULES_CUSTOMIZATION_ICON_SET_ICON_SET_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize `:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\uFFFD#42\uFFFD"}:START_LINK: Editor component ${"[\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#45\uFFFD]"}:CLOSE_LINK: you need to provide ${"\uFFFD#43\uFFFD"}:START_TAG_CODE:TUI_SANITIZER${"\uFFFD/#43\uFFFD"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\uFFFD#44\uFFFD"}:START_LINK_1: NgDompurify ${"[\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#45\uFFFD]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\uFFFD#45\uFFFD"}:START_LINK_2: DOMPurify ${"[\uFFFD/#42\uFFFD|\uFFFD/#44\uFFFD|\uFFFD/#45\uFFFD]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `;
}
I18N_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_14);
function IconSetComponent_tui_doc_copy_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-copy", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", name_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r1);
} }
class IconSetComponent {
    constructor() {
        this.exampleSanitizer = __webpack_require__.e(/*! import() | !raw-loader!-examples-sanitizer-sanitizer-md */ "!!raw-loader!-examples-sanitizer-sanitizer-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/sanitizer/sanitizer.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/sanitizer/sanitizer.md"));
        this.example1 = {
            'process-icons.js': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-process-icons-js-md */ "!!raw-loader!-examples-1-process-icons-js-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/process-icons.js.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/process-icons.js.md")),
            'process-icons.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-1-process-icons-ts-md */ "!!raw-loader!-examples-1-process-icons-ts-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/process-icons.ts.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/process-icons.ts.md")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/icon-set/examples/1/index.html")),
        };
        this.names = Object.keys(_taiga_ui_icons__WEBPACK_IMPORTED_MODULE_2__["tuiKitIcons"]);
        this.expanded = false;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
}
IconSetComponent.ɵfac = function IconSetComponent_Factory(t) { return new (t || IconSetComponent)(); };
IconSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconSetComponent, selectors: [["icon-set"]], decls: 47, vars: 4, consts: [[6, "header"], ["tuiLink", "", "routerLink", "/components/svg"], ["tuiButton", "", 3, "click"], [3, "expanded"], [1, "wrapper"], [3, "cdkCopyToClipboard", 4, "ngFor", "ngForOf"], ["status", "warning"], ["id", "material", 3, "content", 6, "heading"], ["id", "sanitizer", 1, "sanitizer-example"], ["tuiLink", "", "routerLink", "/components/editor"], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-dompurify", "target", "_blank"], ["tuiLink", "", "href", "https://github.com/cure53/DOMPurify", "target", "_blank"], ["filename", "app.module.ts", 3, "code"], [3, "cdkCopyToClipboard"]], template: function IconSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconSetComponent_Template_button_click_7_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Show names ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-expand", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IconSetComponent_tui_doc_copy_11_Template, 3, 2, "tui-doc-copy", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, I18N_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-notification", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Make sure you mark regions in your icons that need to be colored with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "fill=\"currentColor\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "stroke=\"currentColor\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](29, I18N_9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tui-doc-example", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tui-icon-set-example-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](41, I18N_14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "tui-doc-code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.names);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.example1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.exampleSanitizer);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"], _core_components_expand_expand_component__WEBPACK_IMPORTED_MODULE_7__["TuiExpandComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiIconSetExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"], _addon_doc_src_components_copy_copy_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCopyComponent"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__["CdkCopyToClipboard"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.sanitizer-example[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY3VzdG9taXphdGlvbi9pY29uLXNldC9pY29uLXNldC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jdXN0b21pemF0aW9uL2ljb24tc2V0L2ljb24tc2V0LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2N1c3RvbWl6YXRpb24vaWNvbi1zZXQvaWNvbi1zZXQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5zYW5pdGl6ZXItZXhhbXBsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcbn1cbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc2FuaXRpemVyLWV4YW1wbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `icon-set`,
                templateUrl: `./icon-set.template.html`,
                styleUrls: [`./icon-set.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/customization/icon-set/icon-set.module.ts":
/*!***************************************************************!*\
  !*** ./src/modules/customization/icon-set/icon-set.module.ts ***!
  \***************************************************************/
/*! exports provided: IconSetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSetModule", function() { return IconSetModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/customization/icon-set/examples/1/index.ts");
/* harmony import */ var _icon_set_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon-set.component */ "./src/modules/customization/icon-set/icon-set.component.ts");












class IconSetModule {
}
IconSetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IconSetModule });
IconSetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function IconSetModule_Factory(t) { return new (t || IconSetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiExpandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconSetModule, { declarations: [_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiIconSetExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiExpandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IconSetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiDocCopyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiExpandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"])),
                ],
                declarations: [_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiIconSetExample1"]],
                exports: [_icon_set_component__WEBPACK_IMPORTED_MODULE_9__["IconSetComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=customization-icon-set-icon-set-module.js.map