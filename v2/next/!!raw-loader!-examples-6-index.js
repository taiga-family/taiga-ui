(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-6-index"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/slider/examples/6/index.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, HostListener} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiClamp} from '@taiga-ui/cdk';\nimport {BehaviorSubject, of, timer} from 'rxjs';\nimport {distinctUntilChanged, mapTo, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-slider-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample6 {\n    min = 0.5;\n    max = 2;\n    value = 1;\n\n    readonly active$ = new BehaviorSubject(false);\n    readonly showHint$ = this.active$.pipe(\n        distinctUntilChanged(),\n        switchMap(active => (active ? of(true) : timer(1000).pipe(mapTo(false)))),\n    );\n\n    @HostListener(`pointerdown`, [`true`])\n    @HostListener(`document:pointerup`, [`false`])\n    onKeydown(show: boolean): void {\n        this.active$.next(show);\n    }\n\n    change(step: number): void {\n        this.value = tuiClamp(this.value + step, this.min, this.max);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-6-index.js.map