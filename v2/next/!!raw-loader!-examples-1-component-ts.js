(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/1/component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/1/component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-inline-example-1`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(`Hello 1`),\n        testValue2: new FormControl(`Hello 2`),\n        testValue3: new FormControl(`Hello 3`),\n        testValue4: new FormControl(``),\n    });\n\n    get toggleContent(): string {\n        return this.testForm.disabled ? `enable (allow editing)` : `disable`;\n    }\n\n    get input4Empty(): boolean {\n        return this.testForm.get(`testValue4`)!.value === ``;\n    }\n\n    onToggleClick(): void {\n        if (this.testForm.disabled) {\n            this.testForm.enable();\n        } else {\n            this.testForm.disable();\n        }\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/1/component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/1/component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-scrollbar-example-1`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample1Component {}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/1/component.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/filter/examples/1/component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nexport interface Item {\n    readonly name: string;\n    readonly price: number;\n}\n\n@Component({\n    selector: `tui-filter-example1`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items: readonly Item[] = [\n        {\n            name: `Sword`,\n            price: 1000,\n        },\n        {\n            name: `Axe`,\n            price: 100,\n        },\n        {\n            name: `Spear`,\n            price: 500,\n        },\n    ];\n\n    readonly matcher = (item: Item, search: number): boolean => item.price > search;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/1/component.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/mapper/examples/1/component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-mapper-example1`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample1 {\n    readonly mapper = (amount: number, currencySymbol: string): string =>\n        `Total: ${amount} ${currencySymbol}`;\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/1/component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/1/component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ElementRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {fromEvent} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-destroy-example`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n    providers: [TuiDestroyService],\n})\nexport class TuiDestroyExample {\n    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {\n        fromEvent(nativeElement, `click`)\n            .pipe(takeUntil(destroy$))\n            .subscribe(() => console.info(`click`));\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-component-ts.js.map