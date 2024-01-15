import {TuiContext, tuiCreateToken} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileState} from '@taiga-ui/kit/types';
import {tuiFormatSize} from '@taiga-ui/kit/utils';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiFileOptions {
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
