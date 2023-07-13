import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiInputTagOptions {
    readonly separator: RegExp | string;
    readonly uniqueTags: boolean;
    readonly tagStatus: TuiStatus;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: `,`,
    uniqueTags: true,
    tagStatus: `primary`,
};

/**
 * Default parameters for InputTag component
 */
export const TUI_INPUT_TAG_OPTIONS = tuiCreateOptions(TUI_INPUT_TAG_DEFAULT_OPTIONS);

export function tuiInputTagOptionsProvider(
    options: Partial<TuiInputTagOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TAG_OPTIONS,
        options,
        TUI_INPUT_TAG_DEFAULT_OPTIONS,
    );
}
