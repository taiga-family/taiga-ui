(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-3-index"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/3/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/3/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-input-slider-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample3 {\n    readonly control = new FormControl(10_000);\n    readonly max = 1_000_000;\n    readonly min = 0;\n    readonly totalSteps = 100;\n    readonly ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];\n\n    readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n    ];\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/3/index.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/3/index.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-range-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample3 {\n    readonly min = 0;\n    readonly max = 1000;\n    readonly quantum = 250;\n    readonly segments = 4;\n    readonly labels = [...new Array(this.segments + 1).keys()].map(\n        i => this.min + this.quantum * i,\n    );\n\n    value = [0, 250];\n\n    // https://angular.io/api/common/I18nPluralPipe\n    pluralMap = {'=0': `0`, '=1': `# item`, '=1000': `MAX`, other: `# items`};\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/3/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/3/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-slider-example-3`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample3 {\n    readonly labels: number[] = [0, 250, 500, 750, 1000];\n    readonly formControl = new FormControl(250);\n\n    patchValue(newValue: number): void {\n        this.formControl.patchValue(newValue);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-3-index.js.map