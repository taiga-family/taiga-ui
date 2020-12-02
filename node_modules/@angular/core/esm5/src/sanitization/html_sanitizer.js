/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __values } from "tslib";
import { isDevMode } from '../util/is_dev_mode';
import { InertBodyHelper } from './inert_body';
import { _sanitizeUrl, sanitizeSrcset } from './url_sanitizer';
function tagSet(tags) {
    var e_1, _a;
    var res = {};
    try {
        for (var _b = __values(tags.split(',')), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            res[t] = true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return res;
}
function merge() {
    var e_2, _a;
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i] = arguments[_i];
    }
    var res = {};
    try {
        for (var sets_1 = __values(sets), sets_1_1 = sets_1.next(); !sets_1_1.done; sets_1_1 = sets_1.next()) {
            var s = sets_1_1.value;
            for (var v in s) {
                if (s.hasOwnProperty(v))
                    res[v] = true;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (sets_1_1 && !sets_1_1.done && (_a = sets_1.return)) _a.call(sets_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
    'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
    'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
// Inline Elements - HTML5
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
    'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
    'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
export var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
export var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
// Attributes that have special href set hence need to be sanitized
export var SRCSET_ATTRS = tagSet('srcset');
var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
    'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
    'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
    'valign,value,vspace,width');
// Accessibility attributes as per WAI-ARIA 1.1 (W3C Working Draft 14 December 2018)
var ARIA_ATTRS = tagSet('aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,' +
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
export var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS, ARIA_ATTRS);
// Elements whose content should not be traversed/preserved, if the elements themselves are invalid.
//
// Typically, `<invalid>Some content</invalid>` would traverse (and in this case preserve)
// `Some content`, but strip `invalid-element` opening/closing tags. For some elements, though, we
// don't want to preserve the content, if the elements themselves are going to be removed.
var SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS = tagSet('script,style,template');
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */
var SanitizingHtmlSerializer = /** @class */ (function () {
    function SanitizingHtmlSerializer() {
        // Explicitly track if something was stripped, to avoid accidentally warning of sanitization just
        // because characters were re-encoded.
        this.sanitizedSomething = false;
        this.buf = [];
    }
    SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
        // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
        // However this code never accesses properties off of `document` before deleting its contents
        // again, so it shouldn't be vulnerable to DOM clobbering.
        var current = el.firstChild;
        var traverseContent = true;
        while (current) {
            if (current.nodeType === Node.ELEMENT_NODE) {
                traverseContent = this.startElement(current);
            }
            else if (current.nodeType === Node.TEXT_NODE) {
                this.chars(current.nodeValue);
            }
            else {
                // Strip non-element, non-text nodes.
                this.sanitizedSomething = true;
            }
            if (traverseContent && current.firstChild) {
                current = current.firstChild;
                continue;
            }
            while (current) {
                // Leaving the element. Walk up and to the right, closing tags as we go.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    this.endElement(current);
                }
                var next = this.checkClobberedElement(current, current.nextSibling);
                if (next) {
                    current = next;
                    break;
                }
                current = this.checkClobberedElement(current, current.parentNode);
            }
        }
        return this.buf.join('');
    };
    /**
     * Sanitizes an opening element tag (if valid) and returns whether the element's contents should
     * be traversed. Element content must always be traversed (even if the element itself is not
     * valid/safe), unless the element is one of `SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS`.
     *
     * @param element The element to sanitize.
     * @return True if the element's contents should be traversed.
     */
    SanitizingHtmlSerializer.prototype.startElement = function (element) {
        var tagName = element.nodeName.toLowerCase();
        if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
            this.sanitizedSomething = true;
            return !SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS.hasOwnProperty(tagName);
        }
        this.buf.push('<');
        this.buf.push(tagName);
        var elAttrs = element.attributes;
        for (var i = 0; i < elAttrs.length; i++) {
            var elAttr = elAttrs.item(i);
            var attrName = elAttr.name;
            var lower = attrName.toLowerCase();
            if (!VALID_ATTRS.hasOwnProperty(lower)) {
                this.sanitizedSomething = true;
                continue;
            }
            var value = elAttr.value;
            // TODO(martinprobst): Special case image URIs for data:image/...
            if (URI_ATTRS[lower])
                value = _sanitizeUrl(value);
            if (SRCSET_ATTRS[lower])
                value = sanitizeSrcset(value);
            this.buf.push(' ', attrName, '="', encodeEntities(value), '"');
        }
        this.buf.push('>');
        return true;
    };
    SanitizingHtmlSerializer.prototype.endElement = function (current) {
        var tagName = current.nodeName.toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
            this.buf.push('</');
            this.buf.push(tagName);
            this.buf.push('>');
        }
    };
    SanitizingHtmlSerializer.prototype.chars = function (chars) {
        this.buf.push(encodeEntities(chars));
    };
    SanitizingHtmlSerializer.prototype.checkClobberedElement = function (node, nextNode) {
        if (nextNode &&
            (node.compareDocumentPosition(nextNode) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
            throw new Error("Failed to sanitize html because the element is clobbered: " + node.outerHTML);
        }
        return nextNode;
    };
    return SanitizingHtmlSerializer;
}());
// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 */
function encodeEntities(value) {
    return value.replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, function (match) {
        var hi = match.charCodeAt(0);
        var low = match.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    })
        .replace(NON_ALPHANUMERIC_REGEXP, function (match) {
        return '&#' + match.charCodeAt(0) + ';';
    })
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
var inertBodyHelper;
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 */
export function _sanitizeHtml(defaultDoc, unsafeHtmlInput) {
    var inertBodyElement = null;
    try {
        inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc);
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        var unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
        inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        var mXSSAttempts = 5;
        var parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            parsedHtml = inertBodyElement.innerHTML;
            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
        } while (unsafeHtml !== parsedHtml);
        var sanitizer = new SanitizingHtmlSerializer();
        var safeHtml = sanitizer.sanitizeChildren(getTemplateContent(inertBodyElement) || inertBodyElement);
        if (isDevMode() && sanitizer.sanitizedSomething) {
            console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss');
        }
        return safeHtml;
    }
    finally {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        if (inertBodyElement) {
            var parent_1 = getTemplateContent(inertBodyElement) || inertBodyElement;
            while (parent_1.firstChild) {
                parent_1.removeChild(parent_1.firstChild);
            }
        }
    }
}
export function getTemplateContent(el) {
    return 'content' in el /** Microsoft/TypeScript#21517 */ && isTemplateElement(el) ?
        el.content :
        null;
}
function isTemplateElement(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.nodeName === 'TEMPLATE';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9zYW5pdGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vaHRtbF9zYW5pdGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0QsU0FBUyxNQUFNLENBQUMsSUFBWTs7SUFDMUIsSUFBTSxHQUFHLEdBQTJCLEVBQUUsQ0FBQzs7UUFDdkMsS0FBZ0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQTtZQUExQixJQUFNLENBQUMsV0FBQTtZQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQUE7Ozs7Ozs7OztJQUMvQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFTLEtBQUs7O0lBQUMsY0FBaUM7U0FBakMsVUFBaUMsRUFBakMscUJBQWlDLEVBQWpDLElBQWlDO1FBQWpDLHlCQUFpQzs7SUFDOUMsSUFBTSxHQUFHLEdBQTJCLEVBQUUsQ0FBQzs7UUFDdkMsS0FBZ0IsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO1lBQWpCLElBQU0sQ0FBQyxpQkFBQTtZQUNWLEtBQUssSUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDeEM7U0FDRjs7Ozs7Ozs7O0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFD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QUFDO0FBQ3pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7aXNEZXZNb2RlfSBmcm9tICcuLi91dGlsL2lzX2Rldl9tb2RlJztcbmltcG9ydCB7SW5lcnRCb2R5SGVscGVyfSBmcm9tICcuL2luZXJ0X2JvZHknO1xuaW1wb3J0IHtfc2FuaXRpemVVcmwsIHNhbml0aXplU3Jjc2V0fSBmcm9tICcuL3VybF9zYW5pdGl6ZXInO1xuXG5mdW5jdGlvbiB0YWdTZXQodGFnczogc3RyaW5nKToge1trOiBzdHJpbmddOiBib29sZWFufSB7XG4gIGNvbnN0IHJlczoge1trOiBzdHJpbmddOiBib29sZWFufSA9IHt9O1xuICBmb3IgKGNvbnN0IHQgb2YgdGFncy5zcGxpdCgnLCcpKSByZXNbdF0gPSB0cnVlO1xuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtZXJnZSguLi5zZXRzOiB7W2s6IHN0cmluZ106IGJvb2xlYW59W10pOiB7W2s6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgY29uc3QgcmVzOiB7W2s6IHN0cmluZ106IGJvb2xlYW59ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBzZXRzKSB7XG4gICAgZm9yIChjb25zdCB2IGluIHMpIHtcbiAgICAgIGlmIChzLmhhc093blByb3BlcnR5KHYpKSByZXNbdl0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vLyBHb29kIHNvdXJjZSBvZiBpbmZvIGFib3V0IGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzXG4vLyBodHRwOi8vZGV2LnczLm9yZy9odG1sNS9zcGVjL092ZXJ2aWV3Lmh0bWwjc2VtYW50aWNzXG4vLyBodHRwOi8vc2ltb24uaHRtbDUub3JnL2h0bWwtZWxlbWVudHNcblxuLy8gU2FmZSBWb2lkIEVsZW1lbnRzIC0gSFRNTDVcbi8vIGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMvT3ZlcnZpZXcuaHRtbCN2b2lkLWVsZW1lbnRzXG5jb25zdCBWT0lEX0VMRU1FTlRTID0gdGFnU2V0KCdhcmVhLGJyLGNvbCxocixpbWcsd2JyJyk7XG5cbi8vIEVsZW1lbnRzIHRoYXQgeW91IGNhbiwgaW50ZW50aW9uYWxseSwgbGVhdmUgb3BlbiAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXG4vLyBodHRwOi8vZGV2LnczLm9yZy9odG1sNS9zcGVjL092ZXJ2aWV3Lmh0bWwjb3B0aW9uYWwtdGFnc1xuY29uc3QgT1BUSU9OQUxfRU5EX1RBR19CTE9DS19FTEVNRU5UUyA9IHRhZ1NldCgnY29sZ3JvdXAsZGQsZHQsbGkscCx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0cicpO1xuY29uc3QgT1BUSU9OQUxfRU5EX1RBR19JTkxJTkVfRUxFTUVOVFMgPSB0YWdTZXQoJ3JwLHJ0Jyk7XG5jb25zdCBPUFRJT05BTF9FTkRfVEFHX0VMRU1FTlRTID1cbiAgICBtZXJnZShPUFRJT05BTF9FTkRfVEFHX0lOTElORV9FTEVNRU5UUywgT1BUSU9OQUxfRU5EX1RBR19CTE9DS19FTEVNRU5UUyk7XG5cbi8vIFNhZmUgQmxvY2sgRWxlbWVudHMgLSBIVE1MNVxuY29uc3QgQkxPQ0tfRUxFTUVOVFMgPSBtZXJnZShcbiAgICBPUFRJT05BTF9FTkRfVEFHX0JMT0NLX0VMRU1FTlRTLFxuICAgIHRhZ1NldChcbiAgICAgICAgJ2FkZHJlc3MsYXJ0aWNsZSwnICtcbiAgICAgICAgJ2FzaWRlLGJsb2NrcXVvdGUsY2FwdGlvbixjZW50ZXIsZGVsLGRldGFpbHMsZGlhbG9nLGRpcixkaXYsZGwsZmlndXJlLGZpZ2NhcHRpb24sZm9vdGVyLGgxLGgyLGgzLGg0LGg1LCcgK1xuICAgICAgICAnaDYsaGVhZGVyLGhncm91cCxocixpbnMsbWFpbixtYXAsbWVudSxuYXYsb2wscHJlLHNlY3Rpb24sc3VtbWFyeSx0YWJsZSx1bCcpKTtcblxuLy8gSW5saW5lIEVsZW1lbnRzIC0gSFRNTDVcbmNvbnN0IElOTElORV9FTEVNRU5UUyA9IG1lcmdlKFxuICAgIE9QVElPTkFMX0VORF9UQUdfSU5MSU5FX0VMRU1FTlRTLFxuICAgIHRhZ1NldChcbiAgICAgICAgJ2EsYWJicixhY3JvbnltLGF1ZGlvLGIsJyArXG4gICAgICAgICdiZGksYmRvLGJpZyxicixjaXRlLGNvZGUsZGVsLGRmbixlbSxmb250LGksaW1nLGlucyxrYmQsbGFiZWwsbWFwLG1hcmsscGljdHVyZSxxLHJ1YnkscnAscnQscywnICtcbiAgICAgICAgJ3NhbXAsc21hbGwsc291cmNlLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRpbWUsdHJhY2ssdHQsdSx2YXIsdmlkZW8nKSk7XG5cbmV4cG9ydCBjb25zdCBWQUxJRF9FTEVNRU5UUyA9XG4gICAgbWVyZ2UoVk9JRF9FTEVNRU5UUywgQkxPQ0tfRUxFTUVOVFMsIElOTElORV9FTEVNRU5UUywgT1BUSU9OQUxfRU5EX1RBR19FTEVNRU5UUyk7XG5cbi8vIEF0dHJpYnV0ZXMgdGhhdCBoYXZlIGhyZWYgYW5kIGhlbmNlIG5lZWQgdG8gYmUgc2FuaXRpemVkXG5leHBvcnQgY29uc3QgVVJJX0FUVFJTID0gdGFnU2V0KCdiYWNrZ3JvdW5kLGNpdGUsaHJlZixpdGVtdHlwZSxsb25nZGVzYyxwb3N0ZXIsc3JjLHhsaW5rOmhyZWYnKTtcblxuLy8gQXR0cmlidXRlcyB0aGF0IGhhdmUgc3BlY2lhbCBocmVmIHNldCBoZW5jZSBuZWVkIHRvIGJlIHNhbml0aXplZFxuZXhwb3J0IGNvbnN0IFNSQ1NFVF9BVFRSUyA9IHRhZ1NldCgnc3Jjc2V0Jyk7XG5cbmNvbnN0IEhUTUxfQVRUUlMgPSB0YWdTZXQoXG4gICAgJ2FiYnIsYWNjZXNza2V5LGFsaWduLGFsdCxhdXRvcGxheSxheGlzLGJnY29sb3IsYm9yZGVyLGNlbGxwYWRkaW5nLGNlbGxzcGFjaW5nLGNsYXNzLGNsZWFyLGNvbG9yLGNvbHMsY29sc3BhbiwnICtcbiAgICAnY29tcGFjdCxjb250cm9scyxjb29yZHMsZGF0ZXRpbWUsZGVmYXVsdCxkaXIsZG93bmxvYWQsZmFjZSxoZWFkZXJzLGhlaWdodCxoaWRkZW4saHJlZmxhbmcsaHNwYWNlLCcgK1xuICAgICdpc21hcCxpdGVtc2NvcGUsaXRlbXByb3Asa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxvb3AsbWVkaWEsbXV0ZWQsbm9ocmVmLG5vd3JhcCxvcGVuLHByZWxvYWQscmVsLHJldixyb2xlLHJvd3Mscm93c3BhbixydWxlcywnICtcbiAgICAnc2NvcGUsc2Nyb2xsaW5nLHNoYXBlLHNpemUsc2l6ZXMsc3BhbixzcmNsYW5nLHN0YXJ0LHN1bW1hcnksdGFiaW5kZXgsdGFyZ2V0LHRpdGxlLHRyYW5zbGF0ZSx0eXBlLHVzZW1hcCwnICtcbiAgICAndmFsaWduLHZhbHVlLHZzcGFjZSx3aWR0aCcpO1xuXG4vLyBBY2Nlc3NpYmlsaXR5IGF0dHJpYnV0ZXMgYXMgcGVyIFdBSS1BUklBIDEuMSAoVzNDIFdvcmtpbmcgRHJhZnQgMTQgRGVjZW1iZXIgMjAxOClcbmNvbnN0IEFSSUFfQVRUUlMgPSB0YWdTZXQoXG4gICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCxhcmlhLWF0b21pYyxhcmlhLWF1dG9jb21wbGV0ZSxhcmlhLWJ1c3ksYXJpYS1jaGVja2VkLGFyaWEtY29sY291bnQsYXJpYS1jb2xpbmRleCwnICtcbiAgICAnYXJpYS1jb2xzcGFuLGFyaWEtY29udHJvbHMsYXJpYS1jdXJyZW50LGFyaWEtZGVzY3JpYmVkYnksYXJpYS1kZXRhaWxzLGFyaWEtZGlzYWJsZWQsYXJpYS1kcm9wZWZmZWN0LCcgK1xuICAgICdhcmlhLWVycm9ybWVzc2FnZSxhcmlhLWV4cGFuZGVkLGFyaWEtZmxvd3RvLGFyaWEtZ3JhYmJlZCxhcmlhLWhhc3BvcHVwLGFyaWEtaGlkZGVuLGFyaWEtaW52YWxpZCwnICtcbiAgICAnYXJpYS1rZXlzaG9ydGN1dHMsYXJpYS1sYWJlbCxhcmlhLWxhYmVsbGVkYnksYXJpYS1sZXZlbCxhcmlhLWxpdmUsYXJpYS1tb2RhbCxhcmlhLW11bHRpbGluZSwnICtcbiAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUsYXJpYS1vcmllbnRhdGlvbixhcmlhLW93bnMsYXJpYS1wbGFjZWhvbGRlcixhcmlhLXBvc2luc2V0LGFyaWEtcHJlc3NlZCxhcmlhLXJlYWRvbmx5LCcgK1xuICAgICdhcmlhLXJlbGV2YW50LGFyaWEtcmVxdWlyZWQsYXJpYS1yb2xlZGVzY3JpcHRpb24sYXJpYS1yb3djb3VudCxhcmlhLXJvd2luZGV4LGFyaWEtcm93c3BhbixhcmlhLXNlbGVjdGVkLCcgK1xuICAgICdhcmlhLXNldHNpemUsYXJpYS1zb3J0LGFyaWEtdmFsdWVtYXgsYXJpYS12YWx1ZW1pbixhcmlhLXZhbHVlbm93LGFyaWEtdmFsdWV0ZXh0Jyk7XG5cbi8vIE5COiBUaGlzIGN1cnJlbnRseSBjb25zY2lvdXNseSBkb2Vzbid0IHN1cHBvcnQgU1ZHLiBTVkcgc2FuaXRpemF0aW9uIGhhcyBoYWQgc2V2ZXJhbCBzZWN1cml0eVxuLy8gaXNzdWVzIGluIHRoZSBwYXN0LCBzbyBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSBpdCBvdXQgaWYgcG9zc2libGUuIElmIHN1cHBvcnQgZm9yIGJpbmRpbmcgU1ZHIHZpYVxuLy8gaW5uZXJIVE1MIGlzIHJlcXVpcmVkLCBTVkcgYXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgaGVyZS5cblxuLy8gTkI6IFNhbml0aXphdGlvbiBkb2VzIG5vdCBhbGxvdyA8Zm9ybT4gZWxlbWVudHMgb3Igb3RoZXIgYWN0aXZlIGVsZW1lbnRzICg8YnV0dG9uPiBldGMpLiBUaG9zZVxuLy8gY2FuIGJlIHNhbml0aXplZCwgYnV0IHRoZXkgaW5jcmVhc2Ugc2VjdXJpdHkgc3VyZmFjZSBhcmVhIHdpdGhvdXQgYSBsZWdpdGltYXRlIHVzZSBjYXNlLCBzbyB0aGV5XG4vLyBhcmUgbGVmdCBvdXQgaGVyZS5cblxuZXhwb3J0IGNvbnN0IFZBTElEX0FUVFJTID0gbWVyZ2UoVVJJX0FUVFJTLCBTUkNTRVRfQVRUUlMsIEhUTUxfQVRUUlMsIEFSSUFfQVRUUlMpO1xuXG4vLyBFbGVtZW50cyB3aG9zZSBjb250ZW50IHNob3VsZCBub3QgYmUgdHJhdmVyc2VkL3ByZXNlcnZlZCwgaWYgdGhlIGVsZW1lbnRzIHRoZW1zZWx2ZXMgYXJlIGludmFsaWQuXG4vL1xuLy8gVHlwaWNhbGx5LCBgPGludmFsaWQ+U29tZSBjb250ZW50PC9pbnZhbGlkPmAgd291bGQgdHJhdmVyc2UgKGFuZCBpbiB0aGlzIGNhc2UgcHJlc2VydmUpXG4vLyBgU29tZSBjb250ZW50YCwgYnV0IHN0cmlwIGBpbnZhbGlkLWVsZW1lbnRgIG9wZW5pbmcvY2xvc2luZyB0YWdzLiBGb3Igc29tZSBlbGVtZW50cywgdGhvdWdoLCB3ZVxuLy8gZG9uJ3Qgd2FudCB0byBwcmVzZXJ2ZSB0aGUgY29udGVudCwgaWYgdGhlIGVsZW1lbnRzIHRoZW1zZWx2ZXMgYXJlIGdvaW5nIHRvIGJlIHJlbW92ZWQuXG5jb25zdCBTS0lQX1RSQVZFUlNJTkdfQ09OVEVOVF9JRl9JTlZBTElEX0VMRU1FTlRTID0gdGFnU2V0KCdzY3JpcHQsc3R5bGUsdGVtcGxhdGUnKTtcblxuLyoqXG4gKiBTYW5pdGl6aW5nSHRtbFNlcmlhbGl6ZXIgc2VyaWFsaXplcyBhIERPTSBmcmFnbWVudCwgc3RyaXBwaW5nIG91dCBhbnkgdW5zYWZlIGVsZW1lbnRzIGFuZCB1bnNhZmVcbiAqIGF0dHJpYnV0ZXMuXG4gKi9cbmNsYXNzIFNhbml0aXppbmdIdG1sU2VyaWFsaXplciB7XG4gIC8vIEV4cGxpY2l0bHkgdHJhY2sgaWYgc29tZXRoaW5nIHdhcyBzdHJpcHBlZCwgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHdhcm5pbmcgb2Ygc2FuaXRpemF0aW9uIGp1c3RcbiAgLy8gYmVjYXVzZSBjaGFyYWN0ZXJzIHdlcmUgcmUtZW5jb2RlZC5cbiAgcHVibGljIHNhbml0aXplZFNvbWV0aGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGJ1Zjogc3RyaW5nW10gPSBbXTtcblxuICBzYW5pdGl6ZUNoaWxkcmVuKGVsOiBFbGVtZW50KTogc3RyaW5nIHtcbiAgICAvLyBUaGlzIGNhbm5vdCB1c2UgYSBUcmVlV2Fsa2VyLCBhcyBpdCBoYXMgdG8gcnVuIG9uIEFuZ3VsYXIncyB2YXJpb3VzIERPTSBhZGFwdGVycy5cbiAgICAvLyBIb3dldmVyIHRoaXMgY29kZSBuZXZlciBhY2Nlc3NlcyBwcm9wZXJ0aWVzIG9mZiBvZiBgZG9jdW1lbnRgIGJlZm9yZSBkZWxldGluZyBpdHMgY29udGVudHNcbiAgICAvLyBhZ2Fpbiwgc28gaXQgc2hvdWxkbid0IGJlIHZ1bG5lcmFibGUgdG8gRE9NIGNsb2JiZXJpbmcuXG4gICAgbGV0IGN1cnJlbnQ6IE5vZGUgPSBlbC5maXJzdENoaWxkITtcbiAgICBsZXQgdHJhdmVyc2VDb250ZW50ID0gdHJ1ZTtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHRyYXZlcnNlQ29udGVudCA9IHRoaXMuc3RhcnRFbGVtZW50KGN1cnJlbnQgYXMgRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRoaXMuY2hhcnMoY3VycmVudC5ub2RlVmFsdWUhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFN0cmlwIG5vbi1lbGVtZW50LCBub24tdGV4dCBub2Rlcy5cbiAgICAgICAgdGhpcy5zYW5pdGl6ZWRTb21ldGhpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRyYXZlcnNlQ29udGVudCAmJiBjdXJyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZmlyc3RDaGlsZCE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgLy8gTGVhdmluZyB0aGUgZWxlbWVudC4gV2FsayB1cCBhbmQgdG8gdGhlIHJpZ2h0LCBjbG9zaW5nIHRhZ3MgYXMgd2UgZ28uXG4gICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHRoaXMuZW5kRWxlbWVudChjdXJyZW50IGFzIEVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLmNoZWNrQ2xvYmJlcmVkRWxlbWVudChjdXJyZW50LCBjdXJyZW50Lm5leHRTaWJsaW5nISk7XG5cbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQgPSB0aGlzLmNoZWNrQ2xvYmJlcmVkRWxlbWVudChjdXJyZW50LCBjdXJyZW50LnBhcmVudE5vZGUhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYnVmLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplcyBhbiBvcGVuaW5nIGVsZW1lbnQgdGFnIChpZiB2YWxpZCkgYW5kIHJldHVybnMgd2hldGhlciB0aGUgZWxlbWVudCdzIGNvbnRlbnRzIHNob3VsZFxuICAgKiBiZSB0cmF2ZXJzZWQuIEVsZW1lbnQgY29udGVudCBtdXN0IGFsd2F5cyBiZSB0cmF2ZXJzZWQgKGV2ZW4gaWYgdGhlIGVsZW1lbnQgaXRzZWxmIGlzIG5vdFxuICAgKiB2YWxpZC9zYWZlKSwgdW5sZXNzIHRoZSBlbGVtZW50IGlzIG9uZSBvZiBgU0tJUF9UUkFWRVJTSU5HX0NPTlRFTlRfSUZfSU5WQUxJRF9FTEVNRU5UU2AuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHNhbml0aXplLlxuICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIGVsZW1lbnQncyBjb250ZW50cyBzaG91bGQgYmUgdHJhdmVyc2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGFydEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFWQUxJRF9FTEVNRU5UUy5oYXNPd25Qcm9wZXJ0eSh0YWdOYW1lKSkge1xuICAgICAgdGhpcy5zYW5pdGl6ZWRTb21ldGhpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuICFTS0lQX1RSQVZFUlNJTkdfQ09OVEVOVF9JRl9JTlZBTElEX0VMRU1FTlRTLmhhc093blByb3BlcnR5KHRhZ05hbWUpO1xuICAgIH1cbiAgICB0aGlzLmJ1Zi5wdXNoKCc8Jyk7XG4gICAgdGhpcy5idWYucHVzaCh0YWdOYW1lKTtcbiAgICBjb25zdCBlbEF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxBdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxBdHRyID0gZWxBdHRycy5pdGVtKGkpO1xuICAgICAgY29uc3QgYXR0ck5hbWUgPSBlbEF0dHIhLm5hbWU7XG4gICAgICBjb25zdCBsb3dlciA9IGF0dHJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIVZBTElEX0FUVFJTLmhhc093blByb3BlcnR5KGxvd2VyKSkge1xuICAgICAgICB0aGlzLnNhbml0aXplZFNvbWV0aGluZyA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IHZhbHVlID0gZWxBdHRyIS52YWx1ZTtcbiAgICAgIC8vIFRPRE8obWFydGlucHJvYnN0KTogU3BlY2lhbCBjYXNlIGltYWdlIFVSSXMgZm9yIGRhdGE6aW1hZ2UvLi4uXG4gICAgICBpZiAoVVJJX0FUVFJTW2xvd2VyXSkgdmFsdWUgPSBfc2FuaXRpemVVcmwodmFsdWUpO1xuICAgICAgaWYgKFNSQ1NFVF9BVFRSU1tsb3dlcl0pIHZhbHVlID0gc2FuaXRpemVTcmNzZXQodmFsdWUpO1xuICAgICAgdGhpcy5idWYucHVzaCgnICcsIGF0dHJOYW1lLCAnPVwiJywgZW5jb2RlRW50aXRpZXModmFsdWUpLCAnXCInKTtcbiAgICB9XG4gICAgdGhpcy5idWYucHVzaCgnPicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBlbmRFbGVtZW50KGN1cnJlbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChWQUxJRF9FTEVNRU5UUy5oYXNPd25Qcm9wZXJ0eSh0YWdOYW1lKSAmJiAhVk9JRF9FTEVNRU5UUy5oYXNPd25Qcm9wZXJ0eSh0YWdOYW1lKSkge1xuICAgICAgdGhpcy5idWYucHVzaCgnPC8nKTtcbiAgICAgIHRoaXMuYnVmLnB1c2godGFnTmFtZSk7XG4gICAgICB0aGlzLmJ1Zi5wdXNoKCc+Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFycyhjaGFyczogc3RyaW5nKSB7XG4gICAgdGhpcy5idWYucHVzaChlbmNvZGVFbnRpdGllcyhjaGFycykpO1xuICB9XG5cbiAgY2hlY2tDbG9iYmVyZWRFbGVtZW50KG5vZGU6IE5vZGUsIG5leHROb2RlOiBOb2RlKTogTm9kZSB7XG4gICAgaWYgKG5leHROb2RlICYmXG4gICAgICAgIChub2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5leHROb2RlKSAmXG4gICAgICAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkgPT09wqBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2FuaXRpemUgaHRtbCBiZWNhdXNlIHRoZSBlbGVtZW50IGlzIGNsb2JiZXJlZDogJHtcbiAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5vdXRlckhUTUx9YCk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0Tm9kZTtcbiAgfVxufVxuXG4vLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbmNvbnN0IFNVUlJPR0FURV9QQUlSX1JFR0VYUCA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG4vLyAhIHRvIH4gaXMgdGhlIEFTQ0lJIHJhbmdlLlxuY29uc3QgTk9OX0FMUEhBTlVNRVJJQ19SRUdFWFAgPSAvKFteXFwjLX4gfCFdKS9nO1xuXG4vKipcbiAqIEVzY2FwZXMgYWxsIHBvdGVudGlhbGx5IGRhbmdlcm91cyBjaGFyYWN0ZXJzLCBzbyB0aGF0IHRoZVxuICogcmVzdWx0aW5nIHN0cmluZyBjYW4gYmUgc2FmZWx5IGluc2VydGVkIGludG8gYXR0cmlidXRlIG9yXG4gKiBlbGVtZW50IHRleHQuXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gZW5jb2RlRW50aXRpZXModmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgU1VSUk9HQVRFX1BBSVJfUkVHRVhQLFxuICAgICAgICAgIGZ1bmN0aW9uKG1hdGNoOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpID0gbWF0Y2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IG1hdGNoLmNoYXJDb2RlQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gJyYjJyArICgoKGhpIC0gMHhEODAwKSAqIDB4NDAwKSArIChsb3cgLSAweERDMDApICsgMHgxMDAwMCkgKyAnOyc7XG4gICAgICAgICAgfSlcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIE5PTl9BTFBIQU5VTUVSSUNfUkVHRVhQLFxuICAgICAgICAgIGZ1bmN0aW9uKG1hdGNoOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAnJiMnICsgbWF0Y2guY2hhckNvZGVBdCgwKSArICc7JztcbiAgICAgICAgICB9KVxuICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxubGV0IGluZXJ0Qm9keUhlbHBlcjogSW5lcnRCb2R5SGVscGVyO1xuXG4vKipcbiAqIFNhbml0aXplcyB0aGUgZ2l2ZW4gdW5zYWZlLCB1bnRydXN0ZWQgSFRNTCBmcmFnbWVudCwgYW5kIHJldHVybnMgSFRNTCB0ZXh0IHRoYXQgaXMgc2FmZSB0byBhZGQgdG9cbiAqIHRoZSBET00gaW4gYSBicm93c2VyIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gX3Nhbml0aXplSHRtbChkZWZhdWx0RG9jOiBhbnksIHVuc2FmZUh0bWxJbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IGluZXJ0Qm9keUVsZW1lbnQ6IEhUTUxFbGVtZW50fG51bGwgPSBudWxsO1xuICB0cnkge1xuICAgIGluZXJ0Qm9keUhlbHBlciA9IGluZXJ0Qm9keUhlbHBlciB8fCBuZXcgSW5lcnRCb2R5SGVscGVyKGRlZmF1bHREb2MpO1xuICAgIC8vIE1ha2Ugc3VyZSB1bnNhZmVIdG1sIGlzIGFjdHVhbGx5IGEgc3RyaW5nIChUeXBlU2NyaXB0IHR5cGVzIGFyZSBub3QgZW5mb3JjZWQgYXQgcnVudGltZSkuXG4gICAgbGV0IHVuc2FmZUh0bWwgPSB1bnNhZmVIdG1sSW5wdXQgPyBTdHJpbmcodW5zYWZlSHRtbElucHV0KSA6ICcnO1xuICAgIGluZXJ0Qm9keUVsZW1lbnQgPSBpbmVydEJvZHlIZWxwZXIuZ2V0SW5lcnRCb2R5RWxlbWVudCh1bnNhZmVIdG1sKTtcblxuICAgIC8vIG1YU1MgcHJvdGVjdGlvbi4gUmVwZWF0ZWRseSBwYXJzZSB0aGUgZG9jdW1lbnQgdG8gbWFrZSBzdXJlIGl0IHN0YWJpbGl6ZXMsIHNvIHRoYXQgYSBicm93c2VyXG4gICAgLy8gdHJ5aW5nIHRvIGF1dG8tY29ycmVjdCBpbmNvcnJlY3QgSFRNTCBjYW5ub3QgY2F1c2UgZm9ybWVybHkgaW5lcnQgSFRNTCB0byBiZWNvbWUgZGFuZ2Vyb3VzLlxuICAgIGxldCBtWFNTQXR0ZW1wdHMgPSA1O1xuICAgIGxldCBwYXJzZWRIdG1sID0gdW5zYWZlSHRtbDtcblxuICAgIGRvIHtcbiAgICAgIGlmIChtWFNTQXR0ZW1wdHMgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc2FuaXRpemUgaHRtbCBiZWNhdXNlIHRoZSBpbnB1dCBpcyB1bnN0YWJsZScpO1xuICAgICAgfVxuICAgICAgbVhTU0F0dGVtcHRzLS07XG5cbiAgICAgIHVuc2FmZUh0bWwgPSBwYXJzZWRIdG1sO1xuICAgICAgcGFyc2VkSHRtbCA9IGluZXJ0Qm9keUVsZW1lbnQhLmlubmVySFRNTDtcbiAgICAgIGluZXJ0Qm9keUVsZW1lbnQgPSBpbmVydEJvZHlIZWxwZXIuZ2V0SW5lcnRCb2R5RWxlbWVudCh1bnNhZmVIdG1sKTtcbiAgICB9IHdoaWxlICh1bnNhZmVIdG1sICE9PSBwYXJzZWRIdG1sKTtcblxuICAgIGNvbnN0IHNhbml0aXplciA9IG5ldyBTYW5pdGl6aW5nSHRtbFNlcmlhbGl6ZXIoKTtcbiAgICBjb25zdCBzYWZlSHRtbCA9IHNhbml0aXplci5zYW5pdGl6ZUNoaWxkcmVuKFxuICAgICAgICBnZXRUZW1wbGF0ZUNvbnRlbnQoaW5lcnRCb2R5RWxlbWVudCEpIGFzIEVsZW1lbnQgfHwgaW5lcnRCb2R5RWxlbWVudCk7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIHNhbml0aXplci5zYW5pdGl6ZWRTb21ldGhpbmcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV0FSTklORzogc2FuaXRpemluZyBIVE1MIHN0cmlwcGVkIHNvbWUgY29udGVudCwgc2VlIGh0dHA6Ly9nLmNvL25nL3NlY3VyaXR5I3hzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBzYWZlSHRtbDtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBJbiBjYXNlIGFueXRoaW5nIGdvZXMgd3JvbmcsIGNsZWFyIG91dCBpbmVydEVsZW1lbnQgdG8gcmVzZXQgdGhlIGVudGlyZSBET00gc3RydWN0dXJlLlxuICAgIGlmIChpbmVydEJvZHlFbGVtZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBnZXRUZW1wbGF0ZUNvbnRlbnQoaW5lcnRCb2R5RWxlbWVudCkgfHwgaW5lcnRCb2R5RWxlbWVudDtcbiAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGVDb250ZW50KGVsOiBOb2RlKTogTm9kZXxudWxsIHtcbiAgcmV0dXJuICdjb250ZW50JyBpbiAoZWwgYXMgYW55IC8qKiBNaWNyb3NvZnQvVHlwZVNjcmlwdCMyMTUxNyAqLykgJiYgaXNUZW1wbGF0ZUVsZW1lbnQoZWwpID9cbiAgICAgIGVsLmNvbnRlbnQgOlxuICAgICAgbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVGVtcGxhdGVFbGVtZW50KGVsOiBOb2RlKTogZWwgaXMgSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gIHJldHVybiBlbC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgZWwubm9kZU5hbWUgPT09ICdURU1QTEFURSc7XG59XG4iXX0=