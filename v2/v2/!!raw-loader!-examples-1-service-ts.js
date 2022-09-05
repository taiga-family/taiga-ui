(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-service-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/1/service.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/format-date/examples/1/service.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Injectable} from '@angular/core';\nimport {TuiFormatDateService} from '@taiga-ui/core';\nimport formatDistance from 'date-fns/formatDistance';\nimport {Observable, timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n    format(timestamp: number): Observable<string> {\n        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-service-ts.js.map