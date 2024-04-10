import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {tuiProvide} from '@taiga-ui/cdk/utils';

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
