import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeL} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import type {TuiFileState} from '../files.types';
import {tuiFormatSize} from '../files.utils';

export interface TuiFileOptions extends TuiAppearanceOptions {
    readonly formatSize: (
        units: readonly [string, string, string],
        size?: number,
        locale?: string,
    ) => string | null;
    readonly icons: Record<
        Exclude<TuiFileState, 'loading'>,
        PolymorpheusContent<TuiContext<TuiSizeL>>
    >;
}

export const TUI_FILE_LOCALE = tuiCreateToken('ru-RU');

export const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions = {
    appearance: 'outline',
    formatSize: tuiFormatSize,
    icons: {
        normal: ({$implicit}) => ($implicit === 'l' ? '@tui.file' : '@tui.circle-check'),
        error: '@tui.circle-alert',
        deleted: '@tui.trash',
    },
};

/**
 * Default parameters for file component
 */
export const [TUI_FILE_OPTIONS, tuiFileOptionsProvider] = tuiCreateOptions(
    TUI_FILE_DEFAULT_OPTIONS,
);
