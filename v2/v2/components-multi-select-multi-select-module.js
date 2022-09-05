(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-multi-select-multi-select-module"],{

/***/ "./src/modules/components/multi-select/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample1", function() { return TuiMultiSelectExample1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");














function TuiMultiSelectExample1_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-data-list-wrapper", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r0.filter(ctx_r0.search));
} }
const ITEMS = [
    `Luke Skywalker`,
    `Leia Organa Solo`,
    `Darth Vader`,
    `Han Solo`,
    `Obi-Wan Kenobi`,
    `Yoda`,
];
class TuiMultiSelectExample1 {
    constructor() {
        this.search = ``;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([ITEMS[0]]);
    }
    filter(search) {
        return ITEMS.filter(item => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TUI_DEFAULT_MATCHER"])(item, search || ``));
    }
}
TuiMultiSelectExample1.ɵfac = function TuiMultiSelectExample1_Factory(t) { return new (t || TuiMultiSelectExample1)(); };
TuiMultiSelectExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample1, selectors: [["tui-multi-select-example-1"]], decls: 3, vars: 4, consts: [["tuiTextfieldExampleText", "Ignored text", 1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "editable", "search", "searchChange"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items"]], template: function TuiMultiSelectExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-multi-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchChange", function TuiMultiSelectExample1_Template_tui_multi_select_searchChange_0_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Star Wars persons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiMultiSelectExample1_tui_data_list_wrapper_2_Template, 1, 1, "tui-data-list-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("tuiTextfieldLabelOutside", true)("editable", false)("search", ctx.search);
    } }, directives: [_kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_6__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldExampleTextDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectGroupDirective"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiMultiSelectExample1.prototype, "filter", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiMultiSelectExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-multi-select-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_3__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_4__["encapsulation"],
            }]
    }], null, { filter: [] }); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/2/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/2/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample2", function() { return TuiMultiSelectExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_multi_select_hide_selected_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/hide-selected.pipe */ "../kit/components/multi-select/hide-selected.pipe.ts");



















