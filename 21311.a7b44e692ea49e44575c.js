"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[21311],{

/***/ 84178:
/***/ ((module) => {

module.exports = "import {Component, ElementRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {fromEvent} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-destroy-example`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n    providers: [TuiDestroyService],\n})\nexport class TuiDestroyExample {\n    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {\n        fromEvent(nativeElement, `click`)\n            .pipe(takeUntil(destroy$))\n            .subscribe(() => console.info(`click`));\n    }\n}\n";

/***/ })

}]);