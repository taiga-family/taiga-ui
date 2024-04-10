import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiInputTagOptions {
    readonly separator: RegExp | string;
    readonly tagStatus: TuiStatus;
    readonly uniqueTags: boolean;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: ',',
    uniqueTags: true,
    tagStatus: 'default',
};

/**
 * Default parameters for InputTag component
 */
export const TUI_INPUT_TAG_OPTIONS = tuiCreateToken(TUI_INPUT_TAG_DEFAULT_OPTIONS);

export function tuiInputTagOptionsProvider(
    options: Partial<TuiInputTagOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TAG_OPTIONS,
        options,
        TUI_INPUT_TAG_DEFAULT_OPTIONS,
    );
}
