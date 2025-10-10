import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';

import {tuiGetDocumentOrShadowRoot} from './get-document-or-shadow-root';

/**
 * Returns array of Elements covering edges of given element or null if at least one edge middle point is visible
 *
 * CAUTION: Empty array means element if offscreen i.e. covered by no elements, rather than not covered
 * ```ts
 * function tuiGetElementObscures(element: Element): readonly [Element, Element, Element, Element] | [] | null
 * ```
 */
export function tuiGetElementObscures(element: Element): readonly Element[] | null {
    if (!element.getBoundingClientRect) {
        return null;
    }

    const {left, right, top, bottom, width, height} = element.getBoundingClientRect();

    if (width === 0 && height === 0) {
        return null;
    }

    const doc = tuiGetDocumentOrShadowRoot(element);
    const horizontalMiddle = Math.round(left + width / 2);
    const verticalMiddle = Math.round(top + height / 2);
    const elements = [
        doc.elementFromPoint(horizontalMiddle, Math.round(top) + 2),
        doc.elementFromPoint(horizontalMiddle, Math.round(bottom) - 2),
        doc.elementFromPoint(Math.round(left) + 2, verticalMiddle),
        doc.elementFromPoint(Math.round(right) - 2, verticalMiddle),
    ].filter(tuiIsPresent);

    if (!elements.length) {
        return [];
    }

    const filtered = elements.filter(
        (el) => !element.contains(el) && !el.contains(element),
    );

    return filtered.length === 4
        ? (filtered as [Element, Element, Element, Element])
        : null;
}
