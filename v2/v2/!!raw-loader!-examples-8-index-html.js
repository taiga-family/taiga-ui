(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-8-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/8/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/8/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input\n    *tuiLet=\"items$ | async as items\"\n    class=\"b-form\"\n    [formControl]=\"control\"\n>\n    Enter your name\n    <ng-container *ngIf=\"items.length\">\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor=\"let item of items\"\n                tuiOption\n                [value]=\"item\"\n                [disabled]=\"item.disabled\"\n                (click)=\"onClick(item)\"\n            >\n                <tui-avatar\n                    size=\"xs\"\n                    class=\"avatar\"\n                    [avatarUrl]=\"item.avatarUrl || null\"\n                    [text]=\"item.toString()\"\n                ></tui-avatar>\n                <span class=\"name\">{{ item }}</span>\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input>\n<p>Parsed on complete match:</p>\n{{ firstName }} {{ lastName }}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/8/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/8/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"b-form\">\n    <tui-multi-select\n        tuiTextfieldSize=\"m\"\n        [editable]=\"false\"\n        [formControl]=\"testValue\"\n        [tuiTextfieldLabelOutside]=\"true\"\n        [tuiTextfieldCleaner]=\"true\"\n    >\n        Employees\n        <tui-data-list-wrapper\n            *tuiDataList\n            tuiMultiSelectGroup\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-multi-select>\n    <tui-multi-select\n        class=\"tui-space_top-2\"\n        [editable]=\"false\"\n        [formControl]=\"testValue\"\n        [tuiTextfieldCleaner]=\"true\"\n    >\n        Employees\n        <tui-data-list-wrapper\n            *tuiDataList\n            tuiMultiSelectGroup\n            [items]=\"items\"\n        ></tui-data-list-wrapper>\n    </tui-multi-select>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/8/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/8/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    class=\"b-form\"\n    [(ngModel)]=\"value\"\n>\n    Country\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        tuiScrollable\n        class=\"scroll\"\n        [itemSize]=\"44\"\n    >\n        <tui-data-list>\n            <button\n                *cdkVirtualFor=\"let item of countries\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-select>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-8-index-html.js.map