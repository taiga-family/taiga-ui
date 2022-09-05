(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/2/component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-input-inline-example-2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n    styleUrls: [`./style.less`],\n})\nexport class TuiInputInlineExample2 {\n    heading = `Page heading`;\n    editing = false;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    toggle(): void {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean): void {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string): void {\n        this.alertService.open(newHeading, {label: `New heading`}).subscribe();\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/2/component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/2/component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-scrollbar-example-2`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample2Component {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/component.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/currency/examples/2/component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-currency-example2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCurrencyExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(100),\n    });\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/component.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/2/component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-mapper-example2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample2 {\n    readonly numbers = [1, 2, 3, 4, 5] as const;\n\n    readonly mapper = (numbers: readonly number[], multiplier: number): number[] =>\n        numbers.map(number => number * multiplier);\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-component-ts.js.map