(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-2-pdf-content-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/pdf-viewer/examples/2/pdf-content.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {timer} from 'rxjs';\nimport {mapTo} from 'rxjs/operators';\n\n@Component({\n    template: `\n        <iframe\n            *ngIf=\"src$ | async as src; else loading\"\n            [src]=\"src\"\n        ></iframe>\n        <ng-template #loading><tui-loader size=\"xl\"></tui-loader></ng-template>\n    `,\n    styles: [\n        `\n            :host {\n                display: flex;\n                height: 100%;\n            }\n            :host > * {\n                flex: 1;\n            }\n        `,\n    ],\n})\nexport class PdfContent {\n    readonly src$ = timer(3000).pipe(\n        mapTo(this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/media/taiga.pdf`)),\n    );\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-2-pdf-content-component-ts.js.map