/**
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    nativeFocusableElement: HTMLOrSVGElement | null;
    focused: boolean;
}
