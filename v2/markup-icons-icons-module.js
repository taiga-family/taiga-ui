(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-icons-icons-module"],{

/***/ "./src/modules/markup/icons/customization/customization-icons.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/markup/icons/customization/customization-icons.component.ts ***!
  \*********************************************************************************/
/*! exports provided: icons8SourceProcessor, IconsCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons8SourceProcessor", function() { return icons8SourceProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsCustomizationComponent", function() { return IconsCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");




function icons8SourceProcessor() {
    return (src) => {
        const myCustomPrefix = `icons8::`;
        return src.startsWith(myCustomPrefix)
            ? `assets/icons8/${src.replace(myCustomPrefix, ``)}.svg`
            : src;
    };
}
class IconsCustomizationComponent {
}
IconsCustomizationComponent.ɵfac = function IconsCustomizationComponent_Factory(t) { return new (t || IconsCustomizationComponent)(); };
IconsCustomizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsCustomizationComponent, selectors: [["customization-icons-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_SVG_SRC_PROCESSOR"],
                useFactory: icons8SourceProcessor,
            },
        ])], decls: 10, vars: 0, consts: [[1, "icons8"], [1, "icons8-label", "icons8-label-violet"], ["src", "icons8::android", 1, "icons8-icon", "icons8-violet"], ["src", "icons8::ios", 1, "icons8-icon", "icons8-violet"], [1, "icons8-label", "icons8-label-blue"], ["src", "icons8::android", 1, "icons8-icon", "icons8-blue"], ["src", "icons8::ios", 1, "icons8-icon", "icons8-blue"]], template: function IconsCustomizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Violet color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Blue color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__["TuiSvgComponent"]], styles: [".icons8[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.icons8-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n.icons8-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  color: #fff;\n  border-radius: 0.25rem;\n}\n.icons8-label-violet[_ngcontent-%COMP%] {\n  background: #a340f1;\n}\n.icons8-label-blue[_ngcontent-%COMP%] {\n  background: #316df6;\n}\n.icons8-violet[_ngcontent-%COMP%] {\n  color: #a340f1;\n}\n.icons8-blue[_ngcontent-%COMP%] {\n  color: #316df6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2ljb25zL2N1c3RvbWl6YXRpb24vY3VzdG9taXphdGlvbi1pY29ucy5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvaWNvbnMvY3VzdG9taXphdGlvbi9jdXN0b21pemF0aW9uLWljb25zLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxxQkFBQTtBQ0ZKO0FESUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FES0k7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNIUjtBREtRO0VBQ0ksbUJBQUE7QUNIWjtBRE1RO0VBQ0ksbUJBQUE7QUNKWjtBRFFJO0VBQ0ksY0FBQTtBQ05SO0FEU0k7RUFDSSxjQUFBO0FDUFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvaWNvbnMvY3VzdG9taXphdGlvbi9jdXN0b21pemF0aW9uLWljb25zLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdmlvbGV0OiByZ2IoMTYzLCA2NCwgMjQxKTtcbkBibHVlOiByZ2IoNDksIDEwOSwgMjQ2KTtcblxuLmljb25zOCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuXG4gICAgJi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICB9XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjYyNXJlbTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cbiAgICAgICAgJi12aW9sZXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogQHZpb2xldDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtYmx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdmlvbGV0IHtcbiAgICAgICAgY29sb3I6IEB2aW9sZXQ7XG4gICAgfVxuXG4gICAgJi1ibHVlIHtcbiAgICAgICAgY29sb3I6IEBibHVlO1xuICAgIH1cbn1cbiIsIi5pY29uczgge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uaWNvbnM4LWljb24ge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuLmljb25zOC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmljb25zOC1sYWJlbC12aW9sZXQge1xuICBiYWNrZ3JvdW5kOiAjYTM0MGYxO1xufVxuLmljb25zOC1sYWJlbC1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzMxNmRmNjtcbn1cbi5pY29uczgtdmlvbGV0IHtcbiAgY29sb3I6ICNhMzQwZjE7XG59XG4uaWNvbnM4LWJsdWUge1xuICBjb2xvcjogIzMxNmRmNjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsCustomizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `customization-icons-example`,
                templateUrl: `./customization-icons.template.html`,
                styleUrls: [`./customization-icons.style.less`],
                providers: [
                    {
                        provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__["TUI_SVG_SRC_PROCESSOR"],
                        useFactory: icons8SourceProcessor,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons-group/icons-group.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/markup/icons/icons-group/icons-group.component.ts ***!
  \***********************************************************************/
/*! exports provided: IconsGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsGroupComponent", function() { return IconsGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "../../node_modules/@angular/cdk/fesm2015/clipboard.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _icons_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-group.directive */ "./src/modules/markup/icons/icons-group/icons-group.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cdk_directives_for_async_for_async_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../cdk/directives/for-async/for-async.directive */ "../cdk/directives/for-async/for-async.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");
/* harmony import */ var _cdk_pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../cdk/pipes/keys/keys.pipe */ "../cdk/pipes/keys/keys.pipe.ts");
/* harmony import */ var _cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../cdk/pipes/filter/filter.pipe */ "../cdk/pipes/filter/filter.pipe.ts");





















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1715668600566441269$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_1 = goog.getMsg(" Search by name\n");
    I18N_0 = MSG_EXTERNAL_1715668600566441269$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_696084215486677597$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_3 = goog.getMsg(" Input icon name to highlight\n");
    I18N_2 = MSG_EXTERNAL_696084215486677597$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7253553507236379915$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS___5 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_4 = MSG_EXTERNAL_7253553507236379915$$SRC_MODULES_MARKUP_ICONS_ICONS_GROUP_ICONS_GROUP_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:␟98637bc43fcb683b0da90675491131c614734d49␟7253553507236379915: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
}
function IconsGroupComponent_ng_container_4_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nothing found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c6 = function (a0, a1, a2) { return { icon: a0, group: a1, copyPath: a2 }; };
function IconsGroupComponent_ng_container_4_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const icon_r6 = ctx.$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r5.iconGroup == null ? null : ctx_r5.iconGroup.template) || null)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c6, icon_r6, key_r1, ctx_r5.copyPath));
} }
function IconsGroupComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "tui-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, IconsGroupComponent_ng_container_4_ng_container_1_p_5_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, IconsGroupComponent_ng_container_4_ng_container_1_ng_container_7_Template, 1, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filtered_r3 = ctx.ngIf;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](key_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hoverable", true)("value", filtered_r3.length.toString())("status", filtered_r3.length ? "success" : "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !filtered_r3.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiForAsyncOf", filtered_r3);
} }
function IconsGroupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IconsGroupComponent_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "tuiFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, ctx_r0.icons[key_r1], ctx_r0.matcher, ctx_r0.search));
} }
class IconsGroupComponent {
    constructor(clipboard, alertService) {
        this.clipboard = clipboard;
        this.alertService = alertService;
        this.icons = {};
        this.matcher = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"];
        this.search = ``;
        this.copyPath = (name) => {
            this.clipboard.copy(name);
            this.alertService
                .open(`The name ${name} copied`, { status: "success" /* Success */ })
                .subscribe();
        };
    }
}
IconsGroupComponent.ɵfac = function IconsGroupComponent_Factory(t) { return new (t || IconsGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"])); };
IconsGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IconsGroupComponent, selectors: [["icons-group"]], contentQueries: function IconsGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _icons_group_directive__WEBPACK_IMPORTED_MODULE_6__["IconsGroupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.iconGroup = _t.first);
    } }, inputs: { icons: "icons" }, decls: 6, vars: 5, consts: [[1, "title"], ["tuiHintContent", "You can copy icon's name with a click", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], [4, "tuiForAsync", "tuiForAsyncOf"], [4, "ngIf"], [1, "header-group"], ["size", "m", 1, "badge", 3, "hoverable", "value", "status"], [1, "icons"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "tuiForAsync", "tuiForAsyncOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function IconsGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IconsGroupComponent_Template_tui_input_ngModelChange_2_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, IconsGroupComponent_ng_container_4_Template, 3, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "tuiKeys");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiForAsyncOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx.icons));
    } }, directives: [_kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _cdk_directives_for_async_for_async_directive__WEBPACK_IMPORTED_MODULE_13__["TuiForAsyncDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__["TuiBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"]], pipes: [_cdk_pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiKeysPipe"], _cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["TuiFilterPipe"]], styles: [".header-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.875rem 0 0.75rem;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n}\n.badge[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0 -0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2ljb25zL2ljb25zLWdyb3VwL2ljb25zLWdyb3VwLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9pY29ucy9pY29ucy1ncm91cC9pY29ucy1ncm91cC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBREtKO0FDRkE7RUFDSSwrQkFBQTtBRElKO0FDREE7RUFDSSxpQkFBQTtBREdKO0FDQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURFSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9pY29ucy9pY29ucy1ncm91cC9pY29ucy1ncm91cC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmhlYWRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMS44NzVyZW0gMCAwLjc1cmVtO1xufVxuLnRpdGxlIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cbi5iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgLTAuNzVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5oZWFkZXItZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEuODc1cmVtIDAgMC43NXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xufVxuXG4uYmFkZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiAwIC1Ac3BhY2UgKiAzO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], IconsGroupComponent.prototype, "icons", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IconsGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: `icons-group`,
                templateUrl: `./icons-group.template.html`,
                styleUrls: [`./icons-group.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
            }]
    }], function () { return [{ type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiAlertService"]]
            }] }]; }, { iconGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [_icons_group_directive__WEBPACK_IMPORTED_MODULE_6__["IconsGroupDirective"]]
        }], icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons-group/icons-group.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/markup/icons/icons-group/icons-group.directive.ts ***!
  \***********************************************************************/
/*! exports provided: IconsGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsGroupDirective", function() { return IconsGroupDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");




class IconsGroupDirective {
    constructor(template) {
        this.template = template;
    }
}
IconsGroupDirective.ɵfac = function IconsGroupDirective_Factory(t) { return new (t || IconsGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
IconsGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: IconsGroupDirective, selectors: [["", "iconGroup", ""]], inputs: { iconGroup: "iconGroup" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], IconsGroupDirective.prototype, "iconGroup", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconsGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[iconGroup]`,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
            }] }]; }, { iconGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons-group/icons-group.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/markup/icons/icons-group/icons-group.module.ts ***!
  \********************************************************************/
/*! exports provided: IconsGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsGroupModule", function() { return IconsGroupModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _icons_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-group.component */ "./src/modules/markup/icons/icons-group/icons-group.component.ts");
/* harmony import */ var _icons_group_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons-group.directive */ "./src/modules/markup/icons/icons-group/icons-group.directive.ts");









