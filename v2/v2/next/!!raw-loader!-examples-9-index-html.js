(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-9-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input\n    icon=\"tuiIconSearchLarge\"\n    iconAlign=\"left\"\n    tuiHintContent=\"لا يدعمه Safari أدناه 12.1\"\n    tuiHintDirection=\"bottom-right\"\n    class=\"input\"\n    [tuiTextfieldCleaner]=\"true\"\n    [(ngModel)]=\"value\"\n>\n    بحث\n    <input\n        tuiTextfield\n        placeholder=\"اكتب الاستعلام الخاص بك\"\n    />\n</tui-input>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/9/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showDialog(template, 's')\"\n>\n    Show 's' size\n</button>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    class=\"tui-space_right-3\"\n    (click)=\"showDialog(template, 'm')\"\n>\n    Show 'm' size\n</button>\n\n<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog(template, 'l')\"\n>\n    Show 'l' size\n</button>\n\n<ng-template\n    #template\n    let-data=\"data\"\n>\n    <div class=\"tui-container_fullwidth\">\n        <div class=\"tui-row tui-form__row_multi-fields tui-row_adaptive\">\n            <label\n                tuiLabel\n                label=\"Star Wars persons\"\n                class=\"tui-col_md-12\"\n            >\n                <tui-multi-select\n                    class=\"b-form\"\n                    [tuiTextfieldCleaner]=\"true\"\n                    [expandable]=\"false\"\n                    [tuiTextfieldSize]=\"data.textFieldSize\"\n                    [formControl]=\"testValue\"\n                    [tuiTextfieldLabelOutside]=\"true\"\n                >\n                    <tui-data-list-wrapper\n                        *tuiDataList\n                        tuiMultiSelectGroup\n                        [items]=\"items\"\n                    ></tui-data-list-wrapper>\n                </tui-multi-select>\n            </label>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/9/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example\">\n    <tui-select\n        tuiTextfieldSize=\"l\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [formControl]=\"account\"\n        [valueContent]=\"value\"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button\n                    *ngFor=\"let item of accounts\"\n                    tuiOption\n                    [value]=\"item\"\n                >\n                    <my-account [account]=\"item\"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n\n    <tui-select\n        tuiTextfieldSize=\"m\"\n        class=\"tui-space_top-2\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [formControl]=\"account\"\n        [valueContent]=\"value\"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button\n                    *ngFor=\"let item of accounts\"\n                    tuiOption\n                    [value]=\"item\"\n                >\n                    <my-account [account]=\"item\"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n</div>\n\n<ng-template\n    #value\n    let-account\n>\n    <my-account [account]=\"account\"></my-account>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-9-index-html.js.map