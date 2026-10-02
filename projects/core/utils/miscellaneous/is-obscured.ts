import {tuiGetElementObscures} from '@taiga-ui/cdk/utils/dom';

/**
 * @internal
 */
export function tuiIsObscured(
    el: HTMLElement,
    exceptSelector = 'tui-popups > :not(tui-modal)',
): boolean {
    return !!tuiGetElementObscures(el)?.some((el) => !el.closest(exceptSelector));
}
