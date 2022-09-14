(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-smiles-tool-smiles-tool-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/smiles-tool.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {TuiTiptapEditorService} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: `smiles-tool`,\n    templateUrl: `./smiles-tool.template.html`,\n    styleUrls: [`./smiles-tool.styles.less`],\n})\nexport class ExampleSmilesToolComponent {\n    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */\n    readonly smiles = [\n        `&#129409;`,\n        `&#9200;`,\n        `&#9749;`,\n        `&#9989;`,\n        `&#10060;`,\n        `&#10071;`,\n        `&#10133;`,\n        `&#128064;`,\n        `&#128070;`,\n        `&#128076;`,\n        `&#128522;`,\n        `&#128640;`,\n    ];\n\n    constructor(\n        @Inject(TuiTiptapEditorService)\n        private readonly editor: TuiTiptapEditorService,\n    ) {}\n\n    insertSmile(smile: string): void {\n        this.editor\n            .getOriginTiptapEditor()\n            .chain()\n            .focus()\n            .insertContent(`<p data-type=\"emoji\">${smile}</p>`)\n            .insertContent(` `)\n            .run();\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-smiles-tool-smiles-tool-component-ts.js.map