import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiPasswordOptions {
    readonly icons: Readonly<{
        hide: string;
        show: string;
    }>;
}

export const [TUI_PASSWORD_OPTIONS, tuiPasswordOptionsProvider] =
    tuiCreateOptions<TuiPasswordOptions>({
        icons: {
            hide: '@tui.eye-off',
            show: '@tui.eye',
        },
    });
