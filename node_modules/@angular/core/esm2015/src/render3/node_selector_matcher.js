/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/node_selector_matcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import '../util/ng_dev_mode';
import { assertDefined, assertEqual, assertNotEqual } from '../util/assert';
import { unusedValueExportToPlacateAjd as unused1 } from './interfaces/node';
import { unusedValueExportToPlacateAjd as unused2 } from './interfaces/projection';
import { classIndexOf } from './styling/class_differ';
import { isNameOnlyAttributeMarker } from './util/attrs_utils';
/** @type {?} */
const unusedValueToPlacateAjd = unused1 + unused2;
/** @type {?} */
const NG_TEMPLATE_SELECTOR = 'ng-template';
/**
 * Search the `TAttributes` to see if it contains `cssClassToMatch` (case insensitive)
 *
 * @param {?} attrs `TAttributes` to search through.
 * @param {?} cssClassToMatch class to match (lowercase)
 * @param {?} isProjectionMode Whether or not class matching should look into the attribute `class` in
 *    addition to the `AttributeMarker.Classes`.
 * @return {?}
 */
function isCssClassMatching(attrs, cssClassToMatch, isProjectionMode) {
    // TODO(misko): The fact that this function needs to know about `isProjectionMode` seems suspect.
    // It is strange to me that sometimes the class information comes in form of `class` attribute
    // and sometimes in form of `AttributeMarker.Classes`. Some investigation is needed to determine
    // if that is the right behavior.
    ngDevMode &&
        assertEqual(cssClassToMatch, cssClassToMatch.toLowerCase(), 'Class name expected to be lowercase.');
    /** @type {?} */
    let i = 0;
    while (i < attrs.length) {
        /** @type {?} */
        let item = attrs[i++];
        if (isProjectionMode && item === 'class') {
            item = (/** @type {?} */ (attrs[i]));
            if (classIndexOf(item.toLowerCase(), cssClassToMatch, 0) !== -1) {
                return true;
            }
        }
        else if (item === 1 /* Classes */) {
            // We found the classes section. Start searching for the class.
            while (i < attrs.length && typeof (item = attrs[i++]) == 'string') {
                // while we have strings
                if (item.toLowerCase() === cssClassToMatch)
                    return true;
            }
            return false;
        }
    }
    return false;
}
/**
 * Checks whether the `tNode` represents an inline template (e.g. `*ngFor`).
 *
 * @param {?} tNode current TNode
 * @return {?}
 */
export function isInlineTemplate(tNode) {
    return tNode.type === 0 /* Container */ && tNode.tagName !== NG_TEMPLATE_SELECTOR;
}
/**
 * Function that checks whether a given tNode matches tag-based selector and has a valid type.
 *
 * Matching can be performed in 2 modes: projection mode (when we project nodes) and regular
 * directive matching mode:
 * - in the "directive matching" mode we do _not_ take TContainer's tagName into account if it is
 * different from NG_TEMPLATE_SELECTOR (value different from NG_TEMPLATE_SELECTOR indicates that a
 * tag name was extracted from * syntax so we would match the same directive twice);
 * - in the "projection" mode, we use a tag name potentially extracted from the * syntax processing
 * (applicable to TNodeType.Container only).
 * @param {?} tNode
 * @param {?} currentSelector
 * @param {?} isProjectionMode
 * @return {?}
 */
function hasTagAndTypeMatch(tNode, currentSelector, isProjectionMode) {
    /** @type {?} */
    const tagNameToCompare = tNode.type === 0 /* Container */ && !isProjectionMode ?
        NG_TEMPLATE_SELECTOR :
        tNode.tagName;
    return currentSelector === tagNameToCompare;
}
/**
 * A utility function to match an Ivy node static data against a simple CSS selector
 *
 * @param {?} tNode
 * @param {?} selector The selector to try matching against the node.
 * @param {?} isProjectionMode if `true` we are matching for content projection, otherwise we are doing
 * directive matching.
 * @return {?} true if node matches the selector.
 */
export function isNodeMatchingSelector(tNode, selector, isProjectionMode) {
    ngDevMode && assertDefined(selector[0], 'Selector should have a tag name');
    /** @type {?} */
    let mode = 4 /* ELEMENT */;
    /** @type {?} */
    const nodeAttrs = tNode.attrs || [];
    // Find the index of first attribute that has no value, only a name.
    /** @type {?} */
    const nameOnlyMarkerIdx = getNameOnlyMarkerIndex(nodeAttrs);
    // When processing ":not" selectors, we skip to the next ":not" if the
    // current one doesn't match
    /** @type {?} */
    let skipToNextSelector = false;
    for (let i = 0; i < selector.length; i++) {
        /** @type {?} */
        const current = selector[i];
        if (typeof current === 'number') {
            // If we finish processing a :not selector and it hasn't failed, return false
            if (!skipToNextSelector && !isPositive(mode) && !isPositive(current)) {
                return false;
            }
            // If we are skipping to the next :not() and this mode flag is positive,
            // it's a part of the current :not() selector, and we should keep skipping
            if (skipToNextSelector && isPositive(current))
                continue;
            skipToNextSelector = false;
            mode = ((/** @type {?} */ (current))) | (mode & 1 /* NOT */);
            continue;
        }
        if (skipToNextSelector)
            continue;
        if (mode & 4 /* ELEMENT */) {
            mode = 2 /* ATTRIBUTE */ | mode & 1 /* NOT */;
            if (current !== '' && !hasTagAndTypeMatch(tNode, current, isProjectionMode) ||
                current === '' && selector.length === 1) {
                if (isPositive(mode))
                    return false;
                skipToNextSelector = true;
            }
        }
        else {
            /** @type {?} */
            const selectorAttrValue = mode & 8 /* CLASS */ ? current : selector[++i];
            // special case for matching against classes when a tNode has been instantiated with
            // class and style values as separate attribute values (e.g. ['title', CLASS, 'foo'])
            if ((mode & 8 /* CLASS */) && tNode.attrs !== null) {
                if (!isCssClassMatching(tNode.attrs, (/** @type {?} */ (selectorAttrValue)), isProjectionMode)) {
                    if (isPositive(mode))
                        return false;
                    skipToNextSelector = true;
                }
                continue;
            }
            /** @type {?} */
            const attrName = (mode & 8 /* CLASS */) ? 'class' : current;
            /** @type {?} */
            const attrIndexInNode = findAttrIndexInNode(attrName, nodeAttrs, isInlineTemplate(tNode), isProjectionMode);
            if (attrIndexInNode === -1) {
                if (isPositive(mode))
                    return false;
                skipToNextSelector = true;
                continue;
            }
            if (selectorAttrValue !== '') {
                /** @type {?} */
                let nodeAttrValue;
                if (attrIndexInNode > nameOnlyMarkerIdx) {
                    nodeAttrValue = '';
                }
                else {
                    ngDevMode &&
                        assertNotEqual(nodeAttrs[attrIndexInNode], 0 /* NamespaceURI */, 'We do not match directives on namespaced attributes');
                    // we lowercase the attribute value to be able to match
                    // selectors without case-sensitivity
                    // (selectors are already in lowercase when generated)
                    nodeAttrValue = ((/** @type {?} */ (nodeAttrs[attrIndexInNode + 1]))).toLowerCase();
                }
                /** @type {?} */
                const compareAgainstClassName = mode & 8 /* CLASS */ ? nodeAttrValue : null;
                if (compareAgainstClassName &&
                    classIndexOf(compareAgainstClassName, (/** @type {?} */ (selectorAttrValue)), 0) !== -1 ||
                    mode & 2 /* ATTRIBUTE */ && selectorAttrValue !== nodeAttrValue) {
                    if (isPositive(mode))
                        return false;
                    skipToNextSelector = true;
                }
            }
        }
    }
    return isPositive(mode) || skipToNextSelector;
}
/**
 * @param {?} mode
 * @return {?}
 */
function isPositive(mode) {
    return (mode & 1 /* NOT */) === 0;
}
/**
 * Examines the attribute's definition array for a node to find the index of the
 * attribute that matches the given `name`.
 *
 * NOTE: This will not match namespaced attributes.
 *
 * Attribute matching depends upon `isInlineTemplate` and `isProjectionMode`.
 * The following table summarizes which types of attributes we attempt to match:
 *
 * ===========================================================================================================
 * Modes                   | Normal Attributes | Bindings Attributes | Template Attributes | I18n
 * Attributes
 * ===========================================================================================================
 * Inline + Projection     | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Inline + Directive      | NO                | NO                  | YES                 | NO
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Projection | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Directive  | YES               | YES                 | NO                  | YES
 * ===========================================================================================================
 *
 * @param {?} name the name of the attribute to find
 * @param {?} attrs the attribute array to examine
 * @param {?} isInlineTemplate true if the node being matched is an inline template (e.g. `*ngFor`)
 * rather than a manually expanded template node (e.g `<ng-template>`).
 * @param {?} isProjectionMode true if we are matching against content projection otherwise we are
 * matching against directives.
 * @return {?}
 */
