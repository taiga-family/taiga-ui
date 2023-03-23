import type {Observable} from 'rxjs';

export interface TuiNativeFocusableElement extends Element, HTMLOrSVGElement {}

/**
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    nativeFocusableElement: TuiNativeFocusableElement | null;
    focused: boolean;
    readonly focusedChange: Observable<boolean>;
}
