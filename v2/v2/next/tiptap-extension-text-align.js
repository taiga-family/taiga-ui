(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tiptap-extension-text-align"],{

/***/ "../../node_modules/@tiptap/extension-text-align/dist/tiptap-extension-text-align.esm.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/@tiptap/extension-text-align/dist/tiptap-extension-text-align.esm.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: TextAlign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return TextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextAlign; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const TextAlign = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Extension"].create({
    name: 'textAlign',
    addOptions() {
        return {
            types: [],
            alignments: ['left', 'center', 'right', 'justify'],
            defaultAlignment: 'left',
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    textAlign: {
                        default: this.options.defaultAlignment,
                        parseHTML: element => element.style.textAlign || this.options.defaultAlignment,
                        renderHTML: attributes => {
                            if (attributes.textAlign === this.options.defaultAlignment) {
                                return {};
                            }
                            return { style: `text-align: ${attributes.textAlign}` };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setTextAlign: (alignment) => ({ commands }) => {
                if (!this.options.alignments.includes(alignment)) {
                    return false;
                }
                return this.options.types.every(type => commands.updateAttributes(type, { textAlign: alignment }));
            },
            unsetTextAlign: () => ({ commands }) => {
                return this.options.types.every(type => commands.resetAttributes(type, 'textAlign'));
            },
        };
    },
    addKeyboardShortcuts() {
        return {
            'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
            'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
            'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
            'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify'),
        };
    },
});


//# sourceMappingURL=tiptap-extension-text-align.esm.js.map


/***/ })

}]);
//# sourceMappingURL=tiptap-extension-text-align.js.map