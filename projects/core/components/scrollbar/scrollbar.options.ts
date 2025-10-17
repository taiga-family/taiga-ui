import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiScrollbarOptions {
    mode: 'always' | 'hidden' | 'hover' | 'native';
    observeMutations: boolean; // whether to react to DOM mutations inside scroll container
}

export const TUI_DEFAULT_SCROLLBAR_OPTIONS: TuiScrollbarOptions = {
    mode: 'always',
    observeMutations: true,
};

export const [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] =
    tuiCreateOptions<TuiScrollbarOptions>(TUI_DEFAULT_SCROLLBAR_OPTIONS);
