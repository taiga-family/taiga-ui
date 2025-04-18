import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiTextareaOptions {
    min: number;
    max: number;
    content: PolymorpheusContent<TuiContext<string>>;
}

export const [TUI_TEXTAREA_OPTIONS, tuiTextareaOptionsProvider] =
    tuiCreateOptions<TuiTextareaOptions>({
        min: 1,
        max: 3,
        content: ({$implicit}) => $implicit,
    });
