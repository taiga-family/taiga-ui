import {tuiClamp} from '@taiga-ui/cdk/utils/math';

/**
 * Whether the element's effective direction is RTL.
 * The nearest `dir` attribute wins, so an intervening `dir="ltr"` ancestor
 * overrides an outer `dir="rtl"` (unlike a selector match, which still matches
 * the scroller in that case). With no explicit `dir` (`dir="auto"` included),
 * the computed direction decides.
 */
export function tuiIsRtl(element: HTMLElement): boolean {
    const dir = element.closest('[dir]')?.getAttribute('dir');

    if (dir === 'rtl') {
        return true;
    }

    return dir === 'ltr'
        ? false
        : typeof Element !== 'undefined' &&
              element instanceof Element &&
              getComputedStyle(element).direction === 'rtl';
}

/**
 * Horizontal scroll position measured from the start edge of the scrollable content:
 * `0` when the content is at its start and `scrollWidth - clientWidth` when it is at its end.
 * Unlike the native `scrollLeft`, it does not depend on the text direction: in RTL the native
 * value is negative in all supported browsers (Chrome, Firefox, Safari 15+), so the normalized
 * value is its absolute value.
 */
export function tuiGetNormalizedScrollLeft(element: HTMLElement): number {
    return tuiIsRtl(element) ? Math.abs(element.scrollLeft) : element.scrollLeft;
}

/**
 * Converts a start-edge-relative scroll position (see {@link tuiGetNormalizedScrollLeft})
 * to the native `scrollLeft` value for this element.
 * The value is clamped to the scrollable range.
 */
export function tuiToNativeScrollLeft(element: HTMLElement, value: number): number {
    const max = Math.max(0, element.scrollWidth - element.clientWidth);
    const normalized = tuiClamp(value, 0, max);

    return tuiIsRtl(element) && normalized !== 0 ? -normalized : normalized;
}
