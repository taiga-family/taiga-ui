/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { computeDecimalDigest, computeDigest, decimalDigest } from '../../../i18n/digest';
import * as i18n from '../../../i18n/i18n_ast';
import { createI18nMessageFactory } from '../../../i18n/i18n_parser';
import * as html from '../../../ml_parser/ast';
import { DEFAULT_INTERPOLATION_CONFIG } from '../../../ml_parser/interpolation_config';
import * as o from '../../../output/output_ast';
import { hasI18nAttrs, I18N_ATTR, I18N_ATTR_PREFIX, icuFromI18nMessage } from './util';
const setI18nRefs = (htmlNode, i18nNode) => {
    if (htmlNode instanceof html.NodeWithI18n) {
        if (i18nNode instanceof i18n.IcuPlaceholder && htmlNode.i18n instanceof i18n.Message) {
            // This html node represents an ICU but this is a second processing pass, and the legacy id
            // was computed in the previous pass and stored in the `i18n` property as a message.
            // We are about to wipe out that property so capture the previous message to be reused when
            // generating the message for this ICU later. See `_generateI18nMessage()`.
            i18nNode.previousMessage = htmlNode.i18n;
        }
        htmlNode.i18n = i18nNode;
    }
    return i18nNode;
};
/**
 * This visitor walks over HTML parse tree and converts information stored in
 * i18n-related attributes ("i18n" and "i18n-*") into i18n meta object that is
 * stored with other element's and attribute's information.
 */
