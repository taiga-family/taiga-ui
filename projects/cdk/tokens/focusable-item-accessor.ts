import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';

export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>(`A component that can be focused`);

export function tuiAsFocusableItemAccessor(
    useExisting: Type<TuiFocusableElementAccessor>,
): Provider {
    return {
        provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
        useExisting,
    };
}
