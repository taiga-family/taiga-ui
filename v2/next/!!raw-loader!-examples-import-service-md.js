(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-service-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/import/service.md":
/*!**********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/import/service.md ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nexport class MyComponent {\n  constructor(@Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService) {}\n\n  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n      .open('/assets/taiga.pdf', {\n        label: 'Taiga UI',\n        actions,\n      })\n      .subscribe();\n  }\n}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-service-md.js.map