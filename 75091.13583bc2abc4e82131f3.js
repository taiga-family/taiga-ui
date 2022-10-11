"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75091],{

/***/ 75091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Placeholder": () => (/* binding */ Placeholder),
/* harmony export */   "default": () => (/* binding */ Placeholder)
/* harmony export */ });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);
/* harmony import */ var prosemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62463);
/* harmony import */ var prosemirror_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43594);



const Placeholder = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__.Extension.create({
  name: 'placeholder',

  addOptions() {
    return {
      emptyEditorClass: 'is-editor-empty',
      emptyNodeClass: 'is-empty',
      placeholder: 'Write something …',
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false
    };
  },

  addProseMirrorPlugins() {
    return [new prosemirror_state__WEBPACK_IMPORTED_MODULE_1__/* .Plugin */ .Sy({
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const active = this.editor.isEditable || !this.options.showOnlyWhenEditable;
          const {
            anchor
          } = selection;
          const decorations = [];

          if (!active) {
            return null;
          }

          doc.descendants((node, pos) => {
            const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
            const isEmpty = !node.isLeaf && !node.childCount;

            if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
              const classes = [this.options.emptyNodeClass];

              if (this.editor.isEmpty) {
                classes.push(this.options.emptyEditorClass);
              }

              const decoration = prosemirror_view__WEBPACK_IMPORTED_MODULE_2__/* .Decoration.node */ .p.node(pos, pos + node.nodeSize, {
                class: classes.join(' '),
                'data-placeholder': typeof this.options.placeholder === 'function' ? this.options.placeholder({
                  editor: this.editor,
                  node,
                  pos,
                  hasAnchor
                }) : this.options.placeholder
              });
              decorations.push(decoration);
            }

            return this.options.includeChildren;
          });
          return prosemirror_view__WEBPACK_IMPORTED_MODULE_2__/* .DecorationSet.create */ .EH.create(doc, decorations);
        }
      }
    })];
  }

});
 //# sourceMappingURL=tiptap-extension-placeholder.esm.js.map

/***/ })

}]);