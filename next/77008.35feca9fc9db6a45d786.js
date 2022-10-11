"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[77008],{

/***/ 77008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Underline": () => (/* binding */ Underline),
/* harmony export */   "default": () => (/* binding */ Underline)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const Underline = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Mark.create({
  name: 'underline',

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  parseHTML() {
    return [{
      tag: 'u'
    }, {
      style: 'text-decoration',
      consuming: false,
      getAttrs: style => style.includes('underline') ? {} : false
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['u', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setUnderline: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleUnderline: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetUnderline: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-u': () => this.editor.commands.toggleUnderline(),
      'Mod-U': () => this.editor.commands.toggleUnderline()
    };
  }

});
 //# sourceMappingURL=tiptap-extension-underline.esm.js.map

/***/ })

}]);