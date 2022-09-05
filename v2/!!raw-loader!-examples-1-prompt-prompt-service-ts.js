(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-prompt-prompt-service-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/customization/dialogs/examples/1/prompt/prompt.service.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Injectable, Provider} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PromptOptions} from './prompt-options';\n\n@Injectable({\n    providedIn: `root`,\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions, boolean> {\n    readonly defaultOptions = {\n        heading: `Are you sure?`,\n        buttons: [`Yes`, `No`],\n    } as const;\n\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-prompt-prompt-service-ts.js.map