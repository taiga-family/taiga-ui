/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/view/text.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { asTextData } from './types';
import { checkAndUpdateBinding, getParentRenderElement } from './util';
/**
 * @param {?} checkIndex
 * @param {?} ngContentIndex
 * @param {?} staticText
 * @return {?}
 */
export function textDef(checkIndex, ngContentIndex, staticText) {
    /** @type {?} */
    const bindings = [];
    for (let i = 1; i < staticText.length; i++) {
        bindings[i - 1] = {
            flags: 8 /* TypeProperty */,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: staticText[i],
        };
    }
    return {
        // will bet set by the view definition
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        // regular values
        checkIndex,
        flags: 2 /* TypeText */,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex,
        childCount: 0,
        bindings,
        bindingFlags: 8 /* TypeProperty */,
        outputs: [],
        element: null,
        provider: null,
        text: { prefix: staticText[0] },
        query: null,
        ngContent: null,
    };
}
/**
 * @param {?} view
 * @param {?} renderHost
 * @param {?} def
 * @return {?}
 */
export function createText(view, renderHost, def) {
    /** @type {?} */
    let renderNode;
    /** @type {?} */
    const renderer = view.renderer;
    renderNode = renderer.createText((/** @type {?} */ (def.text)).prefix);
    /** @type {?} */
    const parentEl = getParentRenderElement(view, renderHost, def);
    if (parentEl) {
        renderer.appendChild(parentEl, renderNode);
    }
    return { renderText: renderNode };
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} v0
 * @param {?} v1
 * @param {?} v2
 * @param {?} v3
 * @param {?} v4
 * @param {?} v5
 * @param {?} v6
 * @param {?} v7
 * @param {?} v8
 * @param {?} v9
 * @return {?}
 */
export function checkAndUpdateTextInline(view, def, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
    /** @type {?} */
    let changed = false;
    /** @type {?} */
    const bindings = def.bindings;
    /** @type {?} */
    const bindLen = bindings.length;
    if (bindLen > 0 && checkAndUpdateBinding(view, def, 0, v0))
        changed = true;
    if (bindLen > 1 && checkAndUpdateBinding(view, def, 1, v1))
        changed = true;
    if (bindLen > 2 && checkAndUpdateBinding(view, def, 2, v2))
        changed = true;
    if (bindLen > 3 && checkAndUpdateBinding(view, def, 3, v3))
        changed = true;
    if (bindLen > 4 && checkAndUpdateBinding(view, def, 4, v4))
        changed = true;
    if (bindLen > 5 && checkAndUpdateBinding(view, def, 5, v5))
        changed = true;
    if (bindLen > 6 && checkAndUpdateBinding(view, def, 6, v6))
        changed = true;
    if (bindLen > 7 && checkAndUpdateBinding(view, def, 7, v7))
        changed = true;
    if (bindLen > 8 && checkAndUpdateBinding(view, def, 8, v8))
        changed = true;
    if (bindLen > 9 && checkAndUpdateBinding(view, def, 9, v9))
        changed = true;
    if (changed) {
        /** @type {?} */
        let value = (/** @type {?} */ (def.text)).prefix;
        if (bindLen > 0)
            value += _addInterpolationPart(v0, bindings[0]);
        if (bindLen > 1)
            value += _addInterpolationPart(v1, bindings[1]);
        if (bindLen > 2)
            value += _addInterpolationPart(v2, bindings[2]);
        if (bindLen > 3)
            value += _addInterpolationPart(v3, bindings[3]);
        if (bindLen > 4)
            value += _addInterpolationPart(v4, bindings[4]);
        if (bindLen > 5)
            value += _addInterpolationPart(v5, bindings[5]);
        if (bindLen > 6)
            value += _addInterpolationPart(v6, bindings[6]);
        if (bindLen > 7)
            value += _addInterpolationPart(v7, bindings[7]);
        if (bindLen > 8)
            value += _addInterpolationPart(v8, bindings[8]);
        if (bindLen > 9)
            value += _addInterpolationPart(v9, bindings[9]);
        /** @type {?} */
        const renderNode = asTextData(view, def.nodeIndex).renderText;
        view.renderer.setValue(renderNode, value);
    }
    return changed;
}
/**
 * @param {?} view
 * @param {?} def
 * @param {?} values
 * @return {?}
 */
