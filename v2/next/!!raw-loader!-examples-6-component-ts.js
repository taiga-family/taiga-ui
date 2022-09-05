(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-6-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/6/component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/6/component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-scrollbar-example-6`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample6Component {\n    items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);\n\n    add(): void {\n        this.items = [...this.items, `Item #${this.items.length}`];\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-6-component-ts.js.map