(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-3-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/3/component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-inline/examples/3/component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {ChangeDetectorRef, Component, Inject, NgZone, OnInit} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiDestroyService, tuiZoneOptimized, watch} from '@taiga-ui/cdk';\nimport {Observable, timer} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-input-inline-example-3`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample3 implements OnInit {\n    count = `0`;\n\n    constructor(\n        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,\n        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,\n        @Inject(NgZone) private readonly zone: NgZone,\n        @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,\n    ) {}\n\n    ngOnInit(): void {\n        if (this.isCypress) {\n            return;\n        }\n\n        timer(0, 3000)\n            .pipe(tuiZoneOptimized(this.zone), watch(this.cd), takeUntil(this.destroy$))\n            .subscribe(value => {\n                this.count = String(value);\n            });\n    }\n}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/3/component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/scrollbar/examples/3/component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ElementRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiScrollbarComponent} from '@taiga-ui/core';\n\nconst SOME_OFFSET_CONST = 20;\n\n@Component({\n    selector: `tui-scrollbar-example-3`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollbarExample3Component {\n    @ViewChild(TuiScrollbarComponent, {read: ElementRef})\n    private readonly scrollBar?: ElementRef<HTMLElement>;\n\n    SOME_OFFSET_CONST = SOME_OFFSET_CONST;\n\n    get scrollTop(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;\n    }\n\n    get scrollLeft(): number {\n        return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;\n    }\n\n    onClick(): void {\n        if (!this.scrollBar) {\n            return;\n        }\n\n        const {nativeElement} = this.scrollBar;\n\n        nativeElement.scrollTop =\n            nativeElement.scrollTop < SOME_OFFSET_CONST ? nativeElement.scrollHeight : 0;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-3-component-ts.js.map