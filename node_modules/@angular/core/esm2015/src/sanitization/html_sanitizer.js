/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/sanitization/html_sanitizer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isDevMode } from '../util/is_dev_mode';
import { InertBodyHelper } from './inert_body';
import { _sanitizeUrl, sanitizeSrcset } from './url_sanitizer';
/**
 * @param {?} tags
 * @return {?}
 */
function tagSet(tags) {
    /** @type {?} */
    const res = {};
    for (const t of tags.split(','))
        res[t] = true;
    return res;
}
/**
 * @param {...?} sets
 * @return {?}
 */
function merge(...sets) {
    /** @type {?} */
    const res = {};
    for (const s of sets) {
        for (const v in s) {
            if (s.hasOwnProperty(v))
                res[v] = true;
        }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
/** @type {?} */
const VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
/** @type {?} */
const OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
/** @type {?} */
const OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
/** @type {?} */
const OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
/** @type {?} */
const BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
/** @type {?} */
const INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
/** @type {?} */
export const VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
/** @type {?} */
export const URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
/** @type {?} */
export const SRCSET_ATTRS = tagSet('srcset');
/** @type {?} */
const HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// Accessibility attributes as per WAI-ARIA 1.1 (W3C Working Draft 14 December 2018)
/** @type {?} */
const ARIA_ATTRS = tagSet('aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,' +
    'aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,' +
    'aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,' +
    'aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,' +
    'aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,' +
    'aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,' +
    'aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext');
// NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
/** @type {?} */
export const VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS, ARIA_ATTRS);
// Elements whose content should not be traversed/preserved, if the elements themselves are invalid.
//
// Typically, `<invalid>Some content</invalid>` would traverse (and in this case preserve)
// `Some content`, but strip `invalid-element` opening/closing tags. For some elements, though, we
// don't want to preserve the content, if the elements themselves are going to be removed.
/** @type {?} */
const SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS = tagSet('script,style,template');
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
class SanitizingHtmlSerializer {
    constructor() {
        // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
        // because characters were re-encoded.
        this.sanitizedSomething = false;
        this.buf = [];
    }
    /**
     * @param {?} el
     * @return {?}
     */
    sanitizeChildren(el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        /** @type {?} */
        let current = (/** @type {?} */ (el.firstChild));
        /** @type {?} */
        let traverseContent = true;
        while (current) {
            if (current.nodeType === Node.ELEMENT_NODE) {
                traverseContent = this.startElement((/** @type {?} */ (current)));
            }
            else if (current.nodeType === Node.TEXT_NODE) {
                this.chars((/** @type {?} */ (current.nodeValue)));
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (traverseContent && current.firstChild) {
                current = (/** @type {?} */ (current.firstChild));
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    this.endElement((/** @type {?} */ (current)));
                }
                /** @type {?} */
                let next = this.checkClobberedElement(current, (/** @type {?} */ (current.nextSibling)));
                if (next) {
                    current = next;
                    break;
                }
                current = this.checkClobberedElement(current, (/** @type {?} */ (current.parentNode)));
            }
        }
        return this.buf.join('');
    }
    /**
     * Sanitizes an opening element tag (if valid) and returns whether the element's contents should
     * be traversed. Element content must always be traversed (even if the element itself is not
     * valid/safe), unless the element is one of `SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS`.
     *
     * @private
     * @param {?} element The element to sanitize.
     * @return {?} True if the element's contents should be traversed.
     */
    startElement(element) {
        /** @type {?} */
        const tagName = element.nodeName.toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return !SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS.hasOwnProperty(tagName);
        }
        this.buf.push('<');
        this.buf.push(tagName);
        /** @type {?} */
        const elAttrs = element.attributes;
        for (let i = 0; i < elAttrs.length; i++) {
            /** @type {?} */
            const elAttr = elAttrs.item(i);
            /** @type {?} */
            const attrName = (/** @type {?} */ (elAttr)).name;
            /** @type {?} */
            const lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                this.sanitizedSomething = true;
                continue;
            }
            /** @type {?} */
            let value = (/** @type {?} */ (elAttr)).value;
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = _sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            this.buf.push(' ', attrName, '="', encodeEntities(value), '"');
        }
        this.buf.push('>');
        return true;
    }
    /**
     * @private
     * @param {?} current
     * @return {?}
     */
    endElement(current) {
        /** @type {?} */
        const tagName = current.nodeName.toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    }
    /**
     * @private
     * @param {?} chars
     * @return {?}
     */
    chars(chars) {
        this.buf.push(encodeEntities(chars));
    }
    /**
     * @param {?} node
     * @param {?} nextNode
     * @return {?}
     */
    checkClobberedElement(node, nextNode) {
        if (nextNode &&
            (node.compareDocumentPosition(nextNode) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
            throw new Error(`Failed to sanitize html because the element is clobbered: ${((/** @type {?} */ (node))).outerHTML}`);
        }
        return nextNode;
    }
}
if (false) {
    /** @type {?} */
    SanitizingHtmlSerializer.prototype.sanitizedSomething;
    /**
     * @type {?}
     * @private
     */
    SanitizingHtmlSerializer.prototype.buf;
}
// Regular Expressions for parsing tags and attributes
/** @type {?} */
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        return '&#' + match.charCodeAt(0) + ';';
    }))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
/** @type {?} */
let inertBodyHelper;
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 * @param {?} defaultDoc
 * @param {?} unsafeHtmlInput
 * @return {?}
 */
