import {tuiGetElementObscures} from '@taiga-ui/cdk';

/**
 * @internal
 */
export function tuiIsObscured(
    element: HTMLElement,
    exceptSelector = `tui-hints-host`,
): boolean {
    return !!tuiGetElementObscures(element)?.some(
        elementObscures => !elementObscures.closest(exceptSelector),
    );
}
