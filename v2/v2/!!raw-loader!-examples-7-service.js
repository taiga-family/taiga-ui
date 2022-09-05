(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-7-service"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/service.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/7/service.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Injectable} from '@angular/core';\nimport {TuiTreeLoader} from '@taiga-ui/kit';\nimport {Observable, timer} from 'rxjs';\nimport {mapTo} from 'rxjs/operators';\n\nimport {Item} from './index';\n\n@Injectable()\nexport class TreeLoader implements TuiTreeLoader<Item> {\n    loadChildren({text}: Item): Observable<Item[]> {\n        return timer(3000).pipe(\n            mapTo([\n                {text: `${text} 1`, children: Math.random() > 0.5},\n                {text: `${text} 2`, children: Math.random() > 0.5},\n                {text: `${text} 3`, children: Math.random() > 0.5},\n            ]),\n        );\n    }\n\n    hasChildren({children}: Item): boolean {\n        return !!children;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-7-service.js.map