export class I18nMetaVisitor {
    constructor(interpolationConfig = DEFAULT_INTERPOLATION_CONFIG, keepI18nAttrs = false, enableI18nLegacyMessageIdFormat = false) {
        this.interpolationConfig = interpolationConfig;
        this.keepI18nAttrs = keepI18nAttrs;
        this.enableI18nLegacyMessageIdFormat = enableI18nLegacyMessageIdFormat;
        // whether visited nodes contain i18n information
        this.hasI18nMeta = false;
        // i18n message generation factory
        this._createI18nMessage = createI18nMessageFactory(this.interpolationConfig);
    }
    _generateI18nMessage(nodes, meta = '', visitNodeFn) {
        const { meaning, description, customId } = this._parseMetadata(meta);
        const message = this._createI18nMessage(nodes, meaning, description, customId, visitNodeFn);
        this._setMessageId(message, meta);
        this._setLegacyIds(message, meta);
        return message;
    }
    visitElement(element) {
        if (hasI18nAttrs(element)) {
            this.hasI18nMeta = true;
            const attrs = [];
            const attrsMeta = {};
            for (const attr of element.attrs) {
                if (attr.name === I18N_ATTR) {
                    // root 'i18n' node attribute
                    const i18n = element.i18n || attr.value;
                    const message = this._generateI18nMessage(element.children, i18n, setI18nRefs);
                    // do not assign empty i18n meta
                    if (message.nodes.length) {
                        element.i18n = message;
                    }
                }
                else if (attr.name.startsWith(I18N_ATTR_PREFIX)) {
                    // 'i18n-*' attributes
                    const key = attr.name.slice(I18N_ATTR_PREFIX.length);
                    attrsMeta[key] = attr.value;
                }
                else {
                    // non-i18n attributes
                    attrs.push(attr);
                }
            }
            // set i18n meta for attributes
            if (Object.keys(attrsMeta).length) {
                for (const attr of attrs) {
                    const meta = attrsMeta[attr.name];
                    // do not create translation for empty attributes
                    if (meta !== undefined && attr.value) {
                        attr.i18n = this._generateI18nMessage([attr], attr.i18n || meta);
                    }
                }
            }
            if (!this.keepI18nAttrs) {
                // update element's attributes,
                // keeping only non-i18n related ones
                element.attrs = attrs;
            }
        }
        html.visitAll(this, element.children, element.i18n);
        return element;
    }
    visitExpansion(expansion, currentMessage) {
        let message;
        const meta = expansion.i18n;
        this.hasI18nMeta = true;
        if (meta instanceof i18n.IcuPlaceholder) {
            // set ICU placeholder name (e.g. "ICU_1"),
            // generated while processing root element contents,
            // so we can reference it when we output translation
            const name = meta.name;
            message = this._generateI18nMessage([expansion], meta);
            const icu = icuFromI18nMessage(message);
            icu.name = name;
        }
        else {
            // ICU is a top level message, try to use metadata from container element if provided via
            // `context` argument. Note: context may not be available for standalone ICUs (without
            // wrapping element), so fallback to ICU metadata in this case.
            message = this._generateI18nMessage([expansion], currentMessage || meta);
        }
        expansion.i18n = message;
        return expansion;
    }
    visitText(text) {
        return text;
    }
    visitAttribute(attribute) {
        return attribute;
    }
    visitComment(comment) {
        return comment;
    }
    visitExpansionCase(expansionCase) {
        return expansionCase;
    }
    /**
     * Parse the general form `meta` passed into extract the explicit metadata needed to create a
     * `Message`.
     *
     * There are three possibilities for the `meta` variable
     * 1) a string from an `i18n` template attribute: parse it to extract the metadata values.
     * 2) a `Message` from a previous processing pass: reuse the metadata values in the message.
     * 4) other: ignore this and just process the message metadata as normal
     *
     * @param meta the bucket that holds information about the message
     * @returns the parsed metadata.
     */
    _parseMetadata(meta) {
        return typeof meta === 'string' ? parseI18nMeta(meta) :
            meta instanceof i18n.Message ? meta : {};
    }
    /**
     * Generate (or restore) message id if not specified already.
     */
    _setMessageId(message, meta) {
        if (!message.id) {
            message.id = meta instanceof i18n.Message && meta.id || decimalDigest(message);
        }
    }
    /**
     * Update the `message` with a `legacyId` if necessary.
     *
     * @param message the message whose legacy id should be set
     * @param meta information about the message being processed
     */
    _setLegacyIds(message, meta) {
        if (this.enableI18nLegacyMessageIdFormat) {
            message.legacyIds = [computeDigest(message), computeDecimalDigest(message)];
        }
        else if (typeof meta !== 'string') {
            // This occurs if we are doing the 2nd pass after whitespace removal (see `parseTemplate()` in
            // `packages/compiler/src/render3/view/template.ts`).
            // In that case we want to reuse the legacy message generated in the 1st pass (see
            // `setI18nRefs()`).
            const previousMessage = meta instanceof i18n.Message ?
                meta :
                meta instanceof i18n.IcuPlaceholder ? meta.previousMessage : undefined;
            message.legacyIds = previousMessage ? previousMessage.legacyIds : [];
        }
    }
}
/** I18n separators for metadata **/
const I18N_MEANING_SEPARATOR = '|';
const I18N_ID_SEPARATOR = '@@';
/**
 * Parses i18n metas like:
 *  - "@@id",
 *  - "description[@@id]",
 *  - "meaning|description[@@id]"
 * and returns an object with parsed output.
 *
 * @param meta String that represents i18n meta
 * @returns Object with id, meaning and description fields
 */
