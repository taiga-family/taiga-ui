import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';

export interface TuiNativeFocusableElement extends Element, HTMLOrSVGElement {}

/**
 * Public interface for any focusable component or directive
 */
export interface TuiFocusableElementAccessor {
    focused: boolean;
    readonly focusedChange: Observable<boolean>;
    nativeFocusableElement: TuiNativeFocusableElement | null;
}

/**
 * A component that can be focused
 * TODO drop in 4.0
 * @deprecated
 */
export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>('[TUI_FOCUSABLE_ITEM_ACCESSOR]');

/**
 * TODO drop in 4.0
 * @deprecated
 */
export function tuiAsFocusableItemAccessor(
    accessor: Type<TuiFocusableElementAccessor>,
): Provider {
    return tuiProvide(TUI_FOCUSABLE_ITEM_ACCESSOR, accessor);
}
