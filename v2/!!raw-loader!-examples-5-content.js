(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-5-content"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/content.ts":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/tree/examples/5/content.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {TuiTreeItemContentComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `folders`,\n    template: `\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"icon\"\n        ></tui-svg>\n        <ng-container [ngTemplateOutlet]=\"context.template\"></ng-container>\n    `,\n    styleUrls: [`content.less`],\n    host: {\n        '(click)': `onClick()`,\n    },\n})\nexport class FoldersComponent extends TuiTreeItemContentComponent {\n    get icon(): string {\n        return this.isExpandable ? `tuiIconFolderLarge` : `tuiIconFileLarge`;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-5-content.js.map