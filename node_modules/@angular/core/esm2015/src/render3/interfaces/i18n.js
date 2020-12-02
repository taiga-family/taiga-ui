/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/interfaces/i18n.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const I18nMutateOpCode = {
    /**
     * Stores shift amount for bits 17-3 that contain reference index.
     */
    SHIFT_REF: 3,
    /**
     * Stores shift amount for bits 31-17 that contain parent index.
     */
    SHIFT_PARENT: 17,
    /**
     * Mask for OpCode
     */
    MASK_OPCODE: 7,
    /**
     * OpCode to select a node. (next OpCode will contain the operation.)
     */
    Select: 0,
    /**
     * OpCode to append the current node to `PARENT`.
     */
    AppendChild: 1,
    /**
     * OpCode to remove the `REF` node from `PARENT`.
     */
    Remove: 3,
    /**
     * OpCode to set the attribute of a node.
     */
    Attr: 4,
    /**
     * OpCode to simulate elementEnd()
     */
    ElementEnd: 5,
    /**
     * OpCode to read the remove OpCodes for the nested ICU
     */
    RemoveNestedIcu: 6,
};
export { I18nMutateOpCode };
/**
 * Marks that the next string is for element.
 *
 * See `I18nMutateOpCodes` documentation.
 * @type {?}
 */
export const ELEMENT_MARKER = {
    marker: 'element'
};
// WARNING: interface has both a type and a value, skipping emit
/**
 * Marks that the next string is for comment.
 *
 * See `I18nMutateOpCodes` documentation.
 * @type {?}
 */
export const COMMENT_MARKER = {
    marker: 'comment'
};
// WARNING: interface has both a type and a value, skipping emit
/**
 * Array storing OpCode for dynamically creating `i18n` blocks.
 *
 * Example:
 * ```ts
 * <I18nCreateOpCode>[
 *   // For adding text nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createTextNode('abc');
 *   //   lView[1].insertBefore(node, lView[2]);
 *   'abc', 1 << SHIFT_PARENT | 2 << SHIFT_REF | InsertBefore,
 *
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createTextNode('xyz');
 *   //   lView[1].appendChild(node);
 *   'xyz', 1 << SHIFT_PARENT | AppendChild,
 *
 *   // For adding element nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createElement('div');
 *   //   lView[1].insertBefore(node, lView[2]);
 *   ELEMENT_MARKER, 'div', 1 << SHIFT_PARENT | 2 << SHIFT_REF | InsertBefore,
 *
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createElement('div');
 *   //   lView[1].appendChild(node);
 *   ELEMENT_MARKER, 'div', 1 << SHIFT_PARENT | AppendChild,
 *
 *   // For adding comment nodes
 *   // ---------------------
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createComment('');
 *   //   lView[1].insertBefore(node, lView[2]);
 *   COMMENT_MARKER, '', 1 << SHIFT_PARENT | 2 << SHIFT_REF | InsertBefore,
 *
 *   // Equivalent to:
 *   //   const node = lView[index++] = document.createComment('');
 *   //   lView[1].appendChild(node);
 *   COMMENT_MARKER, '', 1 << SHIFT_PARENT | AppendChild,
 *
 *   // For moving existing nodes to a different location
 *   // --------------------------------------------------
 *   // Equivalent to:
 *   //   const node = lView[1];
 *   //   lView[2].insertBefore(node, lView[3]);
 *   1 << SHIFT_REF | Select, 2 << SHIFT_PARENT | 3 << SHIFT_REF | InsertBefore,
 *
 *   // Equivalent to:
 *   //   const node = lView[1];
 *   //   lView[2].appendChild(node);
 *   1 << SHIFT_REF | Select, 2 << SHIFT_PARENT | AppendChild,
 *
 *   // For removing existing nodes
 *   // --------------------------------------------------
 *   //   const node = lView[1];
 *   //   removeChild(tView.data(1), node, lView);
 *   1 << SHIFT_REF | Remove,
 *
 *   // For writing attributes
 *   // --------------------------------------------------
 *   //   const node = lView[1];
 *   //   node.setAttribute('attr', 'value');
 *   1 << SHIFT_REF | Select, 'attr', 'value'
 *            // NOTE: Select followed by two string (vs select followed by OpCode)
 * ];
 * ```
 * NOTE:
 *   - `index` is initial location where the extra nodes should be stored in the EXPANDO section of
 * `LVIewData`.
 *
 * See: `applyI18nCreateOpCodes`;
 * @record
 */
