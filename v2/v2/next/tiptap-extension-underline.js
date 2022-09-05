(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-underline"],{

/***/ "../../node_modules/@tiptap/extension-underline/dist/tiptap-extension-underline.esm.js":
/*!***************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-underline/dist/tiptap-extension-underline.esm.js ***!
  \***************************************************************************************************************************/
/*! exports provided: Underline, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Underline", function() { return Underline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Underline; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const Underline = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Mark"].create({
    name: 'underline',
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    parseHTML() {
        return [
            {
                tag: 'u',
            },
            {
                style: 'text-decoration',
                consuming: false,
                getAttrs: style => (style.includes('underline') ? {} : false),
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['u', Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setUnderline: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleUnderline: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetUnderline: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
    addKeyboardShortcuts() {
        return {
            'Mod-u': () => this.editor.commands.toggleUnderline(),
            'Mod-U': () => this.editor.commands.toggleUnderline(),
        };
    },
});


//# sourceMappingURL=tiptap-extension-underline.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-underline.js.map