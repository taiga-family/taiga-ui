import {InjectionToken, type Provider, type Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type Observable} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiNativeFocusableElement extends Element, HTMLOrSVGElement {}

/**
 * @deprecated: drop in v5.0
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    focused: boolean;
    readonly focusedChange: Observable<boolean>;
    nativeFocusableElement: TuiNativeFocusableElement | null;
}

/**
 * @deprecated: drop in v5.0
 * A component that can be focused
 */
export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>(
        ngDevMode ? 'TUI_FOCUSABLE_ITEM_ACCESSOR' : '',
    );

/**
 * @deprecated: drop in v5.0
 */
export function tuiAsFocusableItemAccessor(
    accessor: Type<TuiFocusableElementAccessor>,
): Provider {
    return tuiProvide(TUI_FOCUSABLE_ITEM_ACCESSOR, accessor);
}
