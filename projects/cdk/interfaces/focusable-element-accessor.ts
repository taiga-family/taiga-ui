import {Observable} from 'rxjs';

export interface TuiNativeFocusableElement extends Element, HTMLOrSVGElement {}

/**
 * Public interface for any focusable component or directive
 * TODO: shorten `nativeFocusableElement` in 4.0
 */
export interface TuiFocusableElementAccessor {
    nativeFocusableElement: TuiNativeFocusableElement | null;
    focused: boolean;
    readonly focusedChange: Observable<boolean>;
}
