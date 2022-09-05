(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-pure-function-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/pure-function.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/pure/pure-function.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {tuiPure} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `example-tui-pure-function`,\n    template: `\n        <tui-input [(ngModel)]=\"text\">Type a text to start computing</tui-input>\n        <div class=\"tui-space_top-2\">Called times: {{ counter.count }}</div>\n        <div\n            *ngIf=\"show\"\n            class=\"tui-space_top-2\"\n        >\n            Result: {{ calculate(counter, text) | json }}\n        </div>\n        <button\n            tuiButton\n            type=\"button\"\n            class=\"tui-space_top-2\"\n            (click)=\"show = !show\"\n        >\n            Show/hide\n        </button>\n    `,\n    changeDetection,\n})\nexport class ExampleTuiPureFunctionComponent {\n    text = ``;\n\n    show = false;\n\n    counter = {\n        count: 0,\n    };\n\n    @tuiPure\n    calculate(counter: {count: number}, text: string): {text: string} {\n        counter.count++;\n\n        return {\n            text,\n        };\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-pure-function-component-ts.js.map