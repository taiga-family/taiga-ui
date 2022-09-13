(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-7-index-html"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/dialog/examples/7/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    (click)=\"showDialog()\"\n>\n    Show\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/7/index.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-editor\n    new\n    class=\"editor\"\n    [formControl]=\"control\"\n    [tools]=\"builtInTools\"\n></tui-editor>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]=\"control.value\"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-tag/examples/7/index.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input-tag\n    class=\"b-form\"\n    [separator]=\"customSeparator\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n></tui-input-tag>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.html":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-input\n    tuiHintContent=\"Type 5 letters or more\"\n    class=\"b-form\"\n    [tuiTextfieldCleaner]=\"true\"\n    [tuiTextfieldCustomContent]=\"control.valid ? success : ''\"\n    [formControl]=\"control\"\n>\n    Hello\n</tui-input>\n<ng-template #success>\n    <tui-svg\n        src=\"tuiIconCheckLarge\"\n        class=\"success tui-space_left-3\"\n    ></tui-svg>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/multi-select/examples/7/index.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-multi-select\n    class=\"b-form\"\n    [editable]=\"false\"\n    [valueContent]=\"content\"\n    [(ngModel)]=\"value\"\n>\n    Applicable countries\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        tuiScrollable\n        class=\"scroll\"\n        [itemSize]=\"44\"\n    >\n        <tui-data-list tuiMultiSelectGroup>\n            <button\n                *cdkVirtualFor=\"let item of countries\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-multi-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/7/index.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/7/index.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-select\n    class=\"b-form\"\n    [valueContent]=\"content\"\n    [(ngModel)]=\"value\"\n>\n    Bank and account\n    <ng-template tuiDataList>\n        <tui-data-list>\n            <tui-opt-group>\n                <button\n                    tuiOption\n                    [value]=\"all\"\n                >\n                    All\n                </button>\n            </tui-opt-group>\n            <tui-opt-group label=\"Best bank\">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor=\"let item of bank\"\n                        tuiOption\n                        [value]=\"item\"\n                    >\n                        <label\n                            tuiLabel\n                            [label]=\"item.name\"\n                        >\n                            {{ item.account }}\n                        </label>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group label=\"Other banks\">\n                <tui-opt-group tuiMultiSelectGroup>\n                    <button\n                        *ngFor=\"let item of others\"\n                        tuiOption\n                        [value]=\"item\"\n                    >\n                        <label\n                            tuiLabel\n                            [label]=\"item.name\"\n                        >\n                            {{ item.account }}\n                        </label>\n                    </button>\n                </tui-opt-group>\n            </tui-opt-group>\n            <tui-opt-group tuiMultiSelectGroup>\n                <button\n                    tuiOption\n                    [value]=\"cash\"\n                >\n                    Cash\n                </button>\n            </tui-opt-group>\n        </tui-data-list>\n    </ng-template>\n</tui-select>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/7/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tabs/examples/7/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tabs-with-more\n    [itemsLimit]=\"3\"\n    [(activeItemIndex)]=\"activeItemIndex\"\n>\n    <ng-container *ngFor=\"let item of items\">\n        <button\n            *tuiTab\n            tuiTab\n            (keydown.delete)=\"remove(item)\"\n        >\n            {{ item }}\n            <tui-svg\n                src=\"tuiIconCloseLarge\"\n                class=\"tui-space_left-2\"\n                (click.stop)=\"remove(item)\"\n            ></tui-svg>\n        </button>\n    </ng-container>\n</tui-tabs-with-more>\n<p>{{ items[activeItemIndex] }}</p>\n<button\n    tuiButton\n    (click)=\"add()\"\n>\n    Add one more\n</button>\n<tui-input-count\n    class=\"tui-space_top-4\"\n    [max]=\"4\"\n    [(ngModel)]=\"activeItemIndex\"\n>\n    activeItemIndex\n</tui-input-count>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/index.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/index.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tui-tree\n    [tuiTreeController]=\"false\"\n    [map]=\"map\"\n    [value]=\"service.data$ | async\"\n    [childrenHandler]=\"childrenHandler\"\n    [content]=\"content\"\n    (toggled)=\"onToggled($event)\"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <tui-loader\n        *ngIf=\"item === loading; else text\"\n        class=\"loader\"\n    ></tui-loader>\n    <ng-template #text>{{ item.text }}</ng-template>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/7/index.html":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/markup/lists/examples/7/index.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"tui-list tui-list_triangle\">\n    <li class=\"tui-list__item\">Code Review ($ 10)</li>\n    <li class=\"tui-list__item\">\n        The whole project refactoring ($ 1000)\n        <ul class=\"tui-list tui-list_linear tui-list_nested\">\n            <li class=\"tui-list__item\">Add auto prettier and linters on precommit ($ 50)</li>\n            <li class=\"tui-list__item\">Rewrite to react and back ($ Infinity)</li>\n        </ul>\n    </li>\n    <li class=\"tui-list__item\">\n        Live workshop from\n        <a\n            tuiLink\n            href=\"https://angular.institute/corporate\"\n            target=\"_blank\"\n        >\n            angular.institute\n        </a>\n        ($ 3000)\n        <ol class=\"tui-list tui-list_ordered tui-list_nested\">\n            <li class=\"tui-list__item\">Interactive samples</li>\n            <li class=\"tui-list__item\">Case analysis</li>\n            <li class=\"tui-list__item\">Angular knowledge that keeps on growing</li>\n        </ol>\n    </li>\n</ul>\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-7-index-html.js.map