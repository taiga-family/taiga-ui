import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiCopyOptions {
    readonly icon: string;
}

export const [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] =
    tuiCreateOptions<TuiCopyOptions>({icon: '@tui.copy'});
