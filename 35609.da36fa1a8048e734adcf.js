"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[35609],{

/***/ 35609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Superscript": () => (/* binding */ Superscript),
/* harmony export */   "default": () => (/* binding */ Superscript)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const Superscript = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Mark.create({
  name: 'superscript',

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  parseHTML() {
    return [{
      tag: 'sup'
    }, {
      style: 'vertical-align',

      getAttrs(value) {
        // Don’t match this rule if the vertical align isn’t super.
        if (value !== 'super') {
          return false;
        } // If it falls through we’ll match, and this mark will be applied.


        return null;
      }

    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['sup', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setSuperscript: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleSuperscript: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetSuperscript: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-.': () => this.editor.commands.toggleSuperscript()
    };
  }

});
 //# sourceMappingURL=tiptap-extension-superscript.esm.js.map

/***/ })

}]);