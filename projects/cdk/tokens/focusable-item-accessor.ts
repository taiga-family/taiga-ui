import {InjectionToken, Provider, Type} from '@angular/core';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';

/**
 * A component that can be focused
 */
export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>(`[TUI_FOCUSABLE_ITEM_ACCESSOR]`);

export function tuiAsFocusableItemAccessor(
    useExisting: Type<TuiFocusableElementAccessor>,
): Provider {
    return {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting,
    };
}
