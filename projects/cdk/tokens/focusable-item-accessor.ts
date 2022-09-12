import {InjectionToken, Provider, Type} from '@angular/core';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';

export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>(
        `[TUI_FOCUSABLE_ITEM_ACCESSOR]: A component that can be focused`,
    );

export function tuiAsFocusableItemAccessor(
    useExisting: Type<TuiFocusableElementAccessor>,
): Provider {
    return {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting,
    };
}
