"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12955],{

/***/ 12955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "default": () => (/* binding */ Image),
/* harmony export */   "inputRegex": () => (/* binding */ inputRegex)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);

const inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
const Image = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Node.create({
  name: 'image',

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {}
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },

  parseHTML() {
    return [{
      tag: this.options.allowBase64 ? 'img[src]' : 'img[src]:not([src^="data:"])'
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return ['img', (0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
  },

  addCommands() {
    return {
      setImage: options => ({
        commands
      }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },

  addInputRules() {
    return [(0,_tiptap_core__WEBPACK_IMPORTED_MODULE_0__.nodeInputRule)({
      find: inputRegex,
      type: this.type,
      getAttributes: match => {
        const [,, alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      }
    })];
  }

});
 //# sourceMappingURL=tiptap-extension-image.esm.js.map

/***/ })

}]);