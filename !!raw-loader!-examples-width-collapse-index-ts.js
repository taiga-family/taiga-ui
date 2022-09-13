(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-width-collapse-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/width-collapse/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/animations/examples/width-collapse/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiWidthCollapse} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-width-collapse-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiWidthCollapse],\n})\nexport class TuiWidthCollapseExample {\n    @Input()\n    speed = 0;\n\n    isOpen = true;\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-width-collapse-index-ts.js.map