class IconsGroupModule {
}
IconsGroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsGroupModule });
IconsGroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function IconsGroupModule_Factory(t) { return new (t || IconsGroupModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiForAsyncModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiKeysPipeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFilterPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldControllerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsGroupModule, { declarations: [_icons_group_component__WEBPACK_IMPORTED_MODULE_6__["IconsGroupComponent"], _icons_group_directive__WEBPACK_IMPORTED_MODULE_7__["IconsGroupDirective"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiForAsyncModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiKeysPipeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFilterPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldControllerModule"]], exports: [_icons_group_component__WEBPACK_IMPORTED_MODULE_6__["IconsGroupComponent"], _icons_group_directive__WEBPACK_IMPORTED_MODULE_7__["IconsGroupDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconsGroupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiForAsyncModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiKeysPipeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFilterPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldControllerModule"],
                ],
                declarations: [_icons_group_component__WEBPACK_IMPORTED_MODULE_6__["IconsGroupComponent"], _icons_group_directive__WEBPACK_IMPORTED_MODULE_7__["IconsGroupDirective"]],
                exports: [_icons_group_component__WEBPACK_IMPORTED_MODULE_6__["IconsGroupComponent"], _icons_group_directive__WEBPACK_IMPORTED_MODULE_7__["IconsGroupDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/modules/markup/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _icons_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.tokens */ "./src/modules/markup/icons/icons.tokens.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _icons_group_icons_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons-group/icons-group.component */ "./src/modules/markup/icons/icons-group/icons-group.component.ts");
/* harmony import */ var _icons_group_icons_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons-group/icons-group.directive */ "./src/modules/markup/icons/icons-group/icons-group.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _customization_customization_icons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customization/customization-icons.component */ "./src/modules/markup/icons/customization/customization-icons.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_990341683702498937$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS_1 = goog.getMsg("Icons");
    I18N_0 = MSG_EXTERNAL_990341683702498937$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1756857398819821600$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS___4 = goog.getMsg(" These icons can be used by name in {$startLink} Svg {$closeLink} component and all Taiga UI component accepting icons as input. ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_1756857398819821600$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS___4;
}
else {
    I18N_3 = $localize `:␟839dd4cb6fbcbf0e53e486e5aaa3fa92826a5fe6␟1756857398819821600: These icons can be used by name in ${"\uFFFD#2\uFFFD"}:START_LINK: Svg ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4323470180912194028$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS____6 = goog.getMsg("Copy");
    I18N_5 = MSG_EXTERNAL_4323470180912194028$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS____6;
}
else {
    I18N_5 = $localize `:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`;
}
const _c7 = ["title", I18N_5];
function IconsComponent_2_ng_template_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconsComponent_2_ng_template_0_ng_template_4_Template_button_click_0_listener() { const icon_r5 = ctx.icon; const copyPath_r6 = ctx.copyPath; return copyPath_r6(icon_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r5 = ctx.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", icon_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", icon_r5);
} }
function IconsComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "icons-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IconsComponent_2_ng_template_0_ng_template_4_Template, 2, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icons", ctx_r3.icons[key_r2]);
} }
function IconsComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IconsComponent_2_ng_template_0_Template, 5, 1, "ng-template", 3);
} if (rf & 2) {
    const key_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTab", key_r2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5793544987096948211$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS__9 = goog.getMsg("Customization");
    I18N_8 = MSG_EXTERNAL_5793544987096948211$$SRC_MODULES_MARKUP_ICONS_ICONS_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`;
}
const _c10 = ["heading", I18N_8];
function IconsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "customization-icons-example");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.example1);
} }
class IconsComponent {
    constructor(icons) {
        this.icons = icons;
        this.keys = Object.keys(this.icons);
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-customization-customization-icons-component-ts */ "!!raw-loader!-customization-customization-icons-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./customization/customization-icons.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/icons/customization/customization-icons.component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-customization-customization-icons-template-html */ "!!raw-loader!-customization-customization-icons-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./customization/customization-icons.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/icons/customization/customization-icons.template.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-customization-customization-icons-style-less */ "!!raw-loader!-customization-customization-icons-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./customization/customization-icons.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/icons/customization/customization-icons.style.less")),
        };
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_icons_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_DEMO_ICONS"])); };
IconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["icons"]], decls: 4, vars: 1, consts: [[6, "header"], [4, "ngFor", "ngForOf"], ["pageTab", "SVG Processing"], [3, "pageTab"], ["tuiLink", "", "routerLink", "/components/svg"], [3, "icons"], ["iconGroup", ""], ["tuiIconButton", "", "type", "button", "size", "m", "appearance", "icon", 1, "icon", 3, "icon", "click", 6, "title"], ["id", "base", "description", "You can customize the path to your icons and inherit color", 3, "content", 6, "heading"]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconsComponent_2_Template, 1, 1, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconsComponent_ng_template_3_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _icons_group_icons_group_component__WEBPACK_IMPORTED_MODULE_8__["IconsGroupComponent"], _icons_group_icons_group_directive__WEBPACK_IMPORTED_MODULE_9__["IconsGroupDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["TuiButtonComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocExampleComponent"], _customization_customization_icons_component__WEBPACK_IMPORTED_MODULE_12__["IconsCustomizationComponent"]], styles: [".icon[_ngcontent-%COMP%] {\n  margin: 0.75rem;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2ljb25zL2ljb25zLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9pY29ucy9pY29ucy5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QURLSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL21hcmt1cC9pY29ucy9pY29ucy5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmljb24ge1xuICBtYXJnaW46IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5pY29uIHtcbiAgICBtYXJnaW46IEBzcGFjZSAqIDM7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `icons`,
                templateUrl: `./icons.template.html`,
                styleUrls: [`./icons.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_icons_tokens__WEBPACK_IMPORTED_MODULE_2__["TUI_DEMO_ICONS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons.module.ts":
/*!**************************************************!*\
  !*** ./src/modules/markup/icons/icons.module.ts ***!
  \**************************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _customization_customization_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customization/customization-icons.component */ "./src/modules/markup/icons/customization/customization-icons.component.ts");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons.component */ "./src/modules/markup/icons/icons.component.ts");
/* harmony import */ var _icons_group_icons_group_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons-group/icons-group.module */ "./src/modules/markup/icons/icons-group/icons-group.module.ts");










class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _icons_group_icons_group_module__WEBPACK_IMPORTED_MODULE_7__["IconsGroupModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["tuiGenerateRoutes"])(_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"], _customization_customization_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsCustomizationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _icons_group_icons_group_module__WEBPACK_IMPORTED_MODULE_7__["IconsGroupModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiSvgModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _icons_group_icons_group_module__WEBPACK_IMPORTED_MODULE_7__["IconsGroupModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["tuiGenerateRoutes"])(_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"])),
                ],
                declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"], _customization_customization_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsCustomizationComponent"]],
                exports: [_icons_component__WEBPACK_IMPORTED_MODULE_6__["IconsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/icons/icons.tokens.ts":
/*!**************************************************!*\
  !*** ./src/modules/markup/icons/icons.tokens.ts ***!
  \**************************************************/
/*! exports provided: COMMERCE, ICONS, TUI_DEMO_ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMERCE", function() { return COMMERCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_DEMO_ICONS", function() { return TUI_DEMO_ICONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/icons */ "../icons/public-api.ts");


const COMMERCE = [
    `tuiIconElectron`,
    `tuiIconMaestro`,
    `tuiIconMastercard`,
    `tuiIconMir`,
    `tuiIconVisa`,
];
const { LARGE, NORMAL } = ensureIcons();
const ICONS = {
    'Description and examples': {
        [`Normal interface icons / 16px`]: NORMAL,
        [`Large interface icons / 24px`]: LARGE,
        [`Payment systems`]: COMMERCE,
    },
};
const TUI_DEMO_ICONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`Icons`, { factory: () => ICONS });
/**
 * @description:
 * Algorithm: O(n), where `n` - count of icons
 */
function ensureIcons() {
    const large = [];
    const normal = [];
    const commerceSet = new Set(COMMERCE);
    for (const icon in _taiga_ui_icons__WEBPACK_IMPORTED_MODULE_1__) {
        const shouldSkip = commerceSet.has(icon) ||
            icon === `tuiCoreIcons` ||
            icon === `tuiKitIcons`;
        if (shouldSkip) {
            continue;
        }
        if (icon.includes(`Large`)) {
            large.push(icon);
        }
        else {
            normal.push(icon);
        }
    }
    return { LARGE: large, NORMAL: normal };
}


/***/ })

}]);
//# sourceMappingURL=markup-icons-icons-module.js.map