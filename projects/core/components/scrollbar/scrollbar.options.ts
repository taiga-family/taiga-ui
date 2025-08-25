import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiScrollbarOptions {
    mode: 'always' | 'hidden' | 'hover' | 'native';
}

export const TUI_DEFAULT_SCROLLBAR_OPTIONS: TuiScrollbarOptions = {
    mode: 'always',
};

export const [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] =
    tuiCreateOptions<TuiScrollbarOptions>(TUI_DEFAULT_SCROLLBAR_OPTIONS);