export function I18nMutateOpCodes() { }
/** @enum {number} */
const I18nUpdateOpCode = {
    /**
     * Stores shift amount for bits 17-2 that contain reference index.
     */
    SHIFT_REF: 2,
    /**
     * Mask for OpCode
     */
    MASK_OPCODE: 3,
    /**
     * OpCode to update a text node.
     */
    Text: 0,
    /**
     * OpCode to update a attribute of a node.
     */
    Attr: 1,
    /**
     * OpCode to switch the current ICU case.
     */
    IcuSwitch: 2,
    /**
     * OpCode to update the current ICU case.
     */
    IcuUpdate: 3,
};
export { I18nUpdateOpCode };
/**
 * Stores DOM operations which need to be applied to update DOM render tree due to changes in
 * expressions.
 *
 * The basic idea is that `i18nExp` OpCodes capture expression changes and update a change
 * mask bit. (Bit 1 for expression 1, bit 2 for expression 2 etc..., bit 32 for expression 32 and
 * higher.) The OpCodes then compare its own change mask against the expression change mask to
 * determine if the OpCodes should execute.
 *
 * These OpCodes can be used by both the i18n block as well as ICU sub-block.
 *
 * ## Example
 *
 * Assume
 * ```ts
 *   if (rf & RenderFlags.Update) {
 *    i18nExp(ctx.exp1); // If changed set mask bit 1
 *    i18nExp(ctx.exp2); // If changed set mask bit 2
 *    i18nExp(ctx.exp3); // If changed set mask bit 3
 *    i18nExp(ctx.exp4); // If changed set mask bit 4
 *    i18nApply(0);            // Apply all changes by executing the OpCodes.
 *  }
 * ```
 * We can assume that each call to `i18nExp` sets an internal `changeMask` bit depending on the
 * index of `i18nExp`.
 *
 * ### OpCodes
 * ```ts
 * <I18nUpdateOpCodes>[
 *   // The following OpCodes represent: `<div i18n-title="pre{{exp1}}in{{exp2}}post">`
 *   // If `changeMask & 0b11`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip `7` values and start processing next OpCodes.
 *   0b11, 7,
 *   // Concatenate `newValue = 'pre'+lView[bindIndex-4]+'in'+lView[bindIndex-3]+'post';`.
 *   'pre', -4, 'in', -3, 'post',
 *   // Update attribute: `elementAttribute(1, 'title', sanitizerFn(newValue));`
 *   1 << SHIFT_REF | Attr, 'title', sanitizerFn,
 *
 *   // The following OpCodes represent: `<div i18n>Hello {{exp3}}!">`
 *   // If `changeMask & 0b100`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip `4` values and start processing next OpCodes.
 *   0b100, 4,
 *   // Concatenate `newValue = 'Hello ' + lView[bindIndex -2] + '!';`.
 *   'Hello ', -2, '!',
 *   // Update text: `lView[1].textContent = newValue;`
 *   1 << SHIFT_REF | Text,
 *
 *   // The following OpCodes represent: `<div i18n>{exp4, plural, ... }">`
 *   // If `changeMask & 0b1000`
 *   //        has changed then execute update OpCodes.
 *   //        has NOT changed then skip `4` values and start processing next OpCodes.
 *   0b1000, 4,
 *   // Concatenate `newValue = lView[bindIndex -1];`.
 *   -1,
 *   // Switch ICU: `icuSwitchCase(lView[1], 0, newValue);`
 *   0 << SHIFT_ICU | 1 << SHIFT_REF | IcuSwitch,
 *
 *   // Note `changeMask & -1` is always true, so the IcuUpdate will always execute.
 *   -1, 1,
 *   // Update ICU: `icuUpdateCase(lView[1], 0);`
 *   0 << SHIFT_ICU | 1 << SHIFT_REF | IcuUpdate,
 *
 * ];
 * ```
 *
 * @record
 */
export function I18nUpdateOpCodes() { }
/**
 * Store information for the i18n translation block.
 * @record
 */
export function TI18n() { }
if (false) {
    /**
     * Number of slots to allocate in expando.
     *
     * This is the max number of DOM elements which will be created by this i18n + ICU blocks. When
     * the DOM elements are being created they are stored in the EXPANDO, so that update OpCodes can
     * write into them.
     * @type {?}
     */
    TI18n.prototype.vars;
    /**
     * A set of OpCodes which will create the Text Nodes and ICU anchors for the translation blocks.
     *
     * NOTE: The ICU anchors are filled in with ICU Update OpCode.
     * @type {?}
     */
    TI18n.prototype.create;
    /**
     * A set of OpCodes which will be executed on each change detection to determine if any changes to
     * DOM are required.
     * @type {?}
     */
    TI18n.prototype.update;
    /**
     * A list of ICUs in a translation block (or `null` if block has no ICUs).
     *
     * Example:
     * Given: `<div i18n>You have {count, plural, ...} and {state, switch, ...}</div>`
     * There would be 2 ICUs in this array.
     *   1. `{count, plural, ...}`
     *   2. `{state, switch, ...}`
     * @type {?}
     */
    TI18n.prototype.icus;
}
/** @enum {number} */
const IcuType = {
    select: 0,
    plural: 1,
};
export { IcuType };
/**
 * @record
 */
