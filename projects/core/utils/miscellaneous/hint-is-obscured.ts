import {tuiGetElementObscures} from '@taiga-ui/cdk';

/**
 * @internal
 */
export function tuiHintIsObscured(
    el: HTMLElement,
    exceptSelector = `tui-hints-host`,
): boolean {
    const obscured = tuiGetElementObscures(el);

    return !!obscured?.length && obscured.some(el => !el.closest(exceptSelector));
}
