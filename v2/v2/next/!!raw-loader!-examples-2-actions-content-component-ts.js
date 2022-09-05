(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-actions-content-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/actions-content.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiPdfViewerOptions} from '@taiga-ui/kit';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport {Buttons} from './index';\n\n@Component({\n    template: `\n        <button\n            *ngFor=\"let button of context.data\"\n            tuiButton\n            size=\"s\"\n            shape=\"rounded\"\n            class=\"tui-space_left-3\"\n            (click)=\"button.onClick(context)\"\n        >\n            {{ button.text }}\n        </button>\n    `,\n})\nexport class ActionsContent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,\n    ) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-actions-content-component-ts.js.map