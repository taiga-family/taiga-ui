(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-prompt-prompt-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts":
/*!******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.module.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PROMPT_PROVIDER} from './prompt.service';\n\n@NgModule({\n    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],\n    // Add this provider to app module (it is here for stackblitz demonstration purpose only)\n    providers: [PROMPT_PROVIDER],\n    declarations: [PromptComponent],\n    exports: [PromptComponent],\n    entryComponents: [PromptComponent],\n})\nexport class PromptModule {}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-prompt-prompt-module.js.map