function findAttrIndexInNode(name, attrs, isInlineTemplate, isProjectionMode) {
    if (attrs === null)
        return -1;
    /** @type {?} */
    let i = 0;
    if (isProjectionMode || !isInlineTemplate) {
        /** @type {?} */
        let bindingsMode = false;
        while (i < attrs.length) {
            /** @type {?} */
            const maybeAttrName = attrs[i];
            if (maybeAttrName === name) {
                return i;
            }
            else if (maybeAttrName === 3 /* Bindings */ || maybeAttrName === 6 /* I18n */) {
                bindingsMode = true;
            }
            else if (maybeAttrName === 1 /* Classes */ || maybeAttrName === 2 /* Styles */) {
                /** @type {?} */
                let value = attrs[++i];
                // We should skip classes here because we have a separate mechanism for
                // matching classes in projection mode.
                while (typeof value === 'string') {
                    value = attrs[++i];
                }
                continue;
            }
            else if (maybeAttrName === 4 /* Template */) {
                // We do not care about Template attributes in this scenario.
                break;
            }
            else if (maybeAttrName === 0 /* NamespaceURI */) {
                // Skip the whole namespaced attribute and value. This is by design.
                i += 4;
                continue;
            }
            // In binding mode there are only names, rather than name-value pairs.
            i += bindingsMode ? 1 : 2;
        }
        // We did not match the attribute
        return -1;
    }
    else {
        return matchTemplateAttribute(attrs, name);
    }
}
/**
 * @param {?} tNode
 * @param {?} selector
 * @param {?=} isProjectionMode
 * @return {?}
 */
export function isNodeMatchingSelectorList(tNode, selector, isProjectionMode = false) {
    for (let i = 0; i < selector.length; i++) {
        if (isNodeMatchingSelector(tNode, selector[i], isProjectionMode)) {
            return true;
        }
    }
    return false;
}
/**
 * @param {?} tNode
 * @return {?}
 */
export function getProjectAsAttrValue(tNode) {
    /** @type {?} */
    const nodeAttrs = tNode.attrs;
    if (nodeAttrs != null) {
        /** @type {?} */
        const ngProjectAsAttrIdx = nodeAttrs.indexOf(5 /* ProjectAs */);
        // only check for ngProjectAs in attribute names, don't accidentally match attribute's value
        // (attribute names are stored at even indexes)
        if ((ngProjectAsAttrIdx & 1) === 0) {
            return (/** @type {?} */ (nodeAttrs[ngProjectAsAttrIdx + 1]));
        }
    }
    return null;
}
/**
 * @param {?} nodeAttrs
 * @return {?}
 */
function getNameOnlyMarkerIndex(nodeAttrs) {
    for (let i = 0; i < nodeAttrs.length; i++) {
        /** @type {?} */
        const nodeAttr = nodeAttrs[i];
        if (isNameOnlyAttributeMarker(nodeAttr)) {
            return i;
        }
    }
    return nodeAttrs.length;
}
/**
 * @param {?} attrs
 * @param {?} name
 * @return {?}
 */
function matchTemplateAttribute(attrs, name) {
    /** @type {?} */
    let i = attrs.indexOf(4 /* Template */);
    if (i > -1) {
        i++;
        while (i < attrs.length) {
            /** @type {?} */
            const attr = attrs[i];
            // Return in case we checked all template attrs and are switching to the next section in the
            // attrs array (that starts with a number that represents an attribute marker).
            if (typeof attr === 'number')
                return -1;
            if (attr === name)
                return i;
            i++;
        }
    }
    return -1;
}
/**
 * Checks whether a selector is inside a CssSelectorList
 * @param {?} selector Selector to be checked.
 * @param {?} list List in which to look for the selector.
 * @return {?}
 */
export function isSelectorInSelectorList(selector, list) {
    selectorListLoop: for (let i = 0; i < list.length; i++) {
        /** @type {?} */
        const currentSelectorInList = list[i];
        if (selector.length !== currentSelectorInList.length) {
            continue;
        }
        for (let j = 0; j < selector.length; j++) {
            if (selector[j] !== currentSelectorInList[j]) {
                continue selectorListLoop;
            }
        }
        return true;
    }
    return false;
}
/**
 * @param {?} isNegativeMode
 * @param {?} chunk
 * @return {?}
 */
function maybeWrapInNotSelector(isNegativeMode, chunk) {
    return isNegativeMode ? ':not(' + chunk.trim() + ')' : chunk;
}
/**
 * @param {?} selector
 * @return {?}
 */
function stringifyCSSSelector(selector) {
    /** @type {?} */
    let result = (/** @type {?} */ (selector[0]));
    /** @type {?} */
    let i = 1;
    /** @type {?} */
    let mode = 2 /* ATTRIBUTE */;
    /** @type {?} */
    let currentChunk = '';
    /** @type {?} */
    let isNegativeMode = false;
    while (i < selector.length) {
        /** @type {?} */
        let valueOrMarker = selector[i];
        if (typeof valueOrMarker === 'string') {
            if (mode & 2 /* ATTRIBUTE */) {
                /** @type {?} */
                const attrValue = (/** @type {?} */ (selector[++i]));
                currentChunk +=
                    '[' + valueOrMarker + (attrValue.length > 0 ? '="' + attrValue + '"' : '') + ']';
            }
            else if (mode & 8 /* CLASS */) {
                currentChunk += '.' + valueOrMarker;
            }
            else if (mode & 4 /* ELEMENT */) {
                currentChunk += ' ' + valueOrMarker;
            }
        }
        else {
            //
            // Append current chunk to the final result in case we come across SelectorFlag, which
            // indicates that the previous section of a selector is over. We need to accumulate content
            // between flags to make sure we wrap the chunk later in :not() selector if needed, e.g.
            // ```
            //  ['', Flags.CLASS, '.classA', Flags.CLASS | Flags.NOT, '.classB', '.classC']
            // ```
            // should be transformed to `.classA :not(.classB .classC)`.
            //
            // Note: for negative selector part, we accumulate content between flags until we find the
            // next negative flag. This is needed to support a case where `:not()` rule contains more than
            // one chunk, e.g. the following selector:
            // ```
            //  ['', Flags.ELEMENT | Flags.NOT, 'p', Flags.CLASS, 'foo', Flags.CLASS | Flags.NOT, 'bar']
            // ```
            // should be stringified to `:not(p.foo) :not(.bar)`
            //
            if (currentChunk !== '' && !isPositive(valueOrMarker)) {
                result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
                currentChunk = '';
            }
            mode = valueOrMarker;
            // According to CssSelector spec, once we come across `SelectorFlags.NOT` flag, the negative
            // mode is maintained for remaining chunks of a selector.
            isNegativeMode = isNegativeMode || !isPositive(mode);
        }
        i++;
    }
    if (currentChunk !== '') {
        result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
    }
    return result;
}
/**
 * Generates string representation of CSS selector in parsed form.
 *
 * ComponentDef and DirectiveDef are generated with the selector in parsed form to avoid doing
 * additional parsing at runtime (for example, for directive matching). However in some cases (for
 * example, while bootstrapping a component), a string version of the selector is required to query
 * for the host element on the page. This function takes the parsed form of a selector and returns
 * its string representation.
 *
 * @param {?} selectorList selector in parsed form
 * @return {?} string representation of a given selector
 */
export function stringifyCSSSelectorList(selectorList) {
    return selectorList.map(stringifyCSSSelector).join(',');
}
/**
 * Extracts attributes and classes information from a given CSS selector.
 *
 * This function is used while creating a component dynamically. In this case, the host element
 * (that is created dynamically) should contain attributes and classes specified in component's CSS
 * selector.
 *
 * @param {?} selector CSS selector in parsed form (in a form of array)
 * @return {?} object with `attrs` and `classes` fields that contain extracted information
 */
