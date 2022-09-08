"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44312],{

/***/ 44312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TuiDetails": () => (/* reexport */ TuiDetails),
  "TuiDetailsContent": () => (/* reexport */ TuiDetailsContent),
  "TuiSummary": () => (/* reexport */ TuiSummary)
});

// EXTERNAL MODULE: ./projects/addon-editor/utils/index.ts + 11 modules
var utils = __webpack_require__(66835);
// EXTERNAL MODULE: ./node_modules/@tiptap/core/dist/tiptap-core.esm.js + 2 modules
var tiptap_core_esm = __webpack_require__(40256);
;// CONCATENATED MODULE: ./projects/addon-editor/extensions/details/details.extension.ts


const TuiDetails = tiptap_core_esm.Node.create({
  name: `details`,

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  addAttributes() {
    return {
      opened: {
        default: true,
        keepOnSplit: false,
        parseHTML: element => element.getAttribute(`data-opened`) === `true`,
        renderHTML: attributes => ({
          'data-opened': attributes.opened
        })
      }
    };
  },

  content: `summary detailsContent`,
  group: `block`,
  allowGapCursor: true,
  isolating: true,

  parseHTML() {
    return [{
      tag: `details`
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return [`div`, {
      class: `details-wrapper details-wrapper_rendered`
    }, [`details`, (0,tiptap_core_esm.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0], [`button`, {
      class: `details-arrow`
    }]];
  },

  addNodeView() {
    return ({
      node
    }) => {
      const wrapper = document.createElement(`div`);
      const details = document.createElement(`details`);
      const button = document.createElement(`button`);
      wrapper.className = `details-wrapper`;
      button.className = `details-arrow`;
      details.open = node.attrs.opened;
      button.addEventListener(`click`, () => {
        details.open = !details.open;
        node.attrs.opened = details.open;
      });
      wrapper.append(details, button);
      return {
        dom: wrapper,
        contentDOM: details
      };
    };
  },

  addCommands() {
    return {
      setDetails: () => ({
        commands,
        state
      }) => {
        const content = (0,utils/* tuiGetSelectedContent */.Ap)(state);
        return commands.insertContent(`<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${content}</p></div></details><p></p>`);
      },
      removeDetails: () => ({
        state,
        dispatch
      }) => (0,utils/* tuiDeleteNode */.yU)(state, dispatch, this.name)
    };
  }

});
;// CONCATENATED MODULE: ./projects/addon-editor/extensions/details/details-content.extension.ts

const TuiDetailsContent = tiptap_core_esm.Node.create({
  name: `detailsContent`,
  content: `block+`,
  group: `block`,
  allowGapCursor: true,

  parseHTML() {
    return [{
      tag: `div[data-type="details-content"]`
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return [`div`, (0,tiptap_core_esm.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, {
      'data-type': `details-content`
    }), 0];
  }

});
;// CONCATENATED MODULE: ./projects/addon-editor/extensions/details/summary.extension.ts

const TuiSummary = tiptap_core_esm.Node.create({
  name: `summary`,

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  content: `paragraph`,
  group: `block`,

  parseHTML() {
    return [{
      tag: `summary`
    }];
  },

  renderHTML({
    HTMLAttributes
  }) {
    return [`summary`, (0,tiptap_core_esm.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }

});
;// CONCATENATED MODULE: ./projects/addon-editor/extensions/details/index.ts




/***/ })

}]);