export function checkAndUpdateTextDynamic(view, def, values) {
    /** @type {?} */
    const bindings = def.bindings;
    /** @type {?} */
    let changed = false;
    for (let i = 0; i < values.length; i++) {
        // Note: We need to loop over all values, so that
        // the old values are updates as well!
        if (checkAndUpdateBinding(view, def, i, values[i])) {
            changed = true;
        }
    }
    if (changed) {
        /** @type {?} */
        let value = '';
        for (let i = 0; i < values.length; i++) {
            value = value + _addInterpolationPart(values[i], bindings[i]);
        }
        value = (/** @type {?} */ (def.text)).prefix + value;
        /** @type {?} */
        const renderNode = asTextData(view, def.nodeIndex).renderText;
        view.renderer.setValue(renderNode, value);
    }
    return changed;
}
/**
 * @param {?} value
 * @param {?} binding
 * @return {?}
 */
function _addInterpolationPart(value, binding) {
    /** @type {?} */
    const valueStr = value != null ? value.toString() : '';
    return valueStr + binding.suffix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFtRSxNQUFNLFNBQVMsQ0FBQztBQUNyRyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7QUFFckUsTUFBTSxVQUFVLE9BQU8sQ0FDbkIsVUFBa0IsRUFBRSxjQUEyQixFQUFFLFVBQW9COztVQUNqRSxRQUFRLEdBQWlCLEVBQUU7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRztZQUNoQixLQUFLLHNCQUEyQjtZQUNoQyxJQUFJLEVBQUUsSUFBSTtZQUNWLEVBQUUsRUFBRSxJQUFJO1lBQ1IsZUFBZSxFQUFFLElBQUk7WUFDckIsZUFBZSxFQUFFLElBQUk7WUFDckIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQztLQUNIO0lBRUQsT0FBTzs7UUFFTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxFQUFFLElBQUk7UUFDWixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDZixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLEtBQUssa0JBQW9CO1FBQ3pCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixtQkFBbUIsRUFBRSxDQUFDO1FBQ3RCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsY0FBYztRQUNkLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUTtRQUNSLFlBQVksc0JBQTJCO1FBQ3ZDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDN0IsS0FBSyxFQUFFLElBQUk7UUFDWCxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDO0FBQ0osQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBYyxFQUFFLFVBQWUsRUFBRSxHQUFZOztRQUNsRSxVQUFlOztVQUNiLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtJQUM5QixVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxtQkFBQSxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7O1VBQzdDLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztJQUM5RCxJQUFJLFFBQVEsRUFBRTtRQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUNwQyxJQUFjLEVBQUUsR0FBWSxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDM0YsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPOztRQUN2QixPQUFPLEdBQUcsS0FBSzs7VUFDYixRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O1VBQ3ZCLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUMvQixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMzRSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUUzRSxJQUFJLE9BQU8sRUFBRTs7WUFDUCxLQUFLLEdBQUcsbUJBQUEsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLE1BQU07UUFDNUIsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQztZQUFFLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQzNELFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzQztJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsSUFBYyxFQUFFLEdBQVksRUFBRSxNQUFhOztVQUM3RSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVE7O1FBQ3pCLE9BQU8sR0FBRyxLQUFLO0lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLGlEQUFpRDtRQUNqRCxzQ0FBc0M7UUFDdEMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRCxJQUFJLE9BQU8sRUFBRTs7WUFDUCxLQUFLLEdBQUcsRUFBRTtRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLEtBQUssR0FBRyxLQUFLLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsS0FBSyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztjQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVTtRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLEtBQVUsRUFBRSxPQUFtQjs7VUFDdEQsUUFBUSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN0RCxPQUFPLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7YXNUZXh0RGF0YSwgQmluZGluZ0RlZiwgQmluZGluZ0ZsYWdzLCBOb2RlRGVmLCBOb2RlRmxhZ3MsIFRleHREYXRhLCBWaWV3RGF0YX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NoZWNrQW5kVXBkYXRlQmluZGluZywgZ2V0UGFyZW50UmVuZGVyRWxlbWVudH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRleHREZWYoXG4gICAgY2hlY2tJbmRleDogbnVtYmVyLCBuZ0NvbnRlbnRJbmRleDogbnVtYmVyfG51bGwsIHN0YXRpY1RleHQ6IHN0cmluZ1tdKTogTm9kZURlZiB7XG4gIGNvbnN0IGJpbmRpbmdzOiBCaW5kaW5nRGVmW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGF0aWNUZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgYmluZGluZ3NbaSAtIDFdID0ge1xuICAgICAgZmxhZ3M6IEJpbmRpbmdGbGFncy5UeXBlUHJvcGVydHksXG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgbnM6IG51bGwsXG4gICAgICBub25NaW5pZmllZE5hbWU6IG51bGwsXG4gICAgICBzZWN1cml0eUNvbnRleHQ6IG51bGwsXG4gICAgICBzdWZmaXg6IHN0YXRpY1RleHRbaV0sXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gd2lsbCBiZXQgc2V0IGJ5IHRoZSB2aWV3IGRlZmluaXRpb25cbiAgICBub2RlSW5kZXg6IC0xLFxuICAgIHBhcmVudDogbnVsbCxcbiAgICByZW5kZXJQYXJlbnQ6IG51bGwsXG4gICAgYmluZGluZ0luZGV4OiAtMSxcbiAgICBvdXRwdXRJbmRleDogLTEsXG4gICAgLy8gcmVndWxhciB2YWx1ZXNcbiAgICBjaGVja0luZGV4LFxuICAgIGZsYWdzOiBOb2RlRmxhZ3MuVHlwZVRleHQsXG4gICAgY2hpbGRGbGFnczogMCxcbiAgICBkaXJlY3RDaGlsZEZsYWdzOiAwLFxuICAgIGNoaWxkTWF0Y2hlZFF1ZXJpZXM6IDAsXG4gICAgbWF0Y2hlZFF1ZXJpZXM6IHt9LFxuICAgIG1hdGNoZWRRdWVyeUlkczogMCxcbiAgICByZWZlcmVuY2VzOiB7fSxcbiAgICBuZ0NvbnRlbnRJbmRleCxcbiAgICBjaGlsZENvdW50OiAwLFxuICAgIGJpbmRpbmdzLFxuICAgIGJpbmRpbmdGbGFnczogQmluZGluZ0ZsYWdzLlR5cGVQcm9wZXJ0eSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBlbGVtZW50OiBudWxsLFxuICAgIHByb3ZpZGVyOiBudWxsLFxuICAgIHRleHQ6IHtwcmVmaXg6IHN0YXRpY1RleHRbMF19LFxuICAgIHF1ZXJ5OiBudWxsLFxuICAgIG5nQ29udGVudDogbnVsbCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQodmlldzogVmlld0RhdGEsIHJlbmRlckhvc3Q6IGFueSwgZGVmOiBOb2RlRGVmKTogVGV4dERhdGEge1xuICBsZXQgcmVuZGVyTm9kZTogYW55O1xuICBjb25zdCByZW5kZXJlciA9IHZpZXcucmVuZGVyZXI7XG4gIHJlbmRlck5vZGUgPSByZW5kZXJlci5jcmVhdGVUZXh0KGRlZi50ZXh0IS5wcmVmaXgpO1xuICBjb25zdCBwYXJlbnRFbCA9IGdldFBhcmVudFJlbmRlckVsZW1lbnQodmlldywgcmVuZGVySG9zdCwgZGVmKTtcbiAgaWYgKHBhcmVudEVsKSB7XG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWwsIHJlbmRlck5vZGUpO1xuICB9XG4gIHJldHVybiB7cmVuZGVyVGV4dDogcmVuZGVyTm9kZX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FuZFVwZGF0ZVRleHRJbmxpbmUoXG4gICAgdmlldzogVmlld0RhdGEsIGRlZjogTm9kZURlZiwgdjA6IGFueSwgdjE6IGFueSwgdjI6IGFueSwgdjM6IGFueSwgdjQ6IGFueSwgdjU6IGFueSwgdjY6IGFueSxcbiAgICB2NzogYW55LCB2ODogYW55LCB2OTogYW55KTogYm9vbGVhbiB7XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gIGNvbnN0IGJpbmRpbmdzID0gZGVmLmJpbmRpbmdzO1xuICBjb25zdCBiaW5kTGVuID0gYmluZGluZ3MubGVuZ3RoO1xuICBpZiAoYmluZExlbiA+IDAgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgMCwgdjApKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiAxICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDEsIHYxKSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gMiAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCAyLCB2MikpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDMgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgMywgdjMpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA0ICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDQsIHY0KSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gNSAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCA1LCB2NSkpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDYgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgNiwgdjYpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgaWYgKGJpbmRMZW4gPiA3ICYmIGNoZWNrQW5kVXBkYXRlQmluZGluZyh2aWV3LCBkZWYsIDcsIHY3KSkgY2hhbmdlZCA9IHRydWU7XG4gIGlmIChiaW5kTGVuID4gOCAmJiBjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCA4LCB2OCkpIGNoYW5nZWQgPSB0cnVlO1xuICBpZiAoYmluZExlbiA+IDkgJiYgY2hlY2tBbmRVcGRhdGVCaW5kaW5nKHZpZXcsIGRlZiwgOSwgdjkpKSBjaGFuZ2VkID0gdHJ1ZTtcblxuICBpZiAoY2hhbmdlZCkge1xuICAgIGxldCB2YWx1ZSA9IGRlZi50ZXh0IS5wcmVmaXg7XG4gICAgaWYgKGJpbmRMZW4gPiAwKSB2YWx1ZSArPSBfYWRkSW50ZXJwb2xhdGlvblBhcnQodjAsIGJpbmRpbmdzWzBdKTtcbiAgICBpZiAoYmluZExlbiA+IDEpIHZhbHVlICs9IF9hZGRJbnRlcnBvbGF0aW9uUGFydCh2MSwgYmluZGluZ3NbMV0pO1xuICAgIGlmIChiaW5kTGVuID4gMikgdmFsdWUgKz0gX2FkZEludGVycG9sYXRpb25QYXJ0KHYyLCBiaW5kaW5nc1syXSk7XG4gICAgaWYgKGJpbmRMZW4gPiAzKSB2YWx1ZSArPSBfYWRkSW50ZXJwb2xhdGlvblBhcnQodjMsIGJpbmRpbmdzWzNdKTtcbiAgICBpZiAoYmluZExlbiA+IDQpIHZhbHVlICs9IF9hZGRJbnRlcnBvbGF0aW9uUGFydCh2NCwgYmluZGluZ3NbNF0pO1xuICAgIGlmIChiaW5kTGVuID4gNSkgdmFsdWUgKz0gX2FkZEludGVycG9sYXRpb25QYXJ0KHY1LCBiaW5kaW5nc1s1XSk7XG4gICAgaWYgKGJpbmRMZW4gPiA2KSB2YWx1ZSArPSBfYWRkSW50ZXJwb2xhdGlvblBhcnQodjYsIGJpbmRpbmdzWzZdKTtcbiAgICBpZiAoYmluZExlbiA+IDcpIHZhbHVlICs9IF9hZGRJbnRlcnBvbGF0aW9uUGFydCh2NywgYmluZGluZ3NbN10pO1xuICAgIGlmIChiaW5kTGVuID4gOCkgdmFsdWUgKz0gX2FkZEludGVycG9sYXRpb25QYXJ0KHY4LCBiaW5kaW5nc1s4XSk7XG4gICAgaWYgKGJpbmRMZW4gPiA5KSB2YWx1ZSArPSBfYWRkSW50ZXJwb2xhdGlvblBhcnQodjksIGJpbmRpbmdzWzldKTtcbiAgICBjb25zdCByZW5kZXJOb2RlID0gYXNUZXh0RGF0YSh2aWV3LCBkZWYubm9kZUluZGV4KS5yZW5kZXJUZXh0O1xuICAgIHZpZXcucmVuZGVyZXIuc2V0VmFsdWUocmVuZGVyTm9kZSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBjaGFuZ2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbmRVcGRhdGVUZXh0RHluYW1pYyh2aWV3OiBWaWV3RGF0YSwgZGVmOiBOb2RlRGVmLCB2YWx1ZXM6IGFueVtdKTogYm9vbGVhbiB7XG4gIGNvbnN0IGJpbmRpbmdzID0gZGVmLmJpbmRpbmdzO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vdGU6IFdlIG5lZWQgdG8gbG9vcCBvdmVyIGFsbCB2YWx1ZXMsIHNvIHRoYXRcbiAgICAvLyB0aGUgb2xkIHZhbHVlcyBhcmUgdXBkYXRlcyBhcyB3ZWxsIVxuICAgIGlmIChjaGVja0FuZFVwZGF0ZUJpbmRpbmcodmlldywgZGVmLCBpLCB2YWx1ZXNbaV0pKSB7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArIF9hZGRJbnRlcnBvbGF0aW9uUGFydCh2YWx1ZXNbaV0sIGJpbmRpbmdzW2ldKTtcbiAgICB9XG4gICAgdmFsdWUgPSBkZWYudGV4dCEucHJlZml4ICsgdmFsdWU7XG4gICAgY29uc3QgcmVuZGVyTm9kZSA9IGFzVGV4dERhdGEodmlldywgZGVmLm5vZGVJbmRleCkucmVuZGVyVGV4dDtcbiAgICB2aWV3LnJlbmRlcmVyLnNldFZhbHVlKHJlbmRlck5vZGUsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gY2hhbmdlZDtcbn1cblxuZnVuY3Rpb24gX2FkZEludGVycG9sYXRpb25QYXJ0KHZhbHVlOiBhbnksIGJpbmRpbmc6IEJpbmRpbmdEZWYpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZVN0ciA9IHZhbHVlICE9IG51bGwgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XG4gIHJldHVybiB2YWx1ZVN0ciArIGJpbmRpbmcuc3VmZml4O1xufVxuIl19