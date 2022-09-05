(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-insert-component-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-dialog/examples/import/insert-component.md":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/mobile-dialog/examples/import/insert-component.md ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nconstructor(private readonly dialogsService: TuiMobileDialogService) {}\n\n// ...\n\nthis.dialogsService\n    .open(\n        'Text',\n        {\n            label: 'Heading',\n            actions: ['Button 1', 'Button 2'],\n            data: 'Some data'\n        },\n    )\n    .subscribe(index => {\n        // Index of clicked button\n        console.log(index);\n    });\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-insert-component-md.js.map