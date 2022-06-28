import {clamp} from '@taiga-ui/cdk/utils/math';
import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';

import {getDocumentOrShadowRoot} from './get-document-or-shadow-root';

/**
 * @deprecated: use {@link tuiGetElementObscures} instead
 * Returns array of Elements covering edges of given element or null if at least one edge middle point is visible
 *
 * CAUTION: Empty array means element if offscreen i.e. covered by no elements, rather than not covered
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getElementObscurers(element: Element): readonly Element[] | null {
    const {ownerDocument} = element;

    if (!ownerDocument || !ownerDocument.defaultView) {
        return null;
    }

    const {innerWidth, innerHeight} = ownerDocument.defaultView;
    const documentRef = getDocumentOrShadowRoot(element);
    const rect = element.getBoundingClientRect();
    const left = clamp(Math.round(rect.left) + 2, 0, innerWidth);
    const top = clamp(Math.round(rect.top) + 2, 0, innerHeight);
    const right = clamp(Math.round(rect.right) - 2, 0, innerWidth);
    const bottom = clamp(Math.round(rect.bottom) - 2, 0, innerHeight);
    const horizontalMiddle = clamp(Math.round(rect.left + rect.width / 2), 0, innerWidth);
    const verticalMiddle = clamp(Math.round(rect.top + rect.height / 2), 0, innerHeight);
    const elements = [
        documentRef.elementFromPoint(horizontalMiddle, top),
        documentRef.elementFromPoint(horizontalMiddle, bottom),
        documentRef.elementFromPoint(left, verticalMiddle),
        documentRef.elementFromPoint(right, verticalMiddle),
    ];
    const nonNull = elements.filter(isPresent);

    if (!nonNull.length) {
        return nonNull;
    }

    const filtered = nonNull.filter(el => !element.contains(el));

    return filtered.length === 4 ? filtered : null;
}

export const tuiGetElementObscures = getElementObscurers;
