import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiGetElementOffset} instead
 * Calculates offset for an element relative to it's parent several levels above
 *
 * @param host parent element
 * @param element
 * @return object with offsetTop and offsetLeft number properties
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getElementOffset(
    host: Element,
    element: HTMLElement,
): {offsetTop: number; offsetLeft: number} {
    tuiAssert.assert(host.contains(element), 'Host must contain element');

    let {offsetTop, offsetLeft, offsetParent} = element;

    // TODO: iframe warning
    while (offsetParent && offsetParent instanceof HTMLElement && offsetParent !== host) {
        offsetTop += offsetParent.offsetTop;
        offsetLeft += offsetParent.offsetLeft;
        offsetParent = offsetParent.offsetParent;
    }

    return {offsetTop, offsetLeft};
}

export const tuiGetElementOffset = getElementOffset;
