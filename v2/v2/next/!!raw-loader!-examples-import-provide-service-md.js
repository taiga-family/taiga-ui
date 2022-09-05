(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-import-provide-service-md"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/import/provide-service.md":
/*!**************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/import/provide-service.md ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("```ts\nimport formatDistance from 'date-fns/formatDistance';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n  format(timestamp: number): Observable<string> {\n    return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n  }\n}\n\n@Component({\n  // ...\n  providers: [\n    {\n      provide: TuiFormatDateService,\n      useClass: FormatService,\n    },\n  ],\n})\nexport class MyComponent {}\n```\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-import-provide-service-md.js.map