export function TIcu() { }
if (false) {
    /**
     * Defines the ICU type of `select` or `plural`
     * @type {?}
     */
    TIcu.prototype.type;
    /**
     * Number of slots to allocate in expando for each case.
     *
     * This is the max number of DOM elements which will be created by this i18n + ICU blocks. When
     * the DOM elements are being created they are stored in the EXPANDO, so that update OpCodes can
     * write into them.
     * @type {?}
     */
    TIcu.prototype.vars;
    /**
     * An optional array of child/sub ICUs.
     *
     * In case of nested ICUs such as:
     * ```
     * {�0�, plural,
     *   =0 {zero}
     *   other {�0� {�1�, select,
     *                     cat {cats}
     *                     dog {dogs}
     *                     other {animals}
     *                   }!
     *   }
     * }
     * ```
     * When the parent ICU is changing it must clean up child ICUs as well. For this reason it needs
     * to know which child ICUs to run clean up for as well.
     *
     * In the above example this would be:
     * ```ts
     * [
     *   [],   // `=0` has no sub ICUs
     *   [1],  // `other` has one subICU at `1`st index.
     * ]
     * ```
     *
     * The reason why it is Array of Arrays is because first array represents the case, and second
     * represents the child ICUs to clean up. There may be more than one child ICUs per case.
     * @type {?}
     */
    TIcu.prototype.childIcus;
    /**
     * A list of case values which the current ICU will try to match.
     *
     * The last value is `other`
     * @type {?}
     */
    TIcu.prototype.cases;
    /**
     * A set of OpCodes to apply in order to build up the DOM render tree for the ICU
     * @type {?}
     */
    TIcu.prototype.create;
    /**
     * A set of OpCodes to apply in order to destroy the DOM render tree for the ICU.
     * @type {?}
     */
    TIcu.prototype.remove;
    /**
     * A set of OpCodes to apply in order to update the DOM render tree for the ICU bindings.
     * @type {?}
     */
    TIcu.prototype.update;
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy9pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBa0IsZ0JBQWdCO0lBQ2hDOztPQUVHO0lBQ0gsU0FBUyxHQUFJO0lBQ2I7O09BRUc7SUFDSCxZQUFZLElBQUs7SUFDakI7O09BRUc7SUFDSCxXQUFXLEdBQVE7SUFFbkI7O09BRUc7SUFDSCxNQUFNLEdBQVE7SUFDZDs7T0FFRztJQUNILFdBQVcsR0FBUTtJQUNuQjs7T0FFRztJQUNILE1BQU0sR0FBUTtJQUNkOztPQUVHO0lBQ0gsSUFBSSxHQUFRO0lBQ1o7O09BRUc7SUFDSCxVQUFVLEdBQVE7SUFDbEI7O09BRUc7SUFDSCxlQUFlLEdBQVE7RUFDeEI7Ozs7Ozs7O0FBT0QsTUFBTSxPQUFPLGNBQWMsR0FBbUI7SUFDNUMsTUFBTSxFQUFFLFNBQVM7Q0FDbEI7Ozs7Ozs7O0FBVUQsTUFBTSxPQUFPLGNBQWMsR0FBbUI7SUFDNUMsTUFBTSxFQUFFLFNBQVM7Q0FDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZELHVDQUNDOztBQUVELE1BQWtCLGdCQUFnQjtJQUNoQzs7T0FFRztJQUNILFNBQVMsR0FBSTtJQUNiOztPQUVHO0lBQ0gsV0FBVyxHQUFPO0lBRWxCOztPQUVHO0lBQ0gsSUFBSSxHQUFPO0lBQ1g7O09BRUc7SUFDSCxJQUFJLEdBQU87SUFDWDs7T0FFRztJQUNILFNBQVMsR0FBTztJQUNoQjs7T0FFRztJQUNILFNBQVMsR0FBTztFQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUQsdUNBQW1GOzs7OztBQUtuRiwyQkFpQ0M7Ozs7Ozs7Ozs7SUF6QkMscUJBQWE7Ozs7Ozs7SUFPYix1QkFBMEI7Ozs7OztJQU0xQix1QkFBMEI7Ozs7Ozs7Ozs7O0lBVzFCLHFCQUFrQjs7O0FBTXBCLE1BQWtCLE9BQU87SUFDdkIsTUFBTSxHQUFJO0lBQ1YsTUFBTSxHQUFJO0VBQ1g7Ozs7O0FBRUQsMEJBbUVDOzs7Ozs7SUEvREMsb0JBQWM7Ozs7Ozs7OztJQVNkLG9CQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JmLHlCQUFzQjs7Ozs7OztJQU90QixxQkFBYTs7Ozs7SUFLYixzQkFBNEI7Ozs7O0lBSzVCLHNCQUE0Qjs7Ozs7SUFLNUIsc0JBQTRCOzs7OztBQUs5QixNQUFNLE9BQU8sNkJBQTZCLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBgSTE4bk11dGF0ZU9wQ29kZWAgZGVmaW5lcyBPcENvZGVzIGZvciBgSTE4bk11dGF0ZU9wQ29kZXNgIGFycmF5LlxuICpcbiAqIE9wQ29kZXMgY29udGFpbiB0aHJlZSBwYXJ0czpcbiAqICAxKSBQYXJlbnQgbm9kZSBpbmRleCBvZmZzZXQuXG4gKiAgMikgUmVmZXJlbmNlIG5vZGUgaW5kZXggb2Zmc2V0LlxuICogIDMpIFRoZSBPcENvZGUgdG8gZXhlY3V0ZS5cbiAqXG4gKiBTZWU6IGBJMThuQ3JlYXRlT3BDb2Rlc2AgZm9yIGV4YW1wbGUgb2YgdXNhZ2UuXG4gKi9cbmltcG9ydCB7U2FuaXRpemVyRm59IGZyb20gJy4vc2FuaXRpemF0aW9uJztcblxuZXhwb3J0IGNvbnN0IGVudW0gSTE4bk11dGF0ZU9wQ29kZSB7XG4gIC8qKlxuICAgKiBTdG9yZXMgc2hpZnQgYW1vdW50IGZvciBiaXRzIDE3LTMgdGhhdCBjb250YWluIHJlZmVyZW5jZSBpbmRleC5cbiAgICovXG4gIFNISUZUX1JFRiA9IDMsXG4gIC8qKlxuICAgKiBTdG9yZXMgc2hpZnQgYW1vdW50IGZvciBiaXRzIDMxLTE3IHRoYXQgY29udGFpbiBwYXJlbnQgaW5kZXguXG4gICAqL1xuICBTSElGVF9QQVJFTlQgPSAxNyxcbiAgLyoqXG4gICAqIE1hc2sgZm9yIE9wQ29kZVxuICAgKi9cbiAgTUFTS19PUENPREUgPSAwYjExMSxcblxuICAvKipcbiAgICogT3BDb2RlIHRvIHNlbGVjdCBhIG5vZGUuIChuZXh0IE9wQ29kZSB3aWxsIGNvbnRhaW4gdGhlIG9wZXJhdGlvbi4pXG4gICAqL1xuICBTZWxlY3QgPSAwYjAwMCxcbiAgLyoqXG4gICAqIE9wQ29kZSB0byBhcHBlbmQgdGhlIGN1cnJlbnQgbm9kZSB0byBgUEFSRU5UYC5cbiAgICovXG4gIEFwcGVuZENoaWxkID0gMGIwMDEsXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gcmVtb3ZlIHRoZSBgUkVGYCBub2RlIGZyb20gYFBBUkVOVGAuXG4gICAqL1xuICBSZW1vdmUgPSAwYjAxMSxcbiAgLyoqXG4gICAqIE9wQ29kZSB0byBzZXQgdGhlIGF0dHJpYnV0ZSBvZiBhIG5vZGUuXG4gICAqL1xuICBBdHRyID0gMGIxMDAsXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gc2ltdWxhdGUgZWxlbWVudEVuZCgpXG4gICAqL1xuICBFbGVtZW50RW5kID0gMGIxMDEsXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gcmVhZCB0aGUgcmVtb3ZlIE9wQ29kZXMgZm9yIHRoZSBuZXN0ZWQgSUNVXG4gICAqL1xuICBSZW1vdmVOZXN0ZWRJY3UgPSAwYjExMCxcbn1cblxuLyoqXG4gKiBNYXJrcyB0aGF0IHRoZSBuZXh0IHN0cmluZyBpcyBmb3IgZWxlbWVudC5cbiAqXG4gKiBTZWUgYEkxOG5NdXRhdGVPcENvZGVzYCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgRUxFTUVOVF9NQVJLRVI6IEVMRU1FTlRfTUFSS0VSID0ge1xuICBtYXJrZXI6ICdlbGVtZW50J1xufTtcbmV4cG9ydCBpbnRlcmZhY2UgRUxFTUVOVF9NQVJLRVIge1xuICBtYXJrZXI6ICdlbGVtZW50Jztcbn1cblxuLyoqXG4gKiBNYXJrcyB0aGF0IHRoZSBuZXh0IHN0cmluZyBpcyBmb3IgY29tbWVudC5cbiAqXG4gKiBTZWUgYEkxOG5NdXRhdGVPcENvZGVzYCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQ09NTUVOVF9NQVJLRVI6IENPTU1FTlRfTUFSS0VSID0ge1xuICBtYXJrZXI6ICdjb21tZW50J1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDT01NRU5UX01BUktFUiB7XG4gIG1hcmtlcjogJ2NvbW1lbnQnO1xufVxuXG4vKipcbiAqIEFycmF5IHN0b3JpbmcgT3BDb2RlIGZvciBkeW5hbWljYWxseSBjcmVhdGluZyBgaTE4bmAgYmxvY2tzLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0c1xuICogPEkxOG5DcmVhdGVPcENvZGU+W1xuICogICAvLyBGb3IgYWRkaW5nIHRleHQgbm9kZXNcbiAqICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgIC8vIEVxdWl2YWxlbnQgdG86XG4gKiAgIC8vICAgY29uc3Qgbm9kZSA9IGxWaWV3W2luZGV4KytdID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ2FiYycpO1xuICogICAvLyAgIGxWaWV3WzFdLmluc2VydEJlZm9yZShub2RlLCBsVmlld1syXSk7XG4gKiAgICdhYmMnLCAxIDw8IFNISUZUX1BBUkVOVCB8IDIgPDwgU0hJRlRfUkVGIHwgSW5zZXJ0QmVmb3JlLFxuICpcbiAqICAgLy8gRXF1aXZhbGVudCB0bzpcbiAqICAgLy8gICBjb25zdCBub2RlID0gbFZpZXdbaW5kZXgrK10gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgneHl6Jyk7XG4gKiAgIC8vICAgbFZpZXdbMV0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gKiAgICd4eXonLCAxIDw8IFNISUZUX1BBUkVOVCB8IEFwcGVuZENoaWxkLFxuICpcbiAqICAgLy8gRm9yIGFkZGluZyBlbGVtZW50IG5vZGVzXG4gKiAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogICAvLyBFcXVpdmFsZW50IHRvOlxuICogICAvLyAgIGNvbnN0IG5vZGUgPSBsVmlld1tpbmRleCsrXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogICAvLyAgIGxWaWV3WzFdLmluc2VydEJlZm9yZShub2RlLCBsVmlld1syXSk7XG4gKiAgIEVMRU1FTlRfTUFSS0VSLCAnZGl2JywgMSA8PCBTSElGVF9QQVJFTlQgfCAyIDw8IFNISUZUX1JFRiB8IEluc2VydEJlZm9yZSxcbiAqXG4gKiAgIC8vIEVxdWl2YWxlbnQgdG86XG4gKiAgIC8vICAgY29uc3Qgbm9kZSA9IGxWaWV3W2luZGV4KytdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gKiAgIC8vICAgbFZpZXdbMV0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gKiAgIEVMRU1FTlRfTUFSS0VSLCAnZGl2JywgMSA8PCBTSElGVF9QQVJFTlQgfCBBcHBlbmRDaGlsZCxcbiAqXG4gKiAgIC8vIEZvciBhZGRpbmcgY29tbWVudCBub2Rlc1xuICogICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICAgLy8gRXF1aXZhbGVudCB0bzpcbiAqICAgLy8gICBjb25zdCBub2RlID0gbFZpZXdbaW5kZXgrK10gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbiAqICAgLy8gICBsVmlld1sxXS5pbnNlcnRCZWZvcmUobm9kZSwgbFZpZXdbMl0pO1xuICogICBDT01NRU5UX01BUktFUiwgJycsIDEgPDwgU0hJRlRfUEFSRU5UIHwgMiA8PCBTSElGVF9SRUYgfCBJbnNlcnRCZWZvcmUsXG4gKlxuICogICAvLyBFcXVpdmFsZW50IHRvOlxuICogICAvLyAgIGNvbnN0IG5vZGUgPSBsVmlld1tpbmRleCsrXSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuICogICAvLyAgIGxWaWV3WzFdLmFwcGVuZENoaWxkKG5vZGUpO1xuICogICBDT01NRU5UX01BUktFUiwgJycsIDEgPDwgU0hJRlRfUEFSRU5UIHwgQXBwZW5kQ2hpbGQsXG4gKlxuICogICAvLyBGb3IgbW92aW5nIGV4aXN0aW5nIG5vZGVzIHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uXG4gKiAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgIC8vIEVxdWl2YWxlbnQgdG86XG4gKiAgIC8vICAgY29uc3Qgbm9kZSA9IGxWaWV3WzFdO1xuICogICAvLyAgIGxWaWV3WzJdLmluc2VydEJlZm9yZShub2RlLCBsVmlld1szXSk7XG4gKiAgIDEgPDwgU0hJRlRfUkVGIHwgU2VsZWN0LCAyIDw8IFNISUZUX1BBUkVOVCB8IDMgPDwgU0hJRlRfUkVGIHwgSW5zZXJ0QmVmb3JlLFxuICpcbiAqICAgLy8gRXF1aXZhbGVudCB0bzpcbiAqICAgLy8gICBjb25zdCBub2RlID0gbFZpZXdbMV07XG4gKiAgIC8vICAgbFZpZXdbMl0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gKiAgIDEgPDwgU0hJRlRfUkVGIHwgU2VsZWN0LCAyIDw8IFNISUZUX1BBUkVOVCB8IEFwcGVuZENoaWxkLFxuICpcbiAqICAgLy8gRm9yIHJlbW92aW5nIGV4aXN0aW5nIG5vZGVzXG4gKiAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgIC8vICAgY29uc3Qgbm9kZSA9IGxWaWV3WzFdO1xuICogICAvLyAgIHJlbW92ZUNoaWxkKHRWaWV3LmRhdGEoMSksIG5vZGUsIGxWaWV3KTtcbiAqICAgMSA8PCBTSElGVF9SRUYgfCBSZW1vdmUsXG4gKlxuICogICAvLyBGb3Igd3JpdGluZyBhdHRyaWJ1dGVzXG4gKiAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgIC8vICAgY29uc3Qgbm9kZSA9IGxWaWV3WzFdO1xuICogICAvLyAgIG5vZGUuc2V0QXR0cmlidXRlKCdhdHRyJywgJ3ZhbHVlJyk7XG4gKiAgIDEgPDwgU0hJRlRfUkVGIHwgU2VsZWN0LCAnYXR0cicsICd2YWx1ZSdcbiAqICAgICAgICAgICAgLy8gTk9URTogU2VsZWN0IGZvbGxvd2VkIGJ5IHR3byBzdHJpbmcgKHZzIHNlbGVjdCBmb2xsb3dlZCBieSBPcENvZGUpXG4gKiBdO1xuICogYGBgXG4gKiBOT1RFOlxuICogICAtIGBpbmRleGAgaXMgaW5pdGlhbCBsb2NhdGlvbiB3aGVyZSB0aGUgZXh0cmEgbm9kZXMgc2hvdWxkIGJlIHN0b3JlZCBpbiB0aGUgRVhQQU5ETyBzZWN0aW9uIG9mXG4gKiBgTFZJZXdEYXRhYC5cbiAqXG4gKiBTZWU6IGBhcHBseUkxOG5DcmVhdGVPcENvZGVzYDtcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJMThuTXV0YXRlT3BDb2RlcyBleHRlbmRzIEFycmF5PG51bWJlcnxzdHJpbmd8RUxFTUVOVF9NQVJLRVJ8Q09NTUVOVF9NQVJLRVJ8bnVsbD4ge1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBJMThuVXBkYXRlT3BDb2RlIHtcbiAgLyoqXG4gICAqIFN0b3JlcyBzaGlmdCBhbW91bnQgZm9yIGJpdHMgMTctMiB0aGF0IGNvbnRhaW4gcmVmZXJlbmNlIGluZGV4LlxuICAgKi9cbiAgU0hJRlRfUkVGID0gMixcbiAgLyoqXG4gICAqIE1hc2sgZm9yIE9wQ29kZVxuICAgKi9cbiAgTUFTS19PUENPREUgPSAwYjExLFxuXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gdXBkYXRlIGEgdGV4dCBub2RlLlxuICAgKi9cbiAgVGV4dCA9IDBiMDAsXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gdXBkYXRlIGEgYXR0cmlidXRlIG9mIGEgbm9kZS5cbiAgICovXG4gIEF0dHIgPSAwYjAxLFxuICAvKipcbiAgICogT3BDb2RlIHRvIHN3aXRjaCB0aGUgY3VycmVudCBJQ1UgY2FzZS5cbiAgICovXG4gIEljdVN3aXRjaCA9IDBiMTAsXG4gIC8qKlxuICAgKiBPcENvZGUgdG8gdXBkYXRlIHRoZSBjdXJyZW50IElDVSBjYXNlLlxuICAgKi9cbiAgSWN1VXBkYXRlID0gMGIxMSxcbn1cblxuLyoqXG4gKiBTdG9yZXMgRE9NIG9wZXJhdGlvbnMgd2hpY2ggbmVlZCB0byBiZSBhcHBsaWVkIHRvIHVwZGF0ZSBET00gcmVuZGVyIHRyZWUgZHVlIHRvIGNoYW5nZXMgaW5cbiAqIGV4cHJlc3Npb25zLlxuICpcbiAqIFRoZSBiYXNpYyBpZGVhIGlzIHRoYXQgYGkxOG5FeHBgIE9wQ29kZXMgY2FwdHVyZSBleHByZXNzaW9uIGNoYW5nZXMgYW5kIHVwZGF0ZSBhIGNoYW5nZVxuICogbWFzayBiaXQuIChCaXQgMSBmb3IgZXhwcmVzc2lvbiAxLCBiaXQgMiBmb3IgZXhwcmVzc2lvbiAyIGV0Yy4uLiwgYml0IDMyIGZvciBleHByZXNzaW9uIDMyIGFuZFxuICogaGlnaGVyLikgVGhlIE9wQ29kZXMgdGhlbiBjb21wYXJlIGl0cyBvd24gY2hhbmdlIG1hc2sgYWdhaW5zdCB0aGUgZXhwcmVzc2lvbiBjaGFuZ2UgbWFzayB0b1xuICogZGV0ZXJtaW5lIGlmIHRoZSBPcENvZGVzIHNob3VsZCBleGVjdXRlLlxuICpcbiAqIFRoZXNlIE9wQ29kZXMgY2FuIGJlIHVzZWQgYnkgYm90aCB0aGUgaTE4biBibG9jayBhcyB3ZWxsIGFzIElDVSBzdWItYmxvY2suXG4gKlxuICogIyMgRXhhbXBsZVxuICpcbiAqIEFzc3VtZVxuICogYGBgdHNcbiAqICAgaWYgKHJmICYgUmVuZGVyRmxhZ3MuVXBkYXRlKSB7XG4gKiAgICBpMThuRXhwKGN0eC5leHAxKTsgLy8gSWYgY2hhbmdlZCBzZXQgbWFzayBiaXQgMVxuICogICAgaTE4bkV4cChjdHguZXhwMik7IC8vIElmIGNoYW5nZWQgc2V0IG1hc2sgYml0IDJcbiAqICAgIGkxOG5FeHAoY3R4LmV4cDMpOyAvLyBJZiBjaGFuZ2VkIHNldCBtYXNrIGJpdCAzXG4gKiAgICBpMThuRXhwKGN0eC5leHA0KTsgLy8gSWYgY2hhbmdlZCBzZXQgbWFzayBiaXQgNFxuICogICAgaTE4bkFwcGx5KDApOyAgICAgICAgICAgIC8vIEFwcGx5IGFsbCBjaGFuZ2VzIGJ5IGV4ZWN1dGluZyB0aGUgT3BDb2Rlcy5cbiAqICB9XG4gKiBgYGBcbiAqIFdlIGNhbiBhc3N1bWUgdGhhdCBlYWNoIGNhbGwgdG8gYGkxOG5FeHBgIHNldHMgYW4gaW50ZXJuYWwgYGNoYW5nZU1hc2tgIGJpdCBkZXBlbmRpbmcgb24gdGhlXG4gKiBpbmRleCBvZiBgaTE4bkV4cGAuXG4gKlxuICogIyMjIE9wQ29kZXNcbiAqIGBgYHRzXG4gKiA8STE4blVwZGF0ZU9wQ29kZXM+W1xuICogICAvLyBUaGUgZm9sbG93aW5nIE9wQ29kZXMgcmVwcmVzZW50OiBgPGRpdiBpMThuLXRpdGxlPVwicHJle3tleHAxfX1pbnt7ZXhwMn19cG9zdFwiPmBcbiAqICAgLy8gSWYgYGNoYW5nZU1hc2sgJiAwYjExYFxuICogICAvLyAgICAgICAgaGFzIGNoYW5nZWQgdGhlbiBleGVjdXRlIHVwZGF0ZSBPcENvZGVzLlxuICogICAvLyAgICAgICAgaGFzIE5PVCBjaGFuZ2VkIHRoZW4gc2tpcCBgN2AgdmFsdWVzIGFuZCBzdGFydCBwcm9jZXNzaW5nIG5leHQgT3BDb2Rlcy5cbiAqICAgMGIxMSwgNyxcbiAqICAgLy8gQ29uY2F0ZW5hdGUgYG5ld1ZhbHVlID0gJ3ByZScrbFZpZXdbYmluZEluZGV4LTRdKydpbicrbFZpZXdbYmluZEluZGV4LTNdKydwb3N0JztgLlxuICogICAncHJlJywgLTQsICdpbicsIC0zLCAncG9zdCcsXG4gKiAgIC8vIFVwZGF0ZSBhdHRyaWJ1dGU6IGBlbGVtZW50QXR0cmlidXRlKDEsICd0aXRsZScsIHNhbml0aXplckZuKG5ld1ZhbHVlKSk7YFxuICogICAxIDw8IFNISUZUX1JFRiB8IEF0dHIsICd0aXRsZScsIHNhbml0aXplckZuLFxuICpcbiAqICAgLy8gVGhlIGZvbGxvd2luZyBPcENvZGVzIHJlcHJlc2VudDogYDxkaXYgaTE4bj5IZWxsbyB7e2V4cDN9fSFcIj5gXG4gKiAgIC8vIElmIGBjaGFuZ2VNYXNrICYgMGIxMDBgXG4gKiAgIC8vICAgICAgICBoYXMgY2hhbmdlZCB0aGVuIGV4ZWN1dGUgdXBkYXRlIE9wQ29kZXMuXG4gKiAgIC8vICAgICAgICBoYXMgTk9UIGNoYW5nZWQgdGhlbiBza2lwIGA0YCB2YWx1ZXMgYW5kIHN0YXJ0IHByb2Nlc3NpbmcgbmV4dCBPcENvZGVzLlxuICogICAwYjEwMCwgNCxcbiAqICAgLy8gQ29uY2F0ZW5hdGUgYG5ld1ZhbHVlID0gJ0hlbGxvICcgKyBsVmlld1tiaW5kSW5kZXggLTJdICsgJyEnO2AuXG4gKiAgICdIZWxsbyAnLCAtMiwgJyEnLFxuICogICAvLyBVcGRhdGUgdGV4dDogYGxWaWV3WzFdLnRleHRDb250ZW50ID0gbmV3VmFsdWU7YFxuICogICAxIDw8IFNISUZUX1JFRiB8IFRleHQsXG4gKlxuICogICAvLyBUaGUgZm9sbG93aW5nIE9wQ29kZXMgcmVwcmVzZW50OiBgPGRpdiBpMThuPntleHA0LCBwbHVyYWwsIC4uLiB9XCI+YFxuICogICAvLyBJZiBgY2hhbmdlTWFzayAmIDBiMTAwMGBcbiAqICAgLy8gICAgICAgIGhhcyBjaGFuZ2VkIHRoZW4gZXhlY3V0ZSB1cGRhdGUgT3BDb2Rlcy5cbiAqICAgLy8gICAgICAgIGhhcyBOT1QgY2hhbmdlZCB0aGVuIHNraXAgYDRgIHZhbHVlcyBhbmQgc3RhcnQgcHJvY2Vzc2luZyBuZXh0IE9wQ29kZXMuXG4gKiAgIDBiMTAwMCwgNCxcbiAqICAgLy8gQ29uY2F0ZW5hdGUgYG5ld1ZhbHVlID0gbFZpZXdbYmluZEluZGV4IC0xXTtgLlxuICogICAtMSxcbiAqICAgLy8gU3dpdGNoIElDVTogYGljdVN3aXRjaENhc2UobFZpZXdbMV0sIDAsIG5ld1ZhbHVlKTtgXG4gKiAgIDAgPDwgU0hJRlRfSUNVIHwgMSA8PCBTSElGVF9SRUYgfCBJY3VTd2l0Y2gsXG4gKlxuICogICAvLyBOb3RlIGBjaGFuZ2VNYXNrICYgLTFgIGlzIGFsd2F5cyB0cnVlLCBzbyB0aGUgSWN1VXBkYXRlIHdpbGwgYWx3YXlzIGV4ZWN1dGUuXG4gKiAgIC0xLCAxLFxuICogICAvLyBVcGRhdGUgSUNVOiBgaWN1VXBkYXRlQ2FzZShsVmlld1sxXSwgMCk7YFxuICogICAwIDw8IFNISUZUX0lDVSB8IDEgPDwgU0hJRlRfUkVGIHwgSWN1VXBkYXRlLFxuICpcbiAqIF07XG4gKiBgYGBcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSTE4blVwZGF0ZU9wQ29kZXMgZXh0ZW5kcyBBcnJheTxzdHJpbmd8bnVtYmVyfFNhbml0aXplckZufG51bGw+IHt9XG5cbi8qKlxuICogU3RvcmUgaW5mb3JtYXRpb24gZm9yIHRoZSBpMThuIHRyYW5zbGF0aW9uIGJsb2NrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRJMThuIHtcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzbG90cyB0byBhbGxvY2F0ZSBpbiBleHBhbmRvLlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBtYXggbnVtYmVyIG9mIERPTSBlbGVtZW50cyB3aGljaCB3aWxsIGJlIGNyZWF0ZWQgYnkgdGhpcyBpMThuICsgSUNVIGJsb2Nrcy4gV2hlblxuICAgKiB0aGUgRE9NIGVsZW1lbnRzIGFyZSBiZWluZyBjcmVhdGVkIHRoZXkgYXJlIHN0b3JlZCBpbiB0aGUgRVhQQU5ETywgc28gdGhhdCB1cGRhdGUgT3BDb2RlcyBjYW5cbiAgICogd3JpdGUgaW50byB0aGVtLlxuICAgKi9cbiAgdmFyczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBPcENvZGVzIHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBUZXh0IE5vZGVzIGFuZCBJQ1UgYW5jaG9ycyBmb3IgdGhlIHRyYW5zbGF0aW9uIGJsb2Nrcy5cbiAgICpcbiAgICogTk9URTogVGhlIElDVSBhbmNob3JzIGFyZSBmaWxsZWQgaW4gd2l0aCBJQ1UgVXBkYXRlIE9wQ29kZS5cbiAgICovXG4gIGNyZWF0ZTogSTE4bk11dGF0ZU9wQ29kZXM7XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIE9wQ29kZXMgd2hpY2ggd2lsbCBiZSBleGVjdXRlZCBvbiBlYWNoIGNoYW5nZSBkZXRlY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGFueSBjaGFuZ2VzIHRvXG4gICAqIERPTSBhcmUgcmVxdWlyZWQuXG4gICAqL1xuICB1cGRhdGU6IEkxOG5VcGRhdGVPcENvZGVzO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgSUNVcyBpbiBhIHRyYW5zbGF0aW9uIGJsb2NrIChvciBgbnVsbGAgaWYgYmxvY2sgaGFzIG5vIElDVXMpLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKiBHaXZlbjogYDxkaXYgaTE4bj5Zb3UgaGF2ZSB7Y291bnQsIHBsdXJhbCwgLi4ufSBhbmQge3N0YXRlLCBzd2l0Y2gsIC4uLn08L2Rpdj5gXG4gICAqIFRoZXJlIHdvdWxkIGJlIDIgSUNVcyBpbiB0aGlzIGFycmF5LlxuICAgKiAgIDEuIGB7Y291bnQsIHBsdXJhbCwgLi4ufWBcbiAgICogICAyLiBge3N0YXRlLCBzd2l0Y2gsIC4uLn1gXG4gICAqL1xuICBpY3VzOiBUSWN1W118bnVsbDtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBJQ1UgdHlwZSBvZiBgc2VsZWN0YCBvciBgcGx1cmFsYFxuICovXG5leHBvcnQgY29uc3QgZW51bSBJY3VUeXBlIHtcbiAgc2VsZWN0ID0gMCxcbiAgcGx1cmFsID0gMSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUSWN1IHtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIElDVSB0eXBlIG9mIGBzZWxlY3RgIG9yIGBwbHVyYWxgXG4gICAqL1xuICB0eXBlOiBJY3VUeXBlO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc2xvdHMgdG8gYWxsb2NhdGUgaW4gZXhwYW5kbyBmb3IgZWFjaCBjYXNlLlxuICAgKlxuICAgKiBUaGlzIGlzIHRoZSBtYXggbnVtYmVyIG9mIERPTSBlbGVtZW50cyB3aGljaCB3aWxsIGJlIGNyZWF0ZWQgYnkgdGhpcyBpMThuICsgSUNVIGJsb2Nrcy4gV2hlblxuICAgKiB0aGUgRE9NIGVsZW1lbnRzIGFyZSBiZWluZyBjcmVhdGVkIHRoZXkgYXJlIHN0b3JlZCBpbiB0aGUgRVhQQU5ETywgc28gdGhhdCB1cGRhdGUgT3BDb2RlcyBjYW5cbiAgICogd3JpdGUgaW50byB0aGVtLlxuICAgKi9cbiAgdmFyczogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGFycmF5IG9mIGNoaWxkL3N1YiBJQ1VzLlxuICAgKlxuICAgKiBJbiBjYXNlIG9mIG5lc3RlZCBJQ1VzIHN1Y2ggYXM6XG4gICAqIGBgYFxuICAgKiB777+9MO+/vSwgcGx1cmFsLFxuICAgKiAgID0wIHt6ZXJvfVxuICAgKiAgIG90aGVyIHvvv70w77+9IHvvv70x77+9LCBzZWxlY3QsXG4gICAqICAgICAgICAgICAgICAgICAgICAgY2F0IHtjYXRzfVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGRvZyB7ZG9nc31cbiAgICogICAgICAgICAgICAgICAgICAgICBvdGhlciB7YW5pbWFsc31cbiAgICogICAgICAgICAgICAgICAgICAgfSFcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqIFdoZW4gdGhlIHBhcmVudCBJQ1UgaXMgY2hhbmdpbmcgaXQgbXVzdCBjbGVhbiB1cCBjaGlsZCBJQ1VzIGFzIHdlbGwuIEZvciB0aGlzIHJlYXNvbiBpdCBuZWVkc1xuICAgKiB0byBrbm93IHdoaWNoIGNoaWxkIElDVXMgdG8gcnVuIGNsZWFuIHVwIGZvciBhcyB3ZWxsLlxuICAgKlxuICAgKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSB0aGlzIHdvdWxkIGJlOlxuICAgKiBgYGB0c1xuICAgKiBbXG4gICAqICAgW10sICAgLy8gYD0wYCBoYXMgbm8gc3ViIElDVXNcbiAgICogICBbMV0sICAvLyBgb3RoZXJgIGhhcyBvbmUgc3ViSUNVIGF0IGAxYHN0IGluZGV4LlxuICAgKiBdXG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgcmVhc29uIHdoeSBpdCBpcyBBcnJheSBvZiBBcnJheXMgaXMgYmVjYXVzZSBmaXJzdCBhcnJheSByZXByZXNlbnRzIHRoZSBjYXNlLCBhbmQgc2Vjb25kXG4gICAqIHJlcHJlc2VudHMgdGhlIGNoaWxkIElDVXMgdG8gY2xlYW4gdXAuIFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIGNoaWxkIElDVXMgcGVyIGNhc2UuXG4gICAqL1xuICBjaGlsZEljdXM6IG51bWJlcltdW107XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBjYXNlIHZhbHVlcyB3aGljaCB0aGUgY3VycmVudCBJQ1Ugd2lsbCB0cnkgdG8gbWF0Y2guXG4gICAqXG4gICAqIFRoZSBsYXN0IHZhbHVlIGlzIGBvdGhlcmBcbiAgICovXG4gIGNhc2VzOiBhbnlbXTtcblxuICAvKipcbiAgICogQSBzZXQgb2YgT3BDb2RlcyB0byBhcHBseSBpbiBvcmRlciB0byBidWlsZCB1cCB0aGUgRE9NIHJlbmRlciB0cmVlIGZvciB0aGUgSUNVXG4gICAqL1xuICBjcmVhdGU6IEkxOG5NdXRhdGVPcENvZGVzW107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIE9wQ29kZXMgdG8gYXBwbHkgaW4gb3JkZXIgdG8gZGVzdHJveSB0aGUgRE9NIHJlbmRlciB0cmVlIGZvciB0aGUgSUNVLlxuICAgKi9cbiAgcmVtb3ZlOiBJMThuTXV0YXRlT3BDb2Rlc1tdO1xuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBPcENvZGVzIHRvIGFwcGx5IGluIG9yZGVyIHRvIHVwZGF0ZSB0aGUgRE9NIHJlbmRlciB0cmVlIGZvciB0aGUgSUNVIGJpbmRpbmdzLlxuICAgKi9cbiAgdXBkYXRlOiBJMThuVXBkYXRlT3BDb2Rlc1tdO1xufVxuXG4vLyBOb3RlOiBUaGlzIGhhY2sgaXMgbmVjZXNzYXJ5IHNvIHdlIGRvbid0IGVycm9uZW91c2x5IGdldCBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcbi8vIGZhaWx1cmUgYmFzZWQgb24gdHlwZXMuXG5leHBvcnQgY29uc3QgdW51c2VkVmFsdWVFeHBvcnRUb1BsYWNhdGVBamQgPSAxO1xuIl19