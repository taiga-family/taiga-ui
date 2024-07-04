import {tuiGetElementObscures} from '@taiga-ui/cdk/utils/dom';

/**
 * @internal
 */
export function tuiIsObscured(el: HTMLElement, exceptSelector = 'tui-hints'): boolean {
    return !!tuiGetElementObscures(el)?.some((el) => !el.closest(exceptSelector));
}
