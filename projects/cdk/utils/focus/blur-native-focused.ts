import {tuiGetNativeFocused} from './get-native-focused';

/**
 * @deprecated: use {@link tuiBlurNativeFocused} instead
 * Finds and blurs current active element, including shadow DOM
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function blurNativeFocused(documentRef: Document): void {
    const activeElement = tuiGetNativeFocused(documentRef);

    // TODO: iframe warning
    if (activeElement instanceof HTMLElement) {
        activeElement.blur();
    }
}

export const tuiBlurNativeFocused = blurNativeFocused;
