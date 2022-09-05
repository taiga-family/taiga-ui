(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-superscript"],{

/***/ "../../node_modules/@tiptap/extension-superscript/dist/tiptap-extension-superscript.esm.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-superscript/dist/tiptap-extension-superscript.esm.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: Superscript, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Superscript", function() { return Superscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Superscript; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const Superscript = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Mark"].create({
    name: 'superscript',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: 'sup',
            },
            {
                style: 'vertical-align',
                getAttrs(value) {
                    // Don’t match this rule if the vertical align isn’t super.
                    if (value !== 'super') {
                        return false;
                    }
                    // If it falls through we’ll match, and this mark will be applied.
                    return null;
                },
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['sup', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setSuperscript: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleSuperscript: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetSuperscript: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
    addKeyboardShortcuts() {
        return {
            'Mod-.': () => this.editor.commands.toggleSuperscript(),
        };
    },
});


//# sourceMappingURL=tiptap-extension-superscript.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-superscript.js.map