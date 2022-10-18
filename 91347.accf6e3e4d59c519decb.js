"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91347],{

/***/ 91347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscript": () => (/* binding */ Subscript),
/* harmony export */   "default": () => (/* binding */ Subscript)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const Subscript = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Mark.create({
  name: 'subscript',

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  parseHTML() {
    return [{
      tag: 'sub'
    }, {
      style: 'vertical-align',

      getAttrs(value) {
        // Don’t match this rule if the vertical align isn’t sub.
        if (value !== 'sub') {
          return false;
        } // If it falls through we’ll match, and this mark will be applied.


        return null;
      }

    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['sub', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setSubscript: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleSubscript: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetSubscript: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-,': () => this.editor.commands.toggleSubscript()
    };
  }

});
 //# sourceMappingURL=tiptap-extension-subscript.esm.js.map

/***/ })

}]);