export function _sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    /** @type {?} */
    let inertBodyElement = null;
    try {
        inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc);
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        /** @type {?} */
        let unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        /** @type {?} */
        let mXSSAttempts = 5;
        /** @type {?} */
        let parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            parsedHtml = (/** @type {?} */ (inertBodyElement)).innerHTML;
            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        } while (unsafeHtml !== parsedHtml);
        /** @type {?} */
        const sanitizer = new SanitizingHtmlSerializer();
        /** @type {?} */
        const safeHtml = sanitizer.sanitizeChildren((/** @type {?} */ (getTemplateContent((/** @type {?} */ (inertBodyElement))))) || inertBodyElement);
        if (isDevMode() && sanitizer.sanitizedSomething) {
            console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss');
        }
        return safeHtml;
    }
    finally {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        if (inertBodyElement) {
            /** @type {?} */
            const parent = getTemplateContent(inertBodyElement) || inertBodyElement;
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    }
}
/**
 * @param {?} el
 * @return {?}
 */
export function getTemplateContent(el) {
    return 'content' in ((/** @type {?} */ (el))) && isTemplateElement(el) ?
        el.content :
        null;
}
/**
 * @param {?} el
 * @return {?}
 */
function isTemplateElement(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'TEMPLATE';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9zYW5pdGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vaHRtbF9zYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBRSxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFN0QsU0FBUyxNQUFNLENBQUMsSUFBWTs7VUFDcEIsR0FBRyxHQUEyQixFQUFFO0lBQ3RDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9DLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFHLElBQThCOztVQUN4QyxHQUFHLEdBQTJCLEVBQUU7SUFDdEMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDcEIsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7TUFRSyxhQUFhLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDOzs7O01BSWhELCtCQUErQixHQUFHLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQzs7TUFDMUYsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7TUFDbEQseUJBQXlCLEdBQzNCLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSwrQkFBK0IsQ0FBQzs7O01BR3RFLGNBQWMsR0FBRyxLQUFLLENBQ3hCLCtCQUErQixFQUMvQixNQUFNLENBQ0Ysa0JBQWtCO0lBQ2xCLHdHQUF3RztJQUN4RywyRUFBMkUsQ0FBQyxDQUFDOzs7TUFHL0UsZUFBZSxHQUFHLEtBQUssQ0FDekIsZ0NBQWdDLEVBQ2hDLE1BQU0sQ0FDRix5QkFBeUI7SUFDekIsK0ZBQStGO0lBQy9GLHdFQUF3RSxDQUFDLENBQUM7O0FBRWxGLE1BQU0sT0FBTyxjQUFjLEdBQ3ZCLEtBQUssQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsQ0FBQzs7O0FBR3BGLE1BQU0sT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDLDhEQUE4RCxDQUFDOzs7QUFHL0YsTUFBTSxPQUFPLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOztNQUV0QyxVQUFVLEdBQUcsTUFBTSxDQUNyQiwrR0FBK0c7SUFDL0csbUdBQW1HO0lBQ25HLGdJQUFnSTtJQUNoSSwwR0FBMEc7SUFDMUcsMkJBQTJCLENBQUM7OztNQUcxQixVQUFVLEdBQUcsTUFBTSxDQUNyQix5R0FBeUc7SUFDekcsc0dBQXNHO0lBQ3RHLGtHQUFrRztJQUNsRyw4RkFBOEY7SUFDOUYsNEdBQTRHO0lBQzVHLDBHQUEwRztJQUMxRyxpRkFBaUYsQ0FBQzs7Ozs7Ozs7QUFVdEYsTUFBTSxPQUFPLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOzs7Ozs7O01BTzNFLDJDQUEyQyxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7Ozs7QUFNbkYsTUFBTSx3QkFBd0I7SUFBOUI7OztRQUdTLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMxQixRQUFHLEdBQWEsRUFBRSxDQUFDO0lBaUc3QixDQUFDOzs7OztJQS9GQyxnQkFBZ0IsQ0FBQyxFQUFXOzs7OztZQUl0QixPQUFPLEdBQVMsbUJBQUEsRUFBRSxDQUFDLFVBQVUsRUFBQzs7WUFDOUIsZUFBZSxHQUFHLElBQUk7UUFDMUIsT0FBTyxPQUFPLEVBQUU7WUFDZCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDMUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQUEsT0FBTyxFQUFXLENBQUMsQ0FBQzthQUN6RDtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBQSxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxxQ0FBcUM7Z0JBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDaEM7WUFDRCxJQUFJLGVBQWUsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN6QyxPQUFPLEdBQUcsbUJBQUEsT0FBTyxDQUFDLFVBQVUsRUFBQyxDQUFDO2dCQUM5QixTQUFTO2FBQ1Y7WUFDRCxPQUFPLE9BQU8sRUFBRTtnQkFDZCx3RUFBd0U7Z0JBQ3hFLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFBLE9BQU8sRUFBVyxDQUFDLENBQUM7aUJBQ3JDOztvQkFFRyxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxtQkFBQSxPQUFPLENBQUMsV0FBVyxFQUFDLENBQUM7Z0JBRXBFLElBQUksSUFBSSxFQUFFO29CQUNSLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDUDtnQkFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxtQkFBQSxPQUFPLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7Ozs7O0lBVU8sWUFBWSxDQUFDLE9BQWdCOztjQUM3QixPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUMvQixPQUFPLENBQUMsMkNBQTJDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O2NBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVTtRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ2pDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7a0JBQ3hCLFFBQVEsR0FBRyxtQkFBQSxNQUFNLEVBQUMsQ0FBQyxJQUFJOztrQkFDdkIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLFNBQVM7YUFDVjs7Z0JBQ0csS0FBSyxHQUFHLG1CQUFBLE1BQU0sRUFBQyxDQUFDLEtBQUs7WUFDekIsaUVBQWlFO1lBQ2pFLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFBRSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE9BQWdCOztjQUMzQixPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDOUMsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFDLElBQVUsRUFBRSxRQUFjO1FBQzlDLElBQUksUUFBUTtZQUNSLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ2pGLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQ1osQ0FBQyxtQkFBQSxJQUFJLEVBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7OztJQWxHQyxzREFBa0M7Ozs7O0lBQ2xDLHVDQUEyQjs7OztNQW9HdkIscUJBQXFCLEdBQUcsaUNBQWlDOzs7TUFFekQsdUJBQXVCLEdBQUcsZUFBZTs7Ozs7Ozs7QUFRL0MsU0FBUyxjQUFjLENBQUMsS0FBYTtJQUNuQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztTQUM5QixPQUFPLENBQ0oscUJBQXFCOzs7O0lBQ3JCLFVBQVMsS0FBYTs7Y0FDZCxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O2NBQ3hCLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNFLENBQUMsRUFBQztTQUNMLE9BQU8sQ0FDSix1QkFBdUI7Ozs7SUFDdkIsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzFDLENBQUMsRUFBQztTQUNMLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7SUFFRyxlQUFnQzs7Ozs7Ozs7QUFNcEMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxVQUFlLEVBQUUsZUFBdUI7O1FBQ2hFLGdCQUFnQixHQUFxQixJQUFJO0lBQzdDLElBQUk7UUFDRixlQUFlLEdBQUcsZUFBZSxJQUFJLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7WUFFakUsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9ELGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7OztZQUkvRCxZQUFZLEdBQUcsQ0FBQzs7WUFDaEIsVUFBVSxHQUFHLFVBQVU7UUFFM0IsR0FBRztZQUNELElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsWUFBWSxFQUFFLENBQUM7WUFFZixVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLFVBQVUsR0FBRyxtQkFBQSxnQkFBZ0IsRUFBQyxDQUFDLFNBQVMsQ0FBQztZQUN6QyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEUsUUFBUSxVQUFVLEtBQUssVUFBVSxFQUFFOztjQUU5QixTQUFTLEdBQUcsSUFBSSx3QkFBd0IsRUFBRTs7Y0FDMUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FDdkMsbUJBQUEsa0JBQWtCLENBQUMsbUJBQUEsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFXLElBQUksZ0JBQWdCLENBQUM7UUFDekUsSUFBSSxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDL0MsT0FBTyxDQUFDLElBQUksQ0FDUixpRkFBaUYsQ0FBQyxDQUFDO1NBQ3hGO1FBRUQsT0FBTyxRQUFRLENBQUM7S0FDakI7WUFBUztRQUNSLHlGQUF5RjtRQUN6RixJQUFJLGdCQUFnQixFQUFFOztrQkFDZCxNQUFNLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxnQkFBZ0I7WUFDdkUsT0FBTyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2QztTQUNGO0tBQ0Y7QUFDSCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxFQUFRO0lBQ3pDLE9BQU8sU0FBUyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFPLENBQW1DLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUM7QUFDWCxDQUFDOzs7OztBQUNELFNBQVMsaUJBQWlCLENBQUMsRUFBUTtJQUNqQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2lzRGV2TW9kZX0gZnJvbSAnLi4vdXRpbC9pc19kZXZfbW9kZSc7XG5pbXBvcnQge0luZXJ0Qm9keUhlbHBlcn0gZnJvbSAnLi9pbmVydF9ib2R5JztcbmltcG9ydCB7X3Nhbml0aXplVXJsLCBzYW5pdGl6ZVNyY3NldH0gZnJvbSAnLi91cmxfc2FuaXRpemVyJztcblxuZnVuY3Rpb24gdGFnU2V0KHRhZ3M6IHN0cmluZyk6IHtbazogc3RyaW5nXTogYm9vbGVhbn0ge1xuICBjb25zdCByZXM6IHtbazogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcbiAgZm9yIChjb25zdCB0IG9mIHRhZ3Muc3BsaXQoJywnKSkgcmVzW3RdID0gdHJ1ZTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWVyZ2UoLi4uc2V0czoge1trOiBzdHJpbmddOiBib29sZWFufVtdKToge1trOiBzdHJpbmddOiBib29sZWFufSB7XG4gIGNvbnN0IHJlczoge1trOiBzdHJpbmddOiBib29sZWFufSA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2Ygc2V0cykge1xuICAgIGZvciAoY29uc3QgdiBpbiBzKSB7XG4gICAgICBpZiAocy5oYXNPd25Qcm9wZXJ0eSh2KSkgcmVzW3ZdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLy8gR29vZCBzb3VyY2Ugb2YgaW5mbyBhYm91dCBlbGVtZW50cyBhbmQgYXR0cmlidXRlc1xuLy8gaHR0cDovL2Rldi53My5vcmcvaHRtbDUvc3BlYy9PdmVydmlldy5odG1sI3NlbWFudGljc1xuLy8gaHR0cDovL3NpbW9uLmh0bWw1Lm9yZy9odG1sLWVsZW1lbnRzXG5cbi8vIFNhZmUgVm9pZCBFbGVtZW50cyAtIEhUTUw1XG4vLyBodHRwOi8vZGV2LnczLm9yZy9odG1sNS9zcGVjL092ZXJ2aWV3Lmh0bWwjdm9pZC1lbGVtZW50c1xuY29uc3QgVk9JRF9FTEVNRU5UUyA9IHRhZ1NldCgnYXJlYSxicixjb2wsaHIsaW1nLHdicicpO1xuXG4vLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW4gKGFuZCB3aGljaCBjbG9zZSB0aGVtc2VsdmVzKVxuLy8gaHR0cDovL2Rldi53My5vcmcvaHRtbDUvc3BlYy9PdmVydmlldy5odG1sI29wdGlvbmFsLXRhZ3NcbmNvbnN0IE9QVElPTkFMX0VORF9UQUdfQkxPQ0tfRUxFTUVOVFMgPSB0YWdTZXQoJ2NvbGdyb3VwLGRkLGR0LGxpLHAsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHInKTtcbmNvbnN0IE9QVElPTkFMX0VORF9UQUdfSU5MSU5FX0VMRU1FTlRTID0gdGFnU2V0KCdycCxydCcpO1xuY29uc3QgT1BUSU9OQUxfRU5EX1RBR19FTEVNRU5UUyA9XG4gICAgbWVyZ2UoT1BUSU9OQUxfRU5EX1RBR19JTkxJTkVfRUxFTUVOVFMsIE9QVElPTkFMX0VORF9UQUdfQkxPQ0tfRUxFTUVOVFMpO1xuXG4vLyBTYWZlIEJsb2NrIEVsZW1lbnRzIC0gSFRNTDVcbmNvbnN0IEJMT0NLX0VMRU1FTlRTID0gbWVyZ2UoXG4gICAgT1BUSU9OQUxfRU5EX1RBR19CTE9DS19FTEVNRU5UUyxcbiAgICB0YWdTZXQoXG4gICAgICAgICdhZGRyZXNzLGFydGljbGUsJyArXG4gICAgICAgICdhc2lkZSxibG9ja3F1b3RlLGNhcHRpb24sY2VudGVyLGRlbCxkZXRhaWxzLGRpYWxvZyxkaXIsZGl2LGRsLGZpZ3VyZSxmaWdjYXB0aW9uLGZvb3RlcixoMSxoMixoMyxoNCxoNSwnICtcbiAgICAgICAgJ2g2LGhlYWRlcixoZ3JvdXAsaHIsaW5zLG1haW4sbWFwLG1lbnUsbmF2LG9sLHByZSxzZWN0aW9uLHN1bW1hcnksdGFibGUsdWwnKSk7XG5cbi8vIElubGluZSBFbGVtZW50cyAtIEhUTUw1XG5jb25zdCBJTkxJTkVfRUxFTUVOVFMgPSBtZXJnZShcbiAgICBPUFRJT05BTF9FTkRfVEFHX0lOTElORV9FTEVNRU5UUyxcbiAgICB0YWdTZXQoXG4gICAgICAgICdhLGFiYnIsYWNyb255bSxhdWRpbyxiLCcgK1xuICAgICAgICAnYmRpLGJkbyxiaWcsYnIsY2l0ZSxjb2RlLGRlbCxkZm4sZW0sZm9udCxpLGltZyxpbnMsa2JkLGxhYmVsLG1hcCxtYXJrLHBpY3R1cmUscSxydWJ5LHJwLHJ0LHMsJyArXG4gICAgICAgICdzYW1wLHNtYWxsLHNvdXJjZSxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0aW1lLHRyYWNrLHR0LHUsdmFyLHZpZGVvJykpO1xuXG5leHBvcnQgY29uc3QgVkFMSURfRUxFTUVOVFMgPVxuICAgIG1lcmdlKFZPSURfRUxFTUVOVFMsIEJMT0NLX0VMRU1FTlRTLCBJTkxJTkVfRUxFTUVOVFMsIE9QVElPTkFMX0VORF9UQUdfRUxFTUVOVFMpO1xuXG4vLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSBocmVmIGFuZCBoZW5jZSBuZWVkIHRvIGJlIHNhbml0aXplZFxuZXhwb3J0IGNvbnN0IFVSSV9BVFRSUyA9IHRhZ1NldCgnYmFja2dyb3VuZCxjaXRlLGhyZWYsaXRlbXR5cGUsbG9uZ2Rlc2MscG9zdGVyLHNyYyx4bGluazpocmVmJyk7XG5cbi8vIEF0dHJpYnV0ZXMgdGhhdCBoYXZlIHNwZWNpYWwgaHJlZiBzZXQgaGVuY2UgbmVlZCB0byBiZSBzYW5pdGl6ZWRcbmV4cG9ydCBjb25zdCBTUkNTRVRfQVRUUlMgPSB0YWdTZXQoJ3NyY3NldCcpO1xuXG5jb25zdCBIVE1MX0FUVFJTID0gdGFnU2V0KFxuICAgICdhYmJyLGFjY2Vzc2tleSxhbGlnbixhbHQsYXV0b3BsYXksYXhpcyxiZ2NvbG9yLGJvcmRlcixjZWxscGFkZGluZyxjZWxsc3BhY2luZyxjbGFzcyxjbGVhcixjb2xvcixjb2xzLGNvbHNwYW4sJyArXG4gICAgJ2NvbXBhY3QsY29udHJvbHMsY29vcmRzLGRhdGV0aW1lLGRlZmF1bHQsZGlyLGRvd25sb2FkLGZhY2UsaGVhZGVycyxoZWlnaHQsaGlkZGVuLGhyZWZsYW5nLGhzcGFjZSwnICtcbiAgICAnaXNtYXAsaXRlbXNjb3BlLGl0ZW1wcm9wLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsb29wLG1lZGlhLG11dGVkLG5vaHJlZixub3dyYXAsb3BlbixwcmVsb2FkLHJlbCxyZXYscm9sZSxyb3dzLHJvd3NwYW4scnVsZXMsJyArXG4gICAgJ3Njb3BlLHNjcm9sbGluZyxzaGFwZSxzaXplLHNpemVzLHNwYW4sc3JjbGFuZyxzdGFydCxzdW1tYXJ5LHRhYmluZGV4LHRhcmdldCx0aXRsZSx0cmFuc2xhdGUsdHlwZSx1c2VtYXAsJyArXG4gICAgJ3ZhbGlnbix2YWx1ZSx2c3BhY2Usd2lkdGgnKTtcblxuLy8gQWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzIGFzIHBlciBXQUktQVJJQSAxLjEgKFczQyBXb3JraW5nIERyYWZ0IDE0IERlY2VtYmVyIDIwMTgpXG5jb25zdCBBUklBX0FUVFJTID0gdGFnU2V0KFxuICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQsYXJpYS1hdG9taWMsYXJpYS1hdXRvY29tcGxldGUsYXJpYS1idXN5LGFyaWEtY2hlY2tlZCxhcmlhLWNvbGNvdW50LGFyaWEtY29saW5kZXgsJyArXG4gICAgJ2FyaWEtY29sc3BhbixhcmlhLWNvbnRyb2xzLGFyaWEtY3VycmVudCxhcmlhLWRlc2NyaWJlZGJ5LGFyaWEtZGV0YWlscyxhcmlhLWRpc2FibGVkLGFyaWEtZHJvcGVmZmVjdCwnICtcbiAgICAnYXJpYS1lcnJvcm1lc3NhZ2UsYXJpYS1leHBhbmRlZCxhcmlhLWZsb3d0byxhcmlhLWdyYWJiZWQsYXJpYS1oYXNwb3B1cCxhcmlhLWhpZGRlbixhcmlhLWludmFsaWQsJyArXG4gICAgJ2FyaWEta2V5c2hvcnRjdXRzLGFyaWEtbGFiZWwsYXJpYS1sYWJlbGxlZGJ5LGFyaWEtbGV2ZWwsYXJpYS1saXZlLGFyaWEtbW9kYWwsYXJpYS1tdWx0aWxpbmUsJyArXG4gICAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlLGFyaWEtb3JpZW50YXRpb24sYXJpYS1vd25zLGFyaWEtcGxhY2Vob2xkZXIsYXJpYS1wb3NpbnNldCxhcmlhLXByZXNzZWQsYXJpYS1yZWFkb25seSwnICtcbiAgICAnYXJpYS1yZWxldmFudCxhcmlhLXJlcXVpcmVkLGFyaWEtcm9sZWRlc2NyaXB0aW9uLGFyaWEtcm93Y291bnQsYXJpYS1yb3dpbmRleCxhcmlhLXJvd3NwYW4sYXJpYS1zZWxlY3RlZCwnICtcbiAgICAnYXJpYS1zZXRzaXplLGFyaWEtc29ydCxhcmlhLXZhbHVlbWF4LGFyaWEtdmFsdWVtaW4sYXJpYS12YWx1ZW5vdyxhcmlhLXZhbHVldGV4dCcpO1xuXG4vLyBOQjogVGhpcyBjdXJyZW50bHkgY29uc2Npb3VzbHkgZG9lc24ndCBzdXBwb3J0IFNWRy4gU1ZHIHNhbml0aXphdGlvbiBoYXMgaGFkIHNldmVyYWwgc2VjdXJpdHlcbi8vIGlzc3VlcyBpbiB0aGUgcGFzdCwgc28gaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUgaXQgb3V0IGlmIHBvc3NpYmxlLiBJZiBzdXBwb3J0IGZvciBiaW5kaW5nIFNWRyB2aWFcbi8vIGlubmVySFRNTCBpcyByZXF1aXJlZCwgU1ZHIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIGhlcmUuXG5cbi8vIE5COiBTYW5pdGl6YXRpb24gZG9lcyBub3QgYWxsb3cgPGZvcm0+IGVsZW1lbnRzIG9yIG90aGVyIGFjdGl2ZSBlbGVtZW50cyAoPGJ1dHRvbj4gZXRjKS4gVGhvc2Vcbi8vIGNhbiBiZSBzYW5pdGl6ZWQsIGJ1dCB0aGV5IGluY3JlYXNlIHNlY3VyaXR5IHN1cmZhY2UgYXJlYSB3aXRob3V0IGEgbGVnaXRpbWF0ZSB1c2UgY2FzZSwgc28gdGhleVxuLy8gYXJlIGxlZnQgb3V0IGhlcmUuXG5cbmV4cG9ydCBjb25zdCBWQUxJRF9BVFRSUyA9IG1lcmdlKFVSSV9BVFRSUywgU1JDU0VUX0FUVFJTLCBIVE1MX0FUVFJTLCBBUklBX0FUVFJTKTtcblxuLy8gRWxlbWVudHMgd2hvc2UgY29udGVudCBzaG91bGQgbm90IGJlIHRyYXZlcnNlZC9wcmVzZXJ2ZWQsIGlmIHRoZSBlbGVtZW50cyB0aGVtc2VsdmVzIGFyZSBpbnZhbGlkLlxuLy9cbi8vIFR5cGljYWxseSwgYDxpbnZhbGlkPlNvbWUgY29udGVudDwvaW52YWxpZD5gIHdvdWxkIHRyYXZlcnNlIChhbmQgaW4gdGhpcyBjYXNlIHByZXNlcnZlKVxuLy8gYFNvbWUgY29udGVudGAsIGJ1dCBzdHJpcCBgaW52YWxpZC1lbGVtZW50YCBvcGVuaW5nL2Nsb3NpbmcgdGFncy4gRm9yIHNvbWUgZWxlbWVudHMsIHRob3VnaCwgd2Vcbi8vIGRvbid0IHdhbnQgdG8gcHJlc2VydmUgdGhlIGNvbnRlbnQsIGlmIHRoZSBlbGVtZW50cyB0aGVtc2VsdmVzIGFyZSBnb2luZyB0byBiZSByZW1vdmVkLlxuY29uc3QgU0tJUF9UUkFWRVJTSU5HX0NPTlRFTlRfSUZfSU5WQUxJRF9FTEVNRU5UUyA9IHRhZ1NldCgnc2NyaXB0LHN0eWxlLHRlbXBsYXRlJyk7XG5cbi8qKlxuICogU2FuaXRpemluZ0h0bWxTZXJpYWxpemVyIHNlcmlhbGl6ZXMgYSBET00gZnJhZ21lbnQsIHN0cmlwcGluZyBvdXQgYW55IHVuc2FmZSBlbGVtZW50cyBhbmQgdW5zYWZlXG4gKiBhdHRyaWJ1dGVzLlxuICovXG5jbGFzcyBTYW5pdGl6aW5nSHRtbFNlcmlhbGl6ZXIge1xuICAvLyBFeHBsaWNpdGx5IHRyYWNrIGlmIHNvbWV0aGluZyB3YXMgc3RyaXBwZWQsIHRvIGF2b2lkIGFjY2lkZW50YWxseSB3YXJuaW5nIG9mIHNhbml0aXphdGlvbiBqdXN0XG4gIC8vIGJlY2F1c2UgY2hhcmFjdGVycyB3ZXJlIHJlLWVuY29kZWQuXG4gIHB1YmxpYyBzYW5pdGl6ZWRTb21ldGhpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBidWY6IHN0cmluZ1tdID0gW107XG5cbiAgc2FuaXRpemVDaGlsZHJlbihlbDogRWxlbWVudCk6IHN0cmluZyB7XG4gICAgLy8gVGhpcyBjYW5ub3QgdXNlIGEgVHJlZVdhbGtlciwgYXMgaXQgaGFzIHRvIHJ1biBvbiBBbmd1bGFyJ3MgdmFyaW91cyBET00gYWRhcHRlcnMuXG4gICAgLy8gSG93ZXZlciB0aGlzIGNvZGUgbmV2ZXIgYWNjZXNzZXMgcHJvcGVydGllcyBvZmYgb2YgYGRvY3VtZW50YCBiZWZvcmUgZGVsZXRpbmcgaXRzIGNvbnRlbnRzXG4gICAgLy8gYWdhaW4sIHNvIGl0IHNob3VsZG4ndCBiZSB2dWxuZXJhYmxlIHRvIERPTSBjbG9iYmVyaW5nLlxuICAgIGxldCBjdXJyZW50OiBOb2RlID0gZWwuZmlyc3RDaGlsZCE7XG4gICAgbGV0IHRyYXZlcnNlQ29udGVudCA9IHRydWU7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0cmF2ZXJzZUNvbnRlbnQgPSB0aGlzLnN0YXJ0RWxlbWVudChjdXJyZW50IGFzIEVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0aGlzLmNoYXJzKGN1cnJlbnQubm9kZVZhbHVlISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTdHJpcCBub24tZWxlbWVudCwgbm9uLXRleHQgbm9kZXMuXG4gICAgICAgIHRoaXMuc2FuaXRpemVkU29tZXRoaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmF2ZXJzZUNvbnRlbnQgJiYgY3VycmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmZpcnN0Q2hpbGQhO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgIC8vIExlYXZpbmcgdGhlIGVsZW1lbnQuIFdhbGsgdXAgYW5kIHRvIHRoZSByaWdodCwgY2xvc2luZyB0YWdzIGFzIHdlIGdvLlxuICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICB0aGlzLmVuZEVsZW1lbnQoY3VycmVudCBhcyBFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5jaGVja0Nsb2JiZXJlZEVsZW1lbnQoY3VycmVudCwgY3VycmVudC5uZXh0U2libGluZyEpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gdGhpcy5jaGVja0Nsb2JiZXJlZEVsZW1lbnQoY3VycmVudCwgY3VycmVudC5wYXJlbnROb2RlISk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJ1Zi5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZXMgYW4gb3BlbmluZyBlbGVtZW50IHRhZyAoaWYgdmFsaWQpIGFuZCByZXR1cm5zIHdoZXRoZXIgdGhlIGVsZW1lbnQncyBjb250ZW50cyBzaG91bGRcbiAgICogYmUgdHJhdmVyc2VkLiBFbGVtZW50IGNvbnRlbnQgbXVzdCBhbHdheXMgYmUgdHJhdmVyc2VkIChldmVuIGlmIHRoZSBlbGVtZW50IGl0c2VsZiBpcyBub3RcbiAgICogdmFsaWQvc2FmZSksIHVubGVzcyB0aGUgZWxlbWVudCBpcyBvbmUgb2YgYFNLSVBfVFJBVkVSU0lOR19DT05URU5UX0lGX0lOVkFMSURfRUxFTUVOVFNgLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBzYW5pdGl6ZS5cbiAgICogQHJldHVybiBUcnVlIGlmIHRoZSBlbGVtZW50J3MgY29udGVudHMgc2hvdWxkIGJlIHRyYXZlcnNlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhcnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghVkFMSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSkpIHtcbiAgICAgIHRoaXMuc2FuaXRpemVkU29tZXRoaW5nID0gdHJ1ZTtcbiAgICAgIHJldHVybiAhU0tJUF9UUkFWRVJTSU5HX0NPTlRFTlRfSUZfSU5WQUxJRF9FTEVNRU5UUy5oYXNPd25Qcm9wZXJ0eSh0YWdOYW1lKTtcbiAgICB9XG4gICAgdGhpcy5idWYucHVzaCgnPCcpO1xuICAgIHRoaXMuYnVmLnB1c2godGFnTmFtZSk7XG4gICAgY29uc3QgZWxBdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsQXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsQXR0ciA9IGVsQXR0cnMuaXRlbShpKTtcbiAgICAgIGNvbnN0IGF0dHJOYW1lID0gZWxBdHRyIS5uYW1lO1xuICAgICAgY29uc3QgbG93ZXIgPSBhdHRyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFWQUxJRF9BVFRSUy5oYXNPd25Qcm9wZXJ0eShsb3dlcikpIHtcbiAgICAgICAgdGhpcy5zYW5pdGl6ZWRTb21ldGhpbmcgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCB2YWx1ZSA9IGVsQXR0ciEudmFsdWU7XG4gICAgICAvLyBUT0RPKG1hcnRpbnByb2JzdCk6IFNwZWNpYWwgY2FzZSBpbWFnZSBVUklzIGZvciBkYXRhOmltYWdlLy4uLlxuICAgICAgaWYgKFVSSV9BVFRSU1tsb3dlcl0pIHZhbHVlID0gX3Nhbml0aXplVXJsKHZhbHVlKTtcbiAgICAgIGlmIChTUkNTRVRfQVRUUlNbbG93ZXJdKSB2YWx1ZSA9IHNhbml0aXplU3Jjc2V0KHZhbHVlKTtcbiAgICAgIHRoaXMuYnVmLnB1c2goJyAnLCBhdHRyTmFtZSwgJz1cIicsIGVuY29kZUVudGl0aWVzKHZhbHVlKSwgJ1wiJyk7XG4gICAgfVxuICAgIHRoaXMuYnVmLnB1c2goJz4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZW5kRWxlbWVudChjdXJyZW50OiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoVkFMSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSkgJiYgIVZPSURfRUxFTUVOVFMuaGFzT3duUHJvcGVydHkodGFnTmFtZSkpIHtcbiAgICAgIHRoaXMuYnVmLnB1c2goJzwvJyk7XG4gICAgICB0aGlzLmJ1Zi5wdXNoKHRhZ05hbWUpO1xuICAgICAgdGhpcy5idWYucHVzaCgnPicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhcnMoY2hhcnM6IHN0cmluZykge1xuICAgIHRoaXMuYnVmLnB1c2goZW5jb2RlRW50aXRpZXMoY2hhcnMpKTtcbiAgfVxuXG4gIGNoZWNrQ2xvYmJlcmVkRWxlbWVudChub2RlOiBOb2RlLCBuZXh0Tm9kZTogTm9kZSk6IE5vZGUge1xuICAgIGlmIChuZXh0Tm9kZSAmJlxuICAgICAgICAobm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0Tm9kZSkgJlxuICAgICAgICAgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpID09PcKgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHNhbml0aXplIGh0bWwgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBjbG9iYmVyZWQ6ICR7XG4gICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkub3V0ZXJIVE1MfWApO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dE5vZGU7XG4gIH1cbn1cblxuLy8gUmVndWxhciBFeHByZXNzaW9ucyBmb3IgcGFyc2luZyB0YWdzIGFuZCBhdHRyaWJ1dGVzXG5jb25zdCBTVVJST0dBVEVfUEFJUl9SRUdFWFAgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuLy8gISB0byB+IGlzIHRoZSBBU0NJSSByYW5nZS5cbmNvbnN0IE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQID0gLyhbXlxcIy1+IHwhXSkvZztcblxuLyoqXG4gKiBFc2NhcGVzIGFsbCBwb3RlbnRpYWxseSBkYW5nZXJvdXMgY2hhcmFjdGVycywgc28gdGhhdCB0aGVcbiAqIHJlc3VsdGluZyBzdHJpbmcgY2FuIGJlIHNhZmVseSBpbnNlcnRlZCBpbnRvIGF0dHJpYnV0ZSBvclxuICogZWxlbWVudCB0ZXh0LlxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIFNVUlJPR0FURV9QQUlSX1JFR0VYUCxcbiAgICAgICAgICBmdW5jdGlvbihtYXRjaDogc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBoaSA9IG1hdGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBjb25zdCBsb3cgPSBtYXRjaC5jaGFyQ29kZUF0KDEpO1xuICAgICAgICAgICAgcmV0dXJuICcmIycgKyAoKChoaSAtIDB4RDgwMCkgKiAweDQwMCkgKyAobG93IC0gMHhEQzAwKSArIDB4MTAwMDApICsgJzsnO1xuICAgICAgICAgIH0pXG4gICAgICAucmVwbGFjZShcbiAgICAgICAgICBOT05fQUxQSEFOVU1FUklDX1JFR0VYUCxcbiAgICAgICAgICBmdW5jdGlvbihtYXRjaDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gJyYjJyArIG1hdGNoLmNoYXJDb2RlQXQoMCkgKyAnOyc7XG4gICAgICAgICAgfSlcbiAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmxldCBpbmVydEJvZHlIZWxwZXI6IEluZXJ0Qm9keUhlbHBlcjtcblxuLyoqXG4gKiBTYW5pdGl6ZXMgdGhlIGdpdmVuIHVuc2FmZSwgdW50cnVzdGVkIEhUTUwgZnJhZ21lbnQsIGFuZCByZXR1cm5zIEhUTUwgdGV4dCB0aGF0IGlzIHNhZmUgdG8gYWRkIHRvXG4gKiB0aGUgRE9NIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zYW5pdGl6ZUh0bWwoZGVmYXVsdERvYzogYW55LCB1bnNhZmVIdG1sSW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBpbmVydEJvZHlFbGVtZW50OiBIVE1MRWxlbWVudHxudWxsID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBpbmVydEJvZHlIZWxwZXIgPSBpbmVydEJvZHlIZWxwZXIgfHwgbmV3IEluZXJ0Qm9keUhlbHBlcihkZWZhdWx0RG9jKTtcbiAgICAvLyBNYWtlIHN1cmUgdW5zYWZlSHRtbCBpcyBhY3R1YWxseSBhIHN0cmluZyAoVHlwZVNjcmlwdCB0eXBlcyBhcmUgbm90IGVuZm9yY2VkIGF0IHJ1bnRpbWUpLlxuICAgIGxldCB1bnNhZmVIdG1sID0gdW5zYWZlSHRtbElucHV0ID8gU3RyaW5nKHVuc2FmZUh0bWxJbnB1dCkgOiAnJztcbiAgICBpbmVydEJvZHlFbGVtZW50ID0gaW5lcnRCb2R5SGVscGVyLmdldEluZXJ0Qm9keUVsZW1lbnQodW5zYWZlSHRtbCk7XG5cbiAgICAvLyBtWFNTIHByb3RlY3Rpb24uIFJlcGVhdGVkbHkgcGFyc2UgdGhlIGRvY3VtZW50IHRvIG1ha2Ugc3VyZSBpdCBzdGFiaWxpemVzLCBzbyB0aGF0IGEgYnJvd3NlclxuICAgIC8vIHRyeWluZyB0byBhdXRvLWNvcnJlY3QgaW5jb3JyZWN0IEhUTUwgY2Fubm90IGNhdXNlIGZvcm1lcmx5IGluZXJ0IEhUTUwgdG8gYmVjb21lIGRhbmdlcm91cy5cbiAgICBsZXQgbVhTU0F0dGVtcHRzID0gNTtcbiAgICBsZXQgcGFyc2VkSHRtbCA9IHVuc2FmZUh0bWw7XG5cbiAgICBkbyB7XG4gICAgICBpZiAobVhTU0F0dGVtcHRzID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNhbml0aXplIGh0bWwgYmVjYXVzZSB0aGUgaW5wdXQgaXMgdW5zdGFibGUnKTtcbiAgICAgIH1cbiAgICAgIG1YU1NBdHRlbXB0cy0tO1xuXG4gICAgICB1bnNhZmVIdG1sID0gcGFyc2VkSHRtbDtcbiAgICAgIHBhcnNlZEh0bWwgPSBpbmVydEJvZHlFbGVtZW50IS5pbm5lckhUTUw7XG4gICAgICBpbmVydEJvZHlFbGVtZW50ID0gaW5lcnRCb2R5SGVscGVyLmdldEluZXJ0Qm9keUVsZW1lbnQodW5zYWZlSHRtbCk7XG4gICAgfSB3aGlsZSAodW5zYWZlSHRtbCAhPT0gcGFyc2VkSHRtbCk7XG5cbiAgICBjb25zdCBzYW5pdGl6ZXIgPSBuZXcgU2FuaXRpemluZ0h0bWxTZXJpYWxpemVyKCk7XG4gICAgY29uc3Qgc2FmZUh0bWwgPSBzYW5pdGl6ZXIuc2FuaXRpemVDaGlsZHJlbihcbiAgICAgICAgZ2V0VGVtcGxhdGVDb250ZW50KGluZXJ0Qm9keUVsZW1lbnQhKSBhcyBFbGVtZW50IHx8IGluZXJ0Qm9keUVsZW1lbnQpO1xuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBzYW5pdGl6ZXIuc2FuaXRpemVkU29tZXRoaW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dBUk5JTkc6IHNhbml0aXppbmcgSFRNTCBzdHJpcHBlZCBzb21lIGNvbnRlbnQsIHNlZSBodHRwOi8vZy5jby9uZy9zZWN1cml0eSN4c3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2FmZUh0bWw7XG4gIH0gZmluYWxseSB7XG4gICAgLy8gSW4gY2FzZSBhbnl0aGluZyBnb2VzIHdyb25nLCBjbGVhciBvdXQgaW5lcnRFbGVtZW50IHRvIHJlc2V0IHRoZSBlbnRpcmUgRE9NIHN0cnVjdHVyZS5cbiAgICBpZiAoaW5lcnRCb2R5RWxlbWVudCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gZ2V0VGVtcGxhdGVDb250ZW50KGluZXJ0Qm9keUVsZW1lbnQpIHx8IGluZXJ0Qm9keUVsZW1lbnQ7XG4gICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlQ29udGVudChlbDogTm9kZSk6IE5vZGV8bnVsbCB7XG4gIHJldHVybiAnY29udGVudCcgaW4gKGVsIGFzIGFueSAvKiogTWljcm9zb2Z0L1R5cGVTY3JpcHQjMjE1MTcgKi8pICYmIGlzVGVtcGxhdGVFbGVtZW50KGVsKSA/XG4gICAgICBlbC5jb250ZW50IDpcbiAgICAgIG51bGw7XG59XG5mdW5jdGlvbiBpc1RlbXBsYXRlRWxlbWVudChlbDogTm9kZSk6IGVsIGlzIEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICByZXR1cm4gZWwubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGVsLm5vZGVOYW1lID09PSAnVEVNUExBVEUnO1xufVxuIl19