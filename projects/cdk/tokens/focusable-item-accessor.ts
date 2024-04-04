import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {tuiProvide} from '@taiga-ui/cdk/utils';

/**
 * A component that can be focused
 */
export const TUI_FOCUSABLE_ITEM_ACCESSOR =
    new InjectionToken<TuiFocusableElementAccessor>('[TUI_FOCUSABLE_ITEM_ACCESSOR]');

export function tuiAsFocusableItemAccessor(
    accessor: Type<TuiFocusableElementAccessor>,
): Provider {
    return tuiProvide(TUI_FOCUSABLE_ITEM_ACCESSOR, accessor);
}
