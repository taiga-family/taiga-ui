(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-prompt-prompt-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptOptions} from './prompt-options';\n\n@Component({\n    selector: `prompt`,\n    templateUrl: `./prompt.template.html`,\n    styleUrls: [`./prompt.style.less`],\n    changeDetection,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean): void {\n        this.context.completeWith(response);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-prompt-prompt-component-ts.js.map