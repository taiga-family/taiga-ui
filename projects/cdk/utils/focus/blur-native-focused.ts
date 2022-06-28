import {getNativeFocused} from './get-native-focused';
import {setNativeFocused} from './set-native-focused';

/**
 * @deprecated: use {@link tuiBlurNativeFocused} instead
 * Finds and blurs current active element, including shadow DOM
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function blurNativeFocused(documentRef: Document): void {
    const activeElement = getNativeFocused(documentRef);

    // TODO: iframe warning
    if (activeElement instanceof HTMLElement) {
        setNativeFocused(activeElement, false);
    }
}

export const tuiBlurNativeFocused = blurNativeFocused;