export function extractAttrsAndClassesFromSelector(selector) {
    /** @type {?} */
    const attrs = [];
    /** @type {?} */
    const classes = [];
    /** @type {?} */
    let i = 1;
    /** @type {?} */
    let mode = 2 /* ATTRIBUTE */;
    while (i < selector.length) {
        /** @type {?} */
        let valueOrMarker = selector[i];
        if (typeof valueOrMarker === 'string') {
            if (mode === 2 /* ATTRIBUTE */) {
                if (valueOrMarker !== '') {
                    attrs.push(valueOrMarker, (/** @type {?} */ (selector[++i])));
                }
            }
            else if (mode === 8 /* CLASS */) {
                classes.push(valueOrMarker);
            }
        }
        else {
            // According to CssSelector spec, once we come across `SelectorFlags.NOT` flag, the negative
            // mode is maintained for remaining chunks of a selector. Since attributes and classes are
            // extracted only for "positive" part of the selector, we can stop here.
            if (!isPositive(mode))
                break;
            mode = valueOrMarker;
        }
        i++;
    }
    return { attrs, classes };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZV9zZWxlY3Rvcl9tYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9ub2RlX3NlbGVjdG9yX21hdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQWlELDZCQUE2QixJQUFJLE9BQU8sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNILE9BQU8sRUFBOEMsNkJBQTZCLElBQUksT0FBTyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDOUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztNQUV2RCx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsT0FBTzs7TUFFM0Msb0JBQW9CLEdBQUcsYUFBYTs7Ozs7Ozs7OztBQVUxQyxTQUFTLGtCQUFrQixDQUN2QixLQUFrQixFQUFFLGVBQXVCLEVBQUUsZ0JBQXlCO0lBQ3hFLGlHQUFpRztJQUNqRyw4RkFBOEY7SUFDOUYsZ0dBQWdHO0lBQ2hHLGlDQUFpQztJQUNqQyxTQUFTO1FBQ0wsV0FBVyxDQUNQLGVBQWUsRUFBRSxlQUFlLENBQUMsV0FBVyxFQUFFLEVBQUUsc0NBQXNDLENBQUMsQ0FBQzs7UUFDNUYsQ0FBQyxHQUFHLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFOztZQUNuQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksZ0JBQWdCLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN4QyxJQUFJLEdBQUcsbUJBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFVLENBQUM7WUFDMUIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU0sSUFBSSxJQUFJLG9CQUE0QixFQUFFO1lBQzNDLCtEQUErRDtZQUMvRCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ2pFLHdCQUF3QjtnQkFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssZUFBZTtvQkFBRSxPQUFPLElBQUksQ0FBQzthQUN6RDtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7OztBQU9ELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksc0JBQXdCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxvQkFBb0IsQ0FBQztBQUN0RixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBYUQsU0FBUyxrQkFBa0IsQ0FDdkIsS0FBWSxFQUFFLGVBQXVCLEVBQUUsZ0JBQXlCOztVQUM1RCxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsSUFBSSxzQkFBd0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUUsb0JBQW9CLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsT0FBTztJQUNqQixPQUFPLGVBQWUsS0FBSyxnQkFBZ0IsQ0FBQztBQUM5QyxDQUFDOzs7Ozs7Ozs7O0FBV0QsTUFBTSxVQUFVLHNCQUFzQixDQUNsQyxLQUFZLEVBQUUsUUFBcUIsRUFBRSxnQkFBeUI7SUFDaEUsU0FBUyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUNBQWlDLENBQUMsQ0FBQzs7UUFDdkUsSUFBSSxrQkFBdUM7O1VBQ3pDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7OztVQUc3QixpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUM7Ozs7UUFJdkQsa0JBQWtCLEdBQUcsS0FBSztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbEMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsNkVBQTZFO1lBQzdFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELHdFQUF3RTtZQUN4RSwwRUFBMEU7WUFDMUUsSUFBSSxrQkFBa0IsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUFFLFNBQVM7WUFDeEQsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGNBQW9CLENBQUMsQ0FBQztZQUN4RCxTQUFTO1NBQ1Y7UUFFRCxJQUFJLGtCQUFrQjtZQUFFLFNBQVM7UUFFakMsSUFBSSxJQUFJLGtCQUF3QixFQUFFO1lBQ2hDLElBQUksR0FBRyxvQkFBMEIsSUFBSSxjQUFvQixDQUFDO1lBQzFELElBQUksT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3ZFLE9BQU8sS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDbkMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1NBQ0Y7YUFBTTs7a0JBQ0MsaUJBQWlCLEdBQUcsSUFBSSxnQkFBc0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUUsb0ZBQW9GO1lBQ3BGLHFGQUFxRjtZQUNyRixJQUFJLENBQUMsSUFBSSxnQkFBc0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN4RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxtQkFBQSxpQkFBaUIsRUFBVSxFQUFFLGdCQUFnQixDQUFDLEVBQUU7b0JBQ25GLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFBRSxPQUFPLEtBQUssQ0FBQztvQkFDbkMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2lCQUMzQjtnQkFDRCxTQUFTO2FBQ1Y7O2tCQUVLLFFBQVEsR0FBRyxDQUFDLElBQUksZ0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPOztrQkFDM0QsZUFBZSxHQUNqQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBRXZGLElBQUksZUFBZSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ25DLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFDMUIsU0FBUzthQUNWO1lBRUQsSUFBSSxpQkFBaUIsS0FBSyxFQUFFLEVBQUU7O29CQUN4QixhQUFxQjtnQkFDekIsSUFBSSxlQUFlLEdBQUcsaUJBQWlCLEVBQUU7b0JBQ3ZDLGFBQWEsR0FBRyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNMLFNBQVM7d0JBQ0wsY0FBYyxDQUNWLFNBQVMsQ0FBQyxlQUFlLENBQUMsd0JBQzFCLHFEQUFxRCxDQUFDLENBQUM7b0JBQy9ELHVEQUF1RDtvQkFDdkQscUNBQXFDO29CQUNyQyxzREFBc0Q7b0JBQ3RELGFBQWEsR0FBRyxDQUFDLG1CQUFBLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMxRTs7c0JBRUssdUJBQXVCLEdBQUcsSUFBSSxnQkFBc0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNqRixJQUFJLHVCQUF1QjtvQkFDbkIsWUFBWSxDQUFDLHVCQUF1QixFQUFFLG1CQUFBLGlCQUFpQixFQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRixJQUFJLG9CQUEwQixJQUFJLGlCQUFpQixLQUFLLGFBQWEsRUFBRTtvQkFDekUsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUFFLE9BQU8sS0FBSyxDQUFDO29CQUNuQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUM7QUFDaEQsQ0FBQzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFtQjtJQUNyQyxPQUFPLENBQUMsSUFBSSxjQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkQsU0FBUyxtQkFBbUIsQ0FDeEIsSUFBWSxFQUFFLEtBQXVCLEVBQUUsZ0JBQXlCLEVBQ2hFLGdCQUF5QjtJQUMzQixJQUFJLEtBQUssS0FBSyxJQUFJO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzs7UUFFMUIsQ0FBQyxHQUFHLENBQUM7SUFFVCxJQUFJLGdCQUFnQixJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBQ3JDLFlBQVksR0FBRyxLQUFLO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2tCQUNqQixhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU0sSUFDSCxhQUFhLHFCQUE2QixJQUFJLGFBQWEsaUJBQXlCLEVBQUU7Z0JBQ3hGLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU0sSUFDSCxhQUFhLG9CQUE0QixJQUFJLGFBQWEsbUJBQTJCLEVBQUU7O29CQUNyRixLQUFLLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0Qix1RUFBdUU7Z0JBQ3ZFLHVDQUF1QztnQkFDdkMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQ2hDLEtBQUssR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsU0FBUzthQUNWO2lCQUFNLElBQUksYUFBYSxxQkFBNkIsRUFBRTtnQkFDckQsNkRBQTZEO2dCQUM3RCxNQUFNO2FBQ1A7aUJBQU0sSUFBSSxhQUFhLHlCQUFpQyxFQUFFO2dCQUN6RCxvRUFBb0U7Z0JBQ3BFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsU0FBUzthQUNWO1lBQ0Qsc0VBQXNFO1lBQ3RFLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDWDtTQUFNO1FBQ0wsT0FBTyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUN0QyxLQUFZLEVBQUUsUUFBeUIsRUFBRSxtQkFBNEIsS0FBSztJQUM1RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUNoRSxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQVk7O1VBQzFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSztJQUM3QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7O2NBQ2Ysa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE9BQU8sbUJBQTJCO1FBQ3ZFLDRGQUE0RjtRQUM1RiwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPLG1CQUFBLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsRUFBZSxDQUFDO1NBQ3pEO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxTQUFzQjtJQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDbkMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDMUIsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxLQUFrQixFQUFFLElBQVk7O1FBQzFELENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxrQkFBMEI7SUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDVixDQUFDLEVBQUUsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2tCQUNqQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQiw0RkFBNEY7WUFDNUYsK0VBQStFO1lBQy9FLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksSUFBSSxLQUFLLElBQUk7Z0JBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFFLENBQUM7U0FDTDtLQUNGO0lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsUUFBcUIsRUFBRSxJQUFxQjtJQUNuRixnQkFBZ0IsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDaEQscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUsscUJBQXFCLENBQUMsTUFBTSxFQUFFO1lBQ3BELFNBQVM7U0FDVjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxTQUFTLGdCQUFnQixDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLGNBQXVCLEVBQUUsS0FBYTtJQUNwRSxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMvRCxDQUFDOzs7OztBQUVELFNBQVMsb0JBQW9CLENBQUMsUUFBcUI7O1FBQzdDLE1BQU0sR0FBRyxtQkFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQVU7O1FBQzlCLENBQUMsR0FBRyxDQUFDOztRQUNMLElBQUksb0JBQTBCOztRQUM5QixZQUFZLEdBQUcsRUFBRTs7UUFDakIsY0FBYyxHQUFHLEtBQUs7SUFDMUIsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRTs7WUFDdEIsYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDckMsSUFBSSxJQUFJLG9CQUEwQixFQUFFOztzQkFDNUIsU0FBUyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFVO2dCQUN6QyxZQUFZO29CQUNSLEdBQUcsR0FBRyxhQUFhLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUN0RjtpQkFBTSxJQUFJLElBQUksZ0JBQXNCLEVBQUU7Z0JBQ3JDLFlBQVksSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDO2FBQ3JDO2lCQUFNLElBQUksSUFBSSxrQkFBd0IsRUFBRTtnQkFDdkMsWUFBWSxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUM7YUFDckM7U0FDRjthQUFNO1lBQ0wsRUFBRTtZQUNGLHNGQUFzRjtZQUN0RiwyRkFBMkY7WUFDM0Ysd0ZBQXdGO1lBQ3hGLE1BQU07WUFDTiwrRUFBK0U7WUFDL0UsTUFBTTtZQUNOLDREQUE0RDtZQUM1RCxFQUFFO1lBQ0YsMEZBQTBGO1lBQzFGLDhGQUE4RjtZQUM5RiwwQ0FBMEM7WUFDMUMsTUFBTTtZQUNOLDRGQUE0RjtZQUM1RixNQUFNO1lBQ04sb0RBQW9EO1lBQ3BELEVBQUU7WUFDRixJQUFJLFlBQVksS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ3JELE1BQU0sSUFBSSxzQkFBc0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELFlBQVksR0FBRyxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQ3JCLDRGQUE0RjtZQUM1Rix5REFBeUQ7WUFDekQsY0FBYyxHQUFHLGNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDtRQUNELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFDRCxJQUFJLFlBQVksS0FBSyxFQUFFLEVBQUU7UUFDdkIsTUFBTSxJQUFJLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNoRTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjRCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsWUFBNkI7SUFDcEUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFELENBQUM7Ozs7Ozs7Ozs7O0FBWUQsTUFBTSxVQUFVLGtDQUFrQyxDQUFDLFFBQXFCOztVQUVoRSxLQUFLLEdBQWEsRUFBRTs7VUFDcEIsT0FBTyxHQUFhLEVBQUU7O1FBQ3hCLENBQUMsR0FBRyxDQUFDOztRQUNMLElBQUksb0JBQTBCO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7O1lBQ3RCLGFBQWEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3JDLElBQUksSUFBSSxzQkFBNEIsRUFBRTtnQkFDcEMsSUFBSSxhQUFhLEtBQUssRUFBRSxFQUFFO29CQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxtQkFBQSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBVSxDQUFDLENBQUM7aUJBQ3BEO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLGtCQUF3QixFQUFFO2dCQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7YUFBTTtZQUNMLDRGQUE0RjtZQUM1RiwwRkFBMEY7WUFDMUYsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUFFLE1BQU07WUFDN0IsSUFBSSxHQUFHLGFBQWEsQ0FBQztTQUN0QjtRQUNELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFDRCxPQUFPLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAnLi4vdXRpbC9uZ19kZXZfbW9kZSc7XG5cbmltcG9ydCB7YXNzZXJ0RGVmaW5lZCwgYXNzZXJ0RXF1YWwsIGFzc2VydE5vdEVxdWFsfSBmcm9tICcuLi91dGlsL2Fzc2VydCc7XG5cbmltcG9ydCB7QXR0cmlidXRlTWFya2VyLCBUQXR0cmlidXRlcywgVE5vZGUsIFROb2RlVHlwZSwgdW51c2VkVmFsdWVFeHBvcnRUb1BsYWNhdGVBamQgYXMgdW51c2VkMX0gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtDc3NTZWxlY3RvciwgQ3NzU2VsZWN0b3JMaXN0LCBTZWxlY3RvckZsYWdzLCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCBhcyB1bnVzZWQyfSBmcm9tICcuL2ludGVyZmFjZXMvcHJvamVjdGlvbic7XG5pbXBvcnQge2NsYXNzSW5kZXhPZn0gZnJvbSAnLi9zdHlsaW5nL2NsYXNzX2RpZmZlcic7XG5pbXBvcnQge2lzTmFtZU9ubHlBdHRyaWJ1dGVNYXJrZXJ9IGZyb20gJy4vdXRpbC9hdHRyc191dGlscyc7XG5cbmNvbnN0IHVudXNlZFZhbHVlVG9QbGFjYXRlQWpkID0gdW51c2VkMSArIHVudXNlZDI7XG5cbmNvbnN0IE5HX1RFTVBMQVRFX1NFTEVDVE9SID0gJ25nLXRlbXBsYXRlJztcblxuLyoqXG4gKiBTZWFyY2ggdGhlIGBUQXR0cmlidXRlc2AgdG8gc2VlIGlmIGl0IGNvbnRhaW5zIGBjc3NDbGFzc1RvTWF0Y2hgIChjYXNlIGluc2Vuc2l0aXZlKVxuICpcbiAqIEBwYXJhbSBhdHRycyBgVEF0dHJpYnV0ZXNgIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIGNzc0NsYXNzVG9NYXRjaCBjbGFzcyB0byBtYXRjaCAobG93ZXJjYXNlKVxuICogQHBhcmFtIGlzUHJvamVjdGlvbk1vZGUgV2hldGhlciBvciBub3QgY2xhc3MgbWF0Y2hpbmcgc2hvdWxkIGxvb2sgaW50byB0aGUgYXR0cmlidXRlIGBjbGFzc2AgaW5cbiAqICAgIGFkZGl0aW9uIHRvIHRoZSBgQXR0cmlidXRlTWFya2VyLkNsYXNzZXNgLlxuICovXG5mdW5jdGlvbiBpc0Nzc0NsYXNzTWF0Y2hpbmcoXG4gICAgYXR0cnM6IFRBdHRyaWJ1dGVzLCBjc3NDbGFzc1RvTWF0Y2g6IHN0cmluZywgaXNQcm9qZWN0aW9uTW9kZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAvLyBUT0RPKG1pc2tvKTogVGhlIGZhY3QgdGhhdCB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGtub3cgYWJvdXQgYGlzUHJvamVjdGlvbk1vZGVgIHNlZW1zIHN1c3BlY3QuXG4gIC8vIEl0IGlzIHN0cmFuZ2UgdG8gbWUgdGhhdCBzb21ldGltZXMgdGhlIGNsYXNzIGluZm9ybWF0aW9uIGNvbWVzIGluIGZvcm0gb2YgYGNsYXNzYCBhdHRyaWJ1dGVcbiAgLy8gYW5kIHNvbWV0aW1lcyBpbiBmb3JtIG9mIGBBdHRyaWJ1dGVNYXJrZXIuQ2xhc3Nlc2AuIFNvbWUgaW52ZXN0aWdhdGlvbiBpcyBuZWVkZWQgdG8gZGV0ZXJtaW5lXG4gIC8vIGlmIHRoYXQgaXMgdGhlIHJpZ2h0IGJlaGF2aW9yLlxuICBuZ0Rldk1vZGUgJiZcbiAgICAgIGFzc2VydEVxdWFsKFxuICAgICAgICAgIGNzc0NsYXNzVG9NYXRjaCwgY3NzQ2xhc3NUb01hdGNoLnRvTG93ZXJDYXNlKCksICdDbGFzcyBuYW1lIGV4cGVjdGVkIHRvIGJlIGxvd2VyY2FzZS4nKTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGF0dHJzLmxlbmd0aCkge1xuICAgIGxldCBpdGVtID0gYXR0cnNbaSsrXTtcbiAgICBpZiAoaXNQcm9qZWN0aW9uTW9kZSAmJiBpdGVtID09PSAnY2xhc3MnKSB7XG4gICAgICBpdGVtID0gYXR0cnNbaV0gYXMgc3RyaW5nO1xuICAgICAgaWYgKGNsYXNzSW5kZXhPZihpdGVtLnRvTG93ZXJDYXNlKCksIGNzc0NsYXNzVG9NYXRjaCwgMCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gQXR0cmlidXRlTWFya2VyLkNsYXNzZXMpIHtcbiAgICAgIC8vIFdlIGZvdW5kIHRoZSBjbGFzc2VzIHNlY3Rpb24uIFN0YXJ0IHNlYXJjaGluZyBmb3IgdGhlIGNsYXNzLlxuICAgICAgd2hpbGUgKGkgPCBhdHRycy5sZW5ndGggJiYgdHlwZW9mIChpdGVtID0gYXR0cnNbaSsrXSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gd2hpbGUgd2UgaGF2ZSBzdHJpbmdzXG4gICAgICAgIGlmIChpdGVtLnRvTG93ZXJDYXNlKCkgPT09IGNzc0NsYXNzVG9NYXRjaCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYHROb2RlYCByZXByZXNlbnRzIGFuIGlubGluZSB0ZW1wbGF0ZSAoZS5nLiBgKm5nRm9yYCkuXG4gKlxuICogQHBhcmFtIHROb2RlIGN1cnJlbnQgVE5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW5saW5lVGVtcGxhdGUodE5vZGU6IFROb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiB0Tm9kZS50eXBlID09PSBUTm9kZVR5cGUuQ29udGFpbmVyICYmIHROb2RlLnRhZ05hbWUgIT09IE5HX1RFTVBMQVRFX1NFTEVDVE9SO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2hlY2tzIHdoZXRoZXIgYSBnaXZlbiB0Tm9kZSBtYXRjaGVzIHRhZy1iYXNlZCBzZWxlY3RvciBhbmQgaGFzIGEgdmFsaWQgdHlwZS5cbiAqXG4gKiBNYXRjaGluZyBjYW4gYmUgcGVyZm9ybWVkIGluIDIgbW9kZXM6IHByb2plY3Rpb24gbW9kZSAod2hlbiB3ZSBwcm9qZWN0IG5vZGVzKSBhbmQgcmVndWxhclxuICogZGlyZWN0aXZlIG1hdGNoaW5nIG1vZGU6XG4gKiAtIGluIHRoZSBcImRpcmVjdGl2ZSBtYXRjaGluZ1wiIG1vZGUgd2UgZG8gX25vdF8gdGFrZSBUQ29udGFpbmVyJ3MgdGFnTmFtZSBpbnRvIGFjY291bnQgaWYgaXQgaXNcbiAqIGRpZmZlcmVudCBmcm9tIE5HX1RFTVBMQVRFX1NFTEVDVE9SICh2YWx1ZSBkaWZmZXJlbnQgZnJvbSBOR19URU1QTEFURV9TRUxFQ1RPUiBpbmRpY2F0ZXMgdGhhdCBhXG4gKiB0YWcgbmFtZSB3YXMgZXh0cmFjdGVkIGZyb20gKiBzeW50YXggc28gd2Ugd291bGQgbWF0Y2ggdGhlIHNhbWUgZGlyZWN0aXZlIHR3aWNlKTtcbiAqIC0gaW4gdGhlIFwicHJvamVjdGlvblwiIG1vZGUsIHdlIHVzZSBhIHRhZyBuYW1lIHBvdGVudGlhbGx5IGV4dHJhY3RlZCBmcm9tIHRoZSAqIHN5bnRheCBwcm9jZXNzaW5nXG4gKiAoYXBwbGljYWJsZSB0byBUTm9kZVR5cGUuQ29udGFpbmVyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBoYXNUYWdBbmRUeXBlTWF0Y2goXG4gICAgdE5vZGU6IFROb2RlLCBjdXJyZW50U2VsZWN0b3I6IHN0cmluZywgaXNQcm9qZWN0aW9uTW9kZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICBjb25zdCB0YWdOYW1lVG9Db21wYXJlID0gdE5vZGUudHlwZSA9PT0gVE5vZGVUeXBlLkNvbnRhaW5lciAmJiAhaXNQcm9qZWN0aW9uTW9kZSA/XG4gICAgICBOR19URU1QTEFURV9TRUxFQ1RPUiA6XG4gICAgICB0Tm9kZS50YWdOYW1lO1xuICByZXR1cm4gY3VycmVudFNlbGVjdG9yID09PSB0YWdOYW1lVG9Db21wYXJlO1xufVxuXG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBtYXRjaCBhbiBJdnkgbm9kZSBzdGF0aWMgZGF0YSBhZ2FpbnN0IGEgc2ltcGxlIENTUyBzZWxlY3RvclxuICpcbiAqIEBwYXJhbSBub2RlIHN0YXRpYyBkYXRhIG9mIHRoZSBub2RlIHRvIG1hdGNoXG4gKiBAcGFyYW0gc2VsZWN0b3IgVGhlIHNlbGVjdG9yIHRvIHRyeSBtYXRjaGluZyBhZ2FpbnN0IHRoZSBub2RlLlxuICogQHBhcmFtIGlzUHJvamVjdGlvbk1vZGUgaWYgYHRydWVgIHdlIGFyZSBtYXRjaGluZyBmb3IgY29udGVudCBwcm9qZWN0aW9uLCBvdGhlcndpc2Ugd2UgYXJlIGRvaW5nXG4gKiBkaXJlY3RpdmUgbWF0Y2hpbmcuXG4gKiBAcmV0dXJucyB0cnVlIGlmIG5vZGUgbWF0Y2hlcyB0aGUgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yKFxuICAgIHROb2RlOiBUTm9kZSwgc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBpc1Byb2plY3Rpb25Nb2RlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKHNlbGVjdG9yWzBdLCAnU2VsZWN0b3Igc2hvdWxkIGhhdmUgYSB0YWcgbmFtZScpO1xuICBsZXQgbW9kZTogU2VsZWN0b3JGbGFncyA9IFNlbGVjdG9yRmxhZ3MuRUxFTUVOVDtcbiAgY29uc3Qgbm9kZUF0dHJzID0gdE5vZGUuYXR0cnMgfHwgW107XG5cbiAgLy8gRmluZCB0aGUgaW5kZXggb2YgZmlyc3QgYXR0cmlidXRlIHRoYXQgaGFzIG5vIHZhbHVlLCBvbmx5IGEgbmFtZS5cbiAgY29uc3QgbmFtZU9ubHlNYXJrZXJJZHggPSBnZXROYW1lT25seU1hcmtlckluZGV4KG5vZGVBdHRycyk7XG5cbiAgLy8gV2hlbiBwcm9jZXNzaW5nIFwiOm5vdFwiIHNlbGVjdG9ycywgd2Ugc2tpcCB0byB0aGUgbmV4dCBcIjpub3RcIiBpZiB0aGVcbiAgLy8gY3VycmVudCBvbmUgZG9lc24ndCBtYXRjaFxuICBsZXQgc2tpcFRvTmV4dFNlbGVjdG9yID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzZWxlY3RvcltpXTtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAvLyBJZiB3ZSBmaW5pc2ggcHJvY2Vzc2luZyBhIDpub3Qgc2VsZWN0b3IgYW5kIGl0IGhhc24ndCBmYWlsZWQsIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCFza2lwVG9OZXh0U2VsZWN0b3IgJiYgIWlzUG9zaXRpdmUobW9kZSkgJiYgIWlzUG9zaXRpdmUoY3VycmVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgYXJlIHNraXBwaW5nIHRvIHRoZSBuZXh0IDpub3QoKSBhbmQgdGhpcyBtb2RlIGZsYWcgaXMgcG9zaXRpdmUsXG4gICAgICAvLyBpdCdzIGEgcGFydCBvZiB0aGUgY3VycmVudCA6bm90KCkgc2VsZWN0b3IsIGFuZCB3ZSBzaG91bGQga2VlcCBza2lwcGluZ1xuICAgICAgaWYgKHNraXBUb05leHRTZWxlY3RvciAmJiBpc1Bvc2l0aXZlKGN1cnJlbnQpKSBjb250aW51ZTtcbiAgICAgIHNraXBUb05leHRTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgbW9kZSA9IChjdXJyZW50IGFzIG51bWJlcikgfCAobW9kZSAmIFNlbGVjdG9yRmxhZ3MuTk9UKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChza2lwVG9OZXh0U2VsZWN0b3IpIGNvbnRpbnVlO1xuXG4gICAgaWYgKG1vZGUgJiBTZWxlY3RvckZsYWdzLkVMRU1FTlQpIHtcbiAgICAgIG1vZGUgPSBTZWxlY3RvckZsYWdzLkFUVFJJQlVURSB8IG1vZGUgJiBTZWxlY3RvckZsYWdzLk5PVDtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAnJyAmJiAhaGFzVGFnQW5kVHlwZU1hdGNoKHROb2RlLCBjdXJyZW50LCBpc1Byb2plY3Rpb25Nb2RlKSB8fFxuICAgICAgICAgIGN1cnJlbnQgPT09ICcnICYmIHNlbGVjdG9yLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoaXNQb3NpdGl2ZShtb2RlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBza2lwVG9OZXh0U2VsZWN0b3IgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZWxlY3RvckF0dHJWYWx1ZSA9IG1vZGUgJiBTZWxlY3RvckZsYWdzLkNMQVNTID8gY3VycmVudCA6IHNlbGVjdG9yWysraV07XG5cbiAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgbWF0Y2hpbmcgYWdhaW5zdCBjbGFzc2VzIHdoZW4gYSB0Tm9kZSBoYXMgYmVlbiBpbnN0YW50aWF0ZWQgd2l0aFxuICAgICAgLy8gY2xhc3MgYW5kIHN0eWxlIHZhbHVlcyBhcyBzZXBhcmF0ZSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuIFsndGl0bGUnLCBDTEFTUywgJ2ZvbyddKVxuICAgICAgaWYgKChtb2RlICYgU2VsZWN0b3JGbGFncy5DTEFTUykgJiYgdE5vZGUuYXR0cnMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKCFpc0Nzc0NsYXNzTWF0Y2hpbmcodE5vZGUuYXR0cnMsIHNlbGVjdG9yQXR0clZhbHVlIGFzIHN0cmluZywgaXNQcm9qZWN0aW9uTW9kZSkpIHtcbiAgICAgICAgICBpZiAoaXNQb3NpdGl2ZShtb2RlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHNraXBUb05leHRTZWxlY3RvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF0dHJOYW1lID0gKG1vZGUgJiBTZWxlY3RvckZsYWdzLkNMQVNTKSA/ICdjbGFzcycgOiBjdXJyZW50O1xuICAgICAgY29uc3QgYXR0ckluZGV4SW5Ob2RlID1cbiAgICAgICAgICBmaW5kQXR0ckluZGV4SW5Ob2RlKGF0dHJOYW1lLCBub2RlQXR0cnMsIGlzSW5saW5lVGVtcGxhdGUodE5vZGUpLCBpc1Byb2plY3Rpb25Nb2RlKTtcblxuICAgICAgaWYgKGF0dHJJbmRleEluTm9kZSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKGlzUG9zaXRpdmUobW9kZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2tpcFRvTmV4dFNlbGVjdG9yID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvckF0dHJWYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgbGV0IG5vZGVBdHRyVmFsdWU6IHN0cmluZztcbiAgICAgICAgaWYgKGF0dHJJbmRleEluTm9kZSA+IG5hbWVPbmx5TWFya2VySWR4KSB7XG4gICAgICAgICAgbm9kZUF0dHJWYWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICAgICAgICBhc3NlcnROb3RFcXVhbChcbiAgICAgICAgICAgICAgICAgIG5vZGVBdHRyc1thdHRySW5kZXhJbk5vZGVdLCBBdHRyaWJ1dGVNYXJrZXIuTmFtZXNwYWNlVVJJLFxuICAgICAgICAgICAgICAgICAgJ1dlIGRvIG5vdCBtYXRjaCBkaXJlY3RpdmVzIG9uIG5hbWVzcGFjZWQgYXR0cmlidXRlcycpO1xuICAgICAgICAgIC8vIHdlIGxvd2VyY2FzZSB0aGUgYXR0cmlidXRlIHZhbHVlIHRvIGJlIGFibGUgdG8gbWF0Y2hcbiAgICAgICAgICAvLyBzZWxlY3RvcnMgd2l0aG91dCBjYXNlLXNlbnNpdGl2aXR5XG4gICAgICAgICAgLy8gKHNlbGVjdG9ycyBhcmUgYWxyZWFkeSBpbiBsb3dlcmNhc2Ugd2hlbiBnZW5lcmF0ZWQpXG4gICAgICAgICAgbm9kZUF0dHJWYWx1ZSA9IChub2RlQXR0cnNbYXR0ckluZGV4SW5Ob2RlICsgMV0gYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcGFyZUFnYWluc3RDbGFzc05hbWUgPSBtb2RlICYgU2VsZWN0b3JGbGFncy5DTEFTUyA/IG5vZGVBdHRyVmFsdWUgOiBudWxsO1xuICAgICAgICBpZiAoY29tcGFyZUFnYWluc3RDbGFzc05hbWUgJiZcbiAgICAgICAgICAgICAgICBjbGFzc0luZGV4T2YoY29tcGFyZUFnYWluc3RDbGFzc05hbWUsIHNlbGVjdG9yQXR0clZhbHVlIGFzIHN0cmluZywgMCkgIT09IC0xIHx8XG4gICAgICAgICAgICBtb2RlICYgU2VsZWN0b3JGbGFncy5BVFRSSUJVVEUgJiYgc2VsZWN0b3JBdHRyVmFsdWUgIT09IG5vZGVBdHRyVmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXNQb3NpdGl2ZShtb2RlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHNraXBUb05leHRTZWxlY3RvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNQb3NpdGl2ZShtb2RlKSB8fCBza2lwVG9OZXh0U2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGlzUG9zaXRpdmUobW9kZTogU2VsZWN0b3JGbGFncyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKG1vZGUgJiBTZWxlY3RvckZsYWdzLk5PVCkgPT09IDA7XG59XG5cbi8qKlxuICogRXhhbWluZXMgdGhlIGF0dHJpYnV0ZSdzIGRlZmluaXRpb24gYXJyYXkgZm9yIGEgbm9kZSB0byBmaW5kIHRoZSBpbmRleCBvZiB0aGVcbiAqIGF0dHJpYnV0ZSB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIGBuYW1lYC5cbiAqXG4gKiBOT1RFOiBUaGlzIHdpbGwgbm90IG1hdGNoIG5hbWVzcGFjZWQgYXR0cmlidXRlcy5cbiAqXG4gKiBBdHRyaWJ1dGUgbWF0Y2hpbmcgZGVwZW5kcyB1cG9uIGBpc0lubGluZVRlbXBsYXRlYCBhbmQgYGlzUHJvamVjdGlvbk1vZGVgLlxuICogVGhlIGZvbGxvd2luZyB0YWJsZSBzdW1tYXJpemVzIHdoaWNoIHR5cGVzIG9mIGF0dHJpYnV0ZXMgd2UgYXR0ZW1wdCB0byBtYXRjaDpcbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogTW9kZXMgICAgICAgICAgICAgICAgICAgfCBOb3JtYWwgQXR0cmlidXRlcyB8IEJpbmRpbmdzIEF0dHJpYnV0ZXMgfCBUZW1wbGF0ZSBBdHRyaWJ1dGVzIHwgSTE4blxuICogQXR0cmlidXRlc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIElubGluZSArIFByb2plY3Rpb24gICAgIHwgWUVTICAgICAgICAgICAgICAgfCBZRVMgICAgICAgICAgICAgICAgIHwgTk8gICAgICAgICAgICAgICAgICB8IFlFU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIElubGluZSArIERpcmVjdGl2ZSAgICAgIHwgTk8gICAgICAgICAgICAgICAgfCBOTyAgICAgICAgICAgICAgICAgIHwgWUVTICAgICAgICAgICAgICAgICB8IE5PXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTm9uLWlubGluZSArIFByb2plY3Rpb24gfCBZRVMgICAgICAgICAgICAgICB8IFlFUyAgICAgICAgICAgICAgICAgfCBOTyAgICAgICAgICAgICAgICAgIHwgWUVTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTm9uLWlubGluZSArIERpcmVjdGl2ZSAgfCBZRVMgICAgICAgICAgICAgICB8IFlFUyAgICAgICAgICAgICAgICAgfCBOTyAgICAgICAgICAgICAgICAgIHwgWUVTXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gZmluZFxuICogQHBhcmFtIGF0dHJzIHRoZSBhdHRyaWJ1dGUgYXJyYXkgdG8gZXhhbWluZVxuICogQHBhcmFtIGlzSW5saW5lVGVtcGxhdGUgdHJ1ZSBpZiB0aGUgbm9kZSBiZWluZyBtYXRjaGVkIGlzIGFuIGlubGluZSB0ZW1wbGF0ZSAoZS5nLiBgKm5nRm9yYClcbiAqIHJhdGhlciB0aGFuIGEgbWFudWFsbHkgZXhwYW5kZWQgdGVtcGxhdGUgbm9kZSAoZS5nIGA8bmctdGVtcGxhdGU+YCkuXG4gKiBAcGFyYW0gaXNQcm9qZWN0aW9uTW9kZSB0cnVlIGlmIHdlIGFyZSBtYXRjaGluZyBhZ2FpbnN0IGNvbnRlbnQgcHJvamVjdGlvbiBvdGhlcndpc2Ugd2UgYXJlXG4gKiBtYXRjaGluZyBhZ2FpbnN0IGRpcmVjdGl2ZXMuXG4gKi9cbmZ1bmN0aW9uIGZpbmRBdHRySW5kZXhJbk5vZGUoXG4gICAgbmFtZTogc3RyaW5nLCBhdHRyczogVEF0dHJpYnV0ZXN8bnVsbCwgaXNJbmxpbmVUZW1wbGF0ZTogYm9vbGVhbixcbiAgICBpc1Byb2plY3Rpb25Nb2RlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgaWYgKGF0dHJzID09PSBudWxsKSByZXR1cm4gLTE7XG5cbiAgbGV0IGkgPSAwO1xuXG4gIGlmIChpc1Byb2plY3Rpb25Nb2RlIHx8ICFpc0lubGluZVRlbXBsYXRlKSB7XG4gICAgbGV0IGJpbmRpbmdzTW9kZSA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgYXR0cnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBtYXliZUF0dHJOYW1lID0gYXR0cnNbaV07XG4gICAgICBpZiAobWF5YmVBdHRyTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbWF5YmVBdHRyTmFtZSA9PT0gQXR0cmlidXRlTWFya2VyLkJpbmRpbmdzIHx8IG1heWJlQXR0ck5hbWUgPT09IEF0dHJpYnV0ZU1hcmtlci5JMThuKSB7XG4gICAgICAgIGJpbmRpbmdzTW9kZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG1heWJlQXR0ck5hbWUgPT09IEF0dHJpYnV0ZU1hcmtlci5DbGFzc2VzIHx8IG1heWJlQXR0ck5hbWUgPT09IEF0dHJpYnV0ZU1hcmtlci5TdHlsZXMpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gYXR0cnNbKytpXTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIHNraXAgY2xhc3NlcyBoZXJlIGJlY2F1c2Ugd2UgaGF2ZSBhIHNlcGFyYXRlIG1lY2hhbmlzbSBmb3JcbiAgICAgICAgLy8gbWF0Y2hpbmcgY2xhc3NlcyBpbiBwcm9qZWN0aW9uIG1vZGUuXG4gICAgICAgIHdoaWxlICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyc1srK2ldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChtYXliZUF0dHJOYW1lID09PSBBdHRyaWJ1dGVNYXJrZXIuVGVtcGxhdGUpIHtcbiAgICAgICAgLy8gV2UgZG8gbm90IGNhcmUgYWJvdXQgVGVtcGxhdGUgYXR0cmlidXRlcyBpbiB0aGlzIHNjZW5hcmlvLlxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAobWF5YmVBdHRyTmFtZSA9PT0gQXR0cmlidXRlTWFya2VyLk5hbWVzcGFjZVVSSSkge1xuICAgICAgICAvLyBTa2lwIHRoZSB3aG9sZSBuYW1lc3BhY2VkIGF0dHJpYnV0ZSBhbmQgdmFsdWUuIFRoaXMgaXMgYnkgZGVzaWduLlxuICAgICAgICBpICs9IDQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gSW4gYmluZGluZyBtb2RlIHRoZXJlIGFyZSBvbmx5IG5hbWVzLCByYXRoZXIgdGhhbiBuYW1lLXZhbHVlIHBhaXJzLlxuICAgICAgaSArPSBiaW5kaW5nc01vZGUgPyAxIDogMjtcbiAgICB9XG4gICAgLy8gV2UgZGlkIG5vdCBtYXRjaCB0aGUgYXR0cmlidXRlXG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBtYXRjaFRlbXBsYXRlQXR0cmlidXRlKGF0dHJzLCBuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3Rvckxpc3QoXG4gICAgdE5vZGU6IFROb2RlLCBzZWxlY3RvcjogQ3NzU2VsZWN0b3JMaXN0LCBpc1Byb2plY3Rpb25Nb2RlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc05vZGVNYXRjaGluZ1NlbGVjdG9yKHROb2RlLCBzZWxlY3RvcltpXSwgaXNQcm9qZWN0aW9uTW9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RBc0F0dHJWYWx1ZSh0Tm9kZTogVE5vZGUpOiBDc3NTZWxlY3RvcnxudWxsIHtcbiAgY29uc3Qgbm9kZUF0dHJzID0gdE5vZGUuYXR0cnM7XG4gIGlmIChub2RlQXR0cnMgIT0gbnVsbCkge1xuICAgIGNvbnN0IG5nUHJvamVjdEFzQXR0cklkeCA9IG5vZGVBdHRycy5pbmRleE9mKEF0dHJpYnV0ZU1hcmtlci5Qcm9qZWN0QXMpO1xuICAgIC8vIG9ubHkgY2hlY2sgZm9yIG5nUHJvamVjdEFzIGluIGF0dHJpYnV0ZSBuYW1lcywgZG9uJ3QgYWNjaWRlbnRhbGx5IG1hdGNoIGF0dHJpYnV0ZSdzIHZhbHVlXG4gICAgLy8gKGF0dHJpYnV0ZSBuYW1lcyBhcmUgc3RvcmVkIGF0IGV2ZW4gaW5kZXhlcylcbiAgICBpZiAoKG5nUHJvamVjdEFzQXR0cklkeCAmIDEpID09PSAwKSB7XG4gICAgICByZXR1cm4gbm9kZUF0dHJzW25nUHJvamVjdEFzQXR0cklkeCArIDFdIGFzIENzc1NlbGVjdG9yO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0TmFtZU9ubHlNYXJrZXJJbmRleChub2RlQXR0cnM6IFRBdHRyaWJ1dGVzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZUF0dHIgPSBub2RlQXR0cnNbaV07XG4gICAgaWYgKGlzTmFtZU9ubHlBdHRyaWJ1dGVNYXJrZXIobm9kZUF0dHIpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGVBdHRycy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIG1hdGNoVGVtcGxhdGVBdHRyaWJ1dGUoYXR0cnM6IFRBdHRyaWJ1dGVzLCBuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgaSA9IGF0dHJzLmluZGV4T2YoQXR0cmlidXRlTWFya2VyLlRlbXBsYXRlKTtcbiAgaWYgKGkgPiAtMSkge1xuICAgIGkrKztcbiAgICB3aGlsZSAoaSA8IGF0dHJzLmxlbmd0aCkge1xuICAgICAgY29uc3QgYXR0ciA9IGF0dHJzW2ldO1xuICAgICAgLy8gUmV0dXJuIGluIGNhc2Ugd2UgY2hlY2tlZCBhbGwgdGVtcGxhdGUgYXR0cnMgYW5kIGFyZSBzd2l0Y2hpbmcgdG8gdGhlIG5leHQgc2VjdGlvbiBpbiB0aGVcbiAgICAgIC8vIGF0dHJzIGFycmF5ICh0aGF0IHN0YXJ0cyB3aXRoIGEgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyBhbiBhdHRyaWJ1dGUgbWFya2VyKS5cbiAgICAgIGlmICh0eXBlb2YgYXR0ciA9PT0gJ251bWJlcicpIHJldHVybiAtMTtcbiAgICAgIGlmIChhdHRyID09PSBuYW1lKSByZXR1cm4gaTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgc2VsZWN0b3IgaXMgaW5zaWRlIGEgQ3NzU2VsZWN0b3JMaXN0XG4gKiBAcGFyYW0gc2VsZWN0b3IgU2VsZWN0b3IgdG8gYmUgY2hlY2tlZC5cbiAqIEBwYXJhbSBsaXN0IExpc3QgaW4gd2hpY2ggdG8gbG9vayBmb3IgdGhlIHNlbGVjdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZWxlY3RvckluU2VsZWN0b3JMaXN0KHNlbGVjdG9yOiBDc3NTZWxlY3RvciwgbGlzdDogQ3NzU2VsZWN0b3JMaXN0KTogYm9vbGVhbiB7XG4gIHNlbGVjdG9yTGlzdExvb3A6IGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RvckluTGlzdCA9IGxpc3RbaV07XG4gICAgaWYgKHNlbGVjdG9yLmxlbmd0aCAhPT0gY3VycmVudFNlbGVjdG9ySW5MaXN0Lmxlbmd0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0b3IubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChzZWxlY3RvcltqXSAhPT0gY3VycmVudFNlbGVjdG9ySW5MaXN0W2pdKSB7XG4gICAgICAgIGNvbnRpbnVlIHNlbGVjdG9yTGlzdExvb3A7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwSW5Ob3RTZWxlY3Rvcihpc05lZ2F0aXZlTW9kZTogYm9vbGVhbiwgY2h1bms6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpc05lZ2F0aXZlTW9kZSA/ICc6bm90KCcgKyBjaHVuay50cmltKCkgKyAnKScgOiBjaHVuaztcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q1NTU2VsZWN0b3Ioc2VsZWN0b3I6IENzc1NlbGVjdG9yKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9IHNlbGVjdG9yWzBdIGFzIHN0cmluZztcbiAgbGV0IGkgPSAxO1xuICBsZXQgbW9kZSA9IFNlbGVjdG9yRmxhZ3MuQVRUUklCVVRFO1xuICBsZXQgY3VycmVudENodW5rID0gJyc7XG4gIGxldCBpc05lZ2F0aXZlTW9kZSA9IGZhbHNlO1xuICB3aGlsZSAoaSA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgIGxldCB2YWx1ZU9yTWFya2VyID0gc2VsZWN0b3JbaV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZU9yTWFya2VyID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKG1vZGUgJiBTZWxlY3RvckZsYWdzLkFUVFJJQlVURSkge1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBzZWxlY3RvclsrK2ldIGFzIHN0cmluZztcbiAgICAgICAgY3VycmVudENodW5rICs9XG4gICAgICAgICAgICAnWycgKyB2YWx1ZU9yTWFya2VyICsgKGF0dHJWYWx1ZS5sZW5ndGggPiAwID8gJz1cIicgKyBhdHRyVmFsdWUgKyAnXCInIDogJycpICsgJ10nO1xuICAgICAgfSBlbHNlIGlmIChtb2RlICYgU2VsZWN0b3JGbGFncy5DTEFTUykge1xuICAgICAgICBjdXJyZW50Q2h1bmsgKz0gJy4nICsgdmFsdWVPck1hcmtlcjtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSAmIFNlbGVjdG9yRmxhZ3MuRUxFTUVOVCkge1xuICAgICAgICBjdXJyZW50Q2h1bmsgKz0gJyAnICsgdmFsdWVPck1hcmtlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9cbiAgICAgIC8vIEFwcGVuZCBjdXJyZW50IGNodW5rIHRvIHRoZSBmaW5hbCByZXN1bHQgaW4gY2FzZSB3ZSBjb21lIGFjcm9zcyBTZWxlY3RvckZsYWcsIHdoaWNoXG4gICAgICAvLyBpbmRpY2F0ZXMgdGhhdCB0aGUgcHJldmlvdXMgc2VjdGlvbiBvZiBhIHNlbGVjdG9yIGlzIG92ZXIuIFdlIG5lZWQgdG8gYWNjdW11bGF0ZSBjb250ZW50XG4gICAgICAvLyBiZXR3ZWVuIGZsYWdzIHRvIG1ha2Ugc3VyZSB3ZSB3cmFwIHRoZSBjaHVuayBsYXRlciBpbiA6bm90KCkgc2VsZWN0b3IgaWYgbmVlZGVkLCBlLmcuXG4gICAgICAvLyBgYGBcbiAgICAgIC8vICBbJycsIEZsYWdzLkNMQVNTLCAnLmNsYXNzQScsIEZsYWdzLkNMQVNTIHwgRmxhZ3MuTk9ULCAnLmNsYXNzQicsICcuY2xhc3NDJ11cbiAgICAgIC8vIGBgYFxuICAgICAgLy8gc2hvdWxkIGJlIHRyYW5zZm9ybWVkIHRvIGAuY2xhc3NBIDpub3QoLmNsYXNzQiAuY2xhc3NDKWAuXG4gICAgICAvL1xuICAgICAgLy8gTm90ZTogZm9yIG5lZ2F0aXZlIHNlbGVjdG9yIHBhcnQsIHdlIGFjY3VtdWxhdGUgY29udGVudCBiZXR3ZWVuIGZsYWdzIHVudGlsIHdlIGZpbmQgdGhlXG4gICAgICAvLyBuZXh0IG5lZ2F0aXZlIGZsYWcuIFRoaXMgaXMgbmVlZGVkIHRvIHN1cHBvcnQgYSBjYXNlIHdoZXJlIGA6bm90KClgIHJ1bGUgY29udGFpbnMgbW9yZSB0aGFuXG4gICAgICAvLyBvbmUgY2h1bmssIGUuZy4gdGhlIGZvbGxvd2luZyBzZWxlY3RvcjpcbiAgICAgIC8vIGBgYFxuICAgICAgLy8gIFsnJywgRmxhZ3MuRUxFTUVOVCB8IEZsYWdzLk5PVCwgJ3AnLCBGbGFncy5DTEFTUywgJ2ZvbycsIEZsYWdzLkNMQVNTIHwgRmxhZ3MuTk9ULCAnYmFyJ11cbiAgICAgIC8vIGBgYFxuICAgICAgLy8gc2hvdWxkIGJlIHN0cmluZ2lmaWVkIHRvIGA6bm90KHAuZm9vKSA6bm90KC5iYXIpYFxuICAgICAgLy9cbiAgICAgIGlmIChjdXJyZW50Q2h1bmsgIT09ICcnICYmICFpc1Bvc2l0aXZlKHZhbHVlT3JNYXJrZXIpKSB7XG4gICAgICAgIHJlc3VsdCArPSBtYXliZVdyYXBJbk5vdFNlbGVjdG9yKGlzTmVnYXRpdmVNb2RlLCBjdXJyZW50Q2h1bmspO1xuICAgICAgICBjdXJyZW50Q2h1bmsgPSAnJztcbiAgICAgIH1cbiAgICAgIG1vZGUgPSB2YWx1ZU9yTWFya2VyO1xuICAgICAgLy8gQWNjb3JkaW5nIHRvIENzc1NlbGVjdG9yIHNwZWMsIG9uY2Ugd2UgY29tZSBhY3Jvc3MgYFNlbGVjdG9yRmxhZ3MuTk9UYCBmbGFnLCB0aGUgbmVnYXRpdmVcbiAgICAgIC8vIG1vZGUgaXMgbWFpbnRhaW5lZCBmb3IgcmVtYWluaW5nIGNodW5rcyBvZiBhIHNlbGVjdG9yLlxuICAgICAgaXNOZWdhdGl2ZU1vZGUgPSBpc05lZ2F0aXZlTW9kZSB8fCAhaXNQb3NpdGl2ZShtb2RlKTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIGlmIChjdXJyZW50Q2h1bmsgIT09ICcnKSB7XG4gICAgcmVzdWx0ICs9IG1heWJlV3JhcEluTm90U2VsZWN0b3IoaXNOZWdhdGl2ZU1vZGUsIGN1cnJlbnRDaHVuayk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIENTUyBzZWxlY3RvciBpbiBwYXJzZWQgZm9ybS5cbiAqXG4gKiBDb21wb25lbnREZWYgYW5kIERpcmVjdGl2ZURlZiBhcmUgZ2VuZXJhdGVkIHdpdGggdGhlIHNlbGVjdG9yIGluIHBhcnNlZCBmb3JtIHRvIGF2b2lkIGRvaW5nXG4gKiBhZGRpdGlvbmFsIHBhcnNpbmcgYXQgcnVudGltZSAoZm9yIGV4YW1wbGUsIGZvciBkaXJlY3RpdmUgbWF0Y2hpbmcpLiBIb3dldmVyIGluIHNvbWUgY2FzZXMgKGZvclxuICogZXhhbXBsZSwgd2hpbGUgYm9vdHN0cmFwcGluZyBhIGNvbXBvbmVudCksIGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIHNlbGVjdG9yIGlzIHJlcXVpcmVkIHRvIHF1ZXJ5XG4gKiBmb3IgdGhlIGhvc3QgZWxlbWVudCBvbiB0aGUgcGFnZS4gVGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUgcGFyc2VkIGZvcm0gb2YgYSBzZWxlY3RvciBhbmQgcmV0dXJuc1xuICogaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JMaXN0IHNlbGVjdG9yIGluIHBhcnNlZCBmb3JtXG4gKiBAcmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBnaXZlbiBzZWxlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5Q1NTU2VsZWN0b3JMaXN0KHNlbGVjdG9yTGlzdDogQ3NzU2VsZWN0b3JMaXN0KTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlbGVjdG9yTGlzdC5tYXAoc3RyaW5naWZ5Q1NTU2VsZWN0b3IpLmpvaW4oJywnKTtcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGluZm9ybWF0aW9uIGZyb20gYSBnaXZlbiBDU1Mgc2VsZWN0b3IuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHdoaWxlIGNyZWF0aW5nIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5LiBJbiB0aGlzIGNhc2UsIHRoZSBob3N0IGVsZW1lbnRcbiAqICh0aGF0IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkpIHNob3VsZCBjb250YWluIGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMgc3BlY2lmaWVkIGluIGNvbXBvbmVudCdzIENTU1xuICogc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIENTUyBzZWxlY3RvciBpbiBwYXJzZWQgZm9ybSAoaW4gYSBmb3JtIG9mIGFycmF5KVxuICogQHJldHVybnMgb2JqZWN0IHdpdGggYGF0dHJzYCBhbmQgYGNsYXNzZXNgIGZpZWxkcyB0aGF0IGNvbnRhaW4gZXh0cmFjdGVkIGluZm9ybWF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0QXR0cnNBbmRDbGFzc2VzRnJvbVNlbGVjdG9yKHNlbGVjdG9yOiBDc3NTZWxlY3Rvcik6XG4gICAge2F0dHJzOiBzdHJpbmdbXSwgY2xhc3Nlczogc3RyaW5nW119IHtcbiAgY29uc3QgYXR0cnM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG4gIGxldCBpID0gMTtcbiAgbGV0IG1vZGUgPSBTZWxlY3RvckZsYWdzLkFUVFJJQlVURTtcbiAgd2hpbGUgKGkgPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICBsZXQgdmFsdWVPck1hcmtlciA9IHNlbGVjdG9yW2ldO1xuICAgIGlmICh0eXBlb2YgdmFsdWVPck1hcmtlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChtb2RlID09PSBTZWxlY3RvckZsYWdzLkFUVFJJQlVURSkge1xuICAgICAgICBpZiAodmFsdWVPck1hcmtlciAhPT0gJycpIHtcbiAgICAgICAgICBhdHRycy5wdXNoKHZhbHVlT3JNYXJrZXIsIHNlbGVjdG9yWysraV0gYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSBTZWxlY3RvckZsYWdzLkNMQVNTKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh2YWx1ZU9yTWFya2VyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWNjb3JkaW5nIHRvIENzc1NlbGVjdG9yIHNwZWMsIG9uY2Ugd2UgY29tZSBhY3Jvc3MgYFNlbGVjdG9yRmxhZ3MuTk9UYCBmbGFnLCB0aGUgbmVnYXRpdmVcbiAgICAgIC8vIG1vZGUgaXMgbWFpbnRhaW5lZCBmb3IgcmVtYWluaW5nIGNodW5rcyBvZiBhIHNlbGVjdG9yLiBTaW5jZSBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGFyZVxuICAgICAgLy8gZXh0cmFjdGVkIG9ubHkgZm9yIFwicG9zaXRpdmVcIiBwYXJ0IG9mIHRoZSBzZWxlY3Rvciwgd2UgY2FuIHN0b3AgaGVyZS5cbiAgICAgIGlmICghaXNQb3NpdGl2ZShtb2RlKSkgYnJlYWs7XG4gICAgICBtb2RlID0gdmFsdWVPck1hcmtlcjtcbiAgICB9XG4gICAgaSsrO1xuICB9XG4gIHJldHVybiB7YXR0cnMsIGNsYXNzZXN9O1xufSJdfQ==