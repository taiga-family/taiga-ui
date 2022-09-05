(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-index"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-slider/examples/5/index.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-slider-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample5 {\n    readonly max = 100;\n    readonly min = 0;\n\n    readonly controlWithMinLabel = new FormControl(this.min);\n    readonly controlWithMaxLabel = new FormControl(this.max);\n\n    readonly customLabel = ({\n        $implicit,\n    }: TuiContextWithImplicit<number>): string | number => {\n        switch ($implicit) {\n            case this.max:\n                return `Digits can't describe my love!`;\n            case this.min:\n                return `Just a label for min value`;\n            case (this.max - this.min) / 2:\n                return `Middle`;\n            default:\n                return $implicit;\n        }\n    };\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/5/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-slider-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample5 {\n    readonly labels: string[] = [`5 000`, `100 000`, `300 000`, `1 000 000`];\n    readonly formControl = new FormControl(720_000);\n    readonly segments = this.labels.length - 1;\n\n    readonly keySteps: TuiKeySteps = [\n        [0, 5_000],\n        [100 / 3, 100_000],\n        [(100 / 3) * 2, 300_000],\n        [100, 1_000_000],\n    ];\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-index.js.map