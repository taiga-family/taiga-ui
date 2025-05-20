import {inject, LOCALE_ID} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateOptions} from '@taiga-ui/cdk';
import type {TuiAppearanceOptions, TuiSizeL} from '@taiga-ui/core';
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

export const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions = {
    appearance: 'outline',
    formatSize: (units, size) => {
        const locale = inject(LOCALE_ID);

        return tuiFormatSize(units, size, locale);
    },
    icons: {
        normal: ({$implicit}) => ($implicit === 'l' ? '@tui.file' : '@tui.circle-check'),
        error: '@tui.circle-alert',
        deleted: '@tui.trash',
    },
};

/**
 * Default parameters for file component
 */
export const [TUI_FILE_OPTIONS] = tuiCreateOptions(TUI_FILE_DEFAULT_OPTIONS);
