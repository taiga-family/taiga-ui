(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-1-smiles-tool-emoji-extension-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Extension, GlobalAttributes} from '@tiptap/core';\n\nexport const EmojiExtension = Extension.create({\n    name: `emoji`,\n    addGlobalAttributes(): GlobalAttributes {\n        return [\n            {\n                types: [`paragraph`],\n                attributes: {\n                    dataType: {\n                        default: ``,\n                        keepOnSplit: false,\n                        renderHTML: ({dataType}) =>\n                            dataType === `emoji`\n                                ? {\n                                      style: `display: inline`,\n                                  }\n                                : null,\n                        parseHTML: element => element.getAttribute(`data-type`),\n                    },\n                },\n            },\n        ];\n    },\n});\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-1-smiles-tool-emoji-extension-ts.js.map