export function parseI18nMeta(meta = '') {
    let customId;
    let meaning;
    let description;
    meta = meta.trim();
    if (meta) {
        const idIndex = meta.indexOf(I18N_ID_SEPARATOR);
        const descIndex = meta.indexOf(I18N_MEANING_SEPARATOR);
        let meaningAndDesc;
        [meaningAndDesc, customId] =
            (idIndex > -1) ? [meta.slice(0, idIndex), meta.slice(idIndex + 2)] : [meta, ''];
        [meaning, description] = (descIndex > -1) ?
            [meaningAndDesc.slice(0, descIndex), meaningAndDesc.slice(descIndex + 1)] :
            ['', meaningAndDesc];
    }
    return { customId, meaning, description };
}
// Converts i18n meta information for a message (id, description, meaning)
// to a JsDoc statement formatted as expected by the Closure compiler.
export function i18nMetaToDocStmt(meta) {
    const tags = [];
    if (meta.description) {
        tags.push({ tagName: "desc" /* Desc */, text: meta.description });
    }
    if (meta.meaning) {
        tags.push({ tagName: "meaning" /* Meaning */, text: meta.meaning });
    }
    return tags.length == 0 ? null : new o.JSDocCommentStmt(tags);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi9tZXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDeEYsT0FBTyxLQUFLLElBQUksTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsd0JBQXdCLEVBQWMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRixPQUFPLEtBQUssSUFBSSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyw0QkFBNEIsRUFBc0IsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRyxPQUFPLEtBQUssQ0FBQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhELE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBV3JGLE1BQU0sV0FBVyxHQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUN0RCxJQUFJLFFBQVEsWUFBWSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3pDLElBQUksUUFBUSxZQUFZLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BGLDJGQUEyRjtZQUMzRixvRkFBb0Y7WUFDcEYsMkZBQTJGO1lBQzNGLDJFQUEyRTtZQUMzRSxRQUFRLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDMUM7UUFDRCxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztLQUMxQjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8s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QyxFQUFFLFNBQVMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRSxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCwwRUFBMEU7QUFDMUUsc0VBQXNFO0FBQ3RFLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFjO0lBQzlDLE1BQU0sSUFBSSxHQUFpQixFQUFFLENBQUM7SUFDOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLG1CQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztLQUNuRTtJQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyx5QkFBd0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7S0FDbEU7SUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29tcHV0ZURlY2ltYWxEaWdlc3QsIGNvbXB1dGVEaWdlc3QsIGRlY2ltYWxEaWdlc3R9IGZyb20gJy4uLy4uLy4uL2kxOG4vZGlnZXN0JztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuX2FzdCc7XG5pbXBvcnQge2NyZWF0ZUkxOG5NZXNzYWdlRmFjdG9yeSwgVmlzaXROb2RlRm59IGZyb20gJy4uLy4uLy4uL2kxOG4vaTE4bl9wYXJzZXInO1xuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuLi8uLi8uLi9tbF9wYXJzZXIvYXN0JztcbmltcG9ydCB7REVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRywgSW50ZXJwb2xhdGlvbkNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vbWxfcGFyc2VyL2ludGVycG9sYXRpb25fY29uZmlnJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5pbXBvcnQge2hhc0kxOG5BdHRycywgSTE4Tl9BVFRSLCBJMThOX0FUVFJfUFJFRklYLCBpY3VGcm9tSTE4bk1lc3NhZ2V9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB0eXBlIEkxOG5NZXRhID0ge1xuICBpZD86IHN0cmluZyxcbiAgY3VzdG9tSWQ/OiBzdHJpbmcsXG4gIGxlZ2FjeUlkcz86IHN0cmluZ1tdLFxuICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgbWVhbmluZz86IHN0cmluZ1xufTtcblxuXG5jb25zdCBzZXRJMThuUmVmczogVmlzaXROb2RlRm4gPSAoaHRtbE5vZGUsIGkxOG5Ob2RlKSA9PiB7XG4gIGlmIChodG1sTm9kZSBpbnN0YW5jZW9mIGh0bWwuTm9kZVdpdGhJMThuKSB7XG4gICAgaWYgKGkxOG5Ob2RlIGluc3RhbmNlb2YgaTE4bi5JY3VQbGFjZWhvbGRlciAmJiBodG1sTm9kZS5pMThuIGluc3RhbmNlb2YgaTE4bi5NZXNzYWdlKSB7XG4gICAgICAvLyBUaGlzIGh0bWwgbm9kZSByZXByZXNlbnRzIGFuIElDVSBidXQgdGhpcyBpcyBhIHNlY29uZCBwcm9jZXNzaW5nIHBhc3MsIGFuZCB0aGUgbGVnYWN5IGlkXG4gICAgICAvLyB3YXMgY29tcHV0ZWQgaW4gdGhlIHByZXZpb3VzIHBhc3MgYW5kIHN0b3JlZCBpbiB0aGUgYGkxOG5gIHByb3BlcnR5IGFzIGEgbWVzc2FnZS5cbiAgICAgIC8vIFdlIGFyZSBhYm91dCB0byB3aXBlIG91dCB0aGF0IHByb3BlcnR5IHNvIGNhcHR1cmUgdGhlIHByZXZpb3VzIG1lc3NhZ2UgdG8gYmUgcmV1c2VkIHdoZW5cbiAgICAgIC8vIGdlbmVyYXRpbmcgdGhlIG1lc3NhZ2UgZm9yIHRoaXMgSUNVIGxhdGVyLiBTZWUgYF9nZW5lcmF0ZUkxOG5NZXNzYWdlKClgLlxuICAgICAgaTE4bk5vZGUucHJldmlvdXNNZXNzYWdlID0gaHRtbE5vZGUuaTE4bjtcbiAgICB9XG4gICAgaHRtbE5vZGUuaTE4biA9IGkxOG5Ob2RlO1xuICB9XG4gIHJldHVybiBpMThuTm9kZTtcbn07XG5cbi8qKlxuICogVGhpcyB2aXNpdG9yIHdhbGtzIG92ZXIgSFRNTCBwYXJzZSB0cmVlIGFuZCBjb252ZXJ0cyBpbmZvcm1hdGlvbiBzdG9yZWQgaW5cbiAqIGkxOG4tcmVsYXRlZCBhdHRyaWJ1dGVzIChcImkxOG5cIiBhbmQgXCJpMThuLSpcIikgaW50byBpMThuIG1ldGEgb2JqZWN0IHRoYXQgaXNcbiAqIHN0b3JlZCB3aXRoIG90aGVyIGVsZW1lbnQncyBhbmQgYXR0cmlidXRlJ3MgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBJMThuTWV0YVZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICAvLyB3aGV0aGVyIHZpc2l0ZWQgbm9kZXMgY29udGFpbiBpMThuIGluZm9ybWF0aW9uXG4gIHB1YmxpYyBoYXNJMThuTWV0YTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIGkxOG4gbWVzc2FnZSBnZW5lcmF0aW9uIGZhY3RvcnlcbiAgcHJpdmF0ZSBfY3JlYXRlSTE4bk1lc3NhZ2UgPSBjcmVhdGVJMThuTWVzc2FnZUZhY3RvcnkodGhpcy5pbnRlcnBvbGF0aW9uQ29uZmlnKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcsXG4gICAgICBwcml2YXRlIGtlZXBJMThuQXR0cnMgPSBmYWxzZSwgcHJpdmF0ZSBlbmFibGVJMThuTGVnYWN5TWVzc2FnZUlkRm9ybWF0ID0gZmFsc2UpIHt9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVJMThuTWVzc2FnZShcbiAgICAgIG5vZGVzOiBodG1sLk5vZGVbXSwgbWV0YTogc3RyaW5nfGkxOG4uSTE4bk1ldGEgPSAnJyxcbiAgICAgIHZpc2l0Tm9kZUZuPzogVmlzaXROb2RlRm4pOiBpMThuLk1lc3NhZ2Uge1xuICAgIGNvbnN0IHttZWFuaW5nLCBkZXNjcmlwdGlvbiwgY3VzdG9tSWR9ID0gdGhpcy5fcGFyc2VNZXRhZGF0YShtZXRhKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5fY3JlYXRlSTE4bk1lc3NhZ2Uobm9kZXMsIG1lYW5pbmcsIGRlc2NyaXB0aW9uLCBjdXN0b21JZCwgdmlzaXROb2RlRm4pO1xuICAgIHRoaXMuX3NldE1lc3NhZ2VJZChtZXNzYWdlLCBtZXRhKTtcbiAgICB0aGlzLl9zZXRMZWdhY3lJZHMobWVzc2FnZSwgbWV0YSk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICB2aXNpdEVsZW1lbnQoZWxlbWVudDogaHRtbC5FbGVtZW50KTogYW55IHtcbiAgICBpZiAoaGFzSTE4bkF0dHJzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmhhc0kxOG5NZXRhID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGF0dHJzOiBodG1sLkF0dHJpYnV0ZVtdID0gW107XG4gICAgICBjb25zdCBhdHRyc01ldGE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBlbGVtZW50LmF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyLm5hbWUgPT09IEkxOE5fQVRUUikge1xuICAgICAgICAgIC8vIHJvb3QgJ2kxOG4nIG5vZGUgYXR0cmlidXRlXG4gICAgICAgICAgY29uc3QgaTE4biA9IGVsZW1lbnQuaTE4biB8fCBhdHRyLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLl9nZW5lcmF0ZUkxOG5NZXNzYWdlKGVsZW1lbnQuY2hpbGRyZW4sIGkxOG4sIHNldEkxOG5SZWZzKTtcbiAgICAgICAgICAvLyBkbyBub3QgYXNzaWduIGVtcHR5IGkxOG4gbWV0YVxuICAgICAgICAgIGlmIChtZXNzYWdlLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbWVudC5pMThuID0gbWVzc2FnZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5hbWUuc3RhcnRzV2l0aChJMThOX0FUVFJfUFJFRklYKSkge1xuICAgICAgICAgIC8vICdpMThuLSonIGF0dHJpYnV0ZXNcbiAgICAgICAgICBjb25zdCBrZXkgPSBhdHRyLm5hbWUuc2xpY2UoSTE4Tl9BVFRSX1BSRUZJWC5sZW5ndGgpO1xuICAgICAgICAgIGF0dHJzTWV0YVtrZXldID0gYXR0ci52YWx1ZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG5vbi1pMThuIGF0dHJpYnV0ZXNcbiAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBpMThuIG1ldGEgZm9yIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhdHRyc01ldGEpLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgYXR0cnMpIHtcbiAgICAgICAgICBjb25zdCBtZXRhID0gYXR0cnNNZXRhW2F0dHIubmFtZV07XG4gICAgICAgICAgLy8gZG8gbm90IGNyZWF0ZSB0cmFuc2xhdGlvbiBmb3IgZW1wdHkgYXR0cmlidXRlc1xuICAgICAgICAgIGlmIChtZXRhICE9PSB1bmRlZmluZWQgJiYgYXR0ci52YWx1ZSkge1xuICAgICAgICAgICAgYXR0ci5pMThuID0gdGhpcy5fZ2VuZXJhdGVJMThuTWVzc2FnZShbYXR0cl0sIGF0dHIuaTE4biB8fCBtZXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmtlZXBJMThuQXR0cnMpIHtcbiAgICAgICAgLy8gdXBkYXRlIGVsZW1lbnQncyBhdHRyaWJ1dGVzLFxuICAgICAgICAvLyBrZWVwaW5nIG9ubHkgbm9uLWkxOG4gcmVsYXRlZCBvbmVzXG4gICAgICAgIGVsZW1lbnQuYXR0cnMgPSBhdHRycztcbiAgICAgIH1cbiAgICB9XG4gICAgaHRtbC52aXNpdEFsbCh0aGlzLCBlbGVtZW50LmNoaWxkcmVuLCBlbGVtZW50LmkxOG4pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY3VycmVudE1lc3NhZ2U6IGkxOG4uTWVzc2FnZXx1bmRlZmluZWQpOiBhbnkge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGNvbnN0IG1ldGEgPSBleHBhbnNpb24uaTE4bjtcbiAgICB0aGlzLmhhc0kxOG5NZXRhID0gdHJ1ZTtcbiAgICBpZiAobWV0YSBpbnN0YW5jZW9mIGkxOG4uSWN1UGxhY2Vob2xkZXIpIHtcbiAgICAgIC8vIHNldCBJQ1UgcGxhY2Vob2xkZXIgbmFtZSAoZS5nLiBcIklDVV8xXCIpLFxuICAgICAgLy8gZ2VuZXJhdGVkIHdoaWxlIHByb2Nlc3Npbmcgcm9vdCBlbGVtZW50IGNvbnRlbnRzLFxuICAgICAgLy8gc28gd2UgY2FuIHJlZmVyZW5jZSBpdCB3aGVuIHdlIG91dHB1dCB0cmFuc2xhdGlvblxuICAgICAgY29uc3QgbmFtZSA9IG1ldGEubmFtZTtcbiAgICAgIG1lc3NhZ2UgPSB0aGlzLl9nZW5lcmF0ZUkxOG5NZXNzYWdlKFtleHBhbnNpb25dLCBtZXRhKTtcbiAgICAgIGNvbnN0IGljdSA9IGljdUZyb21JMThuTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIGljdS5uYW1lID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUNVIGlzIGEgdG9wIGxldmVsIG1lc3NhZ2UsIHRyeSB0byB1c2UgbWV0YWRhdGEgZnJvbSBjb250YWluZXIgZWxlbWVudCBpZiBwcm92aWRlZCB2aWFcbiAgICAgIC8vIGBjb250ZXh0YCBhcmd1bWVudC4gTm90ZTogY29udGV4dCBtYXkgbm90IGJlIGF2YWlsYWJsZSBmb3Igc3RhbmRhbG9uZSBJQ1VzICh3aXRob3V0XG4gICAgICAvLyB3cmFwcGluZyBlbGVtZW50KSwgc28gZmFsbGJhY2sgdG8gSUNVIG1ldGFkYXRhIGluIHRoaXMgY2FzZS5cbiAgICAgIG1lc3NhZ2UgPSB0aGlzLl9nZW5lcmF0ZUkxOG5NZXNzYWdlKFtleHBhbnNpb25dLCBjdXJyZW50TWVzc2FnZSB8fCBtZXRhKTtcbiAgICB9XG4gICAgZXhwYW5zaW9uLmkxOG4gPSBtZXNzYWdlO1xuICAgIHJldHVybiBleHBhbnNpb247XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICB2aXNpdEF0dHJpYnV0ZShhdHRyaWJ1dGU6IGh0bWwuQXR0cmlidXRlKTogYW55IHtcbiAgICByZXR1cm4gYXR0cmlidXRlO1xuICB9XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQpOiBhbnkge1xuICAgIHJldHVybiBjb21tZW50O1xuICB9XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UpOiBhbnkge1xuICAgIHJldHVybiBleHBhbnNpb25DYXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBnZW5lcmFsIGZvcm0gYG1ldGFgIHBhc3NlZCBpbnRvIGV4dHJhY3QgdGhlIGV4cGxpY2l0IG1ldGFkYXRhIG5lZWRlZCB0byBjcmVhdGUgYVxuICAgKiBgTWVzc2FnZWAuXG4gICAqXG4gICAqIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJpbGl0aWVzIGZvciB0aGUgYG1ldGFgIHZhcmlhYmxlXG4gICAqIDEpIGEgc3RyaW5nIGZyb20gYW4gYGkxOG5gIHRlbXBsYXRlIGF0dHJpYnV0ZTogcGFyc2UgaXQgdG8gZXh0cmFjdCB0aGUgbWV0YWRhdGEgdmFsdWVzLlxuICAgKiAyKSBhIGBNZXNzYWdlYCBmcm9tIGEgcHJldmlvdXMgcHJvY2Vzc2luZyBwYXNzOiByZXVzZSB0aGUgbWV0YWRhdGEgdmFsdWVzIGluIHRoZSBtZXNzYWdlLlxuICAgKiA0KSBvdGhlcjogaWdub3JlIHRoaXMgYW5kIGp1c3QgcHJvY2VzcyB0aGUgbWVzc2FnZSBtZXRhZGF0YSBhcyBub3JtYWxcbiAgICpcbiAgICogQHBhcmFtIG1ldGEgdGhlIGJ1Y2tldCB0aGF0IGhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHRoZSBwYXJzZWQgbWV0YWRhdGEuXG4gICAqL1xuICBwcml2YXRlIF9wYXJzZU1ldGFkYXRhKG1ldGE6IHN0cmluZ3xpMThuLkkxOG5NZXRhKTogSTE4bk1ldGEge1xuICAgIHJldHVybiB0eXBlb2YgbWV0YSA9PT0gJ3N0cmluZycgPyBwYXJzZUkxOG5NZXRhKG1ldGEpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YSBpbnN0YW5jZW9mIGkxOG4uTWVzc2FnZSA/IG1ldGEgOiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSAob3IgcmVzdG9yZSkgbWVzc2FnZSBpZCBpZiBub3Qgc3BlY2lmaWVkIGFscmVhZHkuXG4gICAqL1xuICBwcml2YXRlIF9zZXRNZXNzYWdlSWQobWVzc2FnZTogaTE4bi5NZXNzYWdlLCBtZXRhOiBzdHJpbmd8aTE4bi5JMThuTWV0YSk6IHZvaWQge1xuICAgIGlmICghbWVzc2FnZS5pZCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG1ldGEgaW5zdGFuY2VvZiBpMThuLk1lc3NhZ2UgJiYgbWV0YS5pZCB8fCBkZWNpbWFsRGlnZXN0KG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGBtZXNzYWdlYCB3aXRoIGEgYGxlZ2FjeUlkYCBpZiBuZWNlc3NhcnkuXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHdob3NlIGxlZ2FjeSBpZCBzaG91bGQgYmUgc2V0XG4gICAqIEBwYXJhbSBtZXRhIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtZXNzYWdlIGJlaW5nIHByb2Nlc3NlZFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0TGVnYWN5SWRzKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSwgbWV0YTogc3RyaW5nfGkxOG4uSTE4bk1ldGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmFibGVJMThuTGVnYWN5TWVzc2FnZUlkRm9ybWF0KSB7XG4gICAgICBtZXNzYWdlLmxlZ2FjeUlkcyA9IFtjb21wdXRlRGlnZXN0KG1lc3NhZ2UpLCBjb21wdXRlRGVjaW1hbERpZ2VzdChtZXNzYWdlKV07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgb2NjdXJzIGlmIHdlIGFyZSBkb2luZyB0aGUgMm5kIHBhc3MgYWZ0ZXIgd2hpdGVzcGFjZSByZW1vdmFsIChzZWUgYHBhcnNlVGVtcGxhdGUoKWAgaW5cbiAgICAgIC8vIGBwYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy92aWV3L3RlbXBsYXRlLnRzYCkuXG4gICAgICAvLyBJbiB0aGF0IGNhc2Ugd2Ugd2FudCB0byByZXVzZSB0aGUgbGVnYWN5IG1lc3NhZ2UgZ2VuZXJhdGVkIGluIHRoZSAxc3QgcGFzcyAoc2VlXG4gICAgICAvLyBgc2V0STE4blJlZnMoKWApLlxuICAgICAgY29uc3QgcHJldmlvdXNNZXNzYWdlID0gbWV0YSBpbnN0YW5jZW9mIGkxOG4uTWVzc2FnZSA/XG4gICAgICAgICAgbWV0YSA6XG4gICAgICAgICAgbWV0YSBpbnN0YW5jZW9mIGkxOG4uSWN1UGxhY2Vob2xkZXIgPyBtZXRhLnByZXZpb3VzTWVzc2FnZSA6IHVuZGVmaW5lZDtcbiAgICAgIG1lc3NhZ2UubGVnYWN5SWRzID0gcHJldmlvdXNNZXNzYWdlID8gcHJldmlvdXNNZXNzYWdlLmxlZ2FjeUlkcyA6IFtdO1xuICAgIH1cbiAgfVxufVxuXG4vKiogSTE4biBzZXBhcmF0b3JzIGZvciBtZXRhZGF0YSAqKi9cbmNvbnN0IEkxOE5fTUVBTklOR19TRVBBUkFUT1IgPSAnfCc7XG5jb25zdCBJMThOX0lEX1NFUEFSQVRPUiA9ICdAQCc7XG5cbi8qKlxuICogUGFyc2VzIGkxOG4gbWV0YXMgbGlrZTpcbiAqICAtIFwiQEBpZFwiLFxuICogIC0gXCJkZXNjcmlwdGlvbltAQGlkXVwiLFxuICogIC0gXCJtZWFuaW5nfGRlc2NyaXB0aW9uW0BAaWRdXCJcbiAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIHBhcnNlZCBvdXRwdXQuXG4gKlxuICogQHBhcmFtIG1ldGEgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyBpMThuIG1ldGFcbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoIGlkLCBtZWFuaW5nIGFuZCBkZXNjcmlwdGlvbiBmaWVsZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSTE4bk1ldGEobWV0YTogc3RyaW5nID0gJycpOiBJMThuTWV0YSB7XG4gIGxldCBjdXN0b21JZDogc3RyaW5nfHVuZGVmaW5lZDtcbiAgbGV0IG1lYW5pbmc6IHN0cmluZ3x1bmRlZmluZWQ7XG4gIGxldCBkZXNjcmlwdGlvbjogc3RyaW5nfHVuZGVmaW5lZDtcblxuICBtZXRhID0gbWV0YS50cmltKCk7XG4gIGlmIChtZXRhKSB7XG4gICAgY29uc3QgaWRJbmRleCA9IG1ldGEuaW5kZXhPZihJMThOX0lEX1NFUEFSQVRPUik7XG4gICAgY29uc3QgZGVzY0luZGV4ID0gbWV0YS5pbmRleE9mKEkxOE5fTUVBTklOR19TRVBBUkFUT1IpO1xuICAgIGxldCBtZWFuaW5nQW5kRGVzYzogc3RyaW5nO1xuICAgIFttZWFuaW5nQW5kRGVzYywgY3VzdG9tSWRdID1cbiAgICAgICAgKGlkSW5kZXggPiAtMSkgPyBbbWV0YS5zbGljZSgwLCBpZEluZGV4KSwgbWV0YS5zbGljZShpZEluZGV4ICsgMildIDogW21ldGEsICcnXTtcbiAgICBbbWVhbmluZywgZGVzY3JpcHRpb25dID0gKGRlc2NJbmRleCA+IC0xKSA/XG4gICAgICAgIFttZWFuaW5nQW5kRGVzYy5zbGljZSgwLCBkZXNjSW5kZXgpLCBtZWFuaW5nQW5kRGVzYy5zbGljZShkZXNjSW5kZXggKyAxKV0gOlxuICAgICAgICBbJycsIG1lYW5pbmdBbmREZXNjXTtcbiAgfVxuXG4gIHJldHVybiB7Y3VzdG9tSWQsIG1lYW5pbmcsIGRlc2NyaXB0aW9ufTtcbn1cblxuLy8gQ29udmVydHMgaTE4biBtZXRhIGluZm9ybWF0aW9uIGZvciBhIG1lc3NhZ2UgKGlkLCBkZXNjcmlwdGlvbiwgbWVhbmluZylcbi8vIHRvIGEgSnNEb2Mgc3RhdGVtZW50IGZvcm1hdHRlZCBhcyBleHBlY3RlZCBieSB0aGUgQ2xvc3VyZSBjb21waWxlci5cbmV4cG9ydCBmdW5jdGlvbiBpMThuTWV0YVRvRG9jU3RtdChtZXRhOiBJMThuTWV0YSk6IG8uSlNEb2NDb21tZW50U3RtdHxudWxsIHtcbiAgY29uc3QgdGFnczogby5KU0RvY1RhZ1tdID0gW107XG4gIGlmIChtZXRhLmRlc2NyaXB0aW9uKSB7XG4gICAgdGFncy5wdXNoKHt0YWdOYW1lOiBvLkpTRG9jVGFnTmFtZS5EZXNjLCB0ZXh0OiBtZXRhLmRlc2NyaXB0aW9ufSk7XG4gIH1cbiAgaWYgKG1ldGEubWVhbmluZykge1xuICAgIHRhZ3MucHVzaCh7dGFnTmFtZTogby5KU0RvY1RhZ05hbWUuTWVhbmluZywgdGV4dDogbWV0YS5tZWFuaW5nfSk7XG4gIH1cbiAgcmV0dXJuIHRhZ3MubGVuZ3RoID09IDAgPyBudWxsIDogbmV3IG8uSlNEb2NDb21tZW50U3RtdCh0YWdzKTtcbn1cbiJdfQ==