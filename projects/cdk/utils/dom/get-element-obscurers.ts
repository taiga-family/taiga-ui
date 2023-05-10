import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';

import {tuiGetDocumentOrShadowRoot} from './get-document-or-shadow-root';

/**
 * Returns array of Elements covering edges of given element or null if at least one edge middle point is visible
 *
 * CAUTION: Empty array means element if offscreen i.e. covered by no elements, rather than not covered
 * TODO: v4.0 change function signature to
 * ```ts
 * function tuiGetElementObscures(element: Element): readonly [Element, Element, Element, Element] | [] | null
 * ```
 */
export function tuiGetElementObscures(element: Element): readonly Element[] | null {
    const {ownerDocument} = element;

    if (!ownerDocument?.defaultView || !element.getBoundingClientRect) {
        return null;
    }

    const {innerWidth, innerHeight} = ownerDocument.defaultView;
    const doc = tuiGetDocumentOrShadowRoot(element);
    const rect = element.getBoundingClientRect();

    if (rect.width === 0 && rect.height === 0) {
        return null;
    }

    const left = tuiClamp(Math.round(rect.left) + 2, 0, innerWidth);
    const top = tuiClamp(Math.round(rect.top) + 2, 0, innerHeight);
    const right = tuiClamp(Math.round(rect.right) - 2, 0, innerWidth);
    const bottom = tuiClamp(Math.round(rect.bottom) - 2, 0, innerHeight);
    const horizontalMiddle = tuiClamp(
        Math.round(rect.left + rect.width / 2),
        0,
        innerWidth,
    );
    const verticalMiddle = tuiClamp(
        Math.round(rect.top + rect.height / 2),
        0,
        innerHeight,
    );
    const elements = [
        doc.elementFromPoint(horizontalMiddle, top),
        doc.elementFromPoint(horizontalMiddle, bottom),
        doc.elementFromPoint(left, verticalMiddle),
        doc.elementFromPoint(right, verticalMiddle),
    ];
    const nonNull = elements.filter(tuiIsPresent);

    if (!nonNull.length) {
        return nonNull;
    }

    const filtered = nonNull.filter(el => !element.contains(el));

    return filtered.length === 4 ? filtered : null;
}
