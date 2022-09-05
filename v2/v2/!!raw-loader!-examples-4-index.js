(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-index"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/4/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-slider-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample4 {\n    userAnswer = 2;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-range-example-4`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample4 {\n    readonly min = 0;\n    readonly max = 1_000_000;\n    readonly ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];\n    readonly segments = this.ticksLabels.length - 1;\n\n    value = [0, 100_000];\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [0, this.min],\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n        [100, this.max],\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/4/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-slider-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample4 {}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-index.js.map