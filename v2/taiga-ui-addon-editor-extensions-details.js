(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taiga-ui-addon-editor-extensions-details"],{

/***/ "../addon-editor/extensions/details/details-content.extension.ts":
/*!***********************************************************************!*\
  !*** ../addon-editor/extensions/details/details-content.extension.ts ***!
  \***********************************************************************/
/*! exports provided: TuiDetailsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDetailsContent", function() { return TuiDetailsContent; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");

const TuiDetailsContent = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    name: `detailsContent`,
    content: `block+`,
    group: `block`,
    allowGapCursor: true,
    parseHTML() {
        return [
            {
                tag: `div[data-type="details-content"]`,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            `div`,
            Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes, {
                'data-type': `details-content`,
            }),
            0,
        ];
    },
});


/***/ }),

/***/ "../addon-editor/extensions/details/details.extension.ts":
/*!***************************************************************!*\
  !*** ../addon-editor/extensions/details/details.extension.ts ***!
  \***************************************************************/
/*! exports provided: TuiDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDetails", function() { return TuiDetails; });
/* harmony import */ var _taiga_ui_addon_editor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-editor/utils */ "../addon-editor/utils/index.ts");
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");


const TuiDetails = _tiptap_core__WEBPACK_IMPORTED_MODULE_1__["Node"].create({
    name: `details`,
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    addAttributes() {
        return {
            opened: {
                default: true,
                keepOnSplit: false,
                parseHTML: element => element.getAttribute(`data-opened`) === `true`,
                renderHTML: attributes => ({
                    'data-opened': attributes.opened,
                }),
            },
        };
    },
    content: `summary detailsContent`,
    group: `block`,
    allowGapCursor: true,
    isolating: true,
    parseHTML() {
        return [
            {
                tag: `details`,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            `div`,
            { class: `details-wrapper details-wrapper_rendered` },
            [`details`, Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_1__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes), 0],
            [`button`, { class: `details-arrow` }],
        ];
    },
    addNodeView() {
        return ({ node }) => {
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
                contentDOM: details,
            };
        };
    },
    addCommands() {
        return {
            setDetails: () => ({ commands, state }) => {
                const content = Object(_taiga_ui_addon_editor_utils__WEBPACK_IMPORTED_MODULE_0__["tuiGetSelectedContent"])(state);
                return commands.insertContent(`<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${content}</p></div></details><p></p>`);
            },
            removeDetails: () => ({ state, dispatch }) => Object(_taiga_ui_addon_editor_utils__WEBPACK_IMPORTED_MODULE_0__["tuiDeleteNode"])(state, dispatch, this.name),
        };
    },
});


/***/ }),

/***/ "../addon-editor/extensions/details/index.ts":
/*!***************************************************!*\
  !*** ../addon-editor/extensions/details/index.ts ***!
  \***************************************************/
/*! exports provided: TuiDetails, TuiDetailsContent, TuiSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.extension */ "../addon-editor/extensions/details/details.extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiDetails", function() { return _details_extension__WEBPACK_IMPORTED_MODULE_0__["TuiDetails"]; });

/* harmony import */ var _details_content_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-content.extension */ "../addon-editor/extensions/details/details-content.extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiDetailsContent", function() { return _details_content_extension__WEBPACK_IMPORTED_MODULE_1__["TuiDetailsContent"]; });

/* harmony import */ var _summary_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.extension */ "../addon-editor/extensions/details/summary.extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiSummary", function() { return _summary_extension__WEBPACK_IMPORTED_MODULE_2__["TuiSummary"]; });






/***/ }),

/***/ "../addon-editor/extensions/details/summary.extension.ts":
/*!***************************************************************!*\
  !*** ../addon-editor/extensions/details/summary.extension.ts ***!
  \***************************************************************/
/*! exports provided: TuiSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiSummary", function() { return TuiSummary; });
/* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/core */ "../../node_modules/@tiptap/core/dist/tiptap-core.esm.js");

const TuiSummary = _tiptap_core__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    name: `summary`,
    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },
    content: `paragraph`,
    group: `block`,
    parseHTML() {
        return [
            {
                tag: `summary`,
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            `summary`,
            Object(_tiptap_core__WEBPACK_IMPORTED_MODULE_0__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },
});


/***/ })

}]);
//# sourceMappingURL=taiga-ui-addon-editor-extensions-details.js.map