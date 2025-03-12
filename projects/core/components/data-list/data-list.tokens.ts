import type {Provider, TemplateRef, Type, WritableSignal} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiDataListAccessor<T = unknown> {
    optionContent: WritableSignal<PolymorpheusContent<
        TuiContext<TemplateRef<Record<string, unknown>>>
    > | null>;
    getOptions(includeDisabled?: boolean): readonly T[];
}

/**
 * Content for `[tuiOption]` component
 * @deprecated use `TuiOptionContent` directive
 * ```html
 * <tui-select-option *tuiOptionContent />
 * ```
 * ___
 * TODO(v5): delete it
 */
export const TUI_OPTION_CONTENT =
    tuiCreateToken<
        PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>
    >();

/**
 * Content for `[tuiOption]` component
 * @deprecated use `TuiOptionContent` directive
 * ```html
 * <tui-select-option *tuiOptionContent />
 * ```
 * ___
 * TODO(v5): delete it
 */
export function tuiAsOptionContent(
    useValue: PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>,
): Provider {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}

/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = tuiCreateToken<TuiDataListAccessor>();

export function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