function TuiMultiSelectExample2_tui_multi_select_0_tui_data_list_wrapper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "tuiHideSelected");
} if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, items_r3, _r4))("itemContent", _r1);
} }
function TuiMultiSelectExample2_tui_multi_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function TuiMultiSelectExample2_tui_multi_select_0_Template_tui_multi_select_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Rock Star Frontend Developers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiMultiSelectExample2_tui_multi_select_0_tui_data_list_wrapper_3_Template, 2, 5, "tui-data-list-wrapper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.testValue)("tuiTextfieldLabelOutside", true)("expandable", false);
} }
function TuiMultiSelectExample2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", data_r9.avatarUrl)("text", data_r9.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r9, " ");
} }
class User {
    constructor(firstName, lastName, avatarUrl = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const databaseMockData = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]),
    new User(`Dmitriy`, `Demenskiy`),
    new User(`Evgeniy`, `Mamaev`),
    new User(`Ivan`, `Ishmametiev`),
    new User(`Igor`, `Katsuba`),
    new User(`Yulia`, `Tsareva`),
];
class TuiMultiSelectExample2 {
    constructor() {
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.items$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(value => value !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(search => this.serverRequest(search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(databaseMockData));
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([databaseMockData[0]]);
    }
    onSearchChange(searchQuery) {
        this.search$.next(searchQuery);
    }
    /**
     * Server request emulation
     */
    serverRequest(searchQuery) {
        const result = databaseMockData.filter(user => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"])(user, searchQuery || ``));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(Math.random() * 1000 + 500));
    }
}
TuiMultiSelectExample2.ɵfac = function TuiMultiSelectExample2_Factory(t) { return new (t || TuiMultiSelectExample2)(); };
TuiMultiSelectExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample2, selectors: [["tui-multi-select-example-2"]], decls: 4, vars: 3, consts: [["tuiTextfieldExampleText", "Find by ...", "class", "control", 3, "formControl", "tuiTextfieldLabelOutside", "expandable", "searchChange", 4, "tuiLet"], ["itemContent", ""], ["tuiTextfieldExampleText", "Find by ...", 1, "control", 3, "formControl", "tuiTextfieldLabelOutside", "expandable", "searchChange"], ["component", ""], [3, "items", "itemContent", 4, "tuiDataList"], [3, "items", "itemContent"], [1, "template"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"]], template: function TuiMultiSelectExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiMultiSelectExample2_tui_multi_select_0_Template, 4, 3, "tui-multi-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample2_ng_template_2_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__["TuiLetDirective"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_9__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldExampleTextDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListWrapperComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_14__["TuiAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _kit_components_multi_select_hide_selected_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiHideSelectedPipe"]], styles: [".control[_ngcontent-%COMP%] {\n  width: 31.25rem;\n}\n@media screen and (max-width: 37.4625em) {\n  .control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 -0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGVBQUE7QURLSjtBQ0hJO0VBQUE7SUFDSSxXQUFBO0VETU47QUFDRjtBQ0hBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FES0o7QUNGQTtFQUNJLDJCQUFBO0FESUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uY29udHJvbCB7XG4gIHdpZHRoOiAzMS4yNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjQ2MjVlbSkge1xuICAuY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXZhdGFyIHtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIC0wLjI1cmVtO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4uY29udHJvbCB7XG4gICAgd2lkdGg6IDMxLjI1cmVtO1xuXG4gICAgQG1lZGlhIEBtb2JpbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXZhdGFyIHtcbiAgICBtYXJnaW46IDAgQHNwYWNlICogMiAwIC1Ac3BhY2U7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/3/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/3/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample3", function() { return TuiMultiSelectExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
















function TuiMultiSelectExample3_tui_data_list_3_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function TuiMultiSelectExample3_tui_data_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiMultiSelectExample3_tui_data_list_3_button_1_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function TuiMultiSelectExample3_tui_data_list_6_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function TuiMultiSelectExample3_tui_data_list_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiMultiSelectExample3_tui_data_list_6_button_1_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function TuiMultiSelectExample3_tui_data_list_wrapper_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.items)("itemContent", ctx_r2.stringify);
} }
class TuiMultiSelectExample3 {
    constructor() {
        this.items = [
            { id: 1, name: `Luke Skywalker` },
            { id: 2, name: `Leia Organa Solo` },
            { id: 3, name: `Darth Vader` },
            { id: 4, name: `Han Solo` },
            { id: 5, name: `Obi-Wan Kenobi` },
            { id: 6, name: `Yoda` },
        ];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([this.items[3], this.items[4]]);
        this.stringify = item => `name` in item ? item.name : item.$implicit.name;
        this.identityMatcher = (hero1, hero2) => hero1.id === hero2.id;
    }
}
TuiMultiSelectExample3.ɵfac = function TuiMultiSelectExample3_Factory(t) { return new (t || TuiMultiSelectExample3)(); };
TuiMultiSelectExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample3, selectors: [["tui-multi-select-example-3"]], decls: 10, vars: 15, consts: [[1, "b-form"], ["tuiTextfieldSize", "s", 3, "formControl", "stringify", "identityMatcher", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 4, "tuiDataList"], ["tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "editable", "formControl", "stringify", "identityMatcher", "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], [1, "tui-space_top-2", 3, "editable", "formControl", "stringify", "identityMatcher", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent", 4, "tuiDataList"], ["tuiMultiSelectGroup", ""], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent"]], template: function TuiMultiSelectExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-multi-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Choose your heroes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiMultiSelectExample3_tui_data_list_3_Template, 2, 1, "tui-data-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-multi-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose your heroes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiMultiSelectExample3_tui_data_list_6_Template, 2, 1, "tui-data-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-multi-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose your heroes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiMultiSelectExample3_tui_data_list_wrapper_9_Template, 1, 2, "tui-data-list-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("formControl", ctx.control)("stringify", ctx.stringify)("identityMatcher", ctx.identityMatcher)("tuiTextfieldCleaner", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_4__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldCleanerDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_9__["TuiDataListComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_10__["TuiMultiSelectGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__["TuiOptionComponent"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListWrapperComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/4/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/4/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample4", function() { return TuiMultiSelectExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");















function TuiMultiSelectExample4_tui_multi_select_0_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tuiLet;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", items_r1)("itemContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.stringify$));
} }
function TuiMultiSelectExample4_tui_multi_select_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function TuiMultiSelectExample4_tui_multi_select_0_Template_tui_multi_select_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample4_tui_multi_select_0_tui_data_list_wrapper_2_Template, 2, 4, "tui-data-list-wrapper", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control)("tuiTextfieldLabelOutside", true)("stringify", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r0.stringify$));
} }
const DICTIONARY = [
    { id: 1, name: `Luke Skywalker` },
    { id: 2, name: `Princess Leia` },
    { id: 3, name: `Darth Vader` },
    { id: 4, name: `Han Solo` },
    { id: 5, name: `Obi-Wan Kenobi` },
    { id: 6, name: `Yoda` },
];
class TuiMultiSelectExample4 {
    constructor() {
        // Server request emulation
        this.server$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(DICTIONARY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // Items only hold IDs
        this.items$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(``), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(search => this.server$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => items
            .filter(({ name }) => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_MATCHER"])(name, search))
            .map(({ id }) => id)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null));
        // Stringify mapper that turns IDs to names
        this.stringify$ = this.server$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(items => new Map(items.map(({ id, name }) => [id, name]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(new Map()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(map => (id) => (Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(id) ? map.get(id) : map.get(id.$implicit)) || `Loading...`));
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([2, 3]);
    }
    onSearch(search) {
        this.search$.next(search || ``);
    }
}
TuiMultiSelectExample4.ɵfac = function TuiMultiSelectExample4_Factory(t) { return new (t || TuiMultiSelectExample4)(); };
TuiMultiSelectExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample4, selectors: [["tui-multi-select-example-4"]], decls: 2, vars: 3, consts: [["class", "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "stringify", "searchChange", 4, "tuiLet"], [1, "b-form", 3, "formControl", "tuiTextfieldLabelOutside", "stringify", "searchChange"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items", "itemContent"]], template: function TuiMultiSelectExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiMultiSelectExample4_tui_multi_select_0_Template, 3, 5, "tui-multi-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLetDirective"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["TuiMultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectGroupDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/5/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/5/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample5", function() { return TuiMultiSelectExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_opt_group_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/opt-group.directive */ "../core/components/data-list/opt-group.directive.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.component */ "../kit/components/multi-select/multi-select-group/multi-select-group.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_components_multi_select_hide_selected_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/hide-selected.pipe */ "../kit/components/multi-select/hide-selected.pipe.ts");















function TuiMultiSelectExample5_tui_data_list_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4, " ");
} }
function TuiMultiSelectExample5_tui_data_list_2_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5, " ");
} }
function TuiMultiSelectExample5_tui_data_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-opt-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample5_tui_data_list_2_button_2_Template, 2, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-opt-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiMultiSelectExample5_tui_data_list_2_button_4_Template, 2, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "tuiHideSelected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.jedi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r1.sith, _r0));
} }
class TuiMultiSelectExample5 {
    constructor() {
        this.jedi = [
            `Luke Skywalker`,
            `Princess Leia`,
            `Han Solo`,
            `Obi-Wan Kenobi`,
            `Yoda`,
        ];
        this.sith = [`Emperor`, `Darth Vader`, `Darth Maul`];
        this.value = [this.jedi[0]];
    }
}
TuiMultiSelectExample5.ɵfac = function TuiMultiSelectExample5_Factory(t) { return new (t || TuiMultiSelectExample5)(); };
TuiMultiSelectExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample5, selectors: [["tui-multi-select-example-5"]], decls: 3, vars: 4, consts: [[1, "b-form", 3, "editable", "expandable", "tuiTextfieldLabelOutside", "ngModel", "ngModelChange"], ["component", ""], [4, "tuiDataList"], ["tuiMultiSelectGroup", "", "label", "Jedi"], ["tuiOption", "", 3, "value", 4, "ngFor", "ngForOf"], ["label", "Sith"], ["tuiOption", "", 3, "value"]], template: function TuiMultiSelectExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiMultiSelectExample5_Template_tui_multi_select_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample5_tui_data_list_2_Template, 6, 5, "tui-data-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("expandable", false)("tuiTextfieldLabelOutside", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDataListDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_7__["TuiDataListComponent"], _core_components_data_list_opt_group_directive__WEBPACK_IMPORTED_MODULE_8__["TuiOptGroupDirective"], _kit_components_multi_select_multi_select_group_multi_select_group_component__WEBPACK_IMPORTED_MODULE_9__["TuiMultiSelectGroupComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_10__["TuiMultiSelectGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_12__["TuiOptionComponent"]], pipes: [_kit_components_multi_select_hide_selected_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiHideSelectedPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/6/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/6/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample6", function() { return TuiMultiSelectExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");










function TuiMultiSelectExample6_tui_data_list_wrapper_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
class TuiMultiSelectExample6 {
    constructor() {
        this.items = [
            `گراهام چپمن`,
            `جان کلیز`,
            `تری گیلیام`,
            `اریک آیدل`,
            `تری جونز`,
            `مایکل پیلین`,
        ];
        this.value = [this.items[0]];
    }
}
TuiMultiSelectExample6.ɵfac = function TuiMultiSelectExample6_Factory(t) { return new (t || TuiMultiSelectExample6)(); };
TuiMultiSelectExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample6, selectors: [["tui-multi-select-example-6"]], decls: 2, vars: 3, consts: [[1, "input", 3, "tuiTextfieldLabelOutside", "tuiTextfieldCleaner", "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"]], template: function TuiMultiSelectExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiMultiSelectExample6_Template_tui_multi_select_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiMultiSelectExample6_tui_data_list_wrapper_1_Template, 1, 1, "tui-data-list-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCleanerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperComponent"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n  direction: rtl;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9leGFtcGxlcy82L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9leGFtcGxlcy82L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsIi5pbnB1dCB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/7/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/7/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample7", function() { return TuiMultiSelectExample7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollable.directive */ "../core/components/scrollbar/scrollable.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");












function TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
} }
function TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-data-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_button_2_Template, 2, 2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.countries);
} }
class TuiMultiSelectExample7 {
    constructor() {
        this.value = [];
        this.countries = [
            `Afghanistan`,
            `Albania`,
            `Algeria`,
            `American Samoa`,
            `Andorra`,
            `Angola`,
            `Anguilla`,
            `Antarctica`,
            `Antigua and Barbuda`,
            `Argentina`,
            `Armenia`,
            `Aruba`,
            `Australia`,
            `Austria`,
            `Azerbaijan`,
            `Bahamas`,
            `Bahrain`,
            `Bangladesh`,
            `Barbados`,
            `Belarus`,
            `Belgium`,
            `Belize`,
            `Benin`,
            `Bermuda`,
            `Bhutan`,
            `Bolivia`,
            `Bonaire, Sint Eustatius and Saba`,
            `Bosnia and Herzegovina`,
            `Botswana`,
            `Bouvet Island`,
            `Brazil`,
            `British Indian Ocean Territory`,
            `Brunei Darussalam`,
            `Bulgaria`,
            `Burkina Faso`,
            `Burundi`,
            `Cabo Verde`,
            `Cambodia`,
            `Cameroon`,
            `Canada`,
            `Cayman Islands`,
            `Central African Republic`,
            `Chad`,
            `Chile`,
            `China`,
            `Christmas Island`,
            `Cocos (Keeling) Islands`,
            `Colombia`,
            `Comoros`,
            `Congo`,
            `Cook Islands`,
            `Costa Rica`,
            `Croatia`,
            `Cuba`,
            `Curaçao`,
            `Cyprus`,
            `Czechia`,
            `Côte d'Ivoire`,
            `Denmark`,
            `Djibouti`,
            `Dominica`,
            `Dominican Republic`,
            `Ecuador`,
            `Egypt`,
            `El Salvador`,
            `Equatorial Guinea`,
            `Eritrea`,
            `Estonia`,
            `Eswatini`,
            `Ethiopia`,
            `Falkland Islands`,
            `Faroe Islands`,
            `Fiji`,
            `Finland`,
            `France`,
            `French Guiana`,
            `French Polynesia`,
            `French Southern Territories`,
            `Gabon`,
            `Gambia`,
            `Georgia`,
            `Germany`,
            `Ghana`,
            `Gibraltar`,
            `Greece`,
            `Greenland`,
            `Grenada`,
            `Guadeloupe`,
            `Guam`,
            `Guatemala`,
            `Guernsey`,
            `Guinea`,
            `Guinea-Bissau`,
            `Guyana`,
            `Haiti`,
            `Heard Island and McDonald Islands`,
            `Holy See`,
            `Honduras`,
            `Hong Kong`,
            `Hungary`,
            `Iceland`,
            `India`,
            `Indonesia`,
            `Iran`,
            `Iraq`,
            `Ireland`,
            `Isle of Man`,
            `Israel`,
            `Italy`,
            `Jamaica`,
            `Japan`,
            `Jersey`,
            `Jordan`,
            `Kazakhstan`,
            `Kenya`,
            `Kiribati`,
            `Korea`,
            `Kuwait`,
            `Kyrgyzstan`,
            `Lao People's Democratic Republic`,
            `Latvia`,
            `Lebanon`,
            `Lesotho`,
            `Liberia`,
            `Libya`,
            `Liechtenstein`,
            `Lithuania`,
            `Luxembourg`,
            `Macao`,
            `Madagascar`,
            `Malawi`,
            `Malaysia`,
            `Maldives`,
            `Mali`,
            `Malta`,
            `Marshall Islands`,
            `Martinique`,
            `Mauritania`,
            `Mauritius`,
            `Mayotte`,
            `Mexico`,
            `Micronesia`,
            `Moldova`,
            `Monaco`,
            `Mongolia`,
            `Montenegro`,
            `Montserrat`,
            `Morocco`,
            `Mozambique`,
            `Myanmar`,
            `Namibia`,
            `Nauru`,
            `Nepal`,
            `Netherlands`,
            `New Caledonia`,
            `New Zealand`,
            `Nicaragua`,
            `Niger`,
            `Nigeria`,
            `Niue`,
            `Norfolk Island`,
            `Northern Mariana Islands`,
            `Norway`,
            `Oman`,
            `Pakistan`,
            `Palau`,
            `Palestine, State of`,
            `Panama`,
            `Papua New Guinea`,
            `Paraguay`,
            `Peru`,
            `Philippines`,
            `Pitcairn`,
            `Poland`,
            `Portugal`,
            `Puerto Rico`,
            `Qatar`,
            `Republic of North Macedonia`,
            `Romania`,
            `Russian Federation`,
            `Rwanda`,
            `Réunion`,
            `Saint Barthélemy`,
            `Saint Helena`,
            `Saint Kitts and Nevis`,
            `Saint Lucia`,
            `Saint Martin`,
            `Saint Pierre and Miquelon`,
            `Saint Vincent and the Grenadines`,
            `Samoa`,
            `San Marino`,
            `Sao Tome and Principe`,
            `Saudi Arabia`,
            `Senegal`,
            `Serbia`,
            `Seychelles`,
            `Sierra Leone`,
            `Singapore`,
            `Sint Maarten (Dutch part)`,
            `Slovakia`,
            `Slovenia`,
            `Solomon Islands`,
            `Somalia`,
            `South Africa`,
            `South Georgia`,
            `South Sudan`,
            `Spain`,
            `Sri Lanka`,
            `Sudan`,
            `Suriname`,
            `Svalbard and Jan Mayen`,
            `Sweden`,
            `Switzerland`,
            `Syrian Arab Republic`,
            `Taiwan`,
            `Tajikistan`,
            `Tanzania, United Republic of`,
            `Thailand`,
            `Timor-Leste`,
            `Togo`,
            `Tokelau`,
            `Tonga`,
            `Trinidad and Tobago`,
            `Tunisia`,
            `Turkey`,
            `Turkmenistan`,
            `Turks and Caicos Islands`,
            `Tuvalu`,
            `Uganda`,
            `Ukraine`,
            `United Arab Emirates`,
            `United Kingdom`,
            `United States of America`,
            `Uruguay`,
            `Uzbekistan`,
            `Vanuatu`,
            `Venezuela`,
            `Viet Nam`,
            `Virgin Islands (British)`,
            `Virgin Islands (U.S.)`,
            `Wallis and Futuna`,
            `Western Sahara`,
            `Yemen`,
            `Zambia`,
            `Zimbabwe`,
            `Åland Islands`,
        ];
    }
    get content() {
        return `Selected ${this.value.length} of ${this.countries.length}`;
    }
}
TuiMultiSelectExample7.ɵfac = function TuiMultiSelectExample7_Factory(t) { return new (t || TuiMultiSelectExample7)(); };
TuiMultiSelectExample7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample7, selectors: [["tui-multi-select-example-7"]], decls: 3, vars: 3, consts: [[1, "b-form", 3, "editable", "valueContent", "ngModel", "ngModelChange"], ["tuiScrollable", "", "class", "scroll", 3, "itemSize", 4, "tuiDataList"], ["tuiScrollable", "", 1, "scroll", 3, "itemSize"], ["tuiMultiSelectGroup", ""], ["tuiOption", "", 3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["tuiOption", "", 3, "value"]], template: function TuiMultiSelectExample7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiMultiSelectExample7_Template_tui_multi_select_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Applicable countries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiMultiSelectExample7_cdk_virtual_scroll_viewport_2_Template, 3, 2, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("valueContent", ctx.content)("ngModel", ctx.value);
    } }, directives: [_kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_3__["TuiMultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDataListDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkFixedSizeVirtualScroll"], _core_components_scrollbar_scrollable_directive__WEBPACK_IMPORTED_MODULE_7__["TuiScrollableDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_8__["TuiDataListComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_9__["TuiMultiSelectGroupDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_10__["TuiOptionComponent"]], styles: [".scroll[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  \n  height: 200px;\n  --tui-duration: 0;\n}\n.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvZXhhbXBsZXMvNy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9leGFtcGxlcy83L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFREtFLHFCQUFxQjtFRW1WbkIscUJBQUE7RUFDQSx3QkFBQTtFRmpWRixvQkFBb0I7RUNObEIsYUFBQTtFQUVBLGlCQUFBO0FET0o7QUVpVkk7O0VBRUksdUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRi9VUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0L2V4YW1wbGVzLzcvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5zY3JvbGwge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cbiAgaGVpZ2h0OiAyMDBweDtcbiAgLS10dWktZHVyYXRpb246IDA7XG59XG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhcixcbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5zY3JvbGwge1xuICAgIC5zY3JvbGxiYXItaGlkZGVuKCk7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxuICAgIC0tdHVpLWR1cmF0aW9uOiAwO1xufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-7`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/8/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/8/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample8", function() { return TuiMultiSelectExample8; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");














function TuiMultiSelectExample8_tui_data_list_wrapper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
function TuiMultiSelectExample8_tui_data_list_wrapper_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.items);
} }
const STRINGIFY_EMPLOYEE = (item) => `name` in item
    ? `${item.name} (${item.dept.title})`
    : `${item.$implicit.name} (${item.$implicit.dept.title})`;
const ID_MATCHER_EMPLOYEE = (item1, item2) => item1.id === item2.id;
class TuiMultiSelectExample8 {
    constructor() {
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.items = [
            { id: 42, name: `John Cleese`, dept: { id: 566, title: `Financial` } },
            { id: 237, name: `Eric Idle`, dept: { id: 560, title: `Staffing` } },
            { id: 666, name: `Michael Palin`, dept: { id: 566, title: `Financial` } },
            { id: 123, name: `Terry Gilliam`, dept: { id: 500, title: `Administrative` } },
            { id: 777, name: `Terry Jones`, dept: { id: 566, title: `Financial` } },
            { id: 999, name: `Graham Chapman`, dept: { id: 560, title: `Staffing` } },
        ];
    }
}
TuiMultiSelectExample8.ɵfac = function TuiMultiSelectExample8_Factory(t) { return new (t || TuiMultiSelectExample8)(); };
TuiMultiSelectExample8.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample8, selectors: [["tui-multi-select-example-8"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiItemsHandlersProvider"])({
                stringify: STRINGIFY_EMPLOYEE,
                identityMatcher: ID_MATCHER_EMPLOYEE,
            }),
        ])], decls: 7, vars: 7, consts: [[1, "b-form"], ["tuiTextfieldSize", "m", 3, "editable", "formControl", "tuiTextfieldLabelOutside", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], [1, "tui-space_top-2", 3, "editable", "formControl", "tuiTextfieldCleaner"], ["tuiMultiSelectGroup", "", 3, "items"]], template: function TuiMultiSelectExample8_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-multi-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiMultiSelectExample8_tui_data_list_wrapper_3_Template, 1, 1, "tui-data-list-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-multi-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiMultiSelectExample8_tui_data_list_wrapper_6_Template, 1, 1, "tui-data-list-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("formControl", ctx.testValue)("tuiTextfieldLabelOutside", true)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("formControl", ctx.testValue)("tuiTextfieldCleaner", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_5__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldCleanerDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectGroupDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample8, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-8`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiItemsHandlersProvider"])({
                        stringify: STRINGIFY_EMPLOYEE,
                        identityMatcher: ID_MATCHER_EMPLOYEE,
                    }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/examples/9/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/multi-select/examples/9/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiMultiSelectExample9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiMultiSelectExample9", function() { return TuiMultiSelectExample9; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");

















function TuiMultiSelectExample9_ng_template_6_tui_data_list_wrapper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.items);
} }
function TuiMultiSelectExample9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-multi-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiMultiSelectExample9_ng_template_6_tui_data_list_wrapper_4_Template, 1, 1, "tui-data-list-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("expandable", false)("tuiTextfieldSize", data_r2.textFieldSize)("formControl", ctx_r1.testValue)("tuiTextfieldLabelOutside", true);
} }
class TuiMultiSelectExample9 {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.testValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.items = [
            `Luke Skywalker`,
            `Leia Organa Solo`,
            `Darth Vader`,
            `Han Solo`,
            `Obi-Wan Kenobi`,
            `Yoda`,
        ];
    }
    showDialog(content, textFieldSize) {
        this.dialogService.open(content, { data: { textFieldSize } }).subscribe();
    }
}
TuiMultiSelectExample9.ɵfac = function TuiMultiSelectExample9_Factory(t) { return new (t || TuiMultiSelectExample9)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"])); };
TuiMultiSelectExample9.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiMultiSelectExample9, selectors: [["tui-multi-select-example-9"]], decls: 8, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["template", ""], [1, "tui-container_fullwidth"], [1, "tui-row", "tui-form__row_multi-fields", "tui-row_adaptive"], ["tuiLabel", "", "label", "Star Wars persons", 1, "tui-col_md-12"], [1, "b-form", 3, "tuiTextfieldCleaner", "expandable", "tuiTextfieldSize", "formControl", "tuiTextfieldLabelOutside"], ["tuiMultiSelectGroup", "", 3, "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "items"]], template: function TuiMultiSelectExample9_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMultiSelectExample9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.showDialog(_r0, "s"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show 's' size\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMultiSelectExample9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.showDialog(_r0, "m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show 'm' size\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiMultiSelectExample9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.showDialog(_r0, "l"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show 'l' size\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiMultiSelectExample9_ng_template_6_Template, 5, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_6__["TuiLabelComponent"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["TuiMultiSelectComponent"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldLabelOutsideDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_13__["TuiMultiSelectGroupDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiMultiSelectExample9, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-multi-select-example-9`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDialogService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/multi-select.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/components/multi-select/multi-select.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiMultiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMultiSelectComponent", function() { return ExampleTuiMultiSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/multi-select/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/multi-select/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/multi-select/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/multi-select/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/multi-select/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/multi-select/examples/6/index.ts");
/* harmony import */ var _examples_7_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/7/index */ "./src/modules/components/multi-select/examples/7/index.ts");
/* harmony import */ var _examples_8_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/8/index */ "./src/modules/components/multi-select/examples/8/index.ts");
/* harmony import */ var _examples_9_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/9/index */ "./src/modules/components/multi-select/examples/9/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../kit/components/multi-select/multi-select.component */ "../kit/components/multi-select/multi-select.component.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-max-length.directive */ "../core/directives/textfield-controller/textfield-max-length.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../kit/components/multi-select/multi-select-group/multi-select-group.directive */ "../kit/components/multi-select/multi-select-group/multi-select-group.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");






































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_322443088620685867$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}MultiSelect{$closeTagCode} is a textfield with a dropdown for choosing several items ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_322443088620685867$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟1370bfd9a3bd5dbdb104246929abb8ef16f30c79␟322443088620685867:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:MultiSelect${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a textfield with a dropdown for choosing several items `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6800762720774839936$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__3 = goog.getMsg("String array");
    I18N_2 = MSG_EXTERNAL_6800762720774839936$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟18246b83094cc9589126b64e6d01e462adcdaed4␟6800762720774839936:String array`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6922213476796739115$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__6 = goog.getMsg("Custom template, async items loading");
    I18N_5 = MSG_EXTERNAL_6922213476796739115$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟ddf3afb4b682a69d70584655c15b5ba47251ef19␟6922213476796739115:Custom template, async items loading`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__9 = goog.getMsg("sizes");
    I18N_8 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5247767264061245555$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__12 = goog.getMsg("With IDs");
    I18N_11 = MSG_EXTERNAL_5247767264061245555$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟5df8fff1ea32976050fbdbb2e4bdae97a7d96eeb␟5247767264061245555:With IDs`;
}
const _c13 = ["heading", I18N_11];
function ExampleTuiMultiSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-multi-select-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-multi-select-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-multi-select-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-multi-select-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-multi-select-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-multi-select-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-multi-select-example-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-multi-select-example-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "tui-multi-select-example-9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example9);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6504226182753238526$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__15 = goog.getMsg("{$startParagraph} Set a value with copied object from items to check {$startTagCode}identityMatcher{$closeTagCode} : {$closeParagraph}{$startTagButton} Set {$closeTagButton}", { "startParagraph": "\uFFFD#4\uFFFD", "startTagCode": "\uFFFD#5\uFFFD", "closeTagCode": "\uFFFD/#5\uFFFD", "closeParagraph": "\uFFFD/#4\uFFFD", "startTagButton": "\uFFFD#6\uFFFD", "closeTagButton": "\uFFFD/#6\uFFFD" });
    I18N_14 = MSG_EXTERNAL_6504226182753238526$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\uFFFD#4\uFFFD"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:identityMatcher${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: : ${"\uFFFD/#4\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#6\uFFFD"}:START_TAG_BUTTON: Set ${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_BUTTON:`;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 25);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabledItemHandler", ctx_r12.disabledItemHandler)("items", ctx_r12.items);
} }
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-multi-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchChange", function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template_tui_multi_select_searchChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_tui_data_list_wrapper_2_Template, 1, 2, "tui-data-list-wrapper", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldExampleText", ctx_r3.exampleText)("tuiTextfieldMaxLength", ctx_r3.maxLength)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode)("focusable", ctx_r3.focusable)("disabledItemHandler", ctx_r3.disabledItemHandler)("editable", ctx_r3.editable)("expandable", ctx_r3.expandable)("identityMatcher", ctx_r3.identityMatcher)("readOnly", ctx_r3.readOnly)("stringify", ctx_r3.stringify)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("valueContent", ctx_r3.valueContent)("search", ctx_r3.search);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___17 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_16 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___19 = goog.getMsg(" Textfield value to subscribe on input or setting it from the outside (emits {$startTagCode}null{$closeTagCode} when item from list selected) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_18 = MSG_EXTERNAL_1886174402380484199$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: when item from list selected) `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8047919531216999837$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___21 = goog.getMsg(" Handler for deactivation some items ");
    I18N_20 = MSG_EXTERNAL_8047919531216999837$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟79e3dba0f52df39ff1faa20304144f2fb6f25831␟8047919531216999837: Handler for deactivation some items `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3526829989231983253$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___23 = goog.getMsg(" Textfield can be use for typing ");
    I18N_22 = MSG_EXTERNAL_3526829989231983253$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟a50496a997fc25853e0606139234a3c23c74b872␟3526829989231983253: Textfield can be use for typing `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4902838123072095655$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___25 = goog.getMsg(" Control height can be expanded to show all tags ");
    I18N_24 = MSG_EXTERNAL_4902838123072095655$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4796409722932472766$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___27 = goog.getMsg(" A function that compares search and value to define a match between them. {$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagStrong": "\uFFFD#1\uFFFD", "closeTagStrong": "\uFFFD/#1\uFFFD" });
    I18N_26 = MSG_EXTERNAL_4796409722932472766$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟543ca5b39fc7e55317cb8527b1a5a8dd1e6802b6␟4796409722932472766: A function that compares search and value to define a match between them. ${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4616897131727147893$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___29 = goog.getMsg(" A function that transforms object into a string. {$startTagCode}String(value){$closeTagCode} by default. {$startTagStrong}Should be a pure function{$closeTagStrong}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_28 = MSG_EXTERNAL_4616897131727147893$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:String(value)${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Should be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5590474436936398231$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___31 = goog.getMsg(" A template for custom view of selected value ");
    I18N_30 = MSG_EXTERNAL_5590474436936398231$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `;
}
function ExampleTuiMultiSelectComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_30);
} }
function ExampleTuiMultiSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_1_Template, 3, 27, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiMultiSelectComponent_ng_template_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.setValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_9_Template, 2, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.expandable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_13_Template, 2, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.identityMatcher = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.stringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiMultiSelectComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiMultiSelectComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.valueContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "inherited-documentation", 22);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.expandable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.identityMatcherVariants)("documentationPropertyValue", ctx_r1.identityMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stringifyVariants)("documentationPropertyValue", ctx_r1.stringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.valueContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropdown", true);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9060611228690957196$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__33 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiMultiSelectModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_32 = MSG_EXTERNAL_9060611228690957196$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__33;
}
else {
    I18N_32 = $localize `:␟0c365cd8b95d975d574504d047bacc24fc44c09c␟9060611228690957196: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiMultiSelectModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8602164619926939169$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__35 = goog.getMsg(" See samples to learn more about working with {$startTagCode}tui-data-list-wrapper{$closeTagCode} or without them ", { "startTagCode": "\uFFFD#8\uFFFD", "closeTagCode": "\uFFFD/#8\uFFFD" });
    I18N_34 = MSG_EXTERNAL_8602164619926939169$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__35;
}
else {
    I18N_34 = $localize `:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\uFFFD#8\uFFFD"}:START_TAG_CODE:tui-data-list-wrapper${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_CODE: or without them `;
}
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__37 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]", "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]" });
    I18N_36 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__37;
}
else {
    I18N_36 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_36);
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__39 = goog.getMsg("Add to the template:");
    I18N_38 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_MULTI_SELECT_MULTI_SELECT_COMPONENT_TS__39;
}
else {
    I18N_38 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiMultiSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, I18N_36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, I18N_38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    toString() {
        return `${this.name} (${this.balance})`;
    }
}
class ExampleTuiMultiSelectComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/import/declare-form.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/4/index.html")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/5/index.html")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/6/index.less")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-html */ "!!raw-loader!-examples-7-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-less */ "!!raw-loader!-examples-7-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.less")),
        };
        this.example8 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-ts */ "!!raw-loader!-examples-8-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/8/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-html */ "!!raw-loader!-examples-8-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/8/index.html")),
        };
        this.example9 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-9-index-ts */ "!!raw-loader!-examples-9-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/9/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-9-index-html */ "!!raw-loader!-examples-9-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/9/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.html")),
        };
        this.labelOutside = true;
        this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MIN_HEIGHT"];
        this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MAX_HEIGHT"];
        this.items = [
            new Account(`Ruble`, 500),
            new Account(`Dollar`, 500),
            new Account(`Euro`, 500),
            new Account(`Pounds`, 500),
            new Account(`Yuan`, 237),
        ];
        this.expandable = true;
        this.editable = true;
        this.dropdownLimitWidthVariants = [`fixed`, `min`];
        this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
        this.search = ``;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[this.sizeVariants.length - 1];
        this.stringifyVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_STRINGIFY"],
            item => String(String(item).match(/\d+/)),
        ];
        this.stringify = this.stringifyVariants[0];
        this.identityMatcherVariants = [
            (item1, item2) => item1 === item2,
            (item1, item2) => item1.balance === item2.balance,
        ];
        this.identityMatcher = this.identityMatcherVariants[0];
        this.maxLengthVariants = [10];
        this.maxLength = null;
        this.dropdownAlignVariants = [`left`, `right`];
        this.dropdownAlign = this.dropdownAlignVariants[0];
        this.valueContentVariants = [``, ({ $implicit: { length } }) => `Selected: ${length}`];
        this.valueContent = this.valueContentVariants[0];
        this.dropdownDirectionVariants = [
            `top`,
            `bottom`,
        ];
        this.dropdownDirection = null;
        this.itemContentSelected = null;
        this.itemContentVariants = [`template`];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            (item) => item.balance < 300,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
    }
    setValue() {
        this.control.setValue([new Account(`Dollar`, 237)]);
    }
}
ExampleTuiMultiSelectComponent.ɵfac = function ExampleTuiMultiSelectComponent_Factory(t) { return ɵExampleTuiMultiSelectComponent_BaseFactory(t || ExampleTuiMultiSelectComponent); };
ExampleTuiMultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiMultiSelectComponent, selectors: [["example-tui-multi-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiMultiSelectComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "MultiSelect", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["id", "string-array", 3, "content", 6, "heading"], ["id", "object-array", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "ids", 3, "content", 6, "heading"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "rtl", "heading", "Direction: RTL", 3, "content"], ["id", "virtual", "heading", "Virtual scroll", 3, "content"], ["id", "options-stringify", "heading", "Options (stringify)", 3, "content"], ["id", "multiselect-inside-dialog-with-different-size", "heading", "Multiselect inside dialog with different textfield sizes", 3, "content"], [3, "control"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "search", "documentationPropertyMode", "input-output", "documentationPropertyType", "string | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "editable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expandable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "stringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiTextfieldCleaner", "tuiTextfieldExampleText", "tuiTextfieldMaxLength", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "focusable", "disabledItemHandler", "editable", "expandable", "identityMatcher", "readOnly", "stringify", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "valueContent", "search", "searchChange"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "items", 4, "tuiDataList"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "items"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiMultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiMultiSelectComponent_ng_template_1_Template, 25, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiMultiSelectComponent_ng_template_2_Template, 17, 14, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiMultiSelectComponent_ng_template_3_Template, 19, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiMultiSelectExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_12__["TuiMultiSelectExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_13__["TuiMultiSelectExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_14__["TuiMultiSelectExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_15__["TuiMultiSelectExample6"], _examples_7_index__WEBPACK_IMPORTED_MODULE_16__["TuiMultiSelectExample7"], _examples_8_index__WEBPACK_IMPORTED_MODULE_17__["TuiMultiSelectExample8"], _examples_9_index__WEBPACK_IMPORTED_MODULE_18__["TuiMultiSelectExample9"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDemoComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_21__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_22__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_23__["InheritedDocumentationComponent"], _kit_components_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_24__["TuiMultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_25__["TuiDropdownControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldMaxLengthDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_29__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_30__["TuiTextfieldSizeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_31__["TuiHintControllerDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_32__["TuiDataListDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_33__["TuiDataListWrapperComponent"], _kit_components_multi_select_multi_select_group_multi_select_group_directive__WEBPACK_IMPORTED_MODULE_34__["TuiMultiSelectGroupDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_35__["TuiDocCodeComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3Quc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hdmF0YXIge1xuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbiIsIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
const ɵExampleTuiMultiSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiMultiSelectComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiMultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-multi-select`,
                templateUrl: `./multi-select.template.html`,
                styleUrls: [`./multi-select.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiMultiSelectComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/multi-select/multi-select.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/multi-select/multi-select.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiMultiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiMultiSelectModule", function() { return ExampleTuiMultiSelectModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/multi-select/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/multi-select/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/multi-select/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/multi-select/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/multi-select/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/multi-select/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/components/multi-select/examples/7/index.ts");
/* harmony import */ var _examples_8__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/8 */ "./src/modules/components/multi-select/examples/8/index.ts");
/* harmony import */ var _examples_9__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/9 */ "./src/modules/components/multi-select/examples/9/index.ts");
/* harmony import */ var _multi_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./multi-select.component */ "./src/modules/components/multi-select/multi-select.component.ts");























class ExampleTuiMultiSelectModule {
}
ExampleTuiMultiSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExampleTuiMultiSelectModule });
ExampleTuiMultiSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ExampleTuiMultiSelectModule_Factory(t) { return new (t || ExampleTuiMultiSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiMultiSelectModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"])),
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExampleTuiMultiSelectModule, { declarations: [_multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiMultiSelectExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiMultiSelectExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiMultiSelectExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiMultiSelectExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiMultiSelectExample6"],
        _examples_7__WEBPACK_IMPORTED_MODULE_17__["TuiMultiSelectExample7"],
        _examples_8__WEBPACK_IMPORTED_MODULE_18__["TuiMultiSelectExample8"],
        _examples_9__WEBPACK_IMPORTED_MODULE_19__["TuiMultiSelectExample9"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiMultiSelectModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"]], exports: [_multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ExampleTuiMultiSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiScrollbarModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiMultiSelectModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiDataListWrapperModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiLetModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_10__["InheritedDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"])),
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusModule"],
                ],
                declarations: [
                    _multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiMultiSelectExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiMultiSelectExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiMultiSelectExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiMultiSelectExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiMultiSelectExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiMultiSelectExample6"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_17__["TuiMultiSelectExample7"],
                    _examples_8__WEBPACK_IMPORTED_MODULE_18__["TuiMultiSelectExample8"],
                    _examples_9__WEBPACK_IMPORTED_MODULE_19__["TuiMultiSelectExample9"],
                ],
                exports: [_multi_select_component__WEBPACK_IMPORTED_MODULE_20__["ExampleTuiMultiSelectComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-multi-select-multi-select-module.js.map