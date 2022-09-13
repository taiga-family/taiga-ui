"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[45861],{

/***/ 45861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAlign": () => (/* binding */ TextAlign),
/* harmony export */   "default": () => (/* binding */ TextAlign)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const TextAlign = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: 'textAlign',

  addOptions() {
    return {
      types: [],
      alignments: ['left', 'center', 'right', 'justify'],
      defaultAlignment: 'left'
    };
  },

  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        textAlign: {
          default: this.options.defaultAlignment,
          parseHTML: element => element.style.textAlign || this.options.defaultAlignment,
          renderHTML: attributes => {
            if (attributes.textAlign === this.options.defaultAlignment) {
              return {};
            }

            return {
              style: `text-align: ${attributes.textAlign}`
            };
          }
        }
      }
    }];
  },

  addCommands() {
    return {
      setTextAlign: alignment => ({
        commands
      }) => {
        if (!this.options.alignments.includes(alignment)) {
          return false;
        }

        return this.options.types.every(type => commands.updateAttributes(type, {
          textAlign: alignment
        }));
      },
      unsetTextAlign: () => ({
        commands
      }) => {
        return this.options.types.every(type => commands.resetAttributes(type, 'textAlign'));
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
      'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
      'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
      'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify')
    };
  }

});
 //# sourceMappingURL=tiptap-extension-text-align.esm.js.map

/***/ })

}]);