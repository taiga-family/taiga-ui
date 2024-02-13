import {TuiContext, tuiCreateToken} from '@taiga-ui/cdk';
import {TuiAppearanceOptions, TuiSizeL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiFileState} from '../files.types';
import {tuiFormatSize} from '../files.utils';

export interface TuiFileOptions extends TuiAppearanceOptions {
    readonly formatSize: (
        units: [string, string, string],
        size?: number,
    ) => string | null;
    readonly icons: Record<
        Exclude<TuiFileState, 'loading'>,
        PolymorpheusContent<TuiContext<TuiSizeL>>
    >;
}

export const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions = {
    appearance: 'outline',
    formatSize: tuiFormatSize,
    icons: {
        normal: ({$implicit}) =>
            $implicit === 'l' ? 'tuiIconFileLarge' : 'tuiIconCheckCircleLarge',
        error: 'tuiIconAlertCircleLarge',
        deleted: 'tuiIconTrashLarge',
    },
};

/**
 * Default parameters for file component
 */
export const TUI_FILE_OPTIONS = tuiCreateToken(TUI_FILE_DEFAULT_OPTIONS);
