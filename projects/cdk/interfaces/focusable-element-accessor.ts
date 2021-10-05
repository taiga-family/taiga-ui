// TODO: remove after TS fix (https://github.com/microsoft/Type-script/issues/41529)
export interface TuiNativeFocusableElement extends Element, HTMLOrSVGElement {}

/**
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    nativeFocusableElement: TuiNativeFocusableElement | null;
    focused: boolean;
}
