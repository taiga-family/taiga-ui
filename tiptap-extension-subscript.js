(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-subscript"],{

/***/ "../../node_modules/@tiptap/extension-subscript/dist/tiptap-extension-subscript.esm.js":
/*!***************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-subscript/dist/tiptap-extension-subscript.esm.js ***!
  \***************************************************************************************************************************/
/*! exports provided: Subscript, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscript", function() { return Subscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscript; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const Subscript = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Mark"].create({
    name: 'subscript',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: 'sub',
            },
            {
                style: 'vertical-align',
                getAttrs(value) {
                    // Don’t match this rule if the vertical align isn’t sub.
                    if (value !== 'sub') {
                        return false;
                    }
                    // If it falls through we’ll match, and this mark will be applied.
                    return null;
                },
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['sub', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setSubscript: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleSubscript: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetSubscript: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
    addKeyboardShortcuts() {
        return {
            'Mod-,': () => this.editor.commands.toggleSubscript(),
        };
    },
});


//# sourceMappingURL=tiptap-extension-subscript.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-subscript.js.map