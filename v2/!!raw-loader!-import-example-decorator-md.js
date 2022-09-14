(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-import-example-decorator-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/default-prop/import/example-decorator.md":
/*!*************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/default-prop/import/example-decorator.md ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  @Input()\n  @tuiDefaultProp(\n    quantity => Number.isInteger(quantity) && quantity >= 5,\n    'Should be integer number more than min value',\n  )\n  quantity = 10;\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/import/example-decorator.md":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/import/example-decorator.md ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  @tuiPure\n  get complexCalculationWithFixedResult(): number {\n    // ...\n  }\n\n  @tuiPure\n  someMethod(arg1: number, arg2: {}): {} {\n    // ...\n  }\n}\n```\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/required-setter/import/example-decorator.md":
/*!****************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/required-setter/import/example-decorator.md ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  @Input()\n  @tuiRequiredSetter(\n    quantity => Number.isInteger(quantity) && quantity >= 10,\n    'Should be integer number more than min value',\n  )\n  set quantity(quantity: number) {\n    this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));\n  }\n\n  items: Array<number>;\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-import-example-decorator-md.js.map