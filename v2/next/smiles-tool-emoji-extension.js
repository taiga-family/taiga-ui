(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["smiles-tool-emoji-extension"],{

/***/ "./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts":
/*!*************************************************************************************!*\
  !*** ./src/modules/components/editor-new/examples/1/smiles-tool/emoji.extension.ts ***!
  \*************************************************************************************/
/*! exports provided: EmojiExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiExtension", function() { return EmojiExtension; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");

const EmojiExtension = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Extension"].create({
    name: `emoji`,
    addGlobalAttributes() {
        return [
            {
                types: [`paragraph`],
                attributes: {
                    dataType: {
                        default: ``,
                        keepOnSplit: false,
                        renderHTML: ({ dataType }) => dataType === `emoji`
                            ? {
                                style: `display: inline`,
                            }
                            : null,
                        parseHTML: element => element.getAttribute(`data-type`),
                    },
                },
            },
        ];
    },
});


/***/ })

}]);
//# sourceMappingURL=smiles-tool-emoji